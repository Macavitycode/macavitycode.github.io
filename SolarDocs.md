---
layout: page
title: SolarMobil Automation Docs
permalink: /SolarDocs
---

This document is meant for juniors and people who want to understand the
SolarMobil docs for automation.

## Overview

The automation subsytem requires members to be well versed with robotics,
electronics and control systems, coding with python and C++
and basic understanding of mechanical design, Linux and artificial intelligence.

### Prerequisites

The first set of topics to get familiar with electronics and mechanics.
I recommend learning about different the following:

- Hardware communication protocols (SPI, I2C, I2S, UART etc.), refer [this](https://www.elprocus.com/communication-protocols/)
- Software communication protocols (Serial, UDP, TCPIP etc.), refer [this](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/)
- Transistors, basic control circuits (choppers, DC motor drivers, BLDC drivers etc.)
- Motors (different types, torque vs speed characteristics, control mechanisms etc.)

- Control systems (PID, LQR etc.)

- Basic robotics (kinematics, dynamics of different systems)
- Mathematical modelling

- Python, C++ (use hackerrank or similar)
- Linux systems
- Basics of ROS (pub-sub, srv-client, ROSMessages, ROS system architecture)
- Basics of embedded systems (using Raspberry Pi, Arduino etc.)

### Electronics and Embedded Systems

Setup a microcontroller (like Arduino or an STM32) to receive ROS signals from
an on board computer (like Raspberry Pi or Nvidia Jetson, or your laptops initially).
Most commercially available microcontrollers have a ROS library, if not manually
compile ROS for the required microcontroller.

- Setup a ROS receiver node on the microcontroller
- Establish connection to your on board computer
- Setup custom messages to be interpreted on the microcontroller and thus the
  required control output
- Implement a rudimentary PID loop for hardware control 

Once this part is setup and completed, you can move on to

### ROS and Linux

Setup the on board computer to run ROS as needed.
Most would use a linux based framework.
If using ROS1, setup the master server here.

- Setup ROS Joy to receive inputs from your controller
- Setup connection between your microcomputer and on board computer and test
- Translate the messages as needed

Once this part is ready, work on the automation scripts.

### Navigation

The current stack that is setup is very basic and was used for the initial
design iterations.
Move on to using the ros navigation stack as soon as possible.

The architecture of the navigation stack our roughly be -> Perception ->
Planning -> Control.
Read further into SLAM algorithms and implement based on hardware being used.
Based on the SLAM algorithm setup navigation algorithms that match.

## Conclusion

TODO: Will add further stuff
