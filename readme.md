# LoRa Based IoT Project
Description: Welcome to our LoRa project repository, where you'll find the code for Arduino, ESP8266, and MATLAB.
----------------------------------------------------------------------------------------------------------------
## Folder Summaries
### Webpages
Summary: Contains the PHP and HTML code to create your own webpage to display database data, a webpage to display contents of the database in .json format, and a webpage which can push keys and values into the database.

This folder contains:

**DataBaseUrlDataPushingPage.php** - Uses the URL to push data to the database.

**MainWebpageCode.php** - Main webpage that displays database information in a table and a plot.

**data.php**- Displays contents of the database in .json format.

### Database
Summary: Contains MySQL commands for sensor_register and sensor_data tables in a MySQL database.

This folder contains the MySQL commands that can be edited and used to create the database which will store data collected by a LoRa edge node.

### LoRaWan_OTAA
Summary: Contains Arduino code that should be used with a RAK 3272S Breakout Board to send LoRa messages to a LoRa gateway. Note that the code will have to be modified according to the EUI number on the RAK and the configuration of the gateway - the lab will cover this.

This folder contains the LoRaWan_OTAA.ino file which should be opened after setting up the Arduino IDE.

### Lora_P2P
Summary: Contains both the Client and Server code used in the P2P LoRa system. It also contains a repeater folder, which contains the Arduino code which implements a repeater with the RAK3272S breakout board. Note that the server code includes all the necessary code for the server side - including the RAK module and ESP8266.

This folder contains three subfolders:

**Client**

**Server**

**Repeater**

### GNURadio
Summary: Contains the GNU Radio file, **LoRaSpectrum.grc**, which can be downloaded and used to view the spectrum of a LoRa transmission. The readme.txt also contains a link to access and download the recorded IQ data of the LoRa transmission. The GNU Radio solution and the IQ data are used to look at the spectrum.

This folder contains:

readme.txt

The GNU Radio solution that can be downloaded and imported into a GNU Radio sketch.

### Matlab
Summary: This folder contains MATLAB code that will be used to plot the LoRa packet transmission in a spectrogram plot. This spectrogram plot will be used to analyze the format of the LoRa packet - preamble, sync, data chirps.

This folder contains the MATLAB code.

### 2mAmateurRadioCapture
Summary: The **2mAmateurRadioCapture** folder is for the optional task in the Software Defined Radio and GNU Radio assignment.

Contains a GNU Radio template to assist students in decoding an Amateur Radio Broadcast.

### Misc:
For using Arduino with the RAK Breakout Board Refer to this:
Add RAK3272S as a supported board in Arduino IDE  by updating Board Manager URLs in Preferences settings of Arduino 
IDE with this JSON URL https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json. 
After that, you can then add RAKwireless RUI STM32 Boards via Arduino board manager.

https://docs.rakwireless.com/product-categories/wisduo/rak3272s-breakout-board/quickstart

For using the ESP3266 and Wi-Fi, Please refer to this:
https://docs.google.com/presentation/d/1ShHY82ogA8ZN0k14MjzIV-buHIkdWnY3/edit#slide=id.g15820f77c2e_0_0

For a Database Tutorial please refer to:
https://github.com/faridfarahmand/SSU/tree/main/IoTCourse/dataBase
