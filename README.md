# Frontend Mentor - Article preview component solution

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learnt the use of the matchMedia() method in conditional statements

```js
icon.addEventListener("click", function() {
    if (window.matchMedia("(max-width: 991px)").matches) {
        author.style.display = "none";
        share.style.display = "flex";
    } else if (window.matchMedia("(min-width: 992px)").matches) {
        author.style.display = "flex";
        share.style.display = "flex"; 
    }  else {
            author.style.display = "flex";
            share.style.display = "none";
        }
})
```


### Continued development

I need to work on my element positioning and perfecting layouts with regards to responsiveness.



### Useful resources

- https://www.w3schools.com/css/css_positioning.asp
- https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia



## Author

- Website - https://www.benjaminhove.com
- Frontend Mentor - https://www.frontendmentor.io/profile/JustBenjamin


