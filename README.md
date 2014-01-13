#Rocky - responsive theme for Ghost

![The rocky theme](http://juanpablosolano.com/ghostrespurces/rocky/about.jpg)
<small>Image from http://www.sxc.hu/photo/1378184</small>


Rocky is a modern, fully responsive theme/template for the [Ghost blogging platform](http://ghost.org).


##A solid foundation.
The Rocky theme is built on top of the [Foundation framework](http://foundation.zurb.com/)  which helps garuantee the quality of the responsive layout.

>Foundation is the most advanced responsive
front-end framework in the world.
- *Foundation team*

##Customise with LESS

The theme provides an easy way to customaze the colors and fonts of the template.

To change the colors open the file ```assets/css/variables.less``` and change those variables you see there.

```
//Background Color
@bgColor:#fcfcfc;

//This is the primary color of the theme: used for links and icons and other decorations
@mainColor: #cd173a;

//Color of texts
@paragraphColor:  lighten(black, 60%);

//Color of headers
@headersColor:lighten(black, 20%);

//Main Font for headers
@mainFont: 'Roboto Slab';

//Font for paragraphs and other secondary texts
@secondaryFont: 'Roboto';
```

You can see the last two variables are for fonts. If you want to change the fonts open the file ```assets/css/fonts.less``` and copy the link from google fonts and then change the name of the variable.

You can then compile the file ```assets/css/styles.less``` and you will have a new palette and font for your amazing blog.

##Entypo icons and google fonts
Rocky uses the large, beautiful and easy to use gallery of [entypo icons](http://entypo.com/).
It also uses some Google fonts which you can easily customize.

##Credits.
[jQuery scrolltofixed](https://github.com/bigspotteddog/ScrollToFixed)
[Foundation](http://foundation.zurb.com/)
[Google fonts](http://www.google.com/fonts)
[Entypo](http://entypo.com/)
[Modernizr](http://modernizr.com/)
[Normalize](http://necolas.github.io/normalize.css/)

##How to install

To install simply put the files you downloaded  into the ```content\themes```and restart your node server.

##What´s next
If you need/want any help or want any feature to be added to the theme, don't heasitate to contact me.
