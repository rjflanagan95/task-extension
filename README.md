If you're having trouble accessing the Heroku link, [click here instead](https://nameless-sea-68586.herokuapp.com/login) and see the issue below!

# Task App

## What is it?
This is a simple and currently untitled app for managing your tasks, reminders, and goals. This app is meant to be a one-stop-shop for everything you need to keep in mind as you go about your day.

For now, they're really just lists, but below I'll get into my vision for this app.
The back-end is written with Node, running on an Express server and Mongo database. The front-end is built with React.js and custom CSS.

## Current Issues
### (Not) Redirecting to /login
When running the app in a local environment, the app successfully redirects the user to /login if they are not logged in. On the Heroku site, the app hangs without rendering anything until the user manually adds /login to the URL.

## Future Development
### Task Details, Collapsing Task Items
The back-end is set up to support adding steps to each tasks, but the task items get too bulky when the steps are rendered. I would like to turn each task item into collapsible elements, which display the task title and due date in the header and show the steps in a "details" section when clicked.

### Timer Feature
The tomato image on the app is a placeholder for what I'd like to develop into an in-app [Pomodoro timer](https://en.wikipedia.org/wiki/Pomodoro_Technique).

### Task App v2
Total overhaul of the app.
- Front-end redesign, new arrangement of components
- New clock and weather area
- Turn goals panel into short/long term goals rather than daily/weekly/monthly goals
- Possibly an area with news headlines? Settings menu to select sources?
- Integrate with Google calendar?
