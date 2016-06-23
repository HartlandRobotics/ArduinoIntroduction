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

#### Clean up the robot file

0. click on the *robot* tab
0. remove the functions _initializeDistanceSensor_ and _findDistance_

The _sketch_ for our robot can use code from any tab that is included
in the sketch. This means that even though the functions are no longer
in *robot* they are still in the sketch for us to use.

Your robot sketch code should now look like this:

<script src="https://gist.github.com/dennisburton/3f5fe580a82c79f9d1fe5b1ea8379bbf.js"></script>

This makes things nice and small in our file that controls the robot. If
you wanted to add a couple more distance sensors, it would now be very
easy to do.
