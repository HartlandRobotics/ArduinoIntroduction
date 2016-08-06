---
layout: page
title: "Part 6: Building Motors"
class: getting-started
category: line
date: 2016-08-05
order: 5
---

It is now time to start constructing your robot!

First Layout your motor controller, motors, and battery pack.

![MotorsLayout]({{ site.baseurl }}/assets/linefollower/c11-layout-motors.jpg)

Attach a piece of double sided tape on the chassis between the access
holes in the center of the chassis.

![MotorControllerTape]({{ site.baseurl }}/assets/linefollower/c12-motorcontroller-adhesive.jpg)

Attach the motor controller to the tape.

![MotorControllerAttach]({{ site.baseurl }}/assets/linefollower/c13-attach-motorcontroller.jpg)

Attach a piece of double sided tape to the battery pack. Make sure this
is *not* on the same side as the power switch!

![BatteryPackAdhesive]({{ site.baseurl }}/assets/linefollower/c14-batterypack-adhesive.jpg)

Attach the battery pack to the bottom of the chassis on the opposite end
as the line sensors and breadboard. The battery pack should be close to
centered so that he motors will fit on each side.

![BatteryPackAttach]({{ site.baseurl }}/assets/linefollower/c15-attach-batterypack.jpg)

Before attaching the motors, note which side has the wires. Your wheels
should attach on the opposite side. This will let you know which side of
the motor should attach to the chassis.

Attach a piece of double sided tape to the top of the motor.

![MotorAdhesive]({{ site.baseurl }}/assets/linefollower/c16-motor-adhesive.jpg)

Attach the motors to the chassis

![MotorAttach]({{ site.baseurl }}/assets/linefollower/c17-attach-motors.jpg)

Route the wires from the bottom of the chassis, through the access
holes, and finally to the motor controller

![RouteWires]({{ site.baseurl }}/assets/linefollower/c18-motor-route-wires.jpg)

Attach the wires from the motors and battery pack to the motor
controller. Your sample code will be using Motor A as the left motor and
Motor B as the right motor. In the sample build, placing the red wires
on the center 2 terminals and the black wires on the outer terminals
ended up with the motors spinning the correct direction.

![BatteryPackWires]({{ site.baseurl }}/assets/linefollower/c19-attach-motor-and-battery-pack-wires .jpg)

On the motor controller, attach the 2 wires that control speed (A) and
direction (B) on Motor A. Then, attach the 2 wires that control speed and
direction on Motor B.

![SpeedDirectionController]({{ site.baseurl }}/assets/linefollower/c20-attach-speed-and-direction-wires.jpg)

Attach the speed and direction wires to the Arduino. The sample build
and code uses pins 11 and 12 for Motor A and pins 8 and 9 for Motor B.

![SpeedDirectionArduino]({{ site.baseurl }}/assets/linefollower/c21-attach-speed-and-direction-arduino.jpg)

Attach a piece of double sided tape to the chassis for the 9V battery

![BatteryAdhesive]({{ site.baseurl }}/assets/linefollower/c22-battery-adhesive.jpg)

Attach the 9V battery to the chassis

![AttachBattery]({{ site.baseurl }}/assets/linefollower/c23-attach-battery.jpg)
