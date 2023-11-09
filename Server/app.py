#importing required libraries

from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import numpy as np
import pandas as pd
from sklearn import metrics 
import warnings
import pickle
warnings.filterwarnings('ignore')
from feature import FeatureExtraction

file = open("pickle/model.pkl","rb")
gbc = pickle.load(file)
file.close()


app = Flask(__name__)

CORS(app)

@app.route("/predict", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        data = request.get_json()
        url = data.get('url')
        obj = FeatureExtraction(url)
        x = np.array(obj.getFeaturesList()).reshape(1,30) 
        y_pro_non_phishing = gbc.predict_proba(x)[0,1]
        xx =round(y_pro_non_phishing,2)
        data = [{"url" : url},{"xx" : xx}]
        return jsonify(data)
    return jsonify({"url" : "empty url"})

@app.route("/redict", methods=["GET", "POST"])
def Predict():
    data = request.get_json()
    url = data.get('url')
    response_data = {"message": url}
    return jsonify(response_data)

if __name__ == "__main__":
    app.run(debug=True)