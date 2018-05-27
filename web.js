var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Ferhat ÖZÇELÝK Yükleniyor...');
});

app.listen(process.env.PORT || 3000);
