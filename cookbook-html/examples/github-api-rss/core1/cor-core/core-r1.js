// Copyright &copy; 2016 Jaanga authors

// Documentation: https://developer.github.com/v3/


	var b = '<br>';


	var COR = {};

//	COR.txt = '<p>lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?</p>';
	COR.txt = '<p>GitHub API responses will appear here.</p>';

	COR.converter = new showdown.Converter( { strikethrough: true, literalMidWordUnderscores: true, simplifiedAutoLink: true, tables: true });

	COR.initThreeColumns = function() {

		COR.getCSS();

		COR.menu = document.body.appendChild( document.createElement( 'div' ) );
		COR.menu.id = 'menu';
		COR.menu.innerHTML =

			COR.getMenuDetailsHeader() +

			COR.getMenuDetailsTemplate() +

			COR.getMenuDetailsAbout() +

			COR.getMenuFooter() +

		b;


		COR.contents = document.body.appendChild( document.createElement( 'div' ) );
		COR.contents.id = 'contents';
		COR.contents.innerHTML = '<h1>contents</h1><div id=divContents >' + COR.txt + '</div>';


		COR.updates = document.body.appendChild( document.createElement( 'div' ) );
		COR.updates.id = 'updates';
		COR.updates.innerHTML = '<h1>updates</h1><div id=divUpdates >' + COR.txt + '</div>';

		detailsTemplate.setAttribute('open', 'open');

	};



	COR.getCSS = function() {

		var css;

		css = document.body.appendChild( document.createElement( 'style' ) );
		css.innerHTML =

			'body { font: 12pt monospace; margin: 0; }' +

			'a { color: crimson; text-decoration: none; }' +

			'button, input[type=button] { background-color: #ccc; border: 2px #fff solid; color: #322; }' +

			'h2, h1 { margin: 0 }' +

			'iframe { width: 100%; }' +

			'select { width: 100%; }' +
			'summary h2, summary h3, summary h4 { display: inline; }' +
			'summary { outline: none; }' +

			'.butt2 { width: 108px; }' +
			'.popUp { background-color: white; left: 150px; border: 1px solid red; opacity: 1.0; padding: 5px; position: absolute; width: 120px; z-index: 10; }' +

			'#contents { border: 0px red solid; left: 25%; position: absolute; top: 0; max-width: 50%; }' +

//			'#menu { box-sizing: border-box; background-color: #ccc; padding: 0 10px 0 10px; position: absolute; max-width: 20%; }' +
			'#menu { background-color: #eee; height: ' + window.innerHeight + 'px; padding: 0 5px 0 10px; overflow-x: hidden; overflow-y: auto; position: fixed; width: 20%; }' +
			'#menu img { max-width: 200px; }' +

			'#updates { box-sizing: border-box; background-color: #eee; float: right; max-width: 25%; padding: 0 20px; }' +

			'#repositoryEvents h4 { margin: 0; }' +
			'#repositoryEvents { max-height: 200px; overflow-y: scroll; font-size: 9pt; }' +


			'#divSplash { background-color: #ccc; border: 2px solid #888; height: 80%; width: 500px;' +
				'overflow: hidden; left: 350px; position: absolute; resize: none; top: 100px; }' +
			'#splashHeader { text-align: right; }' +

		b;

	};



	COR.getMenuDetailsHeader = function() {

		var menuDetailsHeader =

			'<h2>' +

				'<a href=https://jaanga.github.io/ title="Jaanga - your 3D happy place" > &#x2766 </a>' + b +
				'<a href="" title="Click here to refresh this page" >' + document.title + '</a> ~ ' +
//				'<a href=index.html#readme.md title="Click here for help and information" > &#x24D8; </a>' +
				'<a href=index.html#readme.md onmouseover=popHelp.style.display=""; onmouseout=popHelp.style.display="none"; > &#x24D8; </a>' +

			'</h2>' +

			'<div class=popUp id=popHelp style=display:none; ><p>Hi there!</p>Click the i-in-circle, info icon for latest updates.</div>' +

		b;

		return menuDetailsHeader;

	};



	COR.getMenuDetailsTemplate = function() {

		var menuDetailsTemplate =

			'<details id=detailsTemplate >' +

				'<summary><h3>Template</h3></summary>' +

				'<p id=pTemplate >' +

					'<button > button </button>' + b +

					COR.txt +

			'</p>' +

			'</details>' +

		b;

		return menuDetailsTemplate;

	};



	COR.getMenuDetailsAbout = function() {

		var menuDetailsAbout =

			'<details id=detailsAbout >' +

				'<summary><h3>About</h3></summary>' +

				'<p>' +
					'Copyright &copy; 2016 <a href=https://github.com/orgs/jaanga/people target="_blank">Jaanga authors</a>.' + b +
					'<jaanga.github.io/license.md >MIT license</a>' +
				'</p>' +

				'<p>Thank you <a href=https://developer.github.com/v3/ > GitHub API </a> ' +
//					'<a href=http://threejs.org target="_blank">Mr.doob.</a></p>' +

				'<p>Click the \'i in a circle\' info icon for more <a href=index.html#readme.md >help</a></p>' +

			'</details>' +

		b;

		return menuDetailsAbout;

	};



	COR.getMenuFooter = function() {

		var footer =

			'<hr>' +

			'<center>' +
				'<a href=javascript:menu.scrollTop=0; style=text-decoration:none; onmouseover=pop2.style.display=""; onmouseout=pop2.style.display="none"; ><h1> &#x2766 <h1></a>' +
			'</center>' +

			'<div class=popUp id=pop2 style= display:none; >' +
				'Jaanga - your 3D happy place.<br>Click here to return to the top of the page' +
			'</div>' +

		b;

		return footer;

	};

