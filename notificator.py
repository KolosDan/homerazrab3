import requests
from pymongo import MongoClient
import time

def call_vk(method, access_token, **kwargs):
    arg_string = '&'.join(['%s=%s' % (k,v) for k,v in kwargs.items()])
    url = 'https://api.vk.com/method/' + method + '?' + arg_string + '&v=5.103&access_token=' + access_token
    response = requests.get(url).json()

    if response.get('response') != None:
        return response['response']
    elif response.get('error') != None:
        raise Exception('ApiException', response['error']['error_msg'])

db = MongoClient("mongodb://35.228.42.210:27017").dating
token = '7fff76e57fff76e57fff76e5227f8f808777fff7fff76e5216bb1462ce9a8aa191e9040'
    
while True:
    notifications = [(i['from'], i['to'], i['type']) for i in db.notifications.find()]
    try:
        if len(set(old_notifications) - set(notifications)) != 0:
            for from_, to_, type_ in notifications:
                print("Sending to %s" % str(to_))
                if db.push.find_one({"user_id": to_}) != None:
                    call_vk("notifications.sendMessage", token, user_ids=str(to_), message="Новое уведомление от %s" % db.users.find_one({"user_id": from_})["first_name"])
    except Exception as e:
        print(e)
    old_notifications = notifications
    time.sleep(3)