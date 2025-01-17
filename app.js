//MongoDB password:YEmYFbK5J0npTVBC
//mongodb+srv://eunice:<password>@cluster0.amxdjbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const app = express();

mongoose
  .connect(
    'mongodb+srv://eunice:YEmYFbK5J0npTVBC@cluster0.amxdjbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
