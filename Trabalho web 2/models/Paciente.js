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

