//Tabuada--	Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

function tabuada(num) {
    for(let contador = 1; contador <= 10; contador++) {
      multiplica = num * contador;
      result = console.log(`${num} x ${contador} = ${multiplica}`)
    }
}
console.log(tabuada(2))
