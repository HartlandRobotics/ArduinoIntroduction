---
layout: page
title: "Part 6: Let's Drive!"
class: maze-runner
category: maze
date: 2016-06-19
order: 5

---

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