---
layout: project
title:  "Geotagging Images on Drones through MAVROS"
---

This project was to connect a rpi running ros ubuntu 20.04 to a px4 or ArduPilot
based flight controller, get data out of it and use that to trigger an on board
camera which saves images with geo tagged data (data with latitude and
longitude).

This project was done as a part of industrial training with HaveliUAVs.

The overview of the project is as follows:
 - Setup hardware connections for the on board computer
 - Centralize the datastreams from multiple sensors to ros
 - Setup script to live transfer ros image feed to GCS
    - We used a Herelink module, which is a tranciever + GCS setup
    - Herelink supports HDMI video in to be transmitted directly
 - Setup script to detect triggers and save images

[This](https://github.com/Macavitycode/simple/tree/master/showcam/scripts) folder
contains all the scripts used.

The challenging part for this project was the hardware, getting all the
requirements to run was a challenge.
Docker was used while trying to simplify the environment setup and have a
deployable application.
There are a few problems with the permissions though which is why in the end
we used a native ubuntu 20.04.

GitHub: [Link](https://github.com/Macavitycode/simple)

