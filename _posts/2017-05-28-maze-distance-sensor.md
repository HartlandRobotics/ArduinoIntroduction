---
layout: page
title: "Part 9: Working With Distance Sensor"
class: maze-runner
category: maze
date: 2016-06-19
order: 8

---

In this exercise we will find out how far an object is from our robot.

#### Add Code for Distance Sensor

* Observe the pins on the distance sensor. Note the pins labeled Trig and Echo
* In the wallfinder tab, create a variable to hold the trigger pin location. Set this to 4
* Declare a variable to hold the echoPin location. Set this to 5.

<script src="https://gist.github.com/dennisburton/deed78efa25be174b7359f227bdb4950.js"></script>

* In the wallfinderSetup method set the pin mode for the trigger and echo pins

<script src="https://gist.github.com/dennisburton/e7f66c80466bba827b80d74f7ed5d0d2.js"></script>

* Add a distance function that looks like the one below

<script src="https://gist.github.com/dennisburton/64c5f1cf59da42710638ce83b1419510.js"></script>

#### Wiring the Distance Sensor

* Connect the echo pin on the distance sensor to pin specified in your code
* Connect the trigger pin on the distance sensor to the pin specified in your code
* Connect the Ground pin on the distance sensor to a GND pin on the Arduino
* Connect the VCC (power) pin on the distance sensor to either the 5V pin on the Arduino or the voltage row on your breadboard

#### Testing

Update you loop method to:

* Call the distance method
* wait 1 second

This time when you run your code select Tools -> Serial Monitor from the menu. This will allow you to see the print statements in the distance function


#### Open the Arduino IDE0vj

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



