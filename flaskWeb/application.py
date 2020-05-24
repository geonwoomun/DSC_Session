from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return "Hello, world"


@app.route("/<string:name>")
def gw(name):
    return "Hello, {}!".format(name)

@app.route("/hi")
def hi():
    headline = "아헤히호후"
    return render_template("index.html", headline=headline)

@app.route("/name")
def name():
    names = ["Allice", "Bob", "Charlie"]
    return render_template("names.html", names=names)
    

if __name__ == '__main__':
    app.run()