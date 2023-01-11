# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![gif](https://user-images.githubusercontent.com/19286161/211742718-06915c4e-7413-4ca4-8cad-cec13dc409b2.gif)

### Links

- Solution URL: [link](https://github.com/wjdwjdtn92/Frontend-Mentor-Challenges/tree/main/faq-accordion-card-main)
- Live Site URL: [link](https://wjdwjdtn92.github.io/Frontend-Mentor-Challenges/faq-accordion-card-main/)

## My process

### Built with

- chrome
- Mobile-first workflow
- **Develop html rendering as a vanilla JS component**

### What I learned

Accordion component can be developed very easily by using `delatils` and `summary` tag.
good👍 <br>
(ref: [MDN - details tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details))

```html
<details class="accordion-item">
  <summary>
    <div class="accordion-item__title">How many team members can I invite?</div>
  </summary>
  <p class="accordion-item__body">
    You can invite up to 2 additional users on the Free plan. There is no limit
    on team members for the Premium plan.
  </p>
</details>
```

```css
/*  기본 마커 스타일 수정 및 위치변경*/
/* 기본 스타일 삭제*/
details > summary {
  list-style: none;
}
summary::-webkit-details-marker {
  display: none;
}

/* after 가상 선택자를 통해 마커 추가 */
summary::after {
  content: url("../images/icon-arrow-down.svg");
  position: absolute;
  right: 0;
}

/* open시 마커 뒤집기*/
details[open] summary:after {
  transform: rotate(180deg);
}
```
