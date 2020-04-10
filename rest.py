from flask import Flask, request
from pymongo import MongoClient
import json
from functools import wraps
from analyze import get_interests

app = Flask(__name__)
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
    - groups: []group (https://vk.com/dev/groups.get extended=1, fields=description ['items'])
    - description: str
    - gender: str (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)
    - preferences: str[] (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)'''
    
    args = {"user_id", "groups", "description", "gender", "preferences"}
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
    - interests: str[]
    - description: str
    - gender: str (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)
    - preferences: str[] (male-straight, female-straight, male-homo, female-homo, male-bi, female-bi, non-binary)'''

    args = {"user_id", "interests", "description", "gender", "preferences"}
    request_data = json.loads(request.data)

    if set(request_data.keys()) != args:
        raise Exception("InvalidArgs", "Missing args: %s" % ' '.join(args - set(request_data.keys())))
    
    user_id = request_data["user_id"]
    del request_data["user_id"]

    db.users.update_one({"user_id": user_id}, {"$set": request_data})

    return "ok"

@app.route("/get_user")
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



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)