function invertir (tcNum){
var tcNum = prompt("Ingrese el número de su tarjeta de crédito");
var newNums = [];
for (var i = 0; i < tcNum.length; i++) {
  var item = tcNum.pop();                     //// pasar numeros a un array en orden inverso
  tcNum.splice(i, 0, item);                     // pop para eliminar el ultimo elemento del arreglo
}
 return newNums;
  }                                              // splice para agregar el elememto eliminado al arreglo

 //obtener la posicion de los números pares
 //los numeros obtenidos multiplicarlos por 2

 var newNums =

 //Nota para los revisores: No pude continuar la funcion, no logré unir la primera parte con lo que se pide, al igual que en el anterior
