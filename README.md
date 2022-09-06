
An app that makes task management and completion a less stressful, more rewarding, and more social activity. 
Uses authentication to create members-only area (under construction), and a personal dashboard/list, while providing an informative landing page for newcomers/potential members. 

Functionality and styling both WIP. Built over a baseline [todo app](https://github.com/100devs/todo-mvc-auth-local) using MVC architecture [here](https://github.com/100devs/todo-mvc-auth-local) and with picture credits to [Lorem Picsum](https://picsum.photos/).

![dash_desk](https://user-images.githubusercontent.com/102257735/188546247-e73aa2ee-c279-42f7-bb8d-8143bd3d0d88.jpg)

**Tech used**:
bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator, express-fileupload (img management)

Vanilla CSS, because I find it easier to explore visual directions this way. 

## Current features
- Highlights completed tasks marked shareable to public by members.
- Provides clean and consistent navigation customized based on current view in the app.
- Customized "homepage" so that a logged-in user is not treated as logged out when returning to the home page.
- User can upload an image of their choice for an avatar (shown in personal and members area) or else a default user image is shown.

## Optimizations
- Build out the User profile editing functionality (currently placeholder in Dashboard area).
- Finish writing and testing out the time-to-completion field in the task schema. 
- Build out members-only area.
   - Allow for bylines with tasks, tagging other users to join a task, searching through lists, and/or exporting.
   - Decide whether to connect to additional APIs and how it might complement the goal of the app.*
- Make responsive with media queries.
- Replace placeholder copy. 
- Permit user to upload their own avatar of choice, with image format and dimension recommendations. Part of the information editing form.
- Fix dark mode.

## Learnings
**Functionality**
- EJS handles "undefined" differently than expected. Current workaround is to provide a default value for required variables from the controller but there seems to be [alternatives writable in the views/ejs](https://stackoverflow.com/questions/7289916/how-would-you-check-for-undefined-property-in-ejs-for-node-js) as well. It feels a bit painful after being able to build reusable components with React, but this setup with SSR and ejs neatly sidesteps potential CORS issues during development.
- POST reqs with current setup appear to automatically include user id.

**Styling**
- `input[type="file"]` is fairly resistant to custom styling and none of the existing workarounds are working as desired.
- Note to self: Stop retroactively designing the mobile view... it would be great to maintain the spacious visual approach onscreen as cutting down on it defeats the purpose (although the hypothetical user could be using different features more often if browsing on mobile vs. desktop or tablet).
