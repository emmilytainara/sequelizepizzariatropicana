let db = require("./db");
let Pessoa = require ("./model/Pessoa");

async function sicronizar(){
   await db.sync 
} 
async function inserir(obj) {
      let res = await Pessoa.create(obj)
      console.log(res)
}
let p1 = {nome: "Emmily", sobrenome: "Lima", endereco: "Rua da Emmily", telefone: "99999999"};
let p2 = {nome: "Fulano", sobrenome: "Silva", endereco: "Rua do fulano", telefone: "8888888"};
let p3 = {nome: "Beltrano", sobrenome: "Laureano", endereco: "Rua do Laureano", telefone: "7777777"};
let p4 = {nome: "Silvano", sobrenome: "Branco", endereco: "Rua do falecido", telefone: "5555555"};
let p5 = {nome: "Leviana", sobrenome: "Marta", endereco: "Rua da Leviana", telefone: "444444444"};

inserir (p1, p2, p3, p4, p5);

async function consultar(){
    let resultado = await Pessoa.findAll();
    console.log(resultado);
   
}
consultar(p1, p2, p3, p4, p5);

sicronizar();