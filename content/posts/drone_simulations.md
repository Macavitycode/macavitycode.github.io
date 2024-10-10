---
title: 'Drone Simulations'
date: 2022-07-15T22:03:23+02:00
featured_image: '/featuredImages/drone-simulation.png'
---

Druing my Bachelors in Mechatronics, at an event was hosted by [Dr. Jeane D`Souza](https://in.linkedin.com/in/jeane-d-souza-2b267119)
on robotics developments in India, I met [Likhin KV](https://in.linkedin.com/in/kvlikhin),
a founder at [Haveli UAVs](https://www.haveliuavs.com/).
Haveli UAVs was a startup working on drones in agriculture.
I really enjoyed talking to Likhin, and apparently so did he,
as he offered me an internship to work with them to explore my interests.

The problem statement that was to make a roadmap (and implement as much of it
as possible) for the autonomous navigation of drones in GPS-denied outdoor
situations. This was an interesting problem statement because outdoor drone
navigation is essentially a solved problem, provided you use some form of GPS.
This would not be feasible for this case because the locations at which they
planned to use the drones had very sparse GPS coverage, and they didnt want to
rely on it more than necessary (this was before NavIC solved this problem).
This got me started on simulations with drones and working with a large
suite of software and hardware archetectures.

With a some trial and error I setup a dockerized simulation environment for
drones (the base of which you can check out [here](https://github.com/Macavitycode/px4-humble-gazebo-docker)).
This was the SITL base for our entire system, using

- [PX4](https://px4.io/)
- [ROS Humble](https://docs.ros.org/en/humble/index.html)
- [Gazebo Garden](https://gazebosim.org/home)
- [Micro-XRCE DDS](https://github.com/eProsima/Micro-XRCE-DDS)

![Picture](/images/drone-simulation.jpg)

This enabled me to implement livestreaming through the companion computer,
geotaging of images, basic image segmentation, simple monocular SLAM, and an
elementary autonomous navigation algorithm.
