# import torch, requests
# # model = torch.hub.load('ultralytics/yolov5', 'custom', path='./frontend/static/yolov5_weights.pt')

# #Function takes in an image and returns a json file containing prediction
# # def generate_response(img_path): 
# #   results = model(img_path)
# #   df = results.pandas().xyxy[0]
# #   json_file = df.to_json()
# #   return json_file

# # Get JSON data from /api/post/
# link = "http://127.0.0.1:8000/api/post/"
# response = requests.get(link)
# images = response.json()
# img_path = "./../post_images/" + images[len(images)-1]["title"]

print("hello") # sorry needed to make sure i can access the file with subprocess