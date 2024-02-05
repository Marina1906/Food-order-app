import fs from 'node:fs/promises';
import express from 'express';
import bodyParser from 'body-parser';

const app = express ();

app.use (bodyParser.json ());
app.use (express.static ('public'));

app.use ((req, res, next) => {
  res.setHeader ('Access-Control-Allow-Origin', '*');
  res.setHeader ('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader ('Access-Control-Allow-Headers', 'Content-Type');
  next ();
});

app.get ('/meals', async (req, res) => {
  try {
    const meals = await fs.readFile ('./data/available-meals.json', 'utf8');
    res.json (JSON.parse (meals));
  } catch (error) {
    console.error ('Error reading meals data:', error);
    res.status (500).json ({message: 'Internal Server Error'});
  }
});

app.post ('/orders', async (req, res) => {
  try {
    const orderData = req.body.order;

    if (!orderData || !orderData.items || orderData.items.length === 0) {
      return res.status (400).json ({message: 'Missing data.'});
    }

    const requiredFields = ['email', 'name', 'street', 'postal-code', 'city'];
    const missingFields = requiredFields.filter (
      field =>
        !orderData.customer[field] || orderData.customer[field].trim () === ''
    );

    if (missingFields.length > 0) {
      return res.status (400).json ({
        message: `Missing data: ${missingFields.join (', ')} is missing or empty.`,
      });
    }

    const newOrder = {
      ...orderData,
      id: Math.random ().toString (),
    };

    const orders = await fs.readFile ('./data/orders.json', 'utf8');
    const allOrders = JSON.parse (orders);
    allOrders.push (newOrder);

    await fs.writeFile (
      './data/orders.json',
      JSON.stringify (allOrders, null, 2)
    );
    res.status (201).json ({message: 'Order created!'});
  } catch (error) {
    console.error ('Error processing order:', error);
    res.status (500).json ({message: 'Internal Server Error'});
  }
});

app.use ((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus (200);
  }

  res.status (404).json ({message: 'Not found'});
});

const PORT = process.env.PORT || 3000;

app.listen (PORT, () => {
  console.log (`Server is running on port ${PORT}`);
});
