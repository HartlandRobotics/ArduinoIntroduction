---
layout: page
title: "Part 3: Working With Distance Sensor"
class: getting-started
category: tut
date: 2016-06-19
order: 3
---

In this exercise we will find out how far an object is from our circuit.

#### Open the Arduino IDE

Instead of using a built in sample, we are going to create our own. Navigate the menu to create a new file.

0. File
0. New

Rename the file to something more meaningful than sketch. We suggest using distanceSensor.

0. File
0. Save as
0. Change the file name to distanceSensor

**Distance Sensor Code:**
Once you have the blank file, update your IDE to contain the following code.

<script src="https://gist.github.com/drewburton/311a32caa0e78c797e3a2c56d6f77798.js"></script>

#### Build the Circuit

0. Add distance sensor to the breadboard
    * Make sure the pins on the distance sensor are in different rows on
    the breadboard
    * You will probably want to place this in the center of the
    breadboard.
   * Your circuit should look like this.

    ![DistanceSensor1]({{site.baseurl}}/assets/part3/distance-sensor-01.jpg)

0. Power the circuit from the arduino.
    * Place a wire from the 5V pin on the arduino to the row on the
    breadboard that contains the Vcc pin on the distance sensor
    * Place a wire from the GND pin on the arduino to the row on the
    breadboard that contains the GND pin on the distance sensor.
    * Your circuit should look like this.

0. Include an LED in the circuit
    * Look at your LED. Observe that one leg is longer than the other. The long leg is the positive side.
    * Place the positive leg of the LED in the same row as the pin 13 wire from the arduino.
    * Use the resistor to connect the GND from the arduino and the short leg of the LED.
    * Your circuit should look like this.

    ![Circuit2]({{site.baseurl}}/assets/part1/add-led.jpg)



