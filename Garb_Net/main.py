# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
from fastapi import FastAPI, HTTPException
from helper.utils import GarbageInferenceModel
from PIL import Image
import requests
from io import BytesIO
import numpy as np

# folder which want to download from Drive
app = FastAPI()
obj = GarbageInferenceModel()



@app.get("/")
async def return_text():
    return {'info':'use the senti_model GET request for inference. Type any text. Get the sentiment'}

@app.get("/garbage_model")
async def predict_on(text:str=None):
    response = parse_image_from_url(text)
    print(text)
    # if type(response["Image"])!=np.ndarray :
    #     raise HTTPException(status_code=404, detail="Item not Found")
    # else:
    img = response["Image"]
    output = obj.predict(img)
    return {"value":int(output)}

def parse_image_from_url(url):
  try:
    response = requests.get(url)
    img = Image.open(BytesIO(response.content))
    img = np.array(img, dtype=np.float32)
    if len(img.shape) == 3:
      return {"Image":img}
    else:
      return {"Image":None}
  except Exception as e:
    return {"Image": "Could Not load image"}

# Press the green button in the gutter to run the script.

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
