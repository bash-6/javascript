var a = [2,3,5,7,4,6,67,45,342,554,654]

console.table({
  Array: a,
  par: a.filter(el => el%2 ===0),
  impar: a.filter(el => el%2 === 1)
})
