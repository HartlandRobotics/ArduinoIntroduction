---
layout: page
title: "Additional Components"
category: ref
date: 2016-06-03
order: 3
---

## Servos
![Servos]({{ site.baseurl }}/assets/components/servo.jpg)

Servos are a specific kind of motor which includes gearing and motor control built into the package.  They work well for rotating to a specific position. This would be useful for controlling thing like robotic arms or claws.

## Motor Shields
![Motor Shield]({{ site.baseurl }}/assets/components/motorshield.jpg)

Motor shields are an alternative to motor controllers that can help protect the Arduino in the event of failure.

## Joysticks
![Joystick]({{ site.baseurl }}/assets/components/joystick.jpg)

Joystic controls can be hooked up for controlling something attached to your robot.  They include X and Y directions as well as single push-buttons.

## Toggles, Pushbuttons, Relays
![Toggle Switch]({{ site.baseurl }}/assets/components/toggle.jpg)
![Momentary Switch]({{ site.baseurl }}/assets/components/momentary.jpg)
![Relay]({{ site.baseurl }}/assets/components/relay.png)

If you need switch inputs, you want to use a toggle switch or a push-button (momentary) switch.  If you'd like to control a switch, you want a relay.  [Johnny-Five Toggle Switch Example](https://github.com/rwaldron/johnny-five/blob/master/eg/toggle-switch.js), [Johnny-Five Button Reference](https://github.com/rwaldron/johnny-five/wiki/Button), [Johnny-Five Relay Reference](https://github.com/rwaldron/johnny-five/wiki/Relay)

## Buzzers
![Piezo]({{ site.baseurl }}/assets/components/piezo.jpg)

If you want your bot to make a noize, you want a buzzer,  There are Active Piezos which make a sound when a voltage is applied.  There are also Passive Piezos which make a sound when a voltage is toggled.  Passive buzzers are good when you want to control the pitch.  You can even play songs with these buzzers! [Johnny-Five Piezo Reference](https://github.com/rwaldron/johnny-five/wiki/Piezo), [J5-Songs Reference](https://www.npmjs.com/package/j5-songs)

## Photosensors, Motion Sensors, Flame Sensors, Reflectance Sensors
![Photosensor]({{ site.baseurl }}/assets/components/photo.jpg)
![Motion Sensor]({{ site.baseurl }}/assets/components/motion.jpg)
![Flame Sensor]({{ site.baseurl }}/assets/components/flame.jpg)
![Reflectance Array]({{ site.baseurl }}/assets/components/reflectance.jpg)

We have all sorts of light-based sensors for you to work with.  Light sensors will detect ambient light.  They can also be controlled via laser pointers!  Motion sensors will detect when something is in front of it.  Flame sensors will detect flames!  Reflectance sensors will detect white vs black material.  They are great for writing line-following bots! [Johnny-Five Sensor Reference](https://github.com/rwaldron/johnny-five/wiki/Sensor), [Johnny-Five Reflectance Array Reference](https://github.com/rwaldron/johnny-five/wiki/IR.Reflect.Array)

## Ping (distance) Sensors
![Ping Sensor]({{ site.baseurl }}/assets/components/ping.jpg)

Ping sensors can tell you how far away an object is.  They send out an ultrsonic pulse and measure the time it takes to receive the response.  [Johnny-Five Ping Reference](https://github.com/rwaldron/johnny-five/wiki/Ping)

## Temperature, Humidity, Barrometric Pressure, Water Sensors
![Temperature Sensor]({{ site.baseurl }}/assets/components/temperature.jpeg)
![Water Sensor]({{ site.baseurl }}/assets/components/water.jpg)

We have a handful of sensors that you can use to read the conditions around you.  Temperature sensors have a Johnny-Five abstraction but the others just need to use the Sensor class. [Johnny-Five Temperature Reference](https://github.com/rwaldron/johnny-five/wiki/Sensor), [Johnny-Five Sensor Reference](https://github.com/rwaldron/johnny-five/wiki/Sensor)

## Accelerometers and Gyros
![IMU]({{ site.baseurl }}/assets/components/imu.jpg)

Accelrometers are units that can tell you the XYZ orientation of an object.  Gyros can tell you the XYZ rotation of an object.  When used together, these units can tell you a lot about the inertial movement of your bot.  We have individual sensors, but we also have several units which have both sensors in one unit. [Johnny-Five Accelerometer Example](https://github.com/rwaldron/johnny-five/blob/master/docs/accelerometer.md), [Johnny-Five Gyro Reference](https://github.com/rwaldron/johnny-five/wiki/Gyro), [Johnny-Five IMU Reference](https://github.com/rwaldron/johnny-five/wiki/Gyro)

## Resistors, Capacitors, Transistors, Diodes
![resistor]({{ site.baseurl }}/assets/components/resistor.jpg)
![capacitor]({{ site.baseurl }}/assets/components/capacitor.jpg)
![transistor]({{ site.baseurl }}/assets/components/transistor.jpg)
![diode]({{ site.baseurl }}/assets/components/diode.jpg)

Many of the above components are contained and you don't need extra circuitry to power them.  You may find, however, that you need to build your own circuits.  Our assored resistors, capacitors, transistors and diodes should help you build most simple circuits.

## Breadboards, Wires, and Pins
![Breadboard]({{ site.baseurl }}/assets/components/breadboard.jpg)
![wires]({{ site.baseurl }}/assets/components/wires.jpg)
![pins]({{ site.baseurl }}/assets/components/pins.jpg)

Your kit includes a small breadboard.  We have several extra, larger breadboards.  We also have breadboard shields as well as solder boards for you to use.

## Batteries
![9v]({{ site.baseurl }}/assets/components/9v.jpg)
![AA]({{ site.baseurl }}/assets/components/aa.jpg)
![AA clip]({{ site.baseurl }}/assets/components/aa-clip.jpg)

Your kit includes four AA batteries.  Should you spend all the energy in your battery, we have some extra batteries for you to use.  We also have several 9V batteries and clips.


