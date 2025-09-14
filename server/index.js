const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const SampleDb = require('./sample-db');

const productRoutes = require('./routes/products');

mongoose
  .connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const sampleDb = new SampleDb();
    sampleDb.InitDB();
  });

const app = express();

app.use('/api/v1/products', productRoutes);

const PORT = process.env.PORT || '3001';

app.listen(PORT, function () {
  console.log('i am running!');
});

// npm install mongodb
// mongodb+srv://test:testtest@cluster0.d1a3jnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
