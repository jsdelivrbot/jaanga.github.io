//		url = 'https://api.github.com/search/' + type + '?' + queries[ selQuery.selectedIndex ];
		url = 'https://api.github.com/search/repositories?q=stars:%3E35000';
//		url = 'https://api.github.com/search/repositories?q=math+stars:%3E100';
//		url = 'https://api.github.com/search/repositories?q=3d+stars:%3E100';


	function getMenuDetailsSelectPopular() {

		menuDetailsSelectPopular =

			'<details id=detailsSelectPopular open >' +

				'<summary><h3>Select a GitHub user</h3></summary>' +

				'<p>' +
					'<select id=selUser onchange=getUserDetails(this); title="Select the option" size=15 style=width:100%; >' +
					'</select>' +
				'</p>' +
// add enter a name
				'<p id=stats ></p>' +

				'<p id=stuff ></p>' +

			'</details>' +

		b;

		return menuDetailsSelectPopular;

	}


	function getPopularItems() {

		var fileName, xhr, repos, txt;

		xhr = new XMLHttpRequest();
		xhr.open( 'get', url, true );
		xhr.onload = callback;
		xhr.send( null );

		function callback() {

			response = JSON.parse( xhr.responseText );

//console.log( 'response', response.items[ 0 ] );

			stats.innerHTML = 'total count: ' + response.total_count.toLocaleString() + b;

			txt = ''

			for ( var i = 0; i < response.items.length; i++ ) {

				rep = response.items[ i ];

				selUser[ selUser.length ] = new Option( rep.full_name, rep.owner.login );

//				selUser.appendChild( document.createElement( 'option' ) );
//				selUser.children[ i ].text = rep.full_name;
//				selUser.children[ i ].value = rep.login;
//				txt += ( i + 1 ) + ' ' +
//					rep.full_name + // ': ' + rep.description + b + b;
//				b;

			}

//			statsPopular.innerHTML = txt;

			selUser.selectedIndex = Math.floor( selUser.length * Math.random() );

			getUserDetails( selUser );

		}

	}

	function getUserDetails( user ) {

//console.log( 'user', user );
// https://api.github.com/users/ladybug-analysis-tools/repos

		location.hash = user.value;

		getAPIUserData( user.value );

		getRepos( user.value );

//		requestGitHubAPIEvents( user.value )

	}