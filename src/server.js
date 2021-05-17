'use strict';
// dependencies // 
const express = require ('express');
const app = express ();

// require the error pages //
const error500Handler = require ('./error-handlers/500.js');
const error404Handler = require ('./error-handlers/404.js');

// require logger //
const logger = require ('./middleware/logger.js');
const validator = require ('./middleware/validator.js');
app.use(express.json());
app.use(logger);


// routs //
// home page rout 
app.get ('/', homePageHandler);
function homePageHandler (req,res){
  res.send ('welcome to home page!');
}

//localhost:3000/person?name=tamara
app.get ('/person' ,validator, personHandler);
function personHandler (req,res){
  const outPut = {
    name: req.query.name,
  };
  res.json (outPut);
}
// or 
// app.get ('/person/:name', personHandlerWithParams);
// function personHandlerWithParams (req,res){
//   let outPut = {
//     name : req.params.name,
//   };
//   res.json (outPut);
// }



// error handlers 
app.use (error500Handler);
app.use ('*', error404Handler);

// app is listening //

function start (PORT){
  app.listen (PORT,()=>{
    console.log (`Listening on PORT : ${PORT}`);
  });
}

// importing methods //
module.exports = {
  app : app,
  start : start,
}; 