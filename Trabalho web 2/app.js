const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-Parser")
const app = express()
const path = require("path")
const admin = require("./rotas/admin")
const mongoose = require("mongoose")


//CONFIGURAÇOES
  //body Parser
  app.use(bodyParser.urlencoded({extended:true}))
  app.use(bodyParser.json())
  //Mongoose
  mongoose.Promise = global.Promise
  mongoose.connect("mongodb://localhost/BDTrabalhoWEB").then(()=>{
    console.log("conectado ao mongo")
  }).catch((erro) =>{
    console.log("Falha ao conectar com mongo")
  })
  //Handlebars
  app.set('views', path.join(__dirname, 'views'));
  app.engine("handlebars", handlebars({defaultLayout: "main"}))
  app.set("view engine", "handlebars")

//ROTAS
app.use("/admin",admin)

//Outros
const PORT = 8081
  
app.listen(PORT,function() {
    console.log("Servidor rodando!")
})