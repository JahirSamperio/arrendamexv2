const vistaPrincipal = (req, res) => {
    res.render('home')
}
const vistaTables = (req, res) => {
    res.render('tables')
}
const vistaBilling = (req, res) => {
    res.render('billing')
}
module.exports = {
    vistaPrincipal,
    vistaTables,
    vistaBilling
}