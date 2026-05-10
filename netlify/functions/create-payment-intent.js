const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { buyerName, buyerEmail, subjectName } = JSON.parse(event.body || '{}');

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 24900, // €249.00 in cents
      currency: 'eur',
      receipt_email: buyerEmail || undefined,
      metadata: {
        product: 'The Remote',
        buyer_name: buyerName || '',
        subject_name: subjectName || '',
      },
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
