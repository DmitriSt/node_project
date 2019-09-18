const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

express()
  .get('/', (req, res) => res.send('ok'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
