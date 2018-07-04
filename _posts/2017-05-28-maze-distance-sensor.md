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

* In the wallfinder setup method, set the pin mode for the trigger and echo pins

<script src="https://gist.github.com/dennisburton/e7f66c80466bba827b80d74f7ed5d0d2.js"></script>

* Add a distance function that looks like the one below

<script src="https://gist.github.com/dennisburton/64c5f1cf59da42710638ce83b1419510.js"></script>

#### Wiring the Distance Sensor

* Connect the echo pin on the distance sensor to the echo pin on the circuit board
* Connect the trigger pin on the distance sensor to the pin labeled trig on the circuit board
* Connect the Ground pin on the distance sensor to the GND pin on the sensor pins on the circuit board
* Connect the VCC (power) pin on the distance sensor to the VCC pin on the sensor pins on the circuit board.

![LeftServoChassis]({{site.baseurl}}/assets/mazerunner/distance_wiring.jpg)

#### Testing

Update you loop method to:

* Call the distance method
* wait 1 second

This time when you run your code select Tools -> Serial Monitor from the menu. This will allow you to see the print statements in the distance function
