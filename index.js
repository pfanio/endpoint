const Express = require('express')
const cors = require('cors')
const app = Express()
app.use(express.json());

const logins = [
    {username: "paulo@ph.com", password:"1234"},
    {username: "jose@bol.com", password:"4768"}
]

const options = {
    origin: "*"
  }
  app.use(cors(options));

app.get("/home", (req, res)=>{
    res.json({mensagem: 'Página Home', codigo: 200} )
})

app.get("/login", (req, res)=>{

    username = req.body.username;
    password = req.body.password;

    res.json({user: username, pass: password});
    
    //res.json({token: null} )

    //res.json({token: "auefiuefah837602"} )
})

app.get("/faleconosco", (req, res)=>{
    res.json({mensagem: 'Entre em contato com a gente!', codigo: 200} )
})

app.get("/vagas", (req, res)=>{
    res.json({mensagem: 'No momento não temos vagas para desenvolvedores!', codigo: 200} )
})

app.listen(process.env.PORT || 8020) 