/* Faux Console by Chris Heilmann http://wait-till-i.com */
define("console", [ "require" ], function(require) {

	if (!!window.console) {
		return window.console;
	}

	var tmpl = '<a href="javascript:console.hide()">close</a><a href="javascript:console.clear()">clear</a>';
	var d = document.createElement('div');
	d.innerHTML = tmpl;

	var id = 'fauxconsole';
	if (!document.getElementById(id)) {
		d.id = id;
	}

	window.console = {
		log : function(o) {
			d.innerHTML += '<br/>' + o;
			d.style.display = 'block';
		},
		hide : function() {
			d.style.display = 'none';
		},
		clear : function() {
			d.innerHTML = tmpl;
		}
	}

	require([ "domReady!", "css!fauxconsole" ], function() {
		document.body.appendChild(d);
	});

	return window.console;
});