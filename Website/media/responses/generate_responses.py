# testing
import torch
model = torch.hub.load('ultralytics/yolov5', 'custom', path='/media/yolov5_weights.pt')

#Function takes in an image and returns a json file containing prediction
def generate_response(img_path): 
  results = model(img_path)
  df = results.pandas().xyxy[0]
  json_file = df.to_json()
  return json_file
