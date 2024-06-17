let numeros = new Array(1,2,3,4,5)

console.log(numeros[2]);

let Pares = numeros.filter(function(numeros){
    return numeros % 2 === 0;
});

function multiplicaPorDois(numeros) {
    let dobro = [];           
    for (let i of numeros) {
      dobro.push(i * 2);
    }
    return numeros;   
  }
  var total = numeros.reduce(function(total,numero){
  return total + numero;

  }, 0);
  console.log(total);