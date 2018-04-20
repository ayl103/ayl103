// define( function() {

// 	// var values = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
// 		// var values = [ "FFFFFF", "FFFAFA", "F0FFF0", "F5FFFA", "F0FFFF", "F0F8FF", "F8F8FF", "F5F5F5", "FFF5EE", "F5F5DC", "FDF5E6", "FFFAF0", "FFFFF0", "FFF0F5", "FFE4E1" ];
// 				// var values = [ "#336B87", "2A3132", "15454c"];
// 				var values = [ "FFFFFF", "00FFFFFF"];

// 		var prevColor ;

// 	return function() {
// 		var color = "#FFFFFF", i = 2;

// 		// while ( --i ) {
// 			// var myInteger = ~~( Math.random() * 2	 ) ;
// 			// color += values[ myInteger ];

// 			// color += Math.random() * 16 ;
// 			// if(prevColor == color) {
// 			// 	if(myInteger < 15) {
// 			// 		color = values [myInteger+1] ;
// 			// 	} else {
// 			// 		color = values[0] ;
// 			// 	}
// 			// }
// 			// prevColor = color ;
// 		// }
// 		console.log(color) ;
// 		return color;
// 	}

// } );


// define( function() {

// 	var values = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];

// 	return function() {
// 		var color = "#", i = 7;

// 		while ( --i ) color += values[ ~~( Math.random() * 16 ) ];

// 		return color;
// 	}

// } );

define( function() {

	// var values = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
		// var values = [ "FFFFFF", "FFFAFA", "F0FFF0", "F5FFFA", "F0FFFF", "F0F8FF", "F8F8FF", "F5F5F5", "FFF5EE", "F5F5DC", "FDF5E6", "FFFAF0", "FFFFF0", "FFF0F5", "FFE4E1" ];
				// var values = [ "#336B87", "2A3132", "15454c"];
				// var values = [ "FFFFFF", "2cfffe", "1891fb", "030e89", "9a25fb", "84149a", "990b62"];
		var values = [ "58144B", "CB148C"];
		var myBool = true ;
		var prevColor ;

	return function() {
		var color = "#", i = 2;

		if(myBool == true) {
			color+= values[0] ;
			myBool = false ;
		}else {
			color+= values[1] ;
			myBool = true ;
		}
		return color;
	}

} );