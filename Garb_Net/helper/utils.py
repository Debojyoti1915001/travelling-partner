import tensorflow as tf

import numpy as np
import os


INPUT_SHAPE_AFTER_PATCH = [256,256,3]
MODEL_FILE_PATH = "./model"
MODEL_ARCH_PATH = MODEL_FILE_PATH + "/"+"GarbMod"
MODEL_WEIGHT_FILEPATH = MODEL_FILE_PATH + "/"+"GarbMod_Weights"
MODEL_WEIGHT_PATH  = MODEL_WEIGHT_FILEPATH + "/" + "Weights_01.h5"

def mkdir(path):
  if not os.path.exists(path):
    os.mkdir(path)
  else:
    return


class ResizeAndPatchify(tf.keras.layers.Layer ):
  def __init__( self , patch_size ):
    super(ResizeAndPatchify, self).__init__()
    self.patch_size=patch_size
    self.patch_layer = CreatePatches(patch_size)
  def call(self,inputs):
    assert len(inputs.shape)==4, "Provide 4D input [1,heigh,width,channels]"
    shape_1 = self.patch_multiple_shape(inputs.shape[1])
    shape_2 = self.patch_multiple_shape(inputs.shape[2])
    # smaller_shape = inputs.shape[1] if inputs.shape[1]<= inputs.shape[2] else inputs.shape[2]
    # smaller_shape = float(smaller_shape)
    # pow = int(tf.math.floor(tf.math.log(smaller_shape)/tf.math.log(2.0)))
    # new_shape= 2**pow
    inputs = tf.image.resize(inputs,size=[shape_1,shape_2])
    inputs = self.patch_layer(inputs)
    return np.array(inputs).squeeze()
  def patch_multiple_shape(self,shape):
    return int((shape//self.patch_size)*self.patch_size)

class CreatePatches( tf.keras.layers.Layer ):

  def __init__( self , patch_size, ):
    super( CreatePatches , self ).__init__()
    self.patch_size = patch_size

  def call(self, inputs ):
    patches = []
    # For square images only ( as inputs.shape[ 1 ] = inputs.shape[ 2 ] )
    input_image_shape1 = inputs.shape[ 1 ]
    input_image_shape2 =  inputs.shape[ 1 ]
    for i in range( 0 , input_image_shape1 , self.patch_size ):
        for j in range( 0 , input_image_shape2 , self.patch_size ):
            patches.append( inputs[ : , i : i + self.patch_size , j : j + self.patch_size , : ] )
    return patches

class GarbageInferenceModel():
    THRESHOLD = 0.5

    def __init__(self):
        self.model = self.load_model()
        self.resize_patch = ResizeAndPatchify(INPUT_SHAPE_AFTER_PATCH[0])

    def load_model(self):
        new = tf.keras.models.load_model(MODEL_ARCH_PATH)
        new.load_weights(MODEL_WEIGHT_PATH)
        return new

    def predict(self, image: np.ndarray):
        image = self.transform(image)
        logits = self.model(image)
        logits = tf.where(logits > self.THRESHOLD, 1, 0)
        percentage = (tf.math.reduce_sum(logits) / tf.shape(logits)[0]) * 100
        return float(percentage)

    def transform(self, image):
        assert len(image.shape) ==3, "Might not be a singlr Image"
        image = np.expand_dims(image, 0)
        image = image / 255.0
        image = self.resize_patch(image)
        return image