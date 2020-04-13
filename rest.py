from flask import Flask, request
from pymongo import MongoClient
import json
from functools import wraps
from analyze import get_interests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = MongoClient("mongodb://35.228.42.210:27017", connect=False, maxPoolSize=1).dating

def exception_handler(func):
    @wraps(func)
    def wrapper():
        try:
            result = func()
        except Exception as e:
            return {"error": "%s" % str(e)}
        
        return {"result": result}
    return wrapper

@app.route("/signup", methods=["POST"])
@exception_handler
def signup():
    '''/signup
    POST. Request Data:
    - user_id: int
    - age: int
    - geo: str
    - groups: []group (https://vk.com/dev/groups.get extended=1, fields=description ['items'])
    - first_name: str
    - description: str
    - gender: str (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)
    - preferences: str[] (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)'''
    
    args = {"user_id", "age", "geo", "groups", "description", "gender", "preferences", "first_name"}
    request_data = json.loads(request.data)

    print(request_data['groups'])

    if set(request_data.keys()) != args:
        raise Exception("InvalidArgs", "Missing args: %s" % ' '.join(args - set(request_data.keys())))
    
    if db.users.find_one({"user_id": request_data['user_id']}) != None:
        raise Exception("BadRequest", "User already exists")

    request_data["interests"] = get_interests(request_data["groups"])
    del request_data["groups"]
    
    db.users.insert_one(request_data)

    return "ok"

@app.route("/edit_profile", methods=["POST"])
@exception_handler
def edit_profile():
    '''POST. Request Data:
    - user_id: int
    - age: int
    - description: str
    - gender: str (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)
    - preferences: str[] (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)'''

    args = {"user_id", "age", "description", "gender", "preferences"}
    request_data = json.loads(request.data)

    if set(request_data.keys()) != args:
        raise Exception("InvalidArgs", "Missing args: %s" % ' '.join(args - set(request_data.keys())))
    
    user_id = request_data["user_id"]
    del request_data["user_id"]

    db.users.update_one({"user_id": user_id}, {"$set": request_data})

    return "ok"

@app.route("/get_user", methods=["POST"])
@exception_handler
def get_user():
    '''POST. Request Data:
    - user_id: int'''

    args = {"user_id"}
    request_data = json.loads(request.data)

    if set(request_data.keys()) != args:
        raise Exception("InvalidArgs", "Missing args: %s" % ' '.join(args - set(request_data.keys())))
    
    result = db.users.find_one({"user_id": request_data["user_id"]})
    if result != None:
        del result["_id"]
        return result
    else:
        return "no"

@app.route("/browse", methods=["POST"])
@exception_handler
def browse():
    '''POST. Request Data:
    - user_id: int
    - filter: str (default: None, by_interest: None, city: str, gender: str)
    - value: str (default: None, by_interest: None, city: str, gender: str)'''
    args = {"user_id", "filter", "value"}
    request_data = json.loads(request.data)

    preferences = db.users.find_one({"user_id": request_data["user_id"]})['preferences']
    interests = db.users.find_one({"user_id": request_data["user_id"]})['interests']

    if set(request_data.keys()) != args:
        raise Exception("InvalidArgs", "Missing args: %s" % ' '.join(args - set(request_data.keys())))
    
    if request_data["filter"] == "default":
        users = list(db.users.find())
        users = list(filter(lambda x: x['user_id'] != request_data['user_id'], users))
        
        result = []
        for user in users:
            if user['gender'] in preferences:
                del user['_id']
                result.append(user)
        
    elif request_data["filter"] == "by_interest":
        users = list(db.users.find())
        users = list(filter(lambda x: x['user_id'] != request_data['user_id'], users))

        result = []
        for user in users:
            if user['gender'] in preferences:
                del user['_id']
                result.append(user)
        
        result.sort(key=lambda x: len(set(x["interests"]).intersection(set(interests))), reverse=True)
        
    elif request_data["filter"] == "city":
        users = list(db.users.find({"geo": request_data["value"]}))
        users = list(filter(lambda x: x['user_id'] != request_data['user_id'], users))

        result = []
        for user in users:
            if user['gender'] in preferences:
                del user['_id']
                result.append(user)       

    elif request_data["filter"] == "gender":
        users = list(db.users.find({"gender": request_data["value"]}))
        users = list(filter(lambda x: x['user_id'] != request_data['user_id'], users))
        
        result = []
        for user in users:
            del user['_id']
            result.append(user)

    return result

@app.route("/get_cities", methods=["POST"])
@exception_handler
def get_geo():
    return list(db.users.distinct("geo"))

@app.route("/start_dialog", methods=["POST"])
@exception_handler
def start_dialog():
    '''POST. Request Data:
    - from: int
    - to: int'''
    
    args = {"from", "to"}
    request_data = json.loads(request.data)

    if set(request_data.keys()) != args:
        raise Exception("InvalidArgs", "Missing args: %s" % ' '.join(args - set(request_data.keys())))
    
    if db.notifications.find_one({"from": request_data['from'], "to": request_data["to"]}) != None or db.notifications.find_one({"from": request_data['to'], "to": request_data["from"]}) != None:
        return "already started"
    db.notifications.insert_one({"from": request_data['from'], "to": request_data["to"], "type": "init", "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"] })
    return "ok"

@app.route("/resolve_notification", methods=["POST"])
@exception_handler
def resolve_notification():
    '''POST. Request Data:
    - from: int
    - to: int
    - type: str (init / photo / q_set / q_answer / q_resolve / decline)
    - value: init: bool, photo: bool, q_set: str[], q_answer: str[], q_resolve: bool, decline: None'''

    args = {"from", "to", "type", "value"}
    request_data = json.loads(request.data)

    if set(request_data.keys()) != args:
        raise Exception("InvalidArgs", "Missing args: %s" % ' '.join(args - set(request_data.keys())))
    
    notification_type = db.notifications.find_one({"from" : request_data["from"], "to": request_data["to"]})["type"]

    # HANDLER
    if notification_type == "init":
        if request_data["value"] == True:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "photo", "last": False, "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})
        else:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "decline", "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})
    
    elif notification_type == "decline":
        pass
    
    elif notification_type == "photo":
        if request_data["value"] == True:
            if db.notifications.find_one({"from": request_data["from"], "to": request_data["to"]})["last"]:
                db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "q_set", "last": False, "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})
            else:
                db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "photo", "last": True, "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})
        else:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "decline", "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})
    
    elif notification_type == "q_set":
        if db.notifications.find_one({"from": request_data["from"], "to": request_data["to"]})["last"]:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "q_answer", "value": request_data["value"], "last": False, "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})
        else:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "q_set", "last": True, "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})


    elif notification_type == "q_answer":
        if db.notifications.find_one({"from": request_data["from"], "to": request_data["to"]})["last"]:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "q_resolve", "value": request_data["value"], "last": False, "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})
        else:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "q_answer", "value": request_data["value"], "last": True, "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})


    elif notification_type == "q_resolve":
        if request_data["value"] == True:
            if db.notifications.find_one({"from": request_data["from"], "to": request_data["to"]})["last"]:
                db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "match", "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})
                db.notifications.insert_one({"from": request_data["from"], "to": request_data["to"], "type": "match", "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})
            else:
                db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "q_resolve", "last": True, "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})
        else:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "decline", "from_name": db.users.find_one({"user_id": request_data["from"]})["first_name"]})

    db.notifications.delete_one({"from": request_data["from"], "to": request_data["to"], "type": notification_type})

    return "ok"

@app.route("/get_notifications", methods=["POST"])
@exception_handler
def get_notifications():
    '''POST. Request Data:
    - user_id: int'''
    args = {"user_id"}
    request_data = json.loads(request.data)

    if set(request_data.keys()) != args:
        raise Exception("InvalidArgs", "Missing args: %s" % ' '.join(args - set(request_data.keys())))

    notifications = list(db.notifications.find({"to": request_data["user_id"]}))
    for i in notifications:
        del i["_id"]
    
    return notifications

if __name__ == "__main__":
    app.run()

# - type: str (init / photo / questions / answers)
#     - value: init: None, photo: None, questions: str[]