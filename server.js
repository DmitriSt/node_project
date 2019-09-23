// const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose');
// const config = require('config');
// const app = express();
// app.use(express.json());

// const Animal = require('./models/Animal');

// const db = config.get('mongoURI');

// mongoose
//   .connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
//   .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err));

// const Panda = new Animal({
//   name: 'Red Panda',
//   isEndangered: true
// });
// const Tiger = new Animal({
//   name: 'White Tiger',
//   isEndangered: false
// });
// const Bear = new Animal({
//   name: 'Yellow Bear',
//   isEndangered: false
// });

// // Read all entries
// app.get('/', (req, res) => {
//   Animal.find()
//     .sort({ date: -1 })
//     .then(items => console.log(res.json(items)));
// });

// // Add a new entry
// app.post('/', (req, res) => {
//   const newAnimal = new Animal({
//     name: req.body.name,
//     isEndangered: req.body.isEndangered || false,
//   });
//   newAnimal
//     .save()
//     .then(item => res.json(item));
// });

// // Delete an entry
// app.delete('/:id', (req, res) => {
//   Animal.findOneAndDelete({ _id: req.params.id })
//     .then(() => res.json({ success: true }))
//     .catch(err => res.status(404).json({ success: false }));
// });
// // Update an entry
// app.put('/:id', (req, res) => {
//   Animal.findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(() => res.json({ success: true }))
//     .catch(err => res.status(404).json({ success: false }));
// });


// const port = 8000;
// app.listen(port, () => console.log(`Server started on port: http://localhost:${port}`));
