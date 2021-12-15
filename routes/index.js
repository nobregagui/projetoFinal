var express = require('express');
var router = express.Router();
var testando = require("../controllers/teste")
var home = require('../controllers/home')
var login = require('../controllers/login')
var esqueciSenha = require('../controllers/esqueciSenha')
var codigo = require('../controllers/codigo')
var cadastro = require('../controllers/cadastro')
var respons = require('../controllers/responsividade')
var sobrePet = require('../controllers/sobrePet')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teste', testando.index)

router.get('/home', home.index)

router.get('/login', login.index)

router.get('/esqueciSenha', esqueciSenha.index)

router.get('/codigo', codigo.index)

router.get('/cadastro', cadastro.viewCadastro)

router.get('/responsividade', respons.index)

router.get('/sobrePet', sobrePet.views)

module.exports = router;
