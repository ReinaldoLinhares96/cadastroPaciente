const { text } = require("body-parser")
const mongoose = require ("mongoose")
const Schema = mongoose.Schema

//DEFININDO MODEL PACIENTE
const pacienteSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    endereco: {
        type: String,
        require: true
    },
    numero: {
        type: Number,
        require: true
    },
    bairro: {
        type: String,
        require: true
    },
    cidade: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: false
    },
    dataDeNascimento: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        require: true
    },
    diagnostico: {
        type: String,
        require: true
    }

})

mongoose.model("pacientes",pacienteSchema)


//INSERINDO DADOS DO PACIENTE

//const p1 = mongoose.model("pacientes")  //instancia
/*
new p1({
    nome: "Reinaldo linhares",
    endereco: "Rua jequitiba",
    numero: 389,
    bairro: "aracape",
    cidade: "Fortaleza",
    estado: "Ceara",
    telefone:"(85) 99138-6666",
    email: "reinaldo_linhres@hotmail.com",
    dataDeNascimento: "01/02/1996",
    cpf:"000.000.000-45",
    diagnostico: "Paciente com febre 38 graus, dor de cabeca e dor no corpo."
}).save().then(function() {
    console.log("model criado com sucesso!")
}).catch(function(erro) {
    console.log("Falha ao se  criar")
})*/