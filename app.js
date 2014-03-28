var fs = require( 'fs' );
var path = require( 'path' );
var filepath = path.resolve( __dirname + '/keywords.txt' );

var file = fs.readFileSync( filepath, 'utf-8' ).split( ' ' ).join( ' +' ).split( '\n' ).join( '\n' + '+' );

if( file.indexOf( '+' ) === 0 ) {
    console.log( 'File OK!' );
    return;
}

fs.writeFile( filepath, '+' + file, 'utf-8', function( err ) {
    if( err ) throw err;
    console.log( 'Done!' );
});