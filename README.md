## Semester project - FED 22-23

#### by Ali Najimedini

### Design:

https://www.figma.com/file/yuBJHES6b364on8xKXnI8o/MindInk-blog?type=design&node-id=16%3A98&t=pG3H4kZlI2iU0YAl-1

### Live link:

https://capable-halva-bd2d30.netlify.app/

### Repo link:

https://github.com/Noroff-FEU-Assignments/project-exam-1-AliNough.git

### Instruction:

This is my exam project report, where I will be explaining my code and decisions in best way i can.
I will be going through my challenges and my solutions to those challanges.
The task is design and development of a blog site.

I used Airtable for my backend, I was told by my teacher that it was an allowed alternative to WordPress. I found it to be easier to work with. With Airtable you can name the tables which makes it easier to target and you get 3 options for the thumbnail. I do hope thats ok.

### Main :

A website using Airtable to populate its content. I started of with the design in Figma. I chose the colors i want to work with and then proceeded to making home page. Although it's a very small Figma project, I got a decent idea to start with.

Starting with the carousel, since i sensed it was going to be the main challange. In the process I learned a little about "data-" attribute in HTML. It was a unusual way of targeting manipulating the elements with JS. I would say this was the most time consuming challange I struggled with.

After the carousel, I starte to populate my website with data from Airtable API. This was also a time consuming part. Just understanding the url structure for API call was a hassle, eventually I got a good response using Postman and make a variable for all parts of the url.

Now that we got the url working, I needed to include my token with the call. The problem was that I needed to hide the token, this sent me down a long and confusing road and unfortunately I was not able to hide my token.

### Known issues/challenges:

##### Home page:

- The carousel in Home page is not working correctly. The slides which are not visible are hidden in the background and their thumbnail images are extended further under the carousel section and are clickable. If you click below the carousel on the dark background area, the blog which is hidden behind will bring you to its detail page.
- Carousel slider buttons are not locked inside the actual carousel. The the loose in the page. If you test out the responsivity of the page, you'll catch my meaning.

##### Details page:

- No major issue here.

##### Blogs Page:

- The responsivity in this page could be better. I struggled with flex-box. I wanted the contents to go from row to column when the screen shrinks below a certain width. But I could not get it to work so I used media queries instead. Now the contents copy or "preview" is too small. I need to find a solution for that.

##### Contact Page:

- Main challange was to give users a error message with explanation. I have grouped the first name and last name input and it made it difficult to target the error message element <p> that is sibling to inputs. I worked around it by targeting all the elements individually.

##### Other:

- "back button" does not take you back, but to index.html.
- I couls not hide my API token. Which is a majot issue. I tried to solve this by making a environment variable but did fail.

### .css structure:

> blog-page-ui: UI styling spesific to blog page.
> constants: Declaration of global variables.
> contact: UI styling spesific to contact page, forms, inputs.
> detail-page-ui: UI styling spesific to detail page.
> main: Assembly of all .css files.
> ui: Main styling. Mostly styling index page but also contains unchanged styles for less repetition.

### Sources and resources:

##### font:

https://fonts.google.com/specimen/Josefin+Slab

##### Images:

https://unsplash.com/photos/Rfflri94rs8
https://unsplash.com/photos/HWQXIYbs8PM
https://unsplash.com/photos/rjEoFD8l1vo
https://unsplash.com/photos/3WOh54znPGU
https://unsplash.com/photos/ViJmrvjFi9Q
https://unsplash.com/photos/cYQ77_IQFaQ
https://unsplash.com/photos/uZt8wD1rgeo
https://unsplash.com/photos/Rfflri94rs8
https://unsplash.com/photos/SYTO3xs06fU

##### Stack overflow:

https://stackoverflow.com/questions/3680876/using-queryselectorall-to-retrieve-direct-children
https://stackoverflow.com/questions/3922739/limit-text-length-to-n-lines-using-css

##### w3school:

https://www.w3schools.com/css/css3_object-fit.asp
https://www.w3schools.com/tags/att_data-.asp
https://www.w3schools.com/html/html_form_input_types.asp
https://www.w3schools.com/jsref/met_element_closest.asp

##### loader tool:

https://www.cssportal.com/css-loader-generator/
