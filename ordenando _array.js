//ARREGLOS
function A(){
var a = [1,4,3,9,5]
var b = a.sort((a,b) =>{
  return a-b
})
console.log(`mayor = ${b[0]}`)
console.log(`menor = ${b[b.length-1]}`)
}

A()
//otra manera
var c = [1,4,3,9,5,true]

console.info(Math.max(...c))
console.info(Math.min(...c))
