from flask import Flask, render_templates

app = Flask(__name__)

def index('/')
    return render_templates('funcion.html')

    if __name__ == '__main__':
        app.run(debug=True)