var a = [23,12,5,77,50,7,3,8,9,11]

console.table({
  arary: a,
  ascendente: a.map(el =>el).sort((a,b)=>a-b),
  descendente: a.map(el => el).sort((a,b)=> a-b).reverse(),
})
