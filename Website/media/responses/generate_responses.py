import torch, requests, sys
# model = torch.hub.load('ultralytics/yolov5', 'custom', path='./frontend/static/yolov5_weights.pt')

#Function takes in an image and returns a json file containing prediction
# def generate_response(img_path): 
#   results = model(img_path)
#   df = results.pandas().xyxy[0]
#   json_file = df.to_json()
#   return json_file

# Send message to api
link = "http://127.0.0.1:8000/api/text/"
response = requests.post(link, data = { 'message': str(sys.argv[1]) }) # sys.argv[1] uses arguments passed from subprocess.run()