---
layout: page
title: "Part 8: Attach Distance Sensor"
class: maze-runner
category: maze
date: 2016-06-19
order: 7

---

#### Attach Distance Sensor Bracket

* Insert the distance sensor into the bracket
* Add zip ties to the distance sensor as shown, do not tighen the zip tie too much
    * Do not be afraid to ask for assistance, this part is a bit tricky

![DistanceSensorAttached]({{site.baseurl}}/assets/mazerunner/distance_sensorattached.jpg)

* Locate the bracket in your kit
* Attach the bracket as pictured to the front servo. Be cautious not to change the position of the servo.

![DistanceSensorBracket]({{site.baseurl}}/assets/mazerunner/distance_bracket.jpg)


#### Add Code to rotate sensor

* Create a method to Center the rotator called rotatorCenter
* Add a call to write to position 90 degrees

<script src="https://gist.github.com/dennisburton/1f3f8dc22c646f80fbad7d320039c2f6.js"></script>

* Add a similar method for rotatorRight using position 180
* Add a similar method for rotatorLeft using position 0

#### Testing

* First update the loop method in mazerunner
    * Call rotatorCenter
    * wait 2 seconds
    * Call rotatorRight
    * wait 2 seconds

Compile and Deploy this code to the Arduino. Make sure that the distance sensor is alternating between facing forward and facing right.

* Second change the loop method in mazerunner to call rotatorLeft instead of rotatorRight

Compile and Deploy this code to the Arduino. Make sure that the distance sensor is alternating between facing forward and facing left.

