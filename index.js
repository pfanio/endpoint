const Express = require('express')
const app = Express()

app.get("/home", (req, res)=>{
    res.json({mensagem: 'Página Home', codigo: 200} )
})

app.listen(process.env.PORT || 8020)