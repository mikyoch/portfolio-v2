---
title: "Folder Structure for Modern Web Applications"
date: "2022-04-08T20:31:59.889Z"
category: ["Javascript", "frontend"]
cover: "/images/blog/blog-1.jpg"
thumb: "/images/blog/sm/blog-1.jpg"
---

It is critical to create a maintainable folder structure while developing web apps, having the right files in the correct folder helps organize your code and makes other developers have an idea of how the architecture of your web application is or will be during development. In this post, I am going to explain some folder names when building your modern web project.

Maintaining a well-organized folder structure is crucial when developing web applications, even though it may not be the first thing that comes to mind when working alone or with few resources. If not, you run the risk of coming across as unprofessional.

**<h2>Some Tips In Designing Your Folder Structure</h2>**

- Understand the purpose of your web project: In order to figure out how to organize your web project, you will need to establish a good understanding of what you have, depending on how many assets you are trying to organize and the features in your web applications.
- Use proper naming convention for your folders and files, they should be descriptive of the purpose in your web application.

**<h2>Folder Structures and their explanation</h2>**

<u><h3>Assets</h3></u>

The assets folder contains all images, icons, css files, font files, etc. that will be used in your web application. Custom images, icons, paid fonts are being placed inside this folder.

![assets structure](https://res.cloudinary.com/practicaldev/image/fetch/s--8OrOLm_B--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bosdpni04f4rhoscokrl.PNG)

<u><h3>Context</h3></u>

When using React Js as your preferred frontend ui library, the context folder stores all your react context files that are used across components and multiple pages.

![context structure](https://res.cloudinary.com/practicaldev/image/fetch/s--aGx2bEqx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/34ah8q7qbthfe5pbkcbf.PNG)

<u><h3>Components</h3></u>

The components folder holds the UI for your application. It contains all our UI components like navbar, footer, buttons, modals, cards, etc.

![components structure](https://res.cloudinary.com/practicaldev/image/fetch/s--GNQ8FmiV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0fsm5cd609kxc1ydcv4b.PNG)

<u><h3>Composables</h3></u>

In the context of Vue applications, a "composable" is a function that leverages Vue's Composition API to encapsulate and reuse stateful logic.

<u><h3>Data</h3></u>

The data folder is used for storing text data which will be used in different sections and pages as JSON files. Doing this will enable updating of information easier.

![data structure](https://res.cloudinary.com/practicaldev/image/fetch/s--UtLgOoA---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/74ey2c253fveerw4ox3y.PNG)

![data structure 2](https://res.cloudinary.com/practicaldev/image/fetch/s--FDkj_ZFp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mybd8n92pxns26feb6qt.PNG)

<u><h3>Features</h3></u>

This folder contains individual folder feature for each page (authentication, theme, modals). For example each page might have a modal feature.

![features structure](https://res.cloudinary.com/practicaldev/image/fetch/s--ap0lHNJo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gljjlh0jgarivzabdamm.PNG)

<u><h3>Hooks</h3></u>

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Also we can create custom hooks whose name starts with 'use' and can be used to call other hooks.

![features structure](https://res.cloudinary.com/practicaldev/image/fetch/s--3PHq2pin--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a84dq8pahtjgff63ru7e.PNG)

<u><h3>Layouts</h3></u>

When defining the general look and feel of the web page, the Layouts folder comes in handy. It is used to place layout-based components such as the sidebar, navbar, and footer. If your web application has many layouts, this folder is a fantastic place to save them.

![features structure](https://res.cloudinary.com/practicaldev/image/fetch/s--Sd1CiThj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6h73gy0uruci8qlq5sjl.PNG)

<u><h3>Modules</h3></u>

Modules folder handles specific tasks in your application.

![features structure](https://res.cloudinary.com/practicaldev/image/fetch/s--D8jUqsFn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/boeni6zfudcg14201s87.PNG)

<u><h3>Pages</h3></u>

The pages directory contains your web application views. Pages directory in frontend frameworks like Next Js and Nuxt Js reads all files inside the directory and automatically creates the router configuration for you.

<u><h3>Public</h3></u>

The public directory is directly served at the server root and contains public files that won't change e.g favicon.ico.

<u><h3>Routes</h3></u>

The routes folder is just a place in your web application to store the routes path to different screens.

<u><h3>Utility/Utils</h3></u>

This folder is for storing all utility functions, such as auth, theme, handleApiError, etc.

<u><h3>Views</h3></u>

Views folder are like the pages folder, The views are used to represent your pages properly, that users can navigate back and forth.

**<h2>Conclusion</h2>**

A good folder structure allows you and other developers to find files faster and manage them more easily. A well-organized folder structure makes you appear professional.