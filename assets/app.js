/* * 
  ? Ejercicio 1
  TODO: Mostrar todos los numeros impares que hay entre 2 numeros.
  *impares(2,10) // 3, 5, 7, 9
*/
let separador = '*** Fin del ejercicio ***\n ';

function impares(num1, num2) {
    console.log('Ejericio para conocer números impares entre 2 números'.toUpperCase());

  if (typeof num1 != 'number' || typeof num2 != 'number' || isNaN(num1) || isNaN(num2)) {
    console.log("Ingresa solo números por favor");  //Comprobación que ingrese datos correctos
  } else {
    console.log(`Números impares entre ${num1} y ${num2}`);
    // comprobar cual es el número mayor para iniciar el ciclo
    if(num1 <= num2){
        for(let i = num1; i <= num2; i++) {
            if (i % 2 !== 0) {
              console.log(i);       // Mostrar los numeros impares
            }
          }
    }else{
       for(let i = num2; i <= num1; i++ ){
            if(i%2 !== 0){
                console.log(i);     // Mostrar los numeros impares
            }
       }
    }
    
  }
  console.log(separador);
}
// * ALERTAS PARA PRIMER EJERCICIO
alert('Para conocer los números impares entre 2 números ingresalos en la siguiente ventana.😁');

let impares1 = Number(prompt('Ingresa el primer número'));
let impares2 = Number(prompt('Ingresa el segundo número'));

impares(impares1, impares2);


/* * 
  ? Ejercicio 2
  TODO: Mostrar la tabla de multiplicar de un número.
  
*/

function tabla(tabla){
  console.log('Ejercicio para mostrar la tabla de un número'.toUpperCase());
  if(typeof tabla != 'number' || isNaN(tabla)){
    console.log('Ingresa solo números');
  }else if(tabla == 0){
    console.log('La tabla del 0 es 0 siempre 😒');
  }else {
    console.log(`Tabla del ${tabla}`);
    for(let i = 1; i<= 10; i++){
      console.log(`${tabla} X ${i} = ${tabla * i}`);
    }
  }
  console.log(separador);
}

let tablaNum = Number(prompt('Ahora, para conocer la tabla de un número, ingresalo en esta ventana.😁', 0));

tabla(tablaNum);


/* * 
  ? Ejercicio 3
  TODO: Recibir un array de números, ordenarlo y mostrarlo.
  
*/

let array = [];
let arrayN;
let parar = false;
while(parar === false){
  arrayN = prompt('Ahora agrega números para ordenarlos y mostrarlos. Para dejar de agregar números escribe cualquier cosa que no sea un número');
  if(typeof arraryN == 'string' || isNaN(arrayN) || arrayN == null || arrayN == ''){
    parar = true;
  }else {
    array.push(parseInt(arrayN));
  }

}

function mostrarArray(){
  console.log('Ejercicio de agregar números a un array, ordenarlos y mostrarlos'.toUpperCase());
  console.log(`Ingresaste ${array.length} números: `);
  array.sort(function(a, b){return a - b});
  console.log(array);

  console.log(separador);
  
}
mostrarArray();



