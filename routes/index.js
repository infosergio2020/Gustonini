var express = require('express');
var router = express.Router();

const platos = [
  {
    "nombre":"sopa",
    "descripcion":"es una sopa",
    "precio":123,
    "imagen":"url"
  },
  {
    "nombre":"pizza",
    "descripcion":"es una pízza",
    "precio":500,
    "imagen":"url"
  },
  {
    "nombre":"milanesa",
    "descripcion":"es una milanesa",
    "precio":300,
    "imagen":"url"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Menu', platos:platos});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/singup', function(req, res, next) {
  res.render('registrarse', { title: 'Registrarse' });
});

router.get('/pedidoActual', function(req, res, next) {
  res.render('pedidoActual', { title: 'Pedido actual' });
});

router.get('/verMas', function(req, res, next) {
  res.render('verMas', { title: 'Ver mas' });
});

router.get('/divisionDeCuentas', function(req, res, next) {
  res.render('divisionDeCuentas', { title: 'Division de cuentas' });
});


module.exports = router;
