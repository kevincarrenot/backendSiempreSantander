const application = require('./dist');
var multiparty =  require ( ' multiparty ' );
var http =  require ( ' http ' );
var util =  require ( ' util ' );

http . createServer ( function ( req , res ) {
   if ( req . url  ===  ' / upload '  &&  req . method  ===  ' POST ' ) {
     // analiza un archivo upload 
    var form =  new  multiparty.Form ();

    formar . parse (req, function ( err , fields , files ) {
       res . writeHead ( 200 , { ' content-type ' :  ' text / plain ' });
       res . write ( ' upload recibida: \ n \ n ' );
       res . end ( util . inspect ({campos : campos, archivos : archivos}));
    });

    volver ;
  }

  // muestra un formulario de carga de archivos 
  res . writeHead ( 200 , { ' content-type ' :  ' text / html ' });
  res . end (
     ' <form action = "/ upload" enctype = "multipart / form-data" method = "post"> ' + 
    ' <input type = "text" name = "title"> <br> ' + 
    ' <input type = "file" name = "upload" multiple = "multiple"> <br> ' + 
    ' <input type = "submit" value = ""'
    
  );
}). escuchar ( 8080 );  

module.exports = application;

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT || 3000),
      host: process.env.HOST,
      // The `gracePeriodForClose` provides a graceful close for http/https
      // servers with keep-alive clients. The default value is `Infinity`
      // (don't force-close). If you want to immediately destroy all sockets
      // upon stop, set its value to `0`.
      // See https://www.npmjs.com/package/stoppable
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  };
  application.main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
