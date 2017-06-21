---
layout: page
title: "Part 10: Solving the Maze"
class: maze-runner
category: maze
date: 2016-06-19
order: 9

---

This is where all of the parts come together. In this section, you make the chassis work with the front servo and distance servo to solve a problem. 

Something that will be really important in this step is to make sure that your loop function is only doing one thing at a time. This will mean that you will need to use a concept called a state machine to solve the maze. If you take a look at the maze and think through the problem a little bit, you will see a few states you will need.

* Driving Forward - While your robot is in this state it will be moving forward looking out for an approaching wall. 
* Looking For Next Path - While your robot is in this state it will be looking left and right to find the best path.
* Turning Left - Your robot has determined that left is the best path. In this state, it should turn to go left
* Turning Right - Your robot has determined that right is the best path. In this state, it should turn to go right
* Maze Complete - If your robot determines that it is completely boxed in, it can then stop moving.

#### Adding the states to the mazerunner

* Open the maze runner tab
* Clear out the loop function.
* Before the loop function add the states shown as well as a variable to track them.

> If you are familiar enough with C, you should use an enum instead of a bunch of integers.

<script src="https://gist.github.com/dennisburton/577409e129e4d024e52dd379a277cf00"></script>

* Add code to handle each of the states 
* Check for what your current state is
* Make sure to only execute that state and return as soon as complete
* Add some debug output using the Serial.print or Serial.println functions. This will help a lot when it comes time to debug your code.

<script src="https://gist.github.com/dennisburton/70436a05680fe850eaa4469e3dd49cba"></script>





