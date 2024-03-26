from flask import Flask, render_template, request
from waitress import serve

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
