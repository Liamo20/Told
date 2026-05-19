const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PACKAGES = {
  remote: { amount: 24900, name: 'The Remote' },
  visit:  { amount: 49900, name: 'The Visit'  },
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { buyerName, buyerEmail, subjectName, package: pkgKey } = JSON.parse(event.body || '{}');
    const pkg = PACKAGES[pkgKey] || PACKAGES.remote;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: pkg.amount,
      currency: 'eur',
      receipt_email: buyerEmail || undefined,
      metadata: {
        product: pkg.name,
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
