# For this hackathon we will scrape the foodb website to get imformation about foods
# TODO upgrade to API when available

import requests
from bs4 import BeautifulSoup
import json
import re

test_food = "kale"
for i in range(100,400):
    url=f"https://foodb.ca/foods/{i}"
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    print(soup.find('name').get_text())
    break
    results_list = soup.find_all('div', {'class': 'unearth-search-results unearth-food-search-results'})
    print(results_list)