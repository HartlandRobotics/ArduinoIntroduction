---
layout: page
title: "Part 1: Code Shared"
class: getting-started
category: line
date: 2016-07-28
order: 0
---

For this section we are going to pull in all of the reusable code that
you built in the previous tutorial sections.

#### Locate your previous Arduino projects
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

![SketchTabs]({{ site.baseurl }}/assets/linefollower/SketchTabs.png)



