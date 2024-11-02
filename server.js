const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


app.set('view engine', 'hbs'); 
app.set('views', path.join(__dirname, 'views'));


hbs.registerPartials(path.join(__dirname, 'views/partials'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('home',{
    nombre: "VEHICULOS DE CARGA.COM",
    
  });
});

app.get('/Diesel', (req, res) => {
  res.render('Diesel');
});

app.get('/Electonicos', (req, res) => {
  res.render('Electonicos');
});
app.get('/Gasolina', (req, res) => {
  res.render('Gasolina');
});

app.get('*', (req, res) => {
  res.status(404).render('404'); 
});


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
