---
layout: page
class: what-is-johnny-five
title: "What Is Johnny-Five?"
category: doc
date: 2014-11-21
order: 1
---

<img class="logo intro-logo" src="{{ site.baseurl }}/assets/sgier-johnny-five.png" />

<iframe src="https://docs.google.com/presentation/d/1SnavzePbk0a1WXTzFJJ2LqEFsRY2MNojH1OYZnnly-4/embed?start=true&loop=true&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[Johnny-Five](https://github.com/rwaldron/johnny-five) is a [Node.js](http://nodejs.org) based robotics framework.  It has been compared to jQuery, but for hardware, because it normalizes hardware through a common API and has a similar event-driven interface.

There are several ways to run Johnny-Five, but in the case of the Photon chips in this lab, **the JavaScript does not run on the board**.  The JavaScript runs on your computer and communicates with the Photon using [VoodooSpark](http://voodoospark.me/) which is a network protocol for two-way IO communication, based on the concepts of [Firmata](http://firmata.org).

You may wonder why we are using Johnny-Five and not running native C code on the device?  There is nothing stopping you from doing this, but we believe that Johnny-Five-based development is more interesting.

0. Running your code on a much more powerful controller system allows you to have access to more powerful capabilities.  Do you want to expose your hardware via an Express-based REST service?  You can do that by running your logic in Node.js.  You have access to everything in the NPM ecosystem.
0. Johnny-Five is an abstraction layer on top of what typical Arduino code looks like.  Instead of setting and reading values from pins, the Johnny-Five components create an interface for reading and writing that resembles what you are trying to achieve.  You don't need to translate your ideas to/from pin values.
0. This configuration prepares you for the next generation of systems.  Newer boards (Arduino Yun, Intel Galileo/Edison, Beaglebone Black, etc) will allow you to run JavaScript directly on the hardware.  Abstractions are the way to go!
0. Interacting with hardare is hard.  Using a language which more people are familiar with (JavaScript vs C) makes the hardware more accessible.
0. This is a great opportunity to learn Node.js if you don't already know it.  If you do already know it, your experience will feel very familiar.


