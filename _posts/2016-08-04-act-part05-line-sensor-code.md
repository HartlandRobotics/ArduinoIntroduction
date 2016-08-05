---
layout: page
title: "Part 5: Code Line Sensor"
class: getting-started
category: line
date: 2016-07-28
order: 4
---

In this section we will update our robot code to use the line sensors.

#### Open robot sketch in Arduino IDE

Make sure you are on the robot tab inside the IDE. The items we need to
add are:

0. Declare the analog pins that will be used for the left and right sensors.
your robot
0. Inside the run loop, check for a line on the right.
0. Print out a message if you see a line on the right
0. Inside the run loop, check for a line on the left.
0. Print out a message if you see a line on the left.

Your robot code should look like this:

<script src="https://gist.github.com/dennisburton/0f7a19cd3a60245b9ca23439bd962aa7.js"></script>

