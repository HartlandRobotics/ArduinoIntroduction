---
layout: page
title: "Building the Reference Kit"
category: tut
date: 2014-11-21
order: 3
---
The kit you were given includes the following components:

- (1) [Particle Photon](https://www.particle.io/prototype)
- (1) Laser-cut Woodden Chassis
- (1) [L9110 Dual Motor Controller](http://www.bajdi.com/l9110-h-bridge-module/)
- (2) [1:48 Gearmotor / Wheel](http://www.amazon.com/JOSYOO-Smart-Wheel-arduino-project/dp/B0116UXVCQ/ref=sr_1_sc_2)
- (1) 5/8" 3D-Printed Ball Caster
- (1) [400 pt Breadboard](https://www.pololu.com/product/351)
- (20) [Solderless Breadboard Wires](http://www.amazon.com/Wosang-Solderless-Flexible-Breadboard-Jumper/dp/B005TZJ0AM/ref=pd_bxgy_e_img_y)
- (1) 3' USB Cable (Micro)
- (4) AA Batteries
- (1) [Battery Box](http://www.amazon.com/Switch-Battery-Holder-Leads-Black/dp/B00H8SWZNW/ref=sr_1_1)
- (4) Zipties
- (2) Screws
- (1) LED

You are encouraged to build your bot however you want, but this is how you can build it without any modifications from the original design.

![Complete Bot](/assets/nodebot-assemble/nodebot-complete.jpg)

### Lay out your parts
You want to get a feel for where everything will go.  Lay your major components out on the board and rough-in where you think you'd like them to go.

![Rough-out the parts](/assets/nodebot-assemble/nodebot-rough-out.JPG)

### Wire up the bot
You will be using a breadboard for this.  Remove the adhesive backing and attach it ot the chassis.  Connect the chip to the board with the USB power facing outward.  Use the power rails on the breadboard (red is positive, black is ground) to connect the battery box to the VIN and GND pins on the chip.

Connect the motor wires to the motor controller screw-taps.  Place the motor controller on the breadboard.  Set the VCC and GND based on the power rails of the breadboard.  Connect M1 to pins D1 and D2 on the chip.  Connect M2 to M4 and M5 on the chip.

![Wire up the motor controller](/assets/nodebot-assemble/nodebot-wiring.jpg)

### Attach the motors to the chassis
Using a ziptie, attach the motors to the chassis with some zip ties.  Adhere the battery box to chassis with some double-stick tape.  Attach the ball caster using some screws.

![Attach wheels and power](/assets/nodebot-assemble/nodebot-underside.jpg)

### Start programming your bot!

Now you have a working bot.  You can plug your USB cable into the board and get started.  Here is a good starting point:

**bot.js**

<script src="http://gist-it.appspot.com/github/BrianGenisio/codemash-nodebots-docs/blob/master/examples/base-sumobot.js"></script>

### Resources:
- [Johnny-Five Docs](https://github.com/rwaldron/johnny-five/wiki/Servo)
- [Johnny-Five Servo Docs](https://github.com/rwaldron/johnny-five/wiki/Servo)
- [Reading Keypresses](http://stackoverflow.com/questions/5006821/nodejs-how-to-read-keystrokes-from-stdin)

![Start Programming](/assets/nodebot-assemble/nodebot-program-bot.JPG)
