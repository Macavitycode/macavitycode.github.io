---
layout: project
title:  "Cone Following with Ackermann Drive"
---

The challenge is to get a cone following algorithm to be implemented using
just a normal RGB camera.
The competition this was made for is the same as [this]({{ '/_projects/SolarMobil_work.md' | relative_url }})
and is explained further there.

I used the linearity of the relation of area occupied on screen
vs. the distance of the object.
I get a representation of the distance here rather than the actual physical
distance with this method.

The scikit-spatial library is a huge help as it simplifies a lot of the
involved mathematics.
A brief overview of the steps in the algorithm:
 - Preprocess image to get contours
 - Filter contours to get useful data
 - Fit rectangle on contour, break up badly shaped contours
 - Get 3D relation from scaling areas of rectangles
 - Find best fit line with individual leftward and rightward bias (approximate
    cone line direction locally)
 - Project onto xy plane for intersection point and use depth data to find
    directions of vectors
 - Smooth out intersection with a window filter to get goal
 - Software control through PID loop
 - Execute commands on robot

 For the cone follower code check
 [this](https://github.com/Macavitycode/cone-follower/blob/master/scripts/cone_follower.py)
 file.


The project is partially incomplete as the last two points haven't been
completed yet.
Check out the repository on GitHub for the code.

GitHub: [Link](https://github.com/Macavitycode/cone-follower)

The gazebo simulation on the bottom left shows the environment.
The rviz window is showing the contours (green), cone tracking lines (blue),
screen centerline (light blue), point of intersection (red circle) and
direction vector to move in (yellow).

![Pic](https://github.com/Macavitycode/cone-follower/blob/master/images/s2.png?raw=true)
