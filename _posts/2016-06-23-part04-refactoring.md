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

#### Refactor the setup code

First up, place the code that initialized our configuration into a
function. Pull out the two lines that set the pin mode and place them in
a function called initializeDistanceSensor. This function will need to
have two parameters. The first will be an integer called triggerPin and
the second will be an integer called echoPin.

Once that function has been created replace the two lines in the setup
function with a call to your new function: initializeDistanceSensor.

When complete, your code should look like:

<script src="https://gist.github.com/dennisburton/c342803dfe88c3ad7ee87c5117960018.js"></script>


#### Refactor the distance detection code

Now, place the code that sent out the soundwave, listened for a
response, and calculated the distance in a function called findDistance.
This function will also need to have the two parameters for the trigger
and echo pins. A new feature of this function will be that it will
return the distance.

Once that function has been created replace the lines of code in the
loop function with the call to your new function: findDistance.

When complete, your code should look like:

<script src="https://gist.github.com/dennisburton/e7050e8678a32139363da8882d1d654f.js"></script>


