const express = require('express');
const app = express();
const productRouter = require('./router');

app.get('/', (req, res) => {
  res.send('hello, I am alive');
});

app.use('/api/product', productRouter);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
