const express = require( "express" ),

    app = express();

app.get( "/", ( request, response ) => {
    return response.json( {
        "evento": "Semana OmniStack 11.0",
        "aluno": "Guilherme Ferreira"
    } );
} );

app.listen( 3333 );
