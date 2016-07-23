---
layout: page
title: "Part 7: Refactoring Line Sensor Code"
class: getting-started
category: tut
date: 2016-07-22
order: 7
---

In this exercise we will organize your code to be easier to read and
reuse in later projects.

#### Open the Arduino IDE

We will be working with the sketch that we used to implement the
line sensor.

#### Refactor the line sensor code

Create a function called canSeeLine that takes a sensorPinNumber as a
parameter. This function will include the code that reads the analog pin
along with the code that tested the value. That value is used to
determine if a line is present or not.

When complete, your code should look like:

<script src="https://gist.github.com/dennisburton/a977215bdaa561c8b993a56f8d224040.js"></script>

#### Create a new tab

0. Press the Sketch Action menu button. This is the down arrow located
in the upper right corner of the arduino IDE.
0. Select the New Tab option
0. At the bottom of the screen, you are being asked for a name for your
new tab. Enter lineSensor and press the OK button.
0. Copy the new function (canSeeLine) into the new tab.

The code in the *lineSensor* tab should look like:

<script src="https://gist.github.com/dennisburton/503a3ef2619aacadf599606feffb53f3.js"></script>

#### Clean up the line file

0. click on the *line* tab
0. remove the function _canSeeLine_

The _sketch_ for our line sensor can use code from any tab that is included
in the sketch. This means that even though the functions are no longer
in *line* they are still in the sketch for us to use.

Your line sketch code should now look like this:

<script src="https://gist.github.com/dennisburton/d0083cc7acea54dcdcda1a03af5e3486.js"></script>

Now we have a simple main file and a reusable file for the line sensor!
