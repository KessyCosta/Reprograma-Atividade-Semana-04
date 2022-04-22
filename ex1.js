//For/Break/Continue---	Utilize a estrutura de repetição FOR para imprimir no console conforme instruções:
//a) números de 1 a 50  
//b) números de 1 a 50, quando chegar no número 25 interrompa a instrução e pare o loop 
//c) números de 1 a 50, quando chegar no número 10 pule a instrução|

// A) números de 1 a 50
console.log('Início da contagem')
for (let contador = 1; contador <= 50; contador++) {
    console.log(contador)
}
console.log('Fim da contagem')

// B)  números de 1 a 50, quando chegar no número 25 interrompa a instrução e pare o loop 
console.log('Início da contagem')
for(let contador = 1; contador <= 50; contador++) {
    
    if(contador === 25) {
        break;
    }
    console.log(contador);
}
console.log('Parou a contagem em 25!')

// C) números de 1 a 50, quando chegar no número 10 pule a instrução|
console.log('Início da contagem')
let contador = 0;

while(contador < 50) {
    contador++

    if(contador === 10) {
        console.log('CONTINUE');
        continue;
    }
    console.log(contador)
}
console.log('Fim da contagem')

