var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Ferhat �Z�EL�K Y�kleniyor...');
});

app.listen(process.env.PORT || 3000);
