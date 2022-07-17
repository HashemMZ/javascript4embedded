# javascript4embedded
a javascript project to gather data from some sensor nodes through LAN network
this project is in fact a device in my workplace for montoring temperature data of a few antenna rooms in the permises. totally there is 7 rooms each have a DHT22 sesnor that measures temperature and humidity. the hardware was desinged and assempled by someone else however it was not working and I refurbished it totally.

the nodes consist of Arduino MEGA and ethernet shield. there are two nodes that connect to three and four sensor each. the main program is the javascript part on a PC that fetches data from two nodes by calling their IPs. then the received data are being extracted from html page sent from Arduino and displayed on the page. there is also an alarm set for high tempreatue situation and two chart to shoe the data visually.
