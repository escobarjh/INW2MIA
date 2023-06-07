const leia = require("prompt-sync")()

let numero1
let numero2
let soma

numero1 = parseInt(leia("Digite o primeiro numero : "))
numero2 = parseInt(leia("Digite o segundo numero : "))


soma = numero1 + numero2
console.log("O resultado é "+soma)
