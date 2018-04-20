require.config( {

	urlArgs: "bust=" +  Date.now(),

	paths: {
		text: "libs/require/plugin.text",
		dat: "libs/dat"
	}

} );

require( [ "spread/Controller" ], function( Controller ) {

	var container = document.getElementById( "container" );
	var tag = document.getElementById( "tag" );
	var counter = 0 ;
	var secondTime = false ;
	var position = {} ;

	initListeners();
	setTag();

	function setTag() {
		//tag.className = "before in";

		setTimeout( function() {
			//tag.className = "";
		}, 300 );
	}

	function initListeners() {

		document.addEventListener( "mousemove", onClick, false );
		document.addEventListener( "touchstart", onTouchEnd, false );
		onClick(window.onload) ;

	}

	function onClick( event ) {
		console.log("onClick") ;
		if(document.getElementById("dontMove")) {
			// console.log(counter) ;
		} else {

		var div = document.createElement( "div" );
		div.id = "dontMove" ;
		counter++ ;

		var size = {
			width: window.innerWidth,
			height: window.innerHeight
		}

		if(secondTime == true) {
			position = {
				x: event.pageX,
				y: event.pageY
			}
		} else {
			position = {
				x: window.innerWidth/2,
				y: window.innerHeight/2
			}
			secondTime = true ;
		}

		var controller = new Controller( div, size, position );

		controller.onComplete( function() {

			document.body.style.backgroundColor = controller.getColor();
			container.removeChild( div );
			counter -- ;


		} );

		container.appendChild( div );
		}

	}

	function onTouchEnd( event ) {

		var touch = event.touches[ 0 ];

		event.pageX = touch.pageX;
		event.pageY = touch.pageY;

		onClick( event );
	}

} );