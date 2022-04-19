//3. Arrays

console.log('exercise 03: arrays');

//3.a-  Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
//      "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
'Octubre', 'Noviembre', 'Diciembre'];
console.log('\tMonth 5:\t' + months[4], '\n\tMonth 11:\t' + months[10]);

//3.b-  Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

months.sort();
console.log('\tMonths ordered alphabeticaly:\n\t' + months);

//3.c-  Agregar un elemento al principio y al final del array (utilizar unshift y push).

months.unshift('delantero');
months.push('final');
console.log('\tArray with added elements:\n\t'+ months);

//3.d-  Quitar un elemento del principio y del final del array (utilizar shift y pop).

months.shift();
months.pop();
console.log('\tArray with subtracted elements:\n\t'+ months);

//3.e-  Invertir el orden del array (utilizar reverse).

months.reverse();
console.log('\tArray inverted:\n\t'+ months);

//3.f-  Unir todos los elementos del array en un único string donde cada mes este separado por un guión -
//      (utilizar join).

console.log('\tArray with jointed elements:\n\t'+ months.join('-'));

//3.g-  Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var arr;
months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
'Octubre', 'Noviembre', 'Diciembre'];

arr = months.slice(4,-1);
console.log('\tNew array, from Mayo to Noviembre:\n\t'+ arr);
