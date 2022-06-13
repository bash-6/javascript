console.table( (function(){
  let arreglo = [3,4,5,6,7,70,121,2,81,34]
  
  return {
    par: arreglo.filter(n => n % 2 === 0),
    impar: arreglo.filter(n => n % 2 === 1),
  }
  
})())
