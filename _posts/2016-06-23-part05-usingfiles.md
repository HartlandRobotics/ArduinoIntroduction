---
layout: page
title: "Part 5: Using files"
class: getting-started
category: tut
date: 2016-06-19
order: 5
---

In this exercise we will organize your code into files. These files can
be imported into your future robot projects easily.

#### Open the Arduino IDE

We will be working with the sketch that we used to implement the
distance sensor.

#### Create a new tab

0. Press the Sketch Action menu button. This is the down arrow located
in the upper right corner of the arduino IDE.
0. Select the New Tab option
0. At the bottom of the screen, you are being asked for a name for your
new tab. Enter distanceSensor and press the OK button.
0. Copy the two new functions (initilizeDistanceSensor and findDistance)
into the new tab.

The code in the *distanceSensor* tab should look like:

<script src="https://gist.github.com/dennisburton/ef9a3c1904f71b7e56ff42efada17464.js"></script>



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

