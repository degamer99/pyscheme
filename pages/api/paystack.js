// import { add } from "../_firebase"
// // var crypto = require('crypto');
// const { createHmac } = await import('crypto');
// // var secret = process.env.SECRET_KEY;
// var secret = 'sk_test_c55965f59566f885a298bd00f5b26b8e9da6fbde';
// export default async function handler( req, res ) {
//     //validate event
//     const hash = createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
//     if (hash == req.headers['x-paystack-signature']) {
//     // Retrieve the request's body
//     const event = req.body;
//     add( "paystack", {event})
//     // Do something with event  
//     }
//     res.send(200);
//   }


// var express = require('express')
//   , bodyParser = require('body-parser');

// var crypto = require('crypto');
// var secret = process.env.SECRET_KEY;

// var app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())

// app.get("/", function (request, response) {
//   response.send('Simple WhatsApp Webhook tester</br>There is no front-end, see server.js for implementation!');
// });

// app.post("/webhook", function (request, response) {
//   console.log('Incoming webhook: ' + JSON.stringify(request.body));
//   response.sendStatus(200);
// });

// app.post("/paystack", function(req, res) {
//     //validate event
//     const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
//     if (hash == req.headers['x-paystack-signature']) {
//     // Retrieve the request's body
//     const event = req.body;
//     // Do something with event  
//       console.log(event);
//     }
//     res.sendStatus(200);
//   });

// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });


// // Using Express
