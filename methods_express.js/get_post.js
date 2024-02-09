const express = require('express');
const { people } = require('../data');
const app = express();

// Use express.urlencoded({ extended: true }) instead of express.urlencoded()
app.use(express.static('./method-public'));
app.use(express.urlencoded({ extended: true }));

app.get('/api/people', (req, res) => {
   
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
 
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).json({ success: true, person: name });
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
