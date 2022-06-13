/*
crear un programa que sume las deudas de nuestros clientes, para saber cuanto se les cobrara al final del mes imprimir
*/
function sumar(cliente,deuda_1,deuda_2){
  var total = deuda_1 + deuda_2
  console.log('El cliente '+cliente+' tiene una deuda de '+total)
}
//cliente jose
var cliente_jose = 'jose'
var jose_letra_1 = 34
var jose_letra_2 = 12

//cliente cristina
var cliente_cristina = 'cristina'
var cristina_letra_1 = 45
var cristina_letra_2 = 67

//cliente fiorela
var cliente_fiorela = 'fiorela'
var fiorela_letra_1 = 44
var fiorela_letra_2 = 89

//cliente jose
sumar(cliente_jose,jose_letra_1,jose_letra_2)
//cliente cristina
sumar(cliente_cristina,cristina_letra_1,cristina_letra_2)
//cliente fiorela
sumar(cliente_fiorela,fiorela_letra_1,fiorela_letra_2)
