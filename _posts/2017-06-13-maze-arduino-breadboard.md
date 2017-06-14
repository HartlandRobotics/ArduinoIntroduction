---
layout: page
title: "Part 1: Attaching Arduino to Chassis"
class: maze-runner
category: maze
date: 2016-06-19
order: 1
---

The first step in building your robot is to understand the orientation of the chassis.

* The edge of the chassis that is tapered is the front of the robot.
* The edge of the chassis that has two notches is the rear of the robot.
* Once you have the front and rear positioned correctly, the hole near the front of the robot should be offset to the left. You might have to flip over the chassis to get the orientation correct.

Set the chassis in front of you so that it looks like this:
    ![DistanceSensor1]({{site.baseurl}}/assets/mazerunner/orientation.jpg)



The first step in building your robot is to locate the top of the chassis. When the top of the cassis is facing up, the 
In this exercise we will find out how far an object is from our circuit.

#### Open the Arduino IDE

Instead of using a built in sample, we are going to create our own. Navigate the menu to create a new file.

0. File
0. New

Rename the file to something more meaningful than sketch. We suggest using distance.

0. File
0. Save as
0. Change the file name to distance

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

    ![DistanceSensor2]({{site.baseurl}}/assets/part3/distance-sensor-02.jpg)

0. Connect the trigger and echo pins to the arduino.
    * Place a wire from pin 2 on the arduino to the row on the
    breadboard that contains the trig pin on the distance sensor.
    * Place a wire from pin 3 on the arduino to the row on the
    breadboard that contains the echo pin on the distance sensor.
    * Your circuit should look like this.


    ![DistanceSensor3]({{site.baseurl}}/assets/part3/distance-sensor-03.jpg)



