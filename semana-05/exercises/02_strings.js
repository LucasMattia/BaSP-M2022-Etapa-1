console.log('exercise 02: strings');

//2. Strings
//2.a-  Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
//      toUpperCase)

var strbase = 'rosario central';
console.log('\tOriginal string: ' + strbase + '\n\tUpper case string: ' + strbase.toUpperCase());

//2.b-  Crear una variable de tipo string con la menos 10 caracteres y generar un nuevo string con los últimos 3
//      caracteres guardando el resultado en una nueva variable (utizar substring).

//  Se utilizará la variable "strbase" declarada previamente

var firsts_chars;
firsts_chars = strbase.substring(0,5);
console.log('\tOriginal string: ' + strbase + '\n\tfirst 5 characters: '+ firsts_chars);

//2.c-  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
//       caracteres guardando el resultado en una nueva variable (utilizar substring).

//  Se utilizará la variable "strbase" declarada previamente

var lasts_chars;
lasts_chars = strbase.substring(12,15);
console.log('\tOriginal string: ' + strbase +'\n\tlast 3 characters: '+ lasts_chars);

//2.d-  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
//      en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
//      toUpperCase, toLowerCase y el operador +).

//  Se utilizará la variable "strbase" declarada previamente

var str_d;
str_d = strbase.substring(0,1);
str_d = str_d.toUpperCase();
str_d = str_d + strbase.substring(1);
console.log('\tOriginal string: ' + strbase +'\n\tFirst char upper case: '+ str_d);

//2.e-  Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la
//      posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf)

//  Se utilizará la variable "strbase" declarada previamente

var blankpos;
blankpos = strbase.indexOf(' ');
console.log('\tOriginal string: ' + strbase +'\n\tBlank space position: '+ blankpos);

//2.f-  Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre
//      medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera
//      letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
//      toLowerCase y el operador +).

//  Se utilizarán variables declaradas previamente

var str_f, str_f1, str_f2;
str_f1 = strbase.substring(0,1);
str_f1 = str_f1.toUpperCase();
str_f1 = str_f1 + strbase.substring(1,blankpos);
blankpos = strbase.indexOf(' ');
str_f2 = strbase.substring(blankpos + 1, blankpos + 2);
str_f2 = str_f2.toUpperCase();
str_f2 = str_f2 + strbase.substring(blankpos + 2);
str_f = str_f1 + ' ' + str_f2;
console.log('\tOriginal string: ' + strbase +'\n\tString with first char of every word in upper case: '+ str_d);

