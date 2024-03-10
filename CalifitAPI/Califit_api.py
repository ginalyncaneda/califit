from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Global variables to control recording
is_recording = False

# Your backend code
import cv2
import mediapipe as mp
import numpy as np
mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

def start_recording():
    global is_recording
    is_recording = True

def stop_recording():
    global is_recording
    is_recording = False

@app.route('/start_recording')
def start_recording_route():
    start_recording()
    return jsonify({'message': 'Recording started'})

@app.route('/stop_recording', methods=['POST'])
def stop_recording_route():
    stop_recording()
    return jsonify({'message': 'Recording stopped'})

@app.route('/is_recording', methods=['GET'])
def get_recording_status():
    return jsonify({'is_recording': is_recording})

if __name__ == '__main__':
    app.run(debug=True)
