//6.    FUNCTIONS

console.log('Exercise 06: Functions');

//6.a-  Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
//      el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

var a = Math.round(Math.random()*100), b = Math.round(Math.random()*100), sum;
function addition (x , y){
    return x + y;
}
sum = addition(a, b);
console.log('\t6.a: a = '+ a +'\tb = ' + b + '\tb + a = ' + sum);

//6.b-  A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un
//      número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como
//      resultado.

var h = 6.7;
function additionB (x , y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        window.alert('Error: parameter type invalid');
        return NaN;
    }
    return x + y;
}
sum = additionB(a,h);
console.log('\t6.b: ' + sum);

//6.c-  Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número
//      entero.

function valInt(x){
    if(typeof x !== 'number'){
        window.alert('Error: parameter type invalid');
        return NaN;
    }else if(Number.isInteger(x) === true){
        return true;
    }else{
        return false;
    }
}
console.log('\t6.c: Not a number: ' + valInt('asdasd'));
console.log('\t6.c: Not an integer: ' + valInt(6.5));
console.log('\t6.c: An integer: ' + valInt(8));


//6.d-  A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso
//      que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).


function additionD (x , y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        window.alert('Error: parameter type invalid');
        return NaN;
    }else if (Number.isInteger(x) !== true || Number.isInteger(y) !== true){
        window.alert('Some numbers are not integers. They will be rounded.');
        x = Math.round(x);
        y = Math.round(y);
        return x + y;
    }else{
        return x + y;
    }
}
sum = additionD (a,h);
console.log('\t6.d: ' + sum);

//6.e-  Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
//      que todo siga funcionando igual.

function additionE (x , y){
    x = valid(x);
    y = valid(y);
    return x + y;
}
function valid(x){
    if(typeof x !== 'number'){
        window.alert('Error: parameter type invalid');
        return NaN;
    }else if (Number.isInteger(x) !== true){
        window.alert('A number is not an integer. It will be rounded.');
        x = Math.round(x);
        return x;
    }else{
        return x;
    }
}
console.log('\t6.e: ' + additionE(5,5.8));