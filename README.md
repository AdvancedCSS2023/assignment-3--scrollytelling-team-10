# Assignment 3 - Scrollytelling / Creative Computing

An animated, scrollable website that focuses on promoting sustainability goal 11, which aims to create sustainable cities and communities.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How to Get Started](#how-to-get-started)
- [Getting Help](#getting-help)
- [Technologies Used](#technologies-used)
- [Contributors and Maintainers](#contributors-and-maintainers)

## Overview

This project is an animated, scrollable website that promotes sustainability goal 11, which aims to create sustainable cities and communities. The project utilizes advanced CSS features, CSS architecture, Sass, BEM, SVG, animations with keyframes, transitions, and transformations. The website implements scrollytelling with Intersection Observer and accessibility features such as prefers-reduced-motion, prefers-color-scheme, and orientation. The project educates users about sustainability goal 11 through storytelling, animations, layout, and typography. Additionally, the project is fully responsive and can be viewed on mobile devices, making it accessible to a wide range of users.

## Features

- Visually stunning animations and informative content that promote sustainability goal 11
- Scrollytelling with Intersection Observer and JavaScript
- Fully responsive design for mobile devices
- Advanced CSS features and CSS architecture
- Accessibility features such as prefers-reduced-motion, prefers-color-scheme, and orientation

## How to Get Started

1. Visit the GitHub Pages link where the project is published: [Assignment 3 - Scrollytelling / Creative Computing](https://advancedcss2023.github.io/assignment-3--scrollytelling-team-10/)
2. Scroll through the website to experience the visually stunning animations and informative content that promote sustainability goal 11.
3. For developers, to contribute to the project, fork the project repository and clone it to your local machine.
4. Create a new branch for the feature you want to work on and make changes to the code.
5. Push the branch to the forked repository and create a pull request to merge the changes into the original repository.

## Getting Help

- Refer to the README file in the project repository on GitHub.
- Use the "Issues" section of the GitHub repository to report any bugs or issues.
- Reach out to the project's team members listed in the GitHub repository contributors for help or questions about the project.
- Find helpful resources and discussions about the project on relevant online forums or developer communities.

## Technologies Used

- The project is maintained and contributed to by the team members listed in the GitHub repository contributors. Elina, Hannah, and Jon Helge are the developers who created the project and continue to maintain and contribute to it.
- They work collaboratively by creating individual branches per implemented feature and merging changes through pull requests that are reviewed and approved by the group members. The owner of the branch merges the changes to the master branch.
- Additionally, the project may also accept contributions from other developers who fork the project repository and make changes to the code via pull requests. However, these contributions will be reviewed and approved by the team members before being merged into the master branch.
- Advanced CSS features
- CSS architecture
- Sass
- BEM
- SVG
- Animations with keyframes
- Transitions
- Transformations
- Scrollytelling with Intersection Observer, JavaScript
- Accessibility features such as prefers-reduced-motion, prefers-color-scheme, and orientation

## Contributors and Maintainers

The project is maintained and contributed to by the team members listed in the GitHub repository contributors: Elina, Hannah, and Jon Helge. They work collaboratively by creating individual branches per implemented feature and merging changes through pull requests that are reviewed and approved by the group members. The owner of the branch merges the changes to the master branch.

The project may also accept contributions from other developers who fork the project repository and make changes to the code via pull requests. However, these contributions will be reviewed and approved by the team members before being merged into the master branch.


# Problems we faced and what we could do better

Add a section in the readme where we try to explain the bugs we faced and what we could do better. This will give us an ability to reflect around our choices.

## Intersection observer

During the end stages of creating the scrollable website we decided to add our scroll functionallity. This means that at the end of the project we added intersection observer. This was a big mistake that have created some bugs for us. 

Instead of adding the intersection observer in the end we should have designed and created the website out of how the intersection observer interacts with our webpage. 

The problem we faced after working with the styling and animations first before adding intersection observer was that the observer itself did not add anything to the website. This makes sense after a lot of reflecting around our choices, but during the night where we added it. It was not clear to us how the observer works as a whole. 

The solution we ended up on was to create one interaction observer for each article on the page and connect this with the classname that we had been using from before during our styling phase. 

## Keyframes animations with intersection observer

Keyframes and intersection observer should work really well together when we add the start animation to the class that the observer creates. We discovered that in our code interaction observer works really well with divs, but when we have keyframes on the svg images/files, the observer would not observe the elements on the webpage and instead just ignore them or run the style in a buggy way. 

We had based our website around movable svg images/files to make the website more fun to look at, but after finding out that the intersection observer did not work as we wanted to we had to remove some of the animations that we arleady added. Even without these animations we could show the story in the way that we wanted to showcase it to the users. 

Problem:
https://github.com/w3c/IntersectionObserver/issues/376

## How could we improve with the next scrollable website that we create
