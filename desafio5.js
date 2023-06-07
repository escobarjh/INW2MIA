const leia = require("prompt-sync")()

let numero
numero = leia("digite um numero : ")

console.log("Raiz quadrada : "+(Math.sqrt(numero)))
console.log("Numero ao cubo : "+(Math.pow(numero,3)))