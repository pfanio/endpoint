const Express = require('express')
const app = Express()

app.get("/home", (req, res)=>{
    res.json({mensagem: 'Página Home', codigo: 200} )
})

app.get("/faleconosco", (req, res)=>{
    res.json({mensagem: 'Entre em contato com a gente!', codigo: 200} )
})

app.get("/vagas", (req, res)=>{
    res.json({mensagem: 'No momento não temos vagas!', codigo: 200} )
})

app.listen(process.env.PORT || 8020) 