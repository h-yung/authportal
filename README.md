## Idle Tasks App

An app that makes task management and completion a less stressful, more rewarding, and slightly more communal activity. 
Uses authentication to create members-only area (under construction), and a personal dashboard/list, while providing an informative landing page for newcomers/potential members. 

Functionality and styling both WIP. Built over a baseline [todo app](https://github.com/100devs/todo-mvc-auth-local) using MVC architecture [here](https://github.com/100devs/todo-mvc-auth-local) and with picture credits to [Lorem Picsum](https://picsum.photos/).

**Tech used**:
Node.js + Express back end, MongoDB with Mongoose for database and ODM, Passport for authorization, and additional middleware including express-fileupload for image handling.

**Demo screens:**
![dash_desk](https://user-images.githubusercontent.com/102257735/188673917-76ea74a9-a3b7-4822-89ed-f800bac8451b.jpg)


## Approach / design decisions
Rather than a "productivity" app, even as more functionality is built out, this will tend towards more of an "idle app" focused on a narrow feature set.
  - User-generated content will remain text/copy focused in general, which also preserves the overall aesthetic.
- Similarly, I am walking back the initial idea of letting users edit their to-dos. Instead, this app will prioritize the satisfaction of crossing things out on a list and have a growing list of completed items. Users can currently mark items incomplete again but timestamps will track completion only. 

## Current features
- Highlights completed tasks marked shareable to public by members.
- Provides clean and consistent navigation customized based on current view in the app.
- Customized "homepage" so that a logged-in user is not treated as logged out when returning to the home page. This would be better to implement with a redirect as logged in users may still hit the original landing page.
- User can upload an image of their choice for an avatar (shown in personal and members area) or else a default user image is shown.

## Optimizations / On deck
- Build out members-only area features - task details, tagging of other users, and recommendations options.
   - Allow for bylines with tasks, tagging other users to join a task, searching through lists, and/or exporting.
   - Decide whether to connect to additional APIs and how it might complement the goal of the app.*
- Build out the User profile editing functionality (currently placeholder in Dashboard area).
- Finish writing and testing out the time-to-completion field in the task schema. 
- Change sorting of tasks (separate completed and incomplete, organized respectively by recency?)
- Design:
   - Continue to improve the mobile experience.
   - Fix dark mode issues.

## Learnings
**Functionality**
- EJS handles "undefined" differently than expected. Current workaround is to provide a default value for required variables from the controller but there seems to be [alternatives writable in the views/ejs](https://stackoverflow.com/questions/7289916/how-would-you-check-for-undefined-property-in-ejs-for-node-js) as well. It feels a bit painful after being able to build reusable components with React, but this setup with SSR and ejs neatly sidesteps potential CORS issues during development.
- POST reqs with current setup appear to automatically include user id.

**Styling**
- Vanilla CSS, because I find it easier to explore visual directions this way. If I could do this again from the beginning or had a strict deadline, it would 1) not be in ejs 2) include a first pass using a framework. While there is a lot of freedom with vanilla CSS, using formal naming conventions would make this more manageable.
- `input[type="file"]` is fairly resistant to custom styling and none of the existing workarounds are working as desired.
- Note to self: Stop retroactively designing the mobile view... it would be great to maintain the spacious visual approach onscreen as cutting down on it defeats the purpose (although the hypothetical user could be using different features more often if browsing on mobile vs. desktop or tablet).
