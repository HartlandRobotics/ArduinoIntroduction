---
layout: page
title: "Part 4: Refactoring Code"
class: getting-started
category: tut
date: 2016-06-19
order: 4
---

In this exercise we will organize your code to be easier to read and
reuse in later projects.

#### Open the Arduino IDE

We will be working with the sketch that we used to implement the
distance sensor.

First up, place the code that initialized our configuration into a
function. Pull out the two lines that set the pin mode and place them in
a function called initializeDistanceSensor. This function will need to
have two parameters. The first will be an integer called triggerPin and
the second will be an integer called echoPin.

Once that function has been created replace the two lines in the setup
function with a call to your new function: initializeDistanceSensor.

When complete, your code should look like:

<script src="https://gist.github.com/dennisburton/218c2e76df71e10322a80ede1188f14a.js"></script>

