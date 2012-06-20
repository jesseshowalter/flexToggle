#flexToggle

flexToggle is a lightweight jQuery plugin that allows you to show or hide content when a toggle link is clicked. It's great for making expand/collapse boxes, disclosure triangles, drawers, and more!

[Source on GitHub](https://github.com/352Media/flexToggle)

Written by [Ryan DeBeasi](http://www.ryandebeasi.com/) of [352 Media Group](http://www.352media.com/).

##Usage

Create a link that will function as the trigger, along with a div that will be collapsed or expanded when the trigger is clicked. Point the link of the trigger to the ID of the div.

```html
<a href="#collapsible1" class="toggle">Toggle One</a>
<div class="collapsible" id="collapsible1">Content</div>

<a href="#collapsible2" class="toggle">Toggle One</a>
<div class="collapsible" id="collapsible2">Content</div>
```

In CSS, set the collapsible elements to be hidden, and set them to be displayed when they are open. If JavaScript is not available, you can use a [no-js class](http://paulirish.com/2009/avoiding-the-fouc-v3/) to open the collapsible elements:

```css
.collapsible {
	display: none;
}

.collapsible.open {
	display: block;
}

.no-js .collapsible {
	display: block;
}
```

Include jQuery and flexToggle.

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="flextoggle.min.js"></script>
```

Then, call flexToggle.

```javascript
$('a.toggle').flexToggle();
```

##Options

For examples of how these can be used, see the demo page that's included with flexToggle.

###animation
string - How should we animate as it appears and disappears? Options are 'none' and 'slideDown'. Default is 'none'.

###activeText
string - Link text when drawer is open. If this or inactiveText are empty, don't change the text. By default, this is empty.

###inactiveText
string - Link text when drawer is closed. If this or activeText are empty, don't change the text. By default, this is empty. 

**Note:** The inactiveText should be included in the markup. For example, if your inactiveText is "Expand", you could write <a href="#elementToOpen" class="toggle">Expand Item One</a>. If there are multiple instances of this text, all of them will be toggled back and forth.  So, <a href="#elementToOpen" class="toggle Expand">Expand Item One</a> would become <a href="#elementToOpen" class="toggle Collapse">Collapse Item One</a> when the link is clicked.

##License

flexToggle is licensesed under the MIT License, and is free for commercial or personal use.

Copyright 2012 352 Media Group

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.