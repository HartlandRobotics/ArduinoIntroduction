---
layout: page
title: "Building the Reference Kit"
category: tut
date: 2014-11-21
order: 15
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

![Complete Bot](/assets/nodebot-assemble/14_complete.jpg)

### Lay out your parts
You want to get a feel for where everything will go.  Lay your major components out on the board and rough-in where you think you'd like them to go.

![Rough-out the parts](/assets/nodebot-assemble/1_allparts.jpg)

### Attach the motors
Turn your wooden chassis over and attach your motors using zipties.  Trim the zipties and send the wires through some of the access holes.

![Attach the motors](/assets/nodebot-assemble/3_attach_motors.jpg)

### Attach the ball caster
Adhere the front wheel (ball caster) using the supplied wood screws.

![Attach the ball caster](/assets/nodebot-assemble/4_ball_caster.jpg)

### Install the batteries
Connect the battery box and batteries with double-stick mounting tape or hot glue.  Run the wires through an access hole.

![Install the batteries](/assets/nodebot-assemble/5_batteries.jpg)

### Attach the wheels
Attach the wheels to the motors

![Attache the wheels](/assets/nodebot-assemble/6_wheels.jpg)

### Turn it over
We are done futzing with the underside of the bot.  Turn it over.

![Turn it over](/assets/nodebot-assemble/7_turn_over.jpg)

### Adhere the breadboard
Attach the breadboard to the chassis.  It has a self-ashesive backing that you can use.  Hook power and ground to the breadboard "rails".  The blue (-) rail is for ground (black wire) and the red (+) rail is for power (red wire).  The 4 AA batteries in the pack will give you between 4.8V and 6V of power

![Adhere the breadboard](/assets/nodebot-assemble/8_breadboard.jpg)

### Power the Photon
Plug your Photon into the breadboard.  For orientation purposes, align it with the USB plug out.  Connect the ground rail on the breadboard (-) to the GND pin on the Photon.  Connect the power rail on the breadboard (+) to the VIN pin on the Photon.  You should notice your Photon boots up and connects to WiFi (strobing cyan).

![Power the Photon](/assets/nodebot-assemble/9_power_photon.jpg)

### Orgainze the motor wires
THe holes in the chassis make it easier to orgainze the wires.  You can wrap them around the holes in the board to eliminate slack.

![Organize wires](/assets/nodebot-assemble/10_organize_motor_wires.jpg)

### Hook the motor wires to the motor controller
You'll need a small screwdriver for this.  Hook the wires to the motor controller.  Put the motor controller on the breadboard.  

![Hook up motor wires](/assets/nodebot-assemble/11_hook_motors_to_controller.jpg)

### Power the motor controller
Connect the ground rail on the breadboard (-) to the GND pin on the motor controller.  Connect the power rail on the breadboard (+) to the VCC pin on the motor controller.  You should see a red LED on the motor controller light up.

![Power the controller](/assets/nodebot-assemble/12_power_motor_controller.jpg)

### Control the motor controller
Each motor uses two control pins: one for direction, and one for speed.  Connect Photon pins D0 and D1 to the left-most pins per motor.  Connect D4 and D5 to the right-most pins per motor (see schematic).

![control the controller](/assets/nodebot-assemble/13_motor_controller_io.jpg)
 
### All done!  Your bot should look something like this. 
![Wiring](/assets/wirings/nodebot_bb.png) 
![Complete Bot](/assets/nodebot-assemble/14_complete.jpg)

### Start programming your bot!

Now you have a working bot.  Here is a good starting point.  Make sure to change 'YOUR_DEVICE_NAME' to your device name.

**bot.js**

<script src="http://gist-it.appspot.com/github/CareEvolution/nodebots-unleashed-codemash-docs/blob/master/examples/flagbot.js"></script>

### Resources:
- [Johnny-Five Docs](https://github.com/rwaldron/johnny-five/wiki/Servo)
- [Johnny-Five Servo Docs](https://github.com/rwaldron/johnny-five/wiki/Servo)
- [Reading Keypresses](http://stackoverflow.com/questions/5006821/nodejs-how-to-read-keystrokes-from-stdin)

