# Conference ticket generator

This is a solution to the
[Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Link](#link)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen
  size
- See hover and focus states for all interactive elements on the page

### Screenshot
|Password Generated|Password in clipboard|Showing Error |
|--------------|----------|----------|
|![Password_Generated](/src/assets/scrnshoot/password_generated.png)|![password_Copy](/src/assets/scrnshoot/password_Copied.png)|![errorShowing](/src/assets/scrnshoot/showError.png)|

### link
* Livesite URl: [AppSite](https://password-generator-app-using-react-rho.vercel.app/)
## My process

### Built with

![BuildWith](https://skillicons.dev/icons?i=html,tailwind,react,vite,bun)

### What I learned

- How to use **_useActionState_** in react form for pending loading
- How to show error message in form
- how to use svg file in html
- How to copy text in clipboard using async-await

```javascript
const copyText = async () => {
  await navigator.clipboard.writeText(passWord);
  alert('Copied');
};
//
<button onClick={copyText}>Copy</button>;
```
- how to interact in input:range using event & useState
```javascript
     onChange={(e)=>setLength(e.target.value)}
```

- How to use Tailwind css in React project
- how to Plug **DaisyUi** in Tailwind and use
