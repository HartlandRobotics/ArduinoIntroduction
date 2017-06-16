---
layout: page
title: "Part 7: Front Servo"
class: getting-started
category: maze
date: 2016-06-19
order: 6

---

We now have a chassis that can drive around a maze. But, it needs some guidance. At this point, we will start adding a distance sensor mounted on top of a servo so that we can see how far things are in multiple directions.

#### Attach the Front Servo

* Locate the mini-servo in your kit
* Note the location on the front of the robot where the servo should be placed. Also notice the notch that will allow the servo wire to pass through the chassis
* Insert the servo into the chassis

* Locate a set of 3 header pins in your kit
* Insert one end of the header pins into the servo wire
* Attach the servo wire to the breadboard in a location where there are 3 *unused* rows

* Connect the row with the brown wire to the row with the ground connections
* Connect the row with the red wire to the row with the power connections
* Connect the row with the orange wire to pin 3 on the Arduino

#### Controlling the Servo with code


##### Create a tab for the chassis

0. Press the Sketch Action menu button. This is the down arrow located
in the upper right corner of the arduino IDE.
0. Select the New Tab option
0. At the bottom of the screen, you are being asked for a name for your
new tab. Enter wallfinder and press the OK button.




Now that we have two drive motors on the robot, we would like to do some test driving. You may have noticed however that we have no wheels or any way to keep the front of the robot off of the floor. Let's go fix that now

#### Attach Front roller

* Locate the roller caster in your kit
* Attach the roller caster to the bottom of the robot in the front. Make sure that the access holes are not covered up

![Caster]({{site.baseurl}}/assets/mazerunner/caster_attach.jpg)

#### Attach the Rear Wheels

* Locate the large round servo horn in each of the small bags that came with your servos
* Locate the wheel cap we will use in your kit
* You should be able to press the servo horn into the center of the wheel cap. If you are having trouble with this, ask for assistance

![WheelCap]({{site.baseurl}}/assets/mazerunner/wheelcap.jpg)

* Attach the each wheel to the servo using the small black phillips (+) head screw that is in the small bag that came with your servos

#### Update the robot code

* Inside of the mazerunner tab update the code in the loop method to
    0. driveForward
    0. wait 2 seconds
    0. driveBack
    0. wait 2 seconds

When complete your loop method should look like this:

<script src="https://gist.github.com/dennisburton/957e0398c008c71855ed94a80167c292.js"></script>


#### Testing

Compile and upload your current sketch to the Arduino to make sure it is working correctly. Your robot should now drive forward and backward after deploying

** This means that your robot will be moving as soon as the code has deployed to the Arduino. **

Make sure you are prepared to keep your robot from falling off of the table.


#### Less Boring, Please

Ok, so driving forward and back is not all that interesting. But, we had to get the simple things working before we could do more interesting things. Now we will at a method to turn the robot.

* Add a method in the chassis tab called driveTurnRight
* In this method, we will need to make the left wheel go forward and the right wheel back
* We will pick an amount of time that we think it will take to turn. You might have to adjust this for your robot. Really, every robot is different


<script src="https://gist.github.com/dennisburton/a8117494673a13bc8767b286a0d6107d.js"></script>

* Update the code in the loop method on the mazerunner tab to
    * driveForward
    * wait 2 seconds
    * turn right

<script src="https://gist.github.com/dennisburton/e3ddfe3732a3b5496631b81b50841d0e.js"></script>


#### Your Turn

You see what I did there. Next up, left turns. This time, you determine what the code should look like based on the right turn code. If you need help, be sure to ask for assistance.

* Make a method in the chassis tab to turn left. Note that you should be able to reuse the variable declared for turnTime
* Update your loop code to test it