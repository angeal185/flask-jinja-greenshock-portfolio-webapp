import info
from flask import Flask
#from flask_debugtoolbar import DebugToolbarExtension
from flask import render_template

app = Flask(__name__)

layout_args = {
    "meta" : info.meta,
    "static" : info.static,
}

@app.route("/")	
@app.route("/index")
@app.route("/index.py")
def home():
    return render_template("index.py", **layout_args)

app.debug = True

app.config['SECRET_KEY'] = '<replace with a secret key>'

#toolbar = DebugToolbarExtension(app)

if __name__ == "__main__":
    app.debug = True
    app.run()

	