
An app that makes task management and completion less stressful and more rewarding. Uses authentication to create members-only area (under construction), and a personal dashboard/list, while providing an informative landing page for newcomers/potential members.

More functionality to come.
Built over a baseline todo app using MVC architecture [here](https://github.com/100devs/todo-mvc-auth-local) and with picture credits to [Lorem Picsum](https://picsum.photos/).

**Tech used**:
bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

Vanilla CSS, because.

## Current features
- Highlights completed tasks marked shareable to public by members.
- Provides clean and consistent navigation customized based on current view in the app.
- Customized "homepage" so that a logged-in user is not treated as logged out when returning to the home page.

## Optimizations
- Build out the User profile editing functionality (currently placeholder in Dashboard area).
- Finish writing and testing out the time-to-completion field in the task schema. 
- Adding members-only area.
   - Allow for bylines with tasks, tagging other users to join a task, searching through lists, and/or exporting.
   - Decide whether to connect to additional APIs and how it might complement the goal of the app.*
- Make responsive with media queries.
- Replace placeholder copy. 
- Temporary: Image provided at random for user avatar area from shortlist kept in backend. Not quite "helpers" but to be organized.
- Permit user to upload their own avatar of choice, with image format and dimension recommendations. Part of the information editing form.
- Fix dark mode.

**Some ideas**:*
Audio
- https://www.noisli.com/, which: https://github.com/petrovicstefanrs/chillnsound

## Learnings
- Every project with CSS teaches me more about the value and power of frameworks and naming conventions. Current approach is a hybrid and inconsistent.