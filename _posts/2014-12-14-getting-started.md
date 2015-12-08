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

0. Un-package your photon.  Notice that your photon has a name on its belly?  That name is there to make it easier for you to find your device ID.  Why didn't we print the device ID on the belly?  Because it is hard to type.  The name is easier.
0. Hook your photon to your breadboard, and then to power via USB.
0. Make sure your computer is on the Nodebots network (password: whosjohnny)
0. We've already provisioned and set-up your Photon on this network.  Assuming everything is working properly, the light on your photon should be "breathing cyan".
0. Go to [the name resolver](http://example.com) and enter your device name to get your device ID.  Copy it for later.


WARNING: Some LEDs can be very bright, so you should avoid looking directly into them.

## Make an LED blink!
First step, let's make sure everything is working.  You will be running JavaScript on your computer which will communicate to your Photon board via WiFi.

In this example, we'll just get an LED to blink.

0. Make sure you've installed Node ([prerequisites]({{ site.baseurl }}/tut/prerequisites.html)) 
0. Open up a command prompt and create a folder to work in
0. From there, install Johnny-Five: `npm install johnny-five`.  This will install into your "node_modules" folder.
0. Now install the Particle-IO layer.  By default, Johnny-Five works with Arduinos, so this library will tell Johnny-Five how to speak Particle: `npm install particle-io`.
0. Create a file called "bot.js" and add the [LED Blink Code](#ledblink).
0. Wire up an LED to pin D7
    - IMPORTANT: One leg of the LED is longer than the other. As shown in the wiring diagram below, make sure the shorter leg is connected to ground and the longer leg is connected to pin D7.
0. Run your bot: `node bot.js`.  You should see the LED blinking!
    - If your LED is not lighting, double check you wired it correctly as noted in the previous step and shown in the wiring diagram below.

<a name="ledblink"></a>
**LED Blink Code:**

<script src="http://gist-it.appspot.com/github/CareEvolution/nodebots-unleashed-codemash-docs/blob/master/examples/strobe.js"></script>

**LED Blink Wiring:**

![LED Wiring Diagram]({{ site.baseurl }}/assets/wirings/led.png)

## Make the LED pulse
In the last example, you told the LED to turn on and off.  Internally, the `strobe()` method just turns the pin high and low over time.  We'd like to change this program to fade in and out over time.  Instead of going high or low, you will be using the PWM (pulse width modulation) features of the board.  You can set the values to anywhere between `0` and `255` which will create a "square wave" with a duty cycle that simulates a "percentage on".  

Give it a try.  Change `strobe()` to `brightness(100)` and re-run your script.  Change the value from `100` to something else like `50` or `200`.  Notice how the LED brightness is controlled!

Now, change `brightness(100)` to `pulse(1000)`.  You are telling your LED to pulse between `0` and `255` over a 1-second interval.


