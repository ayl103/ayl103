define( [

	"spread/config/options",
	"spread/config/orientation",
	"spread/utils/random"

], function( options, orientation, random ) {

	function Tile( x, y, color, onComplete ) {

		var div, inlay;
		var neighbors = [];
		var isShown = false;

		function initUI() {

			div = document.createElement( "div" );
			div.className = "tile";
			div.style.width = options.tileSize + "px";
			div.style.height = options.tileSize + "px";
			div.style.top = y * options.tileSize + "px";
			div.style.left = x * options.tileSize + "px";

			inlay = document.createElement( "div" );
			inlay.className = "inlay";
			inlay.id = "myInlay" ;

			inlay.style.backgroundColor = color;
			// inlay.style.backgroundColor = 'linear-gradient(' + "to right" + ","+ "#f6f1d3" + "," + "#648880" + "," color+")";
			function getCssValuePrefix()
			{
    			var rtrnVal = '';//default to standard syntax
    			var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

    			var dom = document.createElement('div');

    			for (var i = 0; i < prefixes.length; i++)
    			{
        			dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

        			if (dom.style.background)
        			{
            			rtrnVal = prefixes[i];
        			}
    			}

    			dom = null;
    			delete dom;

    			return rtrnVal;
			}
			// inlay.style.backgroundImage = getCssValuePrefix() + 'linear-gradient( #f6f1d3, #648880,' + color + ')';
			// inlay.style = getCssValuePrefix() + colorchange ;
			// inlay.style.animationName ='Gradient';
   //          inlay.style.animationDuration = '4s';
   //          inlay.style.animationTimingFunction= 'ease' ;
   //          inlay.style.animationIterationCount = 'infinite';

			cover = document.createElement( "div" );
			cover.className = "cover";

			div.appendChild( inlay );
			inlay.appendChild( cover );

		}

		// function colorchange( test )
		// {
  //   		test.style.webkitAnimationName = 'colorchange'; // you had a trailing space here which does NOT get trimmed
  //   		test.style.webkitAnimationDuration = '4s';
		// }
		// ------
		// PUBLIC
		// ------

		this.isShown = function() {
			return isShown;
		}

		this.getElement = function() {
			return div;
		}

		this.addNeighbor = function( direction, neighbor ) {
			neighbors[ direction ] = neighbor;
		}

		this.fromTop = function() {
			div.classList.add( "from-top" );
			show();
		}

		this.fromBottom = function() {
			div.classList.add( "from-bottom" );
			show();
		}

		this.fromRight = function() {
			div.classList.add( "from-right" );
			show();
		}

		this.fromLeft = function() {
			div.classList.add( "from-left" );
			show();
		}

		function onTransitionEnd() {

			for ( var i = 0; i < neighbors.length; i++ ) {

				if ( neighbors[ i ] && ! neighbors[ i ].isShown() ) {

					neighbors[ i ][ getFunctionName( i ) ]();

					setTimeout( onTransitionEnd, random( 10, 200 ) );
					break;

				}

			}

		}

		// -------
		// PRIVATE
		// -------

		function getFunctionName( index ) {
			return [ "fromBottom", "fromLeft", "fromTop", "fromRight" ][ index ];
		}

		function show() {
			isShown = true;

			setTimeout( function() {

				inlay.classList.add( "show" );

				setTimeout( onTransitionEnd, random( 200, 300 ) );
				if(onTransitionEnd) {

				}
				setTimeout( onComplete, 300 );

			}, 50 );
		}

		initUI();

	}

	return Tile;

} );