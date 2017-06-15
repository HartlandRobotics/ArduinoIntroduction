---
layout: page
title: "Part 6: Let's Drive!"
class: getting-started
category: maze
date: 2016-06-19
order: 5

---

Now that we have two drive motors on the robot, we would like to do some test driving. You may have noticed however that we have no wheels or any way to keep the front of the robot off of the floor. Let's go fix that now

#### Attach Front roller

* Locate the roller caster in your kit
* Attach the roller caster to the bottom of the robot in the front. Make sure that the access holes are not covered up

#### Attach the Rear Wheels

* Locate the large round servo horn in each of the small bags that came with your servos
* Locate the wheel cap we will use in your kit
* You should be able to press the servo horn into the center of the wheel cap. If you are having trouble with this, ask for assistance
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


