---
layout: page
title: "Part 4: Turning the Left Servo"
class: getting-started
category: maze
date: 2016-06-19
order: 3

---

After all of this building, we finally get to write some code. Before this we need to set up our Arduino code project.

#### Open the Arduino IDE

Instead of using a built in sample, we are going to create our own. Navigate the menu to create a new file.

0. File
0. New

Rename the file to something more meaningful than sketch. We suggest using mazerunner.

0. File
0. Save as
0. Change the file name to mazerunner

**Setup Output for Debugging:**
Once you have the blank file, update your IDE to contain the following code.

<script src="https://gist.github.com/dennisburton/ad20d12bac85344132cbdc0997961926.js"></script>


#### Create a tab for the chassis

0. Press the Sketch Action menu button. This is the down arrow located
in the upper right corner of the arduino IDE.
0. Select the New Tab option
0. At the bottom of the screen, you are being asked for a name for your
new tab. Enter chassis and press the OK button.

#### Drive the left servo

Inside the chassis tab, you should have the following code. We will discuss this code in depth in class. Make sure to pay attention. When it comes to adding the right side servo, you will need to know how to modify it yourself.

<script src="https://gist.github.com/dennisburton/e913fd590993688e3e8c59200681f033.js"></script>

#### Update the mazerunner

Now that the chassis code file is in place, we need to update the mazerunner tab to use it. 

0. Add a call to chassisSetup in the setup function
<script src="https://gist.github.com/dennisburton/1b865ea78c66b7803f1f3824fb59475e.js"></script>
0. Add a call to driveForward in the loop function
<script src="https://gist.github.com/dennisburton/2114ddda2615a988b7a6d94dbf0a7b5b.js"></script>


#### Testing

Compile and upload your current sketch to the Arduino to make sure it is working correctly. You may want to attach one of the servo horns from the small bag that came with your servo so you can see the direction it is spinning better


