---
layout: page
title: "Part 9: Refactoring Motor Controller Code"
class: getting-started
category: tut
date: 2016-07-28
order: 9
---

In this exercise we will organize your code to be easier to read and
reuse in later projects.

#### Open the Arduino IDE

We will be working with the sketch that we used to implement the
motor controller.

#### Create a new tab

0. Press the Sketch Action menu button. This is the down arrow located
in the upper right corner of the arduino IDE.
0. Select the New Tab option
0. At the bottom of the screen, you are being asked for a name for your
new tab. Enter motorController and press the OK button.
0. Copy the functions initilizeMotor, motorForward, motorReverse, and
   motorStop into the new tab.

The code in the *motorController* tab should look like:

<script src="https://gist.github.com/dennisburton/b576b8af157dd75cbb7375f0c44c1660.js"></script>

The code in the motor tab should look like:

<script src="https://gist.github.com/dennisburton/a2bd6a935b3d2d389dc164cefc22e793.js"></script>

