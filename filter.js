var O = [1,2,3,4,5,6,7]
var D = ['x',4,'x',5,'y','5',20]


//INDEXOF

console.clear()
console.warn('INDEXoF')
console.table(
  {
    INDICE : O.indexOf(4),
  })

//FILTER

console.warn('FILTER')
console.table(
	{
    mayor_a_4 : O.filter((valor) => valor > 4)
  }
)

/*

	FILTER SOLO RETORNA EL VALOR!
  ** filter(valor,indice,array_completo) **
  ** console a todos **
  
*/

/*ELIMINANDO DUPLICADOS*/

console.error(D.indexOf(D[0]) === 0)
console.error(D.indexOf(D[1]) === 1)
console.error(D.indexOf(D[2]) === 2)
console.error(D.indexOf(D[3]) === 3)

console.warn('RESULTADO LISTA DUPLICADA')
console.table({
  sinDuplicado: D.filter((valor,indice,array) => {
    return array.indexOf(valor) === indice
  })
})
