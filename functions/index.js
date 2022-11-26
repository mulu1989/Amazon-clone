const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51M0kORDnvXNXPMgm8s1OTeGz73fQt9POv0yAvHN63gF7RyyqZ3JkHJzVTHxwJMHQ2kim77hVvsdOeYSVO0YV0ZSX00lzgyOzgk'
); 

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));


app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ' , total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount:total, // subunits of the currency
    currency:'usd',
  });


  response.status(201).send({
    clientSecret:paymentIntent.client_secret,
  });
});


exports.api = functions.https.onRequest(app);






// http://127.0.0.1:5001/clone-bfacc/us-central1/api

('')