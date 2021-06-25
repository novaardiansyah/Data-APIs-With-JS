const express = require('express');
const morgan  = require('morgan');
const ejs     = require('ejs');
const module1 = require('./routes/module1Routes');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const runServer = (port) => {
  app.listen(port, () => console.log('server running on port ' + port));
};

runServer(3000);

app.use(module1);
app.get('/', (req, res) => {
  res.render('index', 
  { 
    title: 'working with Data & APIs in JavaScript'
  });
});

app.use((req, res) => {
  res.status(404).send('404 page not found');
});

// ==============================================================================================================================================================================================================================================================