const express = require ('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  //res.send('<h1>Hello World</h1>');
   //res.send({message: '<h1>Hello World</h1>'});
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
   //res.send({message: '<h1>Hello World</h1>'});
});

app.listen(5000, () => console.log(`Server is running on port 5000`));