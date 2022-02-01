var express = require('express');
var router = express.Router();
const multer  = require('multer')
const upload = multer()
var testando = require("../controllers/teste")
var home = require('../controllers/home')
var login = require('../controllers/login')
var esqueciSenha = require('../controllers/esqueciSenha')
var respons = require('../controllers/responsividade')
var codigo = require('../controllers/codigo')
var sobrePet = require('../controllers/sobrePet')
var confirmacaoCadastro = require('../controllers/confirmacao');
var telaFoto = require('../controllers/telaFoto')
var logDB = require('../middlewares/logDB')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teste', testando.index)

router.get('/home', logDB, home.index)

router.get('/login', login.index)

router.get('/esqueciSenha', esqueciSenha.index)

router.get('/codigo', codigo.index)

router.get('/responsividade', respons.index)
router.post('/responsividade', respons.salvarForm)

router.get('/sobrePet', sobrePet.views)

router.get('/confirmacao', confirmacaoCadastro.views)

router.get('/telaFoto', telaFoto.views)



/* Auntenticação */

router.get("/auth/:method?", function (req, res, next) {
    if (req.params.method  == "login" || req.params.method == "signin") {
      res.render("auth", { method: "login" })
    }else if(req.params.method == "signup" || req.params.method == "register") {
      res.render("auth", { method: "signup" })
    }
})



module.exports = router