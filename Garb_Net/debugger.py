from fastapi import FastAPI, HTTPException
from helper.utils import GarbageInferenceModel
from PIL import Image
import requests
from io import BytesIO
import numpy as np

def parse_image_from_url(url):
  try:
    response = requests.get(url)
    img = Image.open(BytesIO(response.content))
    print(img)
    img = np.array(img)
    if len(img.shape) == 3:
      return {"Image":img}
    else:
      return {"Image":None}
  except Exception as e:
    return {"Image": "Could Not load image"}
if __name__=="__main__":
    url = "https://res.cloudinary.com/dxjcjsopt/image/upload/v1668776130/dobcdjlrquirqbsb4rkr.jpg"
    # img = parse_image_from_url(url)
    response = requests.get(url)
    img = Image.open(BytesIO(response.content))
    print(img)
    img = np.expand_dims(img,0)
    print(img.shape)