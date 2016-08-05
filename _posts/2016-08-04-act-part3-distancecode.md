---
layout: page
title: "Part 3: Robot Code"
class: getting-started
category: line
date: 2016-07-28
order: 2
---

In this section we will update our robot code to use the distance
sensor.

#### Open robot sketch in Arduino IDE

Make sure you are on the robot tab inside the IDE. The items we need to
add are:

0. Declare the echo and trigger pins we will use for the distance sensor
0. Initialize the distance sensor
0. Initialize the serial communications so you can see the status of
your robot
0. Inside the run loop, check for objects in front of the robot and
   print out a message if it can detect something


Your robot code should look like this:

<script src="https://gist.github.com/dennisburton/67b5fedb6566300d536028d3fe23acd8.js"></script>


