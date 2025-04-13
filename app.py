from flask import Flask, request, jsonify
from flask_cors import CORS  # Tambahkan ini
from chat import get_response

app = Flask(__name__)
CORS(app)  # Izinkan semua origin, atau bisa diatur spesifik

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    msg = data.get('input')
    response = get_response(msg)
    return jsonify({'output': response})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
