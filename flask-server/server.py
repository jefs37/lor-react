from flask import Flask, jsonify, request
import requests

with open('./flask-server/apikey.txt', 'r') as f:
    apiKey = f.read()

def getPlayer(name):
    apiUrl = ("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" 
              + name + "?api_key=" + apiKey)
    resp = requests.get(apiUrl)
    return resp.json()

def getMatchIDs(name, puuid):
    apiUrl = ("https://americas.api.riotgames.com/lor/match/v1/matches/by-puuid/"
              + puuid + "/ids?start=0&count=10&api_key=" + apiKey)
    resp = requests.get(apiUrl)
    return resp.json()

def getMatchInfo(match):
    apiUrl = ("https://americas.api.riotgames.com/lor/match/v1/matches/"
              + match + "?api_key=" + apiKey)
    resp = requests.get(apiUrl)
    return resp.json()

app = Flask(__name__)

@app.route('/userinfo')
def display_user_info():
    return '{"stats" : "xyz"}'

@app.route('/finduser', methods = ['GET', 'POST'])
def get_user():
    username = request.get_json()
    if username == None:
        return jsonify('no results')
    else:
        name = username.get('username')
        print(name)
        puuid = (getPlayer(name))["puuid"]
        matches = getMatchIDs(name, puuid)
        info = [0] * 20
        for i in range(0,10):
            info[i] = getMatchInfo(matches[i])
    print(info)
    return jsonify(info)

if __name__ == '__main__':
    app.run(debug=True)

