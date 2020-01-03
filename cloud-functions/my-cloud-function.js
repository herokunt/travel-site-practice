module.handler = function(event, context, callback){

  if(event.httpMethod !== 'POST'){
    return callback(null, {
      statusCode: 401,
      body: 'You sir, are not authorized'
    });
  }
};
