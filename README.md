![Screenshot of Task App, v2](https://lh3.googleusercontent.com/RbMcflwcVL9ZmLQoV9J8yqI6T2yc4k34WxhvE8cN65KUzFd4CuxGbvrsmqkRdnIVdE-W9JrFlD-EsJvfeOFSTKV8YqxiParamUNgwHpcggYiHNizvj9M5obSDsfpx1FM5Oh816XPM0dg0xfxwwIKYRe1DkWVvhX5TX8OdMURwPMJl1pZHGyRtADj0pXMFRMpCnxykVNcy4J1_5UN9z2KHyNN6PGAflUFgo6PHZgeTbHjoBxyawlxiyNtGs5Yn_nBbXdLbocxcN7oDHn1HF0rWwc72Fk6FyKxfjgEH9dai7jz-K3AMvmtZSJRa7w5Q0CKAye7_oED-fJ43WOWFmjBSWIDe-NVJ5NJ8ypNwU5-WtIOt9nCSdrF1MLcrUT99FUkFjdo6l7AFdJODbmXS_73tgEmYe_-vsJv-qe7pTbf7EP8C2SVg0FIzaI6fC6KNSToakdXLzqA3nSfvfH54QJlxalWXpbK9tVALiMubJuAd1PKmvtWjCg-j4Bv9ATs_yIiRfeg6p7VTnSIEaR-0V6o87DFOofZ9w6LH8s8Ky9BlXag0WOtTy-JPsULYUtp2K8pvAMIVNqq2FgNimXi8mYQCAQbXNykxcB8GeOjk7e2jqiqd79PkLnpFeJLMMdqR2FZzSocoDK3aTWY2Mb2mkFDyb8dAK85roc=w2270-h1302-no)

# Task App

## What is it?
This is a currently untitled app meant to be a one-stop-shop for everything you need to keep in mind as you go about your day. Features a clock, local weather, reminders, tasks with due dates, and customizable lists.

## Tech
The back-end is written with Node, running on an Express server and Mongo database. The front-end is built with React.js and custom CSS. User authentication is through [Passport.js](http://www.passportjs.org/), and currently only supports Google OAuth 2.0. The weather information comes from the [Open Weather Map API](https://openweathermap.org/).

### Major Changes (v2)
- New component layout
- New clock and weather panel
- Turned three goals panels into two lists
- Created new Settings tab, where location and list names can be edited

## Current Issues
### Settings Menu Not Refreshing
Settings menu doesn't immediately refresh after changing location or list names.

### (Not) Redirecting to /login
When running the app in a local environment, the app successfully redirects the user to /login if they are not logged in. On the Heroku site, the app hangs without rendering anything until the user manually adds /login to the URL.

## Future Development
### Task Details, Collapsing Task Items
The back-end is set up to support adding steps to each tasks, but the task items get too bulky when the steps are rendered. I would like to turn each task item into collapsible elements, which display the task title and due date in the header and show the steps in a "details" section when clicked.

### Timer Feature
The tomato image on the app is a placeholder for what I'd like to develop into an in-app [Pomodoro timer](https://en.wikipedia.org/wiki/Pomodoro_Technique).

---

# Past Versions
## v1
![Screenshot of Task App v1](https://lh3.googleusercontent.com/Y0TjdYGT7yy-vxlzYXWYM-tzto5xwtjdN5540V8JUhArfLKQkzqF4kePgoBVafpiK3Rzgcu29O9P17qFpvzmpBC5XkqIm6V0Nzs-ScoFZbVQ5AEvMwsvkYK5q9tb78Yn8UPBltqWIa7VKs5m7h85UjUTbDrNWqCQxj92GeVtpLqh0wBvWu1FgrmEdktk3Ru5JlAgLRKh1JZqIrvIGI_lKaV-iiL__5MUlVoN7Wzqi-q2MmlEf2tC2kTHJppUY30bKPqUvppIPwfqKsGhYKNIxTFWonf-KY91UMblA6jySQHETqRUl3af4CS_TEdRydplQr3ffbpMdnxdvTM66FnCcpT3XN-PpiKgjaAeEB9ydeUQ7k2AR92A1anfpBgJRJfXmMMz3uQy7aj-HyXnNexyoq2LtqfqUmWxIXttigvWbJigezjcuj2YCOZ25grXPSCkWIy2opgHfpMjo8ZP08DHt28eMaakiXb3ioYNpRd7Tz-RO_pTro35Uv6lz9TWKCY3_2LWqTFR4oNq32_X9HsoJqRJ_RfJlc3m4VFO8z-RPb1wM898xak-6BexhgnEfCJv0Wq_J-5uA9ccJflKqFJPAtMWEtfBpCTQY4ld0gaZfDyk7SIsMHy48U4BHW8g2PjzoGUWiWe_9L0o0hrx6kWF_i3Ks2sSkHc=w2040-h1310-no)
### Features
- Daily, weekly, monthly goals
- Tasks with due dates and times
- Reminders
