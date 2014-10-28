Doublespace
===========

A simple jQuery plugin that removes double spaces, or replaces them by a soft hyphen (`&shy;`). Useful when you write according SEO and seperate composed words. (E.g.: *zoekmachine optimalisatie* instead of *zoekmachineoptimalisatie*)

How to use
----------

Write double spaces where needed: 

`<h1>Zoekmachine  optimalisatie</h1>`

Then: 

`$('h1').doublespace();`

If you don't want the double spaces replaced by a soft hyphen, just set the `softhyphen` option to `false`. 

`$('h1').doublespace({
	softhyphen: false
});`