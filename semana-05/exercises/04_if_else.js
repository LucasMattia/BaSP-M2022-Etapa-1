//4. IF ELSE

console.log('Exercise 04: If else');

//4.a-  Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
//      mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

var numEx04 = Math.random();
if (numEx04 < 0.5){
    window.alert('Lower than 0,5');
}else if (numEx04 > 0.5){
    window.alert('Greater than 0,5');
}

//4.b-  Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//      i.  “Bebe” si la edad es menor a 2 años;
//      ii. “Niño” si la edad es entre 2 y 12 años;
//      iii.“Adolescente” entre 13 y 19 años;
//      iv. “Joven” entre 20 y 30 años;
//      v.  “Adulto” entre 31 y 60 años;
//      vi. “Adulto mayor” entre 61 y 75 años;
//      vii.“Anciano” si es mayor a 75 años.

var age = Math.round(Math.random()*100);
if(age < 2){
    window.alert('Bebe (edad: '+age+' años)');
}else if(age < 13){
    window.alert('Niño (edad: '+age+' años)');
}else if(age < 20){
    window.alert('Adolescente (edad: '+age+' años)');
}else if(age < 31){
    window.alert('Joven (edad: '+age+' años)');
}else if(age < 61){
    window.alert('Adulto (edad: '+age+' años)');
}else if(age < 76){
    window.alert('Adulto mayor (edad: '+age+' años)');
}else{
    window.alert('Anciano (edad: '+age+' años)');
}

