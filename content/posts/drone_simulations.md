---
title: 'Drone Simulations'
date: 2022-07-15T22:03:23+02:00
featured_image: '/featuredImages/drone-simulation.png'
tags: ['Robotics']
featured: true
---

During my Bachelors in Mechatronics, at an event on robotics developments in India,
I met [Likhin KV](https://in.linkedin.com/in/kvlikhin),
a founder at [Haveli UAVs](https://www.haveliuavs.com/).
Haveli UAVs was a startup working on drones in agriculture.
I really enjoyed talking to Likhin, and apparently so did he,
as he offered me an internship to work with them to explore my interests.

The problem statement was to make a roadmap (and implement as much of it
as possible) for the autonomous navigation of drones in GPS-denied outdoor
situations. This was an interesting problem statement because outdoor drone
navigation is essentially a solved problem, provided you use some form of GPS.
This would not be feasible for this case because the locations at which they
planned to use the drones had very sparse GPS coverage, and they didn't want to
rely on it more than necessary (this was before NavIC solved this problem).
This got me started on simulations with drones and working with a large
suite of software and hardware architectures.

With a some trial and error I setup a dockerize'd simulation environment for
drones (the base of which you can check out [here](https://github.com/Macavitycode/px4-humble-gazebo-docker)).
This was the SITL base for our entire system, using

- [PX4](https://px4.io/)
- [ROS Humble](https://docs.ros.org/en/humble/index.html)
- [Gazebo Garden](https://gazebosim.org/home)
- [Micro-XRCE DDS](https://github.com/eProsima/Micro-XRCE-DDS)

![Simulation screenshot](/images/drone-simulation.jpg)

This enabled me to implement livestreaming through the companion computer,
geotaging of images, basic image segmentation, simple monocular SLAM
([Direct Sparse Odometry (DSO)](https://github.com/JakobEngel/dso)).
DSO needed some modifications to work with the system we had (I worked with
[Rikin Ramachandran](https://www.linkedin.com/in/rikin-ramachandran-5992851bb/) for this).
Once we got it working, the algorithm produced fairly noisy point clouds.
This however was still good enough to implement a basic version of the
A\* navigation, requiring a ToF single point LiDAR for ground detection.
It was a ready-to-use outdoor, GPS-denied, monocular SLAM system!

![Dso Map](/images/dso-maps.png)

I recently tried implementing a RL based drone controller within Gazebo, starting with
the models for the drones and propellers using [OpenSCAD](https://openscad.org/),
going to simulation of the models with controllers and aiming to essentially
create my own drone framework. This led to a lot of
pain and frustration and barely worked, so the corpse of the setup is kept
[here](https://github.com/Macavitycode/HumbleGazeboQuad/tree/main).
