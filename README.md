![Screenshot of Task App, v2](https://lh3.googleusercontent.com/G_ziJnwfHe287Jefw63rEr2dEIcPSEQwcnDOYjRpdEipCNFP23en95ErvorHXEAbeainE65OkTDVVUcCkBNch8YV_9xNlceT1buEdBCIxRYRNGe8fyitM-z-CtFFO_EGpZelWlK2Zyp3_6ZvKw1LBHSjuJYVhy16gTG4fJD4fXM6by9p57-5yrvmih9kQjg23BDUk-6f4hxsItTYBhc5VmEawQgFWYyNJtQ-vU9Tr3Y18rg5Bp2SOlZiYT0VIqKf0wybmMw4rSFrKj_2HZBJ2R_dmuD-mVCOieIIGT8Cmd9j4lt0j4KxbsIjzFJYe96bZwMkZs3SgmYUzEkGsh8qOmy-9_mJFxo9EXhVyWDozxMjPZW2lI32q8h3c8kV5Wt62ZMKMrpomogPi15YmMLkKP1wn3jKfvwSWc0qv4XAvjO82D61d3XJcSJRKgoZ4CPJQ_iQzHFicTllDYc7p46fEkF0ljcptHoLgxfzcglaYHCfSYADNr4XZ-jXgxH_IykYdJi5pgD-vbBHCpjvxxmF_k5c7Xn6c4NsPGsntiJ-fqCzRDWTfXeHyqihkj4Myl3-4E2fOYs8LV__iSynveLdMEmQm6RJoyKPsNVYB-CbypoFe6F-PK_DPaHSmSaCxtd2vOipQoL5owFLCZJYj5ie_VeNXlY6RF4=w2300-h1310-no)

# Task App

## What is it?
This is a currently untitled app meant to be a one-stop-shop for everything you need to keep in mind as you go about your day. Features a clock, local weather, reminders, tasks with due dates, customizable lists, and a [Pomodoro timer](https://en.wikipedia.org/wiki/Pomodoro_Technique).

## Tech
The back-end is written with Node, running on an Express server and Mongo database. The front-end is built with React.js, React-Bootstrap, and custom CSS. User authentication is through [Passport.js](http://www.passportjs.org/), and currently only supports Google OAuth 2.0. The weather information comes from the [Open Weather Map API](https://openweathermap.org/).

### Major Changes (v2)
- New component layout with React-Bootstrap
- New clock and weather panel using Open Weather Map API
- Turned the three goal panels into two lists, which can be renamed
- Created new Settings tab, where location and list names can be edited
- New timer feature

---

## Current Issues
### Settings Menu Not Refreshing
Settings menu doesn't immediately refresh after changing location or list names.

### (Not) Redirecting to /login
When running the app in a local environment, the app successfully redirects the user to /login if they are not logged in. On the Heroku site, the app hangs without rendering anything until the user manually adds /login to the URL.

### No Screen Size Consideration
Displays poorly on anything smaller than a laptop.

---

## Future Development
### Task Details, Collapsing Task Items
The back-end is set up to support adding steps to each tasks, but the task items get too bulky when the steps are rendered. I would like to turn each task item into collapsible elements, which display the task title and due date in the header and show the steps in a "details" section when clicked.

---

# Version History
## v2
![Screenshot of Task App, v2](https://lh3.googleusercontent.com/G_ziJnwfHe287Jefw63rEr2dEIcPSEQwcnDOYjRpdEipCNFP23en95ErvorHXEAbeainE65OkTDVVUcCkBNch8YV_9xNlceT1buEdBCIxRYRNGe8fyitM-z-CtFFO_EGpZelWlK2Zyp3_6ZvKw1LBHSjuJYVhy16gTG4fJD4fXM6by9p57-5yrvmih9kQjg23BDUk-6f4hxsItTYBhc5VmEawQgFWYyNJtQ-vU9Tr3Y18rg5Bp2SOlZiYT0VIqKf0wybmMw4rSFrKj_2HZBJ2R_dmuD-mVCOieIIGT8Cmd9j4lt0j4KxbsIjzFJYe96bZwMkZs3SgmYUzEkGsh8qOmy-9_mJFxo9EXhVyWDozxMjPZW2lI32q8h3c8kV5Wt62ZMKMrpomogPi15YmMLkKP1wn3jKfvwSWc0qv4XAvjO82D61d3XJcSJRKgoZ4CPJQ_iQzHFicTllDYc7p46fEkF0ljcptHoLgxfzcglaYHCfSYADNr4XZ-jXgxH_IykYdJi5pgD-vbBHCpjvxxmF_k5c7Xn6c4NsPGsntiJ-fqCzRDWTfXeHyqihkj4Myl3-4E2fOYs8LV__iSynveLdMEmQm6RJoyKPsNVYB-CbypoFe6F-PK_DPaHSmSaCxtd2vOipQoL5owFLCZJYj5ie_VeNXlY6RF4=w2300-h1310-no)
### Features
- Reminders
- Tasks with due dates and times
- Lists with custom names
- Center panel with current time, weather
- Settings panel to change list names and location
- Pomodoro Timer

## v1
![Screenshot of Task App v1](https://lh3.googleusercontent.com/Y0TjdYGT7yy-vxlzYXWYM-tzto5xwtjdN5540V8JUhArfLKQkzqF4kePgoBVafpiK3Rzgcu29O9P17qFpvzmpBC5XkqIm6V0Nzs-ScoFZbVQ5AEvMwsvkYK5q9tb78Yn8UPBltqWIa7VKs5m7h85UjUTbDrNWqCQxj92GeVtpLqh0wBvWu1FgrmEdktk3Ru5JlAgLRKh1JZqIrvIGI_lKaV-iiL__5MUlVoN7Wzqi-q2MmlEf2tC2kTHJppUY30bKPqUvppIPwfqKsGhYKNIxTFWonf-KY91UMblA6jySQHETqRUl3af4CS_TEdRydplQr3ffbpMdnxdvTM66FnCcpT3XN-PpiKgjaAeEB9ydeUQ7k2AR92A1anfpBgJRJfXmMMz3uQy7aj-HyXnNexyoq2LtqfqUmWxIXttigvWbJigezjcuj2YCOZ25grXPSCkWIy2opgHfpMjo8ZP08DHt28eMaakiXb3ioYNpRd7Tz-RO_pTro35Uv6lz9TWKCY3_2LWqTFR4oNq32_X9HsoJqRJ_RfJlc3m4VFO8z-RPb1wM898xak-6BexhgnEfCJv0Wq_J-5uA9ccJflKqFJPAtMWEtfBpCTQY4ld0gaZfDyk7SIsMHy48U4BHW8g2PjzoGUWiWe_9L0o0hrx6kWF_i3Ks2sSkHc=w2040-h1310-no)
### Features
- Reminders
- Tasks with due dates and times
- Daily, weekly, monthly goals
