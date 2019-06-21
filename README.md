![Screenshot of Task App, v2](https://lh3.googleusercontent.com/55RDiGjMy20rLYuiBJtP7B_002qtdlpyZnqESUrWAkH4cIjamF3IlGs638oxO59aaAQAuJ_mGEhscCdAQIE2QzNtevOo3DZzXhcu5mGSYn16EBOHynYdqPA5HVin0VZ-A-lHtdQVToDobxnhaXQSH_zHppmeFFMnO-gTBFVJonpkJsBlHwBlE4rGVSr0AU3QPrugQqjL0EyJSUukYsu7aFHO4JjwBmV_7D2oKisyaRicIrYmn_D6CRJPKl8Po4mo1yNewjozSZaWWOe3GEiorgPZquCk5KWri9nP5DcyeZvrNk74umaS3aDGoinTByOGyQJyLIO2s9oO_EbpfPzJxP7rH8tl0_O8_iAr96GvIa8loJ24qFdc2z0PVmk4eRUj9QmTMZxbyHFaWkMYZHjD3ATHlBM19zWx9_4MkO5UIFd88RHGdm7NFV6Z7lcK-qgMx9SKrSdMSoyWCHV48D6_WhE-S4Vz1TcARAfNc7oxAYUx49MGvLWrDJRAWr3bgQCDaMUTn430tnEGOcgwU3z4sorTkv3sH-3BJguLUhUTSdz1w_pAh_mm-T2JSiqq4gZFMSFzfCx12oS2axrjvwy4ycUBc9fEJEosOEdW9YcGV0KmIM6f0Cgsj5981z40nXA1kLqq_OP6J0Nw1qnZq0tkADGqG94INoo=w2304-h1292-no)

# Task App

## What is it?
This is a simple and currently untitled app for managing your tasks, reminders, and goals. This app is meant to be a one-stop-shop for everything you need to keep in mind as you go about your day.

For now, they're really just lists, but below I'll get into my vision for this app.
The back-end is written with Node, running on an Express server and Mongo database. The front-end is built with React.js and custom CSS.

### Recent Changes (v2)
- New component layout
- New clock and weather panel
- Turned three goals panels into two lists
- Created new Settings tab, where location and list names can be edited

## Current Issues
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
