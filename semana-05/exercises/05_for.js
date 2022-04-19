//5. FOR

console.log('Exercise 05: For');

//5.a-  Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para
//      mostrar una alerta utilizando cada una de las palabras.

var arr05 = ['first','second','third','fourth','fifth'];
var i;

for (i = 0; i < 5; i++){
    window.alert(arr05[i]);
}

//5.b-  Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
//      modificada.

var arr05b;

for (i = 0; i < 5; i++){
    arr05b = arr05[i].substring(0,1);
    arr05b = arr05b.toUpperCase();
    arr05[i] = arr05b + arr05[i].substring(1);
    window.alert(arr05[i]);
}

//5.c-  Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
//      bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con
//      la cadena completa.

var sentence;

for (i = 0; i < 5; i++){
    if(i == 0){
        sentence = arr05[i];
    }else{
        sentence = sentence + arr05[i];
    }
}

window.alert(sentence);

//5.d-  Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
//      decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0
//      hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

var arr05d = [];

for(i = 0; i < 10; i++){
    arr05d[i] = i;
}

console.log('\t5.d: ' + arr05d);
