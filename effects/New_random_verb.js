( function () {

	/**
 * Ascii generation is based on http://www.nihilogic.dk/labs/jsascii/
 * Maybe more about this later with a blog post at http://lab4games.net/zz85/blog
 *
 * 16 April 2012 - @blurspline
 */
	class AsciiEffect {

		constructor( renderer, charSet = ' .:-=+*#%@', options = {} ) {

			// ' .,:;=|iI+hHOE#`$';
			// darker bolder character set from https://github.com/saw/Canvas-ASCII-Art/
			// ' .\'`^",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$'.split('');
			// Some ASCII settings
			const bResolution = ! options[ 'resolution' ] ? 0.2 : options[ 'resolution' ]; // Higher for more details

			const iScale = 0;
			const bColor = ! options[ 'color' ] ? false : options[ 'color' ]; // nice but slows down rendering!

			const bAlpha = ! options[ 'alpha' ] ? false : options[ 'alpha' ]; // Transparency

			const bBlock = ! options[ 'block' ] ? false : options[ 'block' ]; // blocked characters. like good O dos

			const bInvert = ! options[ 'invert' ] ? false : options[ 'invert' ]; // black is white, white is black

			const strResolution = 'high';
			let width, height;
			const domElement = document.createElement( 'div' );
			domElement.style.cursor = 'default';
			const oAscii = document.createElement( 'table' );
			domElement.appendChild( oAscii );
			let iWidth, iHeight;
			let oImg;

			this.setSize = function ( w, h ) {

				width = w;
				height = h;
				renderer.setSize(w , h);
				initAsciiSize();

			};

			this.render = function ( scene, camera ) {

				renderer.render( scene, camera );
				asciifyImage( renderer, oAscii );

			};

			this.domElement = domElement; // Throw in ascii library from http://www.nihilogic.dk/labs/jsascii/jsascii.js

			/*
    * jsAscii 0.1
    * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
    * MIT License [http://www.nihilogic.dk/licenses/mit-license.txt]
    */

			function initAsciiSize() {

				iWidth = Math.round( width * fResolution );
				iHeight = Math.round( height * fResolution  );
				oCanvas.width = iWidth;
				oCanvas.height = iHeight; // oCanvas.style.display = "none";
				// oCanvas.style.width = iWidth;
				// oCanvas.style.height = iHeight;
				
				oImg = renderer.domElement;

				if ( oImg.style.backgroundColor ) {

					oAscii.rows[ 0 ].cells[ 0 ].style.backgroundColor = oImg.style.backgroundColor;
					oAscii.rows[ 0 ].cells[ 0 ].style.color = oImg.style.color;

				}
				
				oAscii.cellSpacing = 0;
				oAscii.cellPadding = 0;
				const oStyle = oAscii.style;
				oStyle.display = 'inline';
				oStyle.width = 100 + 'px';
				oStyle.height = 100 + 'px';
				oStyle.whiteSpace = 'pre';
				oStyle.margin = '0px';
				oStyle.padding = '0px';
				oStyle.letterSpacing = fLetterSpacing   + 'px' ;
				oStyle.fontFamily = strFont;
				oStyle.fontSize = fFontSize  + 'px';
				oStyle.lineHeight = fLineHeight + 'px';
				oStyle.textAlign = 'left';
				oStyle.textDecoration = 'none';

			}

			
// 
	
//  text = String.fromCharCode(Math.floor(Math.random () * 1000)+33);
//  text2 = String.fromCharCode(Math.floor(Math.random () * 1000)+33);
//  text3 = String.fromCharCode(Math.floor(Math.random () * 1000)+33);
//  text4 = String.fromCharCode(Math.floor(Math.random () * 1000)+33);
//  text5 = String.fromCharCode(Math.floor(Math.random () * 1000)+33);

// // char = [ text+text2+text3+text4+text5, text+text2+text3+text4+text5, text+text2+text3+text4+text5, text+text2+text3+text4+text5]

// }
let char, text
var n
var p = 0;
var i, holder = {};
var maf

function setn (){
	n= String.fromCharCode(Math.floor(Math.random () * 1000)+33) 
	addn();
}

function addn (){
	 p+= 0.1
	 holder[i] += n
	 char = holder[i]
	 var mar = ' '+char
	  maf= mar.replace('undefined', '');
	 if(p<5){
		setn();
	}
	
}


var p = 0;
var f= 32,
    s = 46,
    t =58,
    fo =105,
    fi =73,
    si =1055,
    el =1064,
    ei =1046;
var i=1	
function setchar (){	
holder[i]= []
p = 0;
setn();

char = [maf]
// if(p >5){
// 			 i= -1
// 		}
// 		if (p<1){
// 			i=1
// 		}
// s += i
//  t += i
// fo+= i
// fi+= i
// si+= i
// el+= i
// ei+= i
// p += i

		
		

// char=[String.fromCharCode(f, s, t, fo, fi, si, el, ei )]
};

 setchar ()   
// char=[String.fromCharCode(f, s, t, fo, fi, si, el, ei )]



				 // char = [" .:iIПШЖ", " . :iIПШЖ", " :. iIПШЖ", " i:. IПШЖ", " Ii:. ПШЖ", " ПIi:. ШЖ", " ШПIi:. Ж", " ЖШПIi:. "]
				// let txt = char[Math.floor(Math.random()+ 0.3)]

	var aDefaultCharList = char[0].split( '' );
	const aDefaultColorCharList = ' CGO08@'.split( '' );
			const strFont = 'courier new, monospace';
			const oCanvasImg = renderer.domElement;
			const oCanvas = document.createElement( 'canvas' );
		 let fResolution = 3;
			if ( ! oCanvas.getContext ) {

				return;

			}

			const oCtx = oCanvas.getContext( '2d' );

			if ( ! oCtx.getImageData ) {

				return;

			}

			
			

			if ( bResolution ) fResolution = bResolution; // Setup dom

			const fFontSize =  20
			const fLineHeight = 20

			let fLetterSpacing = - 2.5;
					


			

			// switch ( strResolution ) {

			// 	case 'low':
			// 		fResolution = 0.25;
			// 		break;

			// 	case 'medium':
			// 		fResolution = 0.5;
			// 		break;

			// 	case 'high':
			// 		fResolution = 1;
			// 		break;

			// }

			

			// if ( strResolution == 'low' ) {

			// 	switch ( iScale ) {

			// 		case 1:
			// 			fLetterSpacing = - 1;
			// 			break;

			// 		case 2:
			// 		case 3:
			// 			fLetterSpacing = - 2.1;
			// 			break;

			// 		case 4:
			// 			fLetterSpacing = - 3.1;
			// 			break;

			// 		case 5:
			// 			fLetterSpacing = - 4.15;
			// 			break;

			// 	}

			// }

			// if ( strResolution == 'medium' ) {

			// 	switch ( iScale ) {

			// 		case 1:
			// 			fLetterSpacing = 0;
			// 			break;

			// 		case 2:
			// 			fLetterSpacing = - 1;
			// 			break;

			// 		case 3:
			// 			fLetterSpacing = - 1.04;
			// 			break;

			// 		case 4:
			// 		case 5:
			// 			fLetterSpacing = - 2.1;
			// 			break;

			// 	}

			// }

			// if ( strResolution == 'high' ) {

			// 	switch ( iScale ) {

			// 		case 1:
			// 		case 2:
			// 			fLetterSpacing = 0;
			// 			break;

			// 		case 3:
			// 		case 4:
			// 		case 5:
			// 			fLetterSpacing = - 1;
			// 			break;

			// 	}

			// } // can't get a span or div to flow like an img element, but a table works?
			// convert img element to ascii

let r = 0 
	let g = 0
	let b = 0

var ig =0
			function asciifyImage( canvasRenderer, oAscii ) {
ig += 1
if (ig> 5){
	setchar();
	ig=0
	aDefaultCharList = char[0].split( '' );

}

	 txt = char[(Math.floor(ig))]

// Math.floor(Math.random()* txt.length)
	 // aDefaultCharList = txt.split( '' );
	 let aCharList = bColor ? aDefaultColorCharList : aDefaultCharList;
			if ( charSet ) aCharList = charSet;
				// function rgb () {
	r = 0.3
	g =r + 0.2
	b = r - 0.1
if (r> 1){
	r=0.0
}


// rgb ();


			
				oCtx.clearRect( 0, 0, iWidth, iHeight );
				oCtx.drawImage( oCanvasImg, 0, 0, iWidth, iHeight );
				const oImgData = oCtx.getImageData( 0, 0, iWidth, iHeight ).data; // Coloring loop starts now

				let strChars = ''; // console.time('rendering');

		
				for ( let y = 0; y < iHeight; y += 2 ) {

					for ( let x = 0; x < iWidth; x ++ ) {

						const iOffset = ( y * iWidth + x ) * 4;
						const iRed = oImgData[ iOffset ];
						const iGreen = oImgData[ iOffset + 1 ];
						const iBlue = oImgData[ iOffset + 2 ];
						const iAlpha = oImgData[ iOffset + 3 ];
						let iCharIdx;
						let fBrightness;
						fBrightness = ( r * iRed + g * iGreen + b * iBlue ) / 255; // fBrightness = (0.3*iRed + 0.5*iGreen + 0.3*iBlue) / 255;

						if ( iAlpha == 0 ) {

							// should calculate alpha instead, but quick hack :)
							//fBrightness *= (iAlpha / 255);
							fBrightness = 1;

						}

						iCharIdx = Math.floor( (1 - fBrightness ) * ( aCharList.length - (1) ) );

						if ( bInvert ) {

							iCharIdx = aCharList.length - iCharIdx - 1;

						} // good for debugging
						//fBrightness = Math.floor(fBrightness * 10);
						//strThisChar = fBrightness;


						let strThisChar = aCharList[ iCharIdx ];
						if ( strThisChar === undefined || strThisChar == ' ' ) strThisChar = '&nbsp;';

						if ( bColor ) {

							strChars += '<span style=\'' + 'color:rgb(' + iRed + ',' + iGreen + ',' + iBlue + ');' + ( bBlock ? 'background-color:rgb(' + iRed + ',' + iGreen + ',' + iBlue + ');' : '' ) + ( bAlpha ? 'opacity:' + iAlpha / 255 + ';' : '' ) + '\'>' + strThisChar + '</span>';

						} else {

							strChars += strThisChar;

						}
					}

					strChars += '<br/>';
// asciifyImage();
				}

				oAscii.innerHTML = '<tr><td>' + strChars + '</td></tr>'; // console.timeEnd('rendering');
				// return oAscii;

			}

		}

	}

	THREE.AsciiEffect = AsciiEffect;

} )();
