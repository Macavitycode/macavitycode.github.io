---
title: 'Soft Robotics Grippers'
date: 2023-09-03T18:14:46+02:00
featured_image: 'featuredImages/soft-robotics.png'
tags: ['Robotics']
featured: true
---

Soft robotics was a course I took taught by [Dr. Jeane D`Souza](https://in.linkedin.com/in/jeane-d-souza-2b267119)
in my seventh semester of my college. The course itself proved to be mostly
theory oriented, and the reason for that became apparent very soon. It's a
completely foreign paradigm to someone studying conventional robotics - working
with rigid structures, deterministic frames and kinematics around those - soft
robotics seems like an weird pseudoscience, requiring feedback control and real
world testing even for prototypes.

There were very few simulators that would help simulate these deformable
systems, and a precious few which were accessible to college students. My
requirements for a simulator (or any software for that matter) for my personal
use are that they should be (a) Free and Open Source and (b) have a reasonably
supportive community.
[MathWorks' MatLAB](https://www.mathworks.com/products/matlab.html)
had [SoRoSim](https://nl.mathworks.com/company/technical-articles/creating-sorosim-a-matlab-toolbox-for-soft-robotics-modeling-and-simulation.html),
which I would rather not use because of the proprietary nature (I didn't check
if it worked with [GNU Octave](https://octave.org/) though).
[COMSOL](https://www.comsol.com/) and [DassaultSystemes' Abaqus](https://www.3ds.com/products/simulia/abaqus),
both which were recommended to me by some professors, were no good for me,
as they were not only proprietary, but expensive too.

This led me to the [SOFA-Framework](https://www.sofa-framework.org/) which fit
my requirements perfectly. I spent a few weeks learning SOFA and its quirks,
and copied the basic implementation of a pneunet. I was able to simulate a
simple, well functioning (and most importantly stable) pneunet which could
show you the reaction to different pressures applied to the deformable system.
You can checkout the docker container I used [here](https://github.com/Macavitycode/docker-sofa).

![Pneunet image 1](/images/soft-robotics-1.png)
![Pneunet image 2](/images/soft-robotics-2.png)
![Pneunet image 3](/images/soft-robotics-3.png)

With this implemented I asked my professor for any _quick_ projects I could
work on to understand the system better, and she gave gave me one.

I worked on setting up the basics of a soft gripper using [LSOVAs](https://ieeexplore.ieee.org/document/8788588/),
and then worked on integrating more components into this to make it a gripper.
This turned into a _long_ and ongoing topic of research at the college,
led by more interested students now.
I however can share the first implementation of LSOVAs in SOFA here.

![Lsova image 1](/images/soft-robotics-4.png)
![Lsova image 2](/images/soft-robotics-5.png)

While in total this is not much 'work', I learnt a lot and started a new topic
of research, and for that, I'm quite happy.
I am intrigued greatly by soft robotics as a concept, and am looking to work on
this more in the future.
