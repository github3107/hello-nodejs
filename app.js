var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  ip=add;
})

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('<h1>Hello Ramesh, finally you did it ya!</h1> </br><h2>From: host: '+ip+', '+port+'<h2>');
});
app.listen(port, function () {
  console.log('Example app listening on port'+port);
});