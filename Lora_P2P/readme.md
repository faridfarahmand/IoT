The center frequency or carrier for the LoRa signal is: 905500000Hz.
Please note that the P2P code here is for the RAK3272S breakout board. 
# Project Overview

This project is organized into three main components: `client`, `server`, and `repeater`. Each component plays a vital role in the overall functionality of the system, and all code is specifically designed for the RAK3272S breakout board. Additionally, this project is intended to work exclusively with the Arduino IDE.

## Folders

### 1. Client

The `client` folder contains the code and resources necessary for the client-side application. This is the part of the system that interacts with end-users, sending requests to the server and displaying responses. Each folder contains one file.

#### Contents:
- **`main.cpp`**: The main entry point for the client application.

### 2. Server

The `server` folder contains the code and resources for the server-side application. The server handles incoming requests from clients, processes them, and sends back appropriate responses. Each folder contains one file.

#### Contents:
- **`main.cpp`**: The main entry point for the server application.

### 3. Repeater

The `repeater` folder contains the code for a repeater component, which acts as an intermediary to forward requests and responses between clients and servers. This is useful in scenarios requiring load balancing, logging, or other middle-layer functionalities. Each folder contains one file.
