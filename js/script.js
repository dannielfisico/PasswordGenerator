// const minusculas = 'abcdefghijklmnopqrstuvxzyw'
// const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXZYW'
// const numeros = '0123456789'
// const caracteres = '!@#$%&*+'
const env = require('./.env')

console.log(env.minusculas)
console.log(minusculas[3])
function gerar(){
    
    const senha = []
    senha.push(env.minusculas[5])
    console.log(senha)
    alert(senha)
}
    