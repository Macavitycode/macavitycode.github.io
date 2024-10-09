---
title: 'SolarMobil'
date: 2022-05-25T22:22:20+02:00
---

Note: This writeup was copied from my old website, which no is longer functional.

[SolarMobil](https://www.solarmobilmanipal./) is a student project under
Manipal Institute of Technology which focuses on building and manufacturing
an solar powered electric car for [ESVC](https://esvc.in/).

ESVC is Asia's biggest solar car event, Except for the motors and wheels (which
are proprietary) they build everything else from scratch.
The sheer amount of design work that goes into the project is phenomenal.
I was a member of the automation subsystem, meaning my work was focused around
getting the car to autonomously navigate through one of the challenges in the
competition.
The challenge was to navigate the car completely autonomously through a course
marked by having small orange cones on both sides.
The design limitations on it were that the coded stack needed to be cheap,
easy to use and understand and for initial setup use **only a RGB camera**.
Of course, the stack needed to integrate with the rest of the car in terms of
mechanical and electronics design.

I worked with the mechanical design team to get a preliminary steering mechanism
that could be automatically controlled.
The car was fitted with an appropriately sized DC motor for the control of the
steering.

I found a similar enough car in terms of control mechanism already implemented
and ready to use for simulations.
I integrated our chassis to be shown correctly and check for collisions and
matched the steering radius and forces that would act on the car to be able to
test our algorithms in simulations first.
I used the **ROS + Gazebo** stack to achieve this.
I then used **OpenCv + Scikit Spacial** to construct a depth-*ish* map based on
the on screen area usage of each of the cones once identified.

I spent most of my time in the workshop working on the low level electrical and
electronics hardware.
We ran into a wall almost immediately when we realized the proprietary motor
controller that was to be used could not maintain a reliable connection
regardless of the multiple communication protocols we tried.
We had a break through when we instead of communicating with the motor
controller, spoofed the acceleration paddle used in cars with a microcontroller.
I set up the control stack using microcontrollers being connected to the motor
drivers and steering motor through **ROSSerial**.
We integrated the other sensors and set up a basic health monitoring system that
would check battery levels, solar panel efficiency and such to determine if the
car could be controlled autonomously - A basic arm check of sorts.
Once confirmed, the navigation control would kick in.

We then setup the ROS based control architecture which would factor in control
signals from our inputs (using **ros-joy**).
We got the microcontroller to interpret and execute the control commands we were
sending it and apply to the motors.
