<a href="#"><img src="./Website/frontend/static/images/AMANDA_Logo.png" alt="AMANDA logo" width="150" /></a>

# A.M.A.N.D.A.

## Requirements
- Node.js
- Python

## Project Notes

(Image of final product frontpage)

A.M.A.N.D.A. is a trained medical assistant AI that detects medical diseases and provides treatments. More specifically, it can detect cellulitis and different degrees of burns. In addition to the detection, A.M.A.N.D.A. is capable of maintaining conversations.

## Setup
In the Website folder:
```
# First
python manage.py makemigrations

# Second
python manage.py migrate

# Third
python manage.py runserver
```

## Front-End Compiling
In the Website/frontend folder:
```
# For development
npm run dev

# For production
nom run build
```

## Important Files & Directories
- **Website/api**
  - The backend/Django REST API part containing the models, serializers, and views 

- **Website/api/models.py**
  - Contains models with defined attributes

- **Website/api/serializers.py**
  - Setup base data requirements for each model

- **Website/api/views.py**
  - Sends and recieves data to and from the API, YOLO classifier, and BlenderBot chatbot then sends responses back to the frontend

- **Website/frontend**
  - The frontend/React part containing the HTML template, node modules, and Javascript files for the webpage

- **Website/frontend/static/css/index.css**
  - Contains CSS code for every file in the src folder

- **Website/frontend/src/components/HomePage.js**
  - Contains code for the title, description, and chatroom 

- **Website/frontend/src/components/AboutUs.js**
  - Contains code for the About Us page

- **Website/frontend/src/components/Navbar.js**
  - Contains code for the navigation bar

- **Website/frontend/src/components/Message.js**
  - Contains base code for each message in chatroom

## Design Notes

A.M.A.N.D.A. was mainly made for those who don't have access to medical care, whether it be too expensive or unsupported in a certain area. Being lightweight, hasty, and straight to the point, A.M.A.N.D.A. strives to help those aforementioned in their small medical needs.

## Credits
- Daniel Gao ([danielgao20](https://github.com/danielgao20))
- Ryan Vong ([ryanvong65](https://github.com/rvong65))
- Jasper Shen ([CreeptonThingz](https://github.com/CreeptonThingz))
- Farzaan Wadiwalla ([Farzaankw](https://github.com/Farzaankw))
- Nick Goodchild ([username](url))
