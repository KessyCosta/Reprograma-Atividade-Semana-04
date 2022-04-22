// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

let fatorial = 5;
let resultado = fatorial;
for(let num = 1; num < fatorial; num++) {
    resultado *= num;
}
console.log(resultado)

