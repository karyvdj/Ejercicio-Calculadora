var num1 = 0;
var num2 = 0;

/*function obtenerValor(valor){
 var valorMostrado = document.getElementById("resultado");
 valorMostrado.value += valor;
}*/

function inputRecibido(valor){
  var valorInicial=document.getElementById('resultado').value;
  if(valorInicial == '0'){
    document.getElementById('resultado').value= valor;
  }else{
     var valorNuevo=valor;
     valorInicial += valorNuevo;
     document.getElementById('resultado').value=valorInicial;
   }
 }

 /*function operaciones(op)
 {
     var ops = {
         sumar: function sumarNumeros(num1, num2) {
             return (parseInt(num1) + parseInt(num2));
         },

         restar: function restarNumeros(num1, num2) {
             return (parseInt(num1) - parseInt(num2));
         },

         multiplicar: function multiplicarNumeros(num1, num2) {
             return (parseInt(num1) * parseInt(num2));
         },

         dividir: function dividirNumeros(num1, num2) {
             return (parseInt(num1) / parseInt(num2));
         }
     }*/
