---
layout: page
title: "Getting Started"
class: getting-started
category: tut
date: 2014-12-23
order: 1
---

This guide is intended to get you familiar with using Johnny-Five to control the outputs of your Photon.  Although this section is optional, we recommend walking through it so that you can feel confident that your environment is set up properly.

## Hook up your Photon

0. Un-package your photon.  Notice that your Photon has a name on its belly?  You'll use this name when controlling your Photon.
0. Hook your Photon to your breadboard, and then to power via USB.
0. Make sure your computer is on the Nodebots network (password: whosjohnny)
0. We've already provisioned and set-up your Photon on this network.  Assuming everything is working properly, the light on your photon should be "breathing cyan".

WARNING: Some LEDs can be very bright, so you should avoid looking directly into them.

## Make an LED blink!
First step, let's make sure everything is working.  You will be running JavaScript on your computer which will communicate to your Photon board via WiFi.

In this example, we'll just get an LED to blink.

0. Make sure you've installed Node ([prerequisites]({{ site.baseurl }}/tut/prerequisites.html)) 
0. Open up a command prompt and create a folder to work in
0. From there, install Johnny-Five: `npm install johnny-five`.  This will install into your "node_modules" folder.
0. Now install the Particle-IO layer.  By default, Johnny-Five works with Arduinos, so this library will tell Johnny-Five how to speak Particle: `npm install particle-io`.
0. Create a file called "bot.js" and add the [LED Blink Code](#ledblink).  
0. Your Photon has a built-in LED on pin D7, so you can hook one up if you want, but it is completely optional.
0. Run your bot: `node bot.js`.  You should see the LED blinking!
    - If your LED is not lighting, double check you wired it correctly as noted in the previous step and shown in the wiring diagram below.

<a name="ledblink"></a>
**LED Blink Code:**

<script src="http://gist-it.appspot.com/github/HartlandRobotics/ArduinoIntroduction/blob/master/examples/led_control.js"></script>

**LED Blink Wiring:**

![LED Wiring Diagram]({{ site.baseurl }}/assets/wirings/led.png)

## What's happening?
Your Photon is listening for commands on a TCP port on the local network.  Your `bot.js` code is running on your machine.  You don't know the IP address and port of your photon, but it has broadcast this information to the cloud.  When you configured your code to use a token and your unique device name, it retrieves the IP address and port of your Photon and then connects to it.

Once that is complete, your code will receive a "ready" event.  At that time, the LED abstraction will send on/off signals over the network to your chip.  This is how you will be programming your photon today to do all sorts of things.




