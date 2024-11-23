# LoRaWAN OTAA with RAK 3272S

This repository contains the code for implementing Over-The-Air-Activation (OTAA) in a LoRaWAN network using the RAK 3272S Breakout Board. The frequency band used is United States 902-928 MHz, FSB 2 (used by TTN).

## Files in This Repository

### 1. `LoRaWan_OTAA.ino`
The main Arduino code for setting up OTAA with the RAK 3272S Breakout Board.

### 2. `decodeNodeUplink.js`
JavaScript code used in The Things Network (TTN) to decode the payload from the data that the gateway received from the node device.

### 3. `viewTTNdata.py`
Python script to store TTN data into a local text file on your PC.

## Frequency Band
- **Frequency Band**: United States 902-928 MHz, FSB 2 (used by TTN)

## Special Notes
- This OTAA code is designed specifically for the RAK 3272S Breakout Board.
- Ignore `debug 1` and `debug 2` outputs; they are for internal debugging purposes only.

## Getting Started
1. **Client Setup**: Upload `LoRaWan_OTAA.ino` to your Arduino.
2. **Server Configuration**: Use `decodeNodeUplink.js` in your TTN console to decode uplink messages.
3. **Data Storage**: Run `viewTTNdata.py` on your local machine to store TTN data in a text file. Might need to install python.

### Dependencies
- Arduino IDE
- TTN account and setup
- Python environment

## How to Use
1. **Arduino Setup**:
   - Open `LoRaWan_OTAA.ino` in Arduino IDE.
   - Upload the code to your RAK 3272S Breakout Board.
   - Make sure to follow the lab assignment.
2. **TTN Setup**:
   - Add `decodeNodeUplink.js` in your TTN application to decode the payload.
3. **Data Storage**:
   - Run `viewTTNdata.py` to fetch and store TTN data locally.
