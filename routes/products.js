let express = require('express')
let router = express.Router()
const { check, validationResult, body  } = require('express-validator')
const produtoController = require('../controllers/controllerProdutos')

router.get('/criar', produtoController.viewsForm)
router.post('/criar', [
    check("nome").isLength({min:3}).withMessage('O nome do usuário tem que conter no mínimo 3 caracteres'),
    check("user").isLength({min:5}).withMessage('O UserName tem que conter no mínimo 5 caracteres'),
    check("cel").isLength({min:11}).isLength({max:11}).withMessage('O número de telefone deve conter 11 caracteres'),
    check("email").isEmail().withMessage('Email inválido, verifique as informações'),
    check("senha").isLength({min:8}).withMessage('A senha deve conter no mínimo 8 caracteres'),
    body("confirmSenha").custom((value, {req}) => {
       if ( value !== req.body.senha) {
        throw new Error('Senha e confrimação não estão iguais!');
       }else{
           return true
       }
    })
], produtoController.salvarForm)
router.get('/telaFoto', produtoController.telaFoto)
router.post('/telaFoto', produtoController.salvarSobrePet)
router.get('/sobrePet', produtoController.sobrePet)
router.post('/sobrePet', [
    check("especie").isLength({min:3}).withMessage('Por favor, verifique a espécie do seu pet')
], produtoController.salvarArquivo)
router.get('/confirmacao', produtoController.dadosPets)
router.get('/:id/editar', produtoController.viewAttForm)
router.put('/editar', produtoController.editar)
router.get('/', produtoController.listarProduto)
router.delete('/deletar/:id', produtoController.deletarProduto)

module.exports = router