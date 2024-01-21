import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import faker

# Use a service account
cred = credentials.Certificate(r"c:\Users\andre\Downloads\homegrown-6fa5b-firebase-adminsdk-4dr5l-a48bb2c972.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
# Create a Faker instance
fake = faker.Faker()

# List of produce
from foodList import foodList
from farmList import local_farms 

# Create 100 farms
for _, farm_data in enumerate(local_farms):
    farm_data['produce']= fake.random_elements(elements=foodList, length=fake.random_int(min=1, max=5), unique=True)

    # Add a new doc in collection 'farms' with ID 'farmID'
    farm_ref = db.collection('farms').document()
    farm_ref.set(farm_data)