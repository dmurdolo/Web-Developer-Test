# My Application

A basic structure of a web application for web developers to develop upon and show their skills.

### Please DO NOT mention any Company or Individual names in code, when forking, committing, branching, developing or completing the exercise. 

# Dependencies
> node ^10.15.3

# Get Started

- Fork this repo
- Clone your repo

## Install dependancies
```
npm i
``` 

## Build the dev app 
```
npm run dev
```

## Start application and server
```
npm start
```

## Creative assets  
Look in ```./design-assets```

### Fonts
All free to download or include from [https://fonts.google.com/specimen/Libre+Franklin](https://fonts.google.com/specimen/Libre+Franklin) (Regular and ExtraLight)

## Test link on Vercel

https://crazyalpaca.dmurdolo.vercel.app/

## Which Browsers/Devices or Virtualisation services did you check the application in?
- Firefox 84 (Windows)
- Chrome 87 (Windows)
- Edge 87 (Windows)
- Safari 13 (Mac OS)
- Firefox 82 (Mac OS)
- Chrome 87 (Mac OS)
- Firefox 84 (Android)
- Chrome 87 (Android)
- Safari 12 (iOS)

## Anything you want to tell us?
- Tools
    - Visual Studio Code
    - https://wave.webaim.org/ for accessibility test

- Frameworks/Libraries
    - Next.js
        - I used Next.js to build on top of React and take advantage of the isomorphic build functionality, the file-system based routing, and the ability to add an API structure within this.
        - It allows you to quickly set up your site as a PWA with minimal configuration. 
        - I also used it for its ability to quickly deploy and run serverless on Vercel.
    - Cypress.js
        - As a testing framework built for JavaScript I thought this project would be a good time to explore its implementation. The ability to test visually or through the CLI are both attractive features.

- Time: 4 days

- Assumptions?
    - For the product data I assumed that all added items had a quantity of 1 and reflected this in the API GET route. I also considered the item with a stock level of 0 should not be displayed as it wouldn't have been able to be added to the cart.

## How would you improve this test?
1. Add an optional step to create a product page for adding to the cart
2. Add some product visuals for the cart page layout

### What did you like?
1. Clean and well-structured design files
2. A clear task with room to think for yourself in delivering the outcome
3. The structure of the test with some clear tasks and examples to try out if you've got some more time