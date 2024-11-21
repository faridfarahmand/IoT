# P2P Communication System with Arduino

## Overview
This project demonstrates a Peer-to-Peer (P2P) communication system using a repeater to extend communication distance. It consists of three files:

1. `Client.ino`
2. `Server.ino`
3. `Repeater.ino`

## Important Note
This project is specifically designed to work in the Arduino IDE with the RAK3272S Breakout Board. Ensure that you are using the Arduino IDE for uploading the sketches to your boards.

## Nodes Registration
- The **client** is registered as **NODE-1**.
- The **repeater** is registered as **NODE-2**.

## Files Description

### Client.ino
Handles the client-side operations, sending data to the repeater.

### Server.ino
Manages the server-side logic, processing the data received from the repeater.

### Repeater.ino
Acts as an intermediary, relaying messages between the client and server, ensuring efficient communication.

## Getting Started
1. Open the Arduino IDE.
2. Upload `Client.ino` to the client device.
3. Upload `Repeater.ino` to the repeater device.
4. Upload `Server.ino` to the server device.
5. Ensure all devices are properly configured and connected.
