function contando_vocales_consonantes(){
  let v = 0,
      c = 0;
for(let letra of cadena){
  if(/[aeiou]/.test(letra)){
    v++
  }
  if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)){
    c++
  }
}
  return console.table({
    cadena,
    v,
    c,
  })
}
contando_vocales_consonantes()
