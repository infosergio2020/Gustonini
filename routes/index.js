var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Menu' });
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
