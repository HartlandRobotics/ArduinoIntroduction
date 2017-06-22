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
    > If you are familiar enough with C, you should use an enum instead of a bunch of integers. You may also use a switch statement instead of many if statements. (Make sure to use break statements.)

<script src="https://gist.github.com/dennisburton/577409e129e4d024e52dd379a277cf00.js"></script>

* Add code to handle each of the states 
* Check for what your current state is
* Make sure to only execute that state and return as soon as complete
* Add some debug output using the Serial.print or Serial.println functions. This will help a lot when it comes time to debug your code.


<script src="https://gist.github.com/dennisburton/70436a05680fe850eaa4469e3dd49cba.js"></script>

#### Update the Drive Forward State

While the robot is driving forward, its primary goal is to keep from hitting a wall. We will use the distance method to find out how far away the wall is. When we are too close, it is time to stop and go to the next state.

* Make sure the chassis is driving forward
* Find out how far away the next object is
    > You may be thinking you want to center the rotator in this step. While you do want the rotator to be facing forward, you do not want to have the chassis driving forward during the delay specified in rotatorCenter. That is enough time for the robot to hit the wall.
* If the object (wall) is less than 1 inch away, stop the chassis and set the next state to **lookForNextPath**
* Make sure to call return to ensure that no further code in loop is executed this time around.


<script src="https://gist.github.com/dennisburton/21f457b9a770646f9089fbbf050a40be.js"></script>

#### Test

Deploy to your robot.
Open the Serial Monitor.
Make sure your robot drives forward until an object is close in front of it.
Make sure it transitions to the next path state

#### Update the Look for Next Path State

At this point, your robot should be stopped with a wall in front. You want to "look" around you too see where the best path is. 

* Find out the distance to a wall on the left
* Find out the distance to a wall on the right
* See which one is larger
* Set the next state to turnLeft or turnRight base on the result
    > Another one for the experienced programmers in the class. You can use the ternary ( ? : ) operator for the state assignment at the end of this code block

<script src="https://gist.github.com/dennisburton/dd36ac30cfc219fca00be2483831ecc5.js"></script>

#### Test

Deploy to your robot.
Open the Serial Monitor.
Make sure your robot drives forward until an object is close in front of it.
Make sure it is able to locate a wall on both sides ( yes, this means you will need to run this test more than once )
Make sure it transitions to a turning state

#### Update the Turning States

* Turn the chassis
* Return the rotator to the center position
* Set the current state to drive forward again


<script src="https://gist.github.com/dennisburton/24671a656cdf467263b6f296b0765f0e.js"></script>

#### Test

Deploy your robot.
You get the idea now right? Make sure all of the other stuff is still happening correctly and that your robot turns.
Make sure that it returns to the driveForward state

#### Revisting Next Path State for End of Maze

Some mazes may end by being completely surrounded. In this case we would like our robot to simply stop. **Note: there are two code blocks for this step**

* Add a check in the lookForNextPath state for both the left and right walls being very close
* When we find both wall present, update the next state to mazeComplete
* Add a mazeComplete state to stop the robot.

<script src="https://gist.github.com/dennisburton/1ac08400bc2f35bc3d1f65aa5278d87a.js"></script>

<script src="https://gist.github.com/dennisburton/dfabcf5fc88d6b0923b9ed197759fba6.js"></script>


### Testing

Once you have fully tested at your station, you can do some testing on the actual maze. Keep in mind that a lot of students will be in line to test. Be sure to practice Reason, Respect, and Responsibility!
