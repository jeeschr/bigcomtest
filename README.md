# Bigcommerce Test Theme Modification

"Special Item" has been added to a new "Special Items" category. See Preview site at ijiad6tm9q


### Display 2nd Image On Hover

This was done using simple CSS. The product card component was modified to loop and show each image and a change to the \_cards.scss file shows the second image on hover.

One change that should be made: the each loop in card.html should have a limit of 2 images if most/all products uploaded are planning on having more than 2 images uploaded.


### Add All To Cart & Remove All From Cart Buttons

This was done by creating a new custom category page that I used specifically for the "Special Items" category. A little tweak would allow this to be used for any page/category. 

The custom page was useful though because it allowed me to create a small companion custom.js file in the assets directory where the API calls can be found. 


Any questions - just ask.
