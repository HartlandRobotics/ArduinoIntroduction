---
layout: page
title: "Part 7: Code Motors"
class: getting-started
category: line
date: 2016-07-28
order: 6
---

In this section we will update our robot code to control the motors in response to our sensors..

#### Open robot sketch in Arduino IDE

Make sure you are on the robot tab inside the IDE. The items we need to
add are:

0. Declare the pins that will be used for the left and right motors.
0. Inside the setup fuction, initialize both motors
0. Inside the run loop, declare two variables to hold the speed values for fast and slow
0. Update the code inside the if statement that is used to detect objects, Add code to stop both motors *and* a return call to make sure no other code in the loop starts them.
0. Update the code inside the line detected on the right conditional to turn right. Also add a return statement.
0. Update the code inside the line detected on the left conditional to turn left. Also add a return statuement.
0. If you have passed by the checks for objects in front, lines on the left and right without finding anything, you can then set the motors to go forward.

Your robot code should look like this:
<script src="https://gist.github.com/dennisburton/06523b56298919b5fbcb6012a68ac843.js"></script>

