from django.shortcuts import render
from django.http import HttpResponse
import requests
import json
from search.keys import API_KEY

ENDPOINT = "https://api.yelp.com/v3/businesses/search"
HEADERS = {'Authorization': 'bearer %s' % API_KEY}

PARAMETERS = {'term': 'coffee',
                'limit': 50,
                'radius': 10000, 
                'location': 'San Diego'}

def index(request):
    response = requests.get(url=ENDPOINT, params=PARAMETERS, headers=HEADERS)

    print(json.loads(response.text))
    return HttpResponse(response.text)



