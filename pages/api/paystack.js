import { add } from "../_firebase"
// var crypto = require('crypto');
const { createHmac } = await import('crypto');
// var secret = process.env.SECRET_KEY;
var secret = 'sk_test_c55965f59566f885a298bd00f5b26b8e9da6fbde';
export default async function handler( req, res ) {
    //validate event
    const hash = createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
    if (hash == req.headers['x-paystack-signature']) {
    // Retrieve the request's body
    const event = req.body;
    add( "paystack", {event})
    // Do something with event  
    }
    res.send(200);
  }
  