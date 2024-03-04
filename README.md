 ## Web Technologies - PLP

### Introduction to web development
- What is the Internet?
  * Definition of Internet and its purpose.
- How does the internet work?
  * Protocols (TCP/IP, HTTP)
  * Client-Server model
  * Browsers and their role in accessing websites.
  
### HTML Basics: Structure of a webpage
- Purpose of HTML
- Basic structure of an HTML page
  * `<!DOCTYPE html>` declaration
  * `<html>`, `<head>`, and `<body>` sections
    + Contents within each section
      - Title tag (`<title>`)
      - Meta tags for charset, viewport, description etc.
      - Link and script tags for external resources
      - Headers, paragraphs, images, forms, links, buttons etc.
    - 
**Example code snippet:**
```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My First Website</title>
        </head>
        <body>

            <!-- This this a comment -->
            <!-- HTML heading :: h1 to h6  -->
            <h1>Welcome to my website!</h1>

            <!-- <h1>first Heading</h1> Largest -->
            <!-- <h6> Last Heading<h6> Smallest -->
            
            <!-- HTML paragrah -->
            <p>This is my first website.</p>
            <!-- Image Tag -->
            <img src="image.png"  alt="description of image" width="70%" height="57%"/>
            
            <!--Lists -->
            <!-- Unordered List-->
                <ul>
                    <li>Cats are better than dogs.</li>
                    <li>They're more independent.</li>
                </ul>

            <!-- Ordered List -->
                <ol>
                    <li>Dogs are better than cats according to some people.</li>
                    <li>They're loyal and loving.</li>
                </ol>

            <!-- Detailed List -->
                <dl>
                    <dt>Name:</dt>
                    <dd>John Doe</dd>
                    
                    <dt>Favorite</dt>
                    <dd>Color: Blue</dd>
                </dl>

            <!-- Image -->
            <img src="image.jpg" alt="A picture of me">
            
            <!-- Form -->
            <form action="/submit_form" method="post">
                Name: <input type="text" name="name"><br>
                Email: <input type="email" name="email"><br>
                <input type="submit" value="Submit">
            </form>

            <!-- Table -->
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>Jane Smith</td> 
                    <td>23</td>
                </tr>
            </table>


        </body>
    </html>
```

### CSS Basics: Styling webpages
- Purpose of CSS
- Introduction to selectors (id, class, element)
- Introduction to properties and values (color, font-size, background etc.)
- Introduction to units (px, em, rem)
- Introduction to property value shorthand notation
- Introduction to cascading and specificity
- Introduction to box model (content, padding, border, margin)
- Introduction to positioning methods (static, relative, fixed, absolute)
- Introduction to floating elements
- Introduction to z-index property
- Introduction to display property
- Introduction to visibility and opacity properties
- Introduction to transform and transition properties
- Introduction to @keyframes rule
- Introduction to media queries

**Example code snippet of CSS:**
```css [inline]
/* This is a comment */
p { /* Selects all paragraph elements on  the page */ }
h1 { color: blue; font-size: 12px; font-weight: bold;}
.redText { color: red; } /* Selects elements with the "redText" class */

    *{
        /*  Applies to all elements */
        color: green;
    }
   .welcome{
     color: blue
     font-family: Arial, sans-serif
   }

   #myImage{
     width: 200px
     height: auto;
   }

    form{
        width: 200px;
    }
```

**Note that:**
- In the above example, we have used a `.` before `welcome` which is a class selector. 
- This means that all HTML elements with the same class name are treated as `welcome` elements.
