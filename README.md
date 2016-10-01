# React Profile
### A simple editable profile in React

https://sandbox-react-challenge.herokuapp.com/

My first foray into React.js, the intention was to make a single, persistent editable profile page.

## Technologies used

 - PostgreSQL
 - Sequelize.js
 - Express.js

## Challenges

#### 1. Webpack & Babel

I started the challenge, as one might, by binge-watching hours of Udemy tutorials on writing basic react/redux at 2.2x speed.  In these examples, webpack was used to create a bundle.js of all the different jsx files linked to from it's entry point.  This seemed great until I realized that in order for API to run concurrently on the same server, I was either going to:
- A: have to permanently build the bundle.js (which I haven't yet figured out), or
- B: use a CDN to get react into my project

Ultimately, due to the time contraints, I threw everything at the wall until something stuck, and that was the CDN.  This presented it's own headaches in the form of longer page loads, but ultimately the site was working, and that's what mattered for my quick-and-dirty MVP. In a real production environment, I would (hopefully) have had either more time or better resources for figuring out how to set up the environment properly.

#### 2. Import statements

In a perfect world, my separate components for the edit form and the profile would be in separate files, but when I tried to use my es6 style `import example from 'example'` syntax, Chrome threw an error that read `Uncaught ReferenceError: require is not defined`. And just like that, my dreams of having an organized component file structure went out the window.  I know that I could have simply linked them all as script tags inside `index.html`, but there were already lots of things for Chrome to load, so I resigned myself to using slightly bad form and putting all my components into the same file.

## Big Wins

#### API and Supertest

This project I finally managed to write a testing workflow that I can stand behind somewhat confidently.  I was able to add my migrations and seeds to `package.json` so that every time I ran `npm test` the testing database would be cleared, and re-seeded with the same tables every time.  I would have preferred to do this in between every `describe` block, but Sequelize has pretty slim documentation for how one should go about doing something like that (it just links to it's sister library, 'Umzug', which they claim can do this sort of thing). Furthermore, the migrations and seeds take significant time to run, so it might be better this way anyway.
