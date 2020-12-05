const express = require('express')
const app = express()
const port = process.env.port || 8080

var usuario = 'Irene'

app.get('/', (req, res) => {
  res.send({ message: '¡La página principal se muestra correctamente!.'})
})

app.get('/bienvenida', (req, res) => {
  res.send({ message: 'Bienvenid@ ' + usuario})
})

app.put('/asignatura/:asig', (req, res) => {
  var asignatura = req.params.asig
  res.send({ message: 'Esta es la sección de información sobre la asignatura ' + asignatura})
})

app.listen(port, () => {
  console.log('El servidor se encuentra escuchando en el puerto ' + port);
})

module.exports = app
