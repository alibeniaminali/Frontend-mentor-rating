# Frontend Mentor - Interactive rating component solution


### Screenshot
![Screenshot 2023-07-29 at 14 13 07](https://github.com/alibeniaminali/Frontend-mentor-rating/assets/94930059/fc99a631-a2f8-4e45-b779-5f12e6178716)
![Screenshot 2023-07-29 at 14 13 57](https://github.com/alibeniaminali/Frontend-mentor-rating/assets/94930059/fc121a6d-b112-40ee-a362-7355f5100c10)


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/html-css-and-javascript-kUW-5eaibc)
- Live Site URL: [Deployed on GitHub pages](https://alibeniaminali.github.io/Frontend-mentor-rating/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
### What I learned

1. Working with forms and input types
2. Practiced DOM manipulation, styling with CSS and JavaScript
3. Added a vibration pattern using ```Navigator: vibrate()``` method
4. To work with different CSS pseudo-classes, such as ```:not``` ```:is:``` ```:last-child()``` and others

```js
function handleSubmit(event) {
    event.preventDefault()
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        document.getElementById('rate').innerHTML = ele[i].value
      }
    }
    formCard.remove()
    responseCard.style.display = 'block'
    navigator.vibrate([200, 100, 200])
  }
```

```css
.card--response p:nth-child(2) {
  color: var(--orange-light);
  padding: 8px;
  border-radius: 30px;
  background-color: var(--dark-blue);
}

input:is([type='submit']) {
  width: 100%;
  border-radius: 20px;
  padding: 10px;
  text-transform: uppercase;
  color: var(--white);
  background-color: var(--orange);
  letter-spacing: 2px;
  cursor: pointer;
  border: none;
}
```

### Continued development

This is my second challenge with Frontend Mentor. Next I am planning to work on a more advanced component/project.

## Author

- Website - [Ali Ali](https://www.alibeniaminali.co.uk/)
- Frontend Mentor - [@alibeniaminali](https://www.frontendmentor.io/profile/alibeniaminali)
- Instagram - [@alibeniamin](https://www.instagram.com/alibeniamin/?hl=en-gb)


