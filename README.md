# imagehover
html and css code for image hover effects with or without bootstrap

Have tested all individually in codepen using bootstrap.

TIPS:

If you wish to use these without bootstrap just remove the col classes from the top level div.

We need to consider mobile, the hovers that reveal social icons are great except for many these will be inaccessible as some mobiles do not understand a hover state. One way would be to put some visible soical icons else where and leave the hover social icons there as a nice effect for those who find them. Another option is to use CSS media queries so on small screen sizes the styles are already in place. They will not be able to see the cool effect but atlest you are making any content hidden by the hover styles more accessible.

For example on the first effect these are the styles that are applied during a :hover state. So you'd simply copy the styles again and wrap them inside and media query and remove the :hover part of it.

For example you would copy the following:

hovereffect:hover img {
-ms-transform:scale(1.2);
-webkit-transform:scale(1.2);
transform:scale(1.2);
}

.hovereffect:hover .overlay {
opacity:1;
filter:alpha(opacity=100);
}

.hovereffect:hover h2,.hovereffect:hover a.info {
opacity:1;
filter:alpha(opacity=100);
-ms-transform:translatey(0);
-webkit-transform:translatey(0);
transform:translatey(0);
}


And then wrap it inside a media quiery and remove all the :hover from the styles.

@media (max-width: 750px) {

 hovereffect img {
 -ms-transform:scale(1.2);
 -webkit-transform:scale(1.2);
 transform:scale(1.2);
 }

 .hovereffect .overlay {
 opacity:1;
 filter:alpha(opacity=100);
 }

 .hovereffect h2,.hovereffect a.info {
 opacity:1;
 filter:alpha(opacity=100);
 -ms-transform:translatey(0);
 -webkit-transform:translatey(0);
 transform:translatey(0);
 }

}


TO DO:

Make all the effects fully responsive. Some are already/some need slight changes depending on sizes.

Create the effects using SASS.



Special thanks to:
 
codrops (http://tympanus.net/codrops/)
start boot strap (http://startbootstrap.com)
bootstrap (http://getbootstrap.com/)
font awesome (http://fortawesome.github.io/Font-Awesome/)
github (http://github.com)
unsplash for images (https://unsplash.com/)
font squirrel (http://fontsquirrel.com/)
codepen (http://codepen.com/)
