const express = require("express")
const rota = express.Router()
const handlebars = require("express-handlebars")
const bodyParser = require("body-Parser")
const mongoose = require("mongoose")
const { ObjectID, ObjectId } = require("bson")
require("../models/Paciente")
const Paciente = mongoose.model("pacientes")

rota.get("/pacientes",(req,res)=>{
    res.render("pacientes")
})
//lista de pacientes cadastrados no banco de dados
rota.get("/pacientes/lista",(req,res) =>{
    Paciente.find().then((pacientes) =>{
        res.render("lista" , {pacientes: pacientes.map(Paciente => Paciente.toJSON())})
    }).catch((erro) =>{
        req.flash("error_msg", "Houve um erro ao listar pacientes")
        res.redirect("pacientes")
    })
})

//inserindo dados da pag no bando de dados
rota.get("/pacientes/add",(req,res) =>{
    res.render("addPacientes")
})

rota.post("/pacientes/nova",(req,res) =>{
    const novoPaciente = {
        nome: req.body.Nome,
        endereco: req.body.Endereco,
        numero: req.body.Numero,
        bairro: req.body.Bairro,
        cidade: req.body.Cidade,
        estado: req.body.Estado,
        telefone: req.body.Telefone,
        email: req.body.Email,
        cpf: req.body.cpf,
        data: req.body.Data,
        diagnostico: req.body.Diagnostico
    }
    new Paciente(novoPaciente).save().then(() => {
         console.log("Paciente salvo com sucesso")
    }).catch((erro)=>{
         console.log("Falha ao salvar Paciente")
    })
    res.render("Pacientes")
})

rota.get("/pacientes/lista",(req,res) =>{
    Paciente.find().then((pacientes) =>{
        res.render("addPacientes",{pacientes: pacientes})
    }).catch((erro) =>{
        console.log("Falha em lista")
    })
})

rota.get("/pacientes/edit/:id",(req,res)=>{
    Paciente.find({_id: req.params.id}).then((pacientes)=>{
        res.render("edit", {pacientes: pacientes.map(Paciente => Paciente.toJSON())})
        console.log("entro aqui")
    }).catch((erro) =>{
        console.log("Edicao mal sussedida 1")
        res.render("pacientes")
    })
})

rota.post("/pacientes/edit", (req,res)=>{
    Paciente.findOne({_id: req.body.id}).then((pacientes)=>{
        pacientes.nome = req.body.Nome
        pacientes.endereco = req.body.Endereco
        pacientes.numero = req.body.Numero
        pacientes.bairro = req.body.Bairro
        pacientes.cidade = req.body.Cidade
        pacientes.estado = req.body.Estado
        pacientes.telefone = req.body.Relefone
        pacientes.email = req.body.Email
        pacientes.cpf = req.body.cpf
        pacientes.data = req.body.Data
        pacientes.diagnostico = req.body.Diagnostico

        pacientes.save().then(()=>{
            console.log("Editado com sucesso")
            res.render("lista")
        }).catch((erro) =>{
            console.log("Edicao mal sussedida 3")
            res.render("pacientes")
        })
    }).catch((erro) =>{
        console.log("Edicao mal sussedida 2")
        res.render("pacientes")
    })
})

rota.post("/pacientes/deletar", (req,res)=>{
    Paciente.deleteOne({_id: req.body.id}).then(()=>{
        console.log("deletado com sucesso")
        res.render("pacientes")
    }).catch((erro)=>{
        res.render("pacientes")
    })
})

module.exports = rotaconst express = require("express")
const rota = express.Router()
const handlebars = require("express-handlebars")
const bodyParser = require("body-Parser")
const mongoose = require("mongoose")
const { ObjectID, ObjectId } = require("bson")
require("../models/Paciente")
const Paciente = mongoose.model("pacientes")

rota.get("/pacientes",(req,res)=>{
    res.render("pacientes")
})
//lista de pacientes cadastrados no banco de dados
rota.get("/pacientes/lista",(req,res) =>{
    Paciente.find().then((pacientes) =>{
        res.render("lista" , {pacientes: pacientes.map(Paciente => Paciente.toJSON())})
    }).catch((erro) =>{
        req.flash("error_msg", "Houve um erro ao listar pacientes")
        res.redirect("pacientes")
    })
})

//inserindo dados da pag no bando de dados
rota.get("/pacientes/add",(req,res) =>{
    res.render("addPacientes")
})

rota.post("/pacientes/nova",(req,res) =>{
    const novoPaciente = {
        nome: req.body.Nome,
        endereco: req.body.Endereco,
        numero: req.body.Numero,
        bairro: req.body.Bairro,
        cidade: req.body.Cidade,
        estado: req.body.Estado,
        telefone: req.body.Telefone,
        email: req.body.Email,
        cpf: req.body.cpf,
        data: req.body.Data,
        diagnostico: req.body.Diagnostico
    }
    new Paciente(novoPaciente).save().then(() => {
         console.log("Paciente salvo com sucesso")
    }).catch((erro)=>{
         console.log("Falha ao salvar Paciente")
    })
    res.render("Pacientes")
})

rota.get("/pacientes/lista",(req,res) =>{
    Paciente.find().then((pacientes) =>{
        res.render("addPacientes",{pacientes: pacientes})
    }).catch((erro) =>{
        console.log("Falha em lista")
    })
})

rota.get("/pacientes/edit/:id",(req,res)=>{
    Paciente.find({_id: req.params.id}).then((pacientes)=>{
        res.render("edit", {pacientes: pacientes.map(Paciente => Paciente.toJSON())})
        console.log("entro aqui")
    }).catch((erro) =>{
        console.log("Edicao mal sussedida 1")
        res.render("pacientes")
    })
})

rota.post("/pacientes/edit", (req,res)=>{
    Paciente.findOne({_id: req.body.id}).then((pacientes)=>{
        pacientes.nome = req.body.Nome
        pacientes.endereco = req.body.Endereco
        pacientes.numero = req.body.Numero
        pacientes.bairro = req.body.Bairro
        pacientes.cidade = req.body.Cidade
        pacientes.estado = req.body.Estado
        pacientes.telefone = req.body.Relefone
        pacientes.email = req.body.Email
        pacientes.cpf = req.body.cpf
        pacientes.data = req.body.Data
        pacientes.diagnostico = req.body.Diagnostico

        pacientes.save().then(()=>{
            console.log("Editado com sucesso")
            res.render("lista")
        }).catch((erro) =>{
            console.log("Edicao mal sussedida 3")
            res.render("pacientes")
        })
    }).catch((erro) =>{
        console.log("Edicao mal sussedida 2")
        res.render("pacientes")
    })
})

rota.post("/pacientes/deletar", (req,res)=>{
    Paciente.deleteOne({_id: req.body.id}).then(()=>{
        console.log("deletado com sucesso")
        res.render("pacientes")
    }).catch((erro)=>{
        res.render("pacientes")
    })
})

module.exports = rota
