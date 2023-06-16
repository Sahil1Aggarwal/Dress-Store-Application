const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://aggarwalnanu518:sahil@product.46ss4ej.mongodb.net/DressStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

const productsRouter = require('./routes/products');
app.use('/api/products', productsRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Dress Store Application' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
