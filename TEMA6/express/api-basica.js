const express = require('express')
const app = express()
const port = process.env.port || 8080

var usuario = 'Irene'

app.get('/', function(req, res) {
  res.send({ mensaje: '¡La página principal se muestra correctamente!.'})
});

app.get('/bienvenida', function(req, res) {
  res.send({ mensaje: 'Bienvenid@ ' + usuario})
});

app.put('/asignatura/:asig', function(req, res) {
  var asignatura = req.params.asig
  res.send({ mensaje: 'Esta es la sección de información sobre la asignatura ' + asignatura})
});

app.listen(port, function() {
  console.log('El servidor se encuentra escuchando en el puerto ' + port);
});

module.exports = app
