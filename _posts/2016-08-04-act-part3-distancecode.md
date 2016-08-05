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




On OS X, all of your saved projects are in your Documents in a directory
called Arduino. From there, you can see the projects created during the
tutorial section for each of the robot components. It should look
something like this:

![ArduinoProjects]({{ site.baseurl }}/assets/linefollower/ArduinoProjects.png)

The goal of this first section is to make sure that you know where all
of these projects are so that we can import them later

#### Starting the robot sketch
Create a new file for the robot code

0. File
0. New

Rename the file to something more meaningful than sketch. We suggest using robot.

0. File
0. Save as
0. Change the file name to robot

#### Adding existing distannce sensor code
0. In the Sketch menu item select Add File...
0. Navigate to the location where your saved Arduino sketches are saved. You found in the first part of this lesson.
0. Open the distance directory
0. Notice that there are two files. (distance.ino and distance_sensor.ino)
0. Select distance_sensor.ino
0. Notice that there is a new tab with your distance sensor code from
the previous tutorial

#### Adding existing line sensor code
0. In the Sketch menu item select Add File...
0. Open the line directory
0. Select line_sensor.ino

#### Adding existing motor controller code
0. In the Sketch menu item select Add File...
0. Open the motor directory
0. Select the motor_controller.ino

#### Verify your work
After importing all of the files from your past projects, your Arduino
IDE shoud have 4 tabs: robot, distance_sensor, line_sensor,
motor_controller

Your IDE shoud look something like this:

<script src="https://gist.github.com/dennisburton/67b5fedb6566300d536028d3fe23acd8.js"></script>


