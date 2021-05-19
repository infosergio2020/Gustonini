var express = require('express');
var router = express.Router();

const platos = [{
        "imagen": "/img/menu/Carnes/carnesyaves/1.jpg",
        "UID": 0
    },
    {
        "imagen": "/img/menu/Carnes/carnesyaves/2.png",
        "UID": 1
    },
    {
        "imagen": "/img/menu/Carnes/carnesyaves/3.jpg",
        "UID": 2
    },
    {
        "imagen": "/img/menu/Carnes/carnesyaves/4.jpg",
        "UID": 3
    },
    {
        "imagen": "/img/menu/Carnes/carnesyaves/5.jpg",
        "UID": 4
    },
    {
        "imagen": "/img/menu/Carnes/carnesyaves/6.jpg",
        "UID": 5
    }
]

const descripciones = [{
        "titulo": "Pollo Krispi",
        "descripcion": "es un pollo pero es krispi",
        "precio": 430
    },
    {
        "titulo": "Bife de chorizo 450gr",
        "descripcion": "es un bife de chorizo pero pesa 450gr",
        "precio": 580
    },
    {
        "titulo": "Pechuga de pollo grillada",
        "descripcion": "es una pechuga y verduras",
        "precio": 360
    }, {
        "titulo": "Milanesa ternera",
        "descripcion": "es ta hecho de vaquita bebe T_T",
        "precio": 440
    }, {
        "titulo": "Milanesa de polle",
        "descripcion": "es una milanesa inclusiva",
        "precio": 400
    }, {
        "titulo": "Milanesa napolitana (pollo o ternera)",
        "descripcion": "es otra milanesa inclusiva",
        "precio": 570
    }
]


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Menu', platos: platos });
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

router.get('/verMas/:id', function(req, res, next) {
    res.render('verMas', { title: 'Ver mas', descripcion: descripciones[req.params.id], imagen: platos[req.params.id] });
});

router.get('/divisionDeCuentas', function(req, res, next) {
    res.render('divisionDeCuentas', { title: 'Division de cuentas' });
});


module.exports = router;