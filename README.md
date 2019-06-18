If you're having trouble accessing the Heroku link, [click here instead](https://nameless-sea-68586.herokuapp.com/login) and see the issue below!

![Screenshot of Task App](https://lh3.googleusercontent.com/Y0TjdYGT7yy-vxlzYXWYM-tzto5xwtjdN5540V8JUhArfLKQkzqF4kePgoBVafpiK3Rzgcu29O9P17qFpvzmpBC5XkqIm6V0Nzs-ScoFZbVQ5AEvMwsvkYK5q9tb78Yn8UPBltqWIa7VKs5m7h85UjUTbDrNWqCQxj92GeVtpLqh0wBvWu1FgrmEdktk3Ru5JlAgLRKh1JZqIrvIGI_lKaV-iiL__5MUlVoN7Wzqi-q2MmlEf2tC2kTHJppUY30bKPqUvppIPwfqKsGhYKNIxTFWonf-KY91UMblA6jySQHETqRUl3af4CS_TEdRydplQr3ffbpMdnxdvTM66FnCcpT3XN-PpiKgjaAeEB9ydeUQ7k2AR92A1anfpBgJRJfXmMMz3uQy7aj-HyXnNexyoq2LtqfqUmWxIXttigvWbJigezjcuj2YCOZ25grXPSCkWIy2opgHfpMjo8ZP08DHt28eMaakiXb3ioYNpRd7Tz-RO_pTro35Uv6lz9TWKCY3_2LWqTFR4oNq32_X9HsoJqRJ_RfJlc3m4VFO8z-RPb1wM898xak-6BexhgnEfCJv0Wq_J-5uA9ccJflKqFJPAtMWEtfBpCTQY4ld0gaZfDyk7SIsMHy48U4BHW8g2PjzoGUWiWe_9L0o0hrx6kWF_i3Ks2sSkHc=w2040-h1310-no)

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
