const { check, validationResult, body  } = require('express-validator')

const produtoController = {
    viewsForm: (req, res) => {
        res.render('products')
    },
    salvarForm: (req, res) => {
        let listaDeErrors = validationResult(req)

        if (listaDeErrors.isEmpty()) {
            let { nomeProduto, precoProduto } = req.body
            return res.redirect('telaFoto')
        }else {
            return res.render('products', {errors:listaDeErrors.errors})
        }
     
    },
    telaFoto: (req, res) => {
        res.render('telaFoto')
    },
    salvarSobrePet: (req, res) => {
        let listaDeErrors = validationResult(req)

        if (listaDeErrors.isEmpty()) {
            let { nomeProduto, precoProduto } = req.body
            return res.redirect('sobrePet')
        }else {
            return res.render('telaFoto', {errors:listaDeErrors.errors})
        }
    },
    sobrePet: (req, res) => {
        res.render('sobrePet')
    },
    salvarArquivo: (req, res) => {
        let listaDeErrors = validationResult(req)

        if (listaDeErrors.isEmpty()) {
            let { nomeProduto, precoProduto } = req.body
            return res.redirect('confirmacao')
        }else {
            return res.render('sobrePet', {errors:listaDeErrors.errors})
        }
    },
    dadosPets: (req, res) => {
        return res.render('confirmacao')
    },
    viewAttForm: (req, res) => {
        let { id } = req.params
        let produtos = [
            {id:1, nome:'Produto x', preco:10},
            {id:2, nome:'Produto y', preco:20}
        ]
        res.render('editarProduto', {produto: produtos[id]})
    },
    editar: (req, res) => {
        let {nomeProduto, precoProduto} = req.body
        res.send('Você editou o produto ' + nomeProduto)
    },
    listarProduto: (req, res) => {
        let produtos = [
            {id:1, nome:'Produto x', preco:10},
            {id:2, nome:'Produto y', preco:20}
        ]
        res.render('listarProdutos', {listarProduto: produtos})
    },
    deletarProduto: (req, res) => {
        let {id} = req.params
        res.send('Estou deletando o produto ' + id)
    }

}

module.exports = produtoController
