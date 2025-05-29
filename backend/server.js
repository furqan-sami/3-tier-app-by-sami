const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Connect to MongoDB running in another container
mongoose.connect('mongodb://database:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Backend is connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
