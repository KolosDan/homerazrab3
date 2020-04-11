from flask import Flask, request
from pymongo import MongoClient
import json
from functools import wraps
from analyze import get_interests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = MongoClient().dating

def exception_handler(func):
    @wraps(func)
    def wrapper():
        try:
            result = func()
        except Exception as e:
            return {"error": "%s: %s" % (e.args[0], e.args[1])}
        
        return {"result": result}
    return wrapper

@app.route("/signup", methods=["POST"])
@exception_handler
def signup():
    '''POST. Request Data:
    - user_id: int
    - age: int
    - geo: str
    - groups: []group (https://vk.com/dev/groups.get extended=1, fields=description ['items'])
    - description: str
    - gender: str (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)
    - preferences: str[] (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)'''
    
    args = {"user_id", "age", "geo", "groups", "description", "gender", "preferences"}
    request_data = json.loads(request.data)

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
    - geo: str
    - interests: str[]
    - description: str
    - gender: str (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)
    - preferences: str[] (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)'''

    args = {"user_id", "geo", "age", "interests", "description", "gender", "preferences"}
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
        raise Exception("BadRequest", "User does not exist")

@app.route("/browse", methods=["POST"])
@exception_handler
def browse():
    '''POST. Request Data:
    - user_id: int'''
    args = {"user_id"}
    request_data = json.loads(request.data)

    if set(request_data.keys()) != args:
        raise Exception("InvalidArgs", "Missing args: %s" % ' '.join(args - set(request_data.keys())))
    
    preferences = db.users.find_one({"user_id": request_data["user_id"]})['preferences']
    users = list(db.users.find())

    result = []
    for user in users:
        if user['gender'] in preferences:
            del user['_id']
            result.append(user)

    return result

@app.route("/start_dialog")
@exception_handler
def start_dialog():
    '''POST. Request Data:
    - from: int
    - to: int'''
    
    args = {"from", "to"}
    request_data = json.loads(request.data)

    if set(request_data.keys()) != args:
        raise Exception("InvalidArgs", "Missing args: %s" % ' '.join(args - set(request_data.keys())))
    
    db.notifications.insert_one({"from": request_data['from'], "to": request_data["to"], "type": "init"})
    return "ok"

@app.route("/resolve_notification")
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
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "photo"})
        else:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "decline"})
    
    elif notification_type == "decline":
        pass
    
    elif notification_type == "photo":
        if request_data["value"] == True:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "q_set"})
        else:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "decline"})
    
    elif notification_type == "q_set":
        db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "q_answer", "value": request_data["value"]})

    elif notification_type == "q_answer":
        db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "q_resolve", "value": request_data["value"]})

    elif notification_type == "q_resolve":
        if request_data["value"] == True:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "match"})
        else:
            db.notifications.insert_one({"from": request_data["to"], "to": request_data["from"], "type": "decline"})

    db.notifications.delete_one({"from": request_data["from"], "to": request_data["to"], "type": notification_type})

    return "ok"

@app.route("/get_notifications")
@exception_handler
def get_notifications():
    '''POST. Request Data:
    - user_id: int'''
    args = {"user_id"}
    request_data = json.loads(request.data)

    if set(request_data.keys()) != args:
        raise Exception("InvalidArgs", "Missing args: %s" % ' '.join(args - set(request_data.keys())))

    return list(db.notifications.find({"to": request_data["user_id"]}))
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

# - type: str (init / photo / questions / answers)
#     - value: init: None, photo: None, questions: str[]