const input = require("prompt-sync")()

const numero = Number(input("Digite um número:"))

if(numero < 0){
    console.log("Negativo")
} else {
    console.log("Não negativo")
}     