import json
import requests

# url = "https://the-birthday-cake-db.p.rapidapi.com/"

# headers = {
#     "x-rapidapi-key": "3c71195215msh25bb6f9a25c6cfap1aec8ejsnb119586d6393",
#     "x-rapidapi-host": "the-birthday-cake-db.p.rapidapi.com",
# }

# url = "https://the-mexican-food-db.p.rapidapi.com/"

# headers = {
#     "x-rapidapi-key": "3c71195215msh25bb6f9a25c6cfap1aec8ejsnb119586d6393",
#     "x-rapidapi-host": "the-mexican-food-db.p.rapidapi.com",
# }

# url = "https://chinese-food-db.p.rapidapi.com/"

# headers = {
#     "x-rapidapi-key": "3c71195215msh25bb6f9a25c6cfap1aec8ejsnb119586d6393",
#     "x-rapidapi-host": "chinese-food-db.p.rapidapi.com",
# }

url = "https://the-vegan-recipes-db.p.rapidapi.com/"

headers = {
	"x-rapidapi-key": "3c71195215msh25bb6f9a25c6cfap1aec8ejsnb119586d6393",
	"x-rapidapi-host": "the-vegan-recipes-db.p.rapidapi.com"
}



data = []

for i in range(1,102):
    response = requests.get(f"{url}{i}", headers=headers)
    response_data = response.json()
    data.append(response_data)
    print(f"{i} request done!")


with open("vegan.json", "w") as file:
    json.dump(data, file)
