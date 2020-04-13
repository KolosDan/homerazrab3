import requests
from pymongo import MongoClient

class Notificator:
    def __init__(self):
        self.db = MongoClient()