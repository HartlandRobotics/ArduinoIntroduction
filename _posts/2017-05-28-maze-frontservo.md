---
layout: page
title: "Part 7: Front Servo"
class: maze-runner
category: maze
date: 2016-06-19
order: 6

---

We now have a chassis that can drive around a maze. But, it needs some guidance. At this point, we will start adding a distance sensor mounted on top of a servo so that we can see how far things are in multiple directions.

#### Attach the Front Servo

* Locate the mini-servo in your kit
* Note the location on the front of the robot where the servo should be placed. Also notice the notch that will allow the servo wire to pass through the chassis

![FrontServoNotch]({{site.baseurl}}/assets/mazerunner/frontservo_chassis.jpg)

* Insert the servo into the chassis

![FrontServoAttach]({{site.baseurl}}/assets/mazerunner/frontservo_attach.jpg)

* Attach the servo wire to the circuit board on the pins labeled front
    * the brown wire should be closest to the back of the robot or the hartland robotics printing

![FrontServoBreadboard]({{site.baseurl}}/assets/mazerunner/frontservo_circuitboard.jpg)

#### Controlling the Servo with code

##### Create a tab for the wall finder

0. Press the Sketch Action menu button. This is the down arrow located
in the upper right corner of the arduino IDE.
0. Select the New Tab option
0. At the bottom of the screen, you are being asked for a name for your
new tab. Enter wallfinder and press the OK button.

##### Setup the rotator

* Declare a Servo called rotator
* Create a variable to hold which pin the rotator will communicate with the Arduino through
* Create a setup function
    * Attach the servo to the specified pin
    * Center the servo so that we have a known position to call forward

<script src="https://gist.github.com/dennisburton/33a6e9736d692ba49426b397a4d9d5c7.js"></script>


* Add a call to you setup function inside of the mazerunner setup method

<script src="https://gist.github.com/dennisburton/5caa08d6462ac2cbae5282fe7b5b73e7.js"></script>


#### Testing

Right now, the code inside of loop in the mazerunner tab is set up to test the chassis. Now, all you need is the servo initialization to take place so that the rotator will be positioned correctly

* Remove the code from the loop method

<script src="https://gist.github.com/dennisburton/c2bf3732c38482466d5bda1a7d1cfd91.js"></script>

* Compile and deploy to the Arduino. This will position the servo where we need it for the next exercise.
