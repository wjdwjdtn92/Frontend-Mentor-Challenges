# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![image](https://user-images.githubusercontent.com/19286161/210103323-a01b5982-fe29-4666-a952-d14afe6d052b.png)

### Links

- Solution URL: [source](https://github.com/wjdwjdtn92/Frontend-Mentor-Challenges/tree/main/interactive-rating-component-main)
- Live Site URL: [gitpage](https://wjdwjdtn92.github.io/Frontend-Mentor-Challenges/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- mobile-first workflow

### What I learned

form required input `An invalid form control with name='' is not focusable` error

- Errors caused by using "diplay: none" => solution: Validation check in javascript

```javascript
$ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedValue = event.target.rates.value;

  // validate check
  if (selectedValue.length === 0) {
    return;
  }

  $rating.className = "display-none";
  $ratingResult.className = "card";
  $ratingResultHeaderTitle.textContent = `You selected ${selectedValue} out of 5`;
});
```

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
