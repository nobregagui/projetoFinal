const responsividade = {
    index: (req, res) => {
        return res.render('responsividade')
    },
    salvarForm: (req, res) => {
        console.log(req.body)
    }
}

module.exports = responsividade