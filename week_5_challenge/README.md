<!-- 
    What is a portfolio website?
    1. It's an online platform where you can showcase your projects and skills to potential employers or clients.
    2. write code
 -->

### Week 5 challenge

#### Portfolio Website - HTML/CSS

- A portfolio website is an online platform showcasing the work of a professional, such as a web developer or designer.
- In this week's challenge, am creating my own personal portfolio website using HTML and CSS. 
- Focusing on creating the structure of the website first, I will then add interactivity with JavaScript in future weeks.
- I have created the following files: `index.html`, `about.html` , `projects.html`, and `contact.html`. 
- Each file represents one page of my portfolio with its respective content.



**CSS Code for Index Page (`styles.css`)**
```css
/* General Styles */
* {
   box-sizing: border-box;
}

body {
   font-family: Arial, sans-serif;
   margin: 0;
   padding: 0;
   color: #757575;
}

header {
   background-color: #f8f9fa;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 16px;
}

/* Style the navbar links */
header ul li {
   display: inline-block;
   line-height: 40px;
   margin-right: 20px;
}

a {
   text-decoration: none;
   color: black;
}

h1 {
    letter-spacing: 2px;
}

@media screen and (max-width: 600px) {
   header ul {
      flex-direction: column;
   }
   header ul li {
    margin-bottom: 12px;
   }
}

```