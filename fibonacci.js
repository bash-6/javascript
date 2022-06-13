

/*
FIBONACCI

*/

(
    
    function (){
    let a = 0,
        b = 1,
        r = b;
  	console.clear()
      
    console.groupCollapsed('FIBONACCI?')
      console.error('sucesion de numeros infinitos')
      console.error('cada término es la suma de los dos anteriores')
      console.info('iniciando el 0-1')
    console.groupEnd()
    console.groupCollapsed('REPRESENTACION')
    console.table({'0-1':[1,2,3,5,8,13,'...','infinito']})
    console.groupEnd()
    console.groupCollapsed('SUCESION MANUAL')
      console.error('0 + 1 = 1')
      console.error('1 + 1 = 2')
      console.error('1 + 2 = 3')
      console.error('2 + 5 = 2')
      console.error('......')
    console.groupEnd()
  console.groupCollapsed('secuencia FIBONACCI en JS')
     console.info(
       `a=${a}  -  b=${b}  -  r=b`
     )
    for(let i=0; i<6; i++){
     console.warn('vuelta',i)
      console.info(
       `a(${a})  +  b(${b})  =  r(${a+b})`
     )
     
      r = a + b
      a = b
      b = r 
     
      console.error(
       `a = b  :  b = r`
     )
    }
console.groupEnd()
    console.groupCollapsed('CODIGO')
    console.log(
      `
    let a = 0;
    let b = 1;
    let c = a + b
    for( inicia 0; MAX 10; AUMENTA 1){
    c = a + b
    a = b
    b = c 
    }
    `
    )
console.groupEnd()
console.groupCollapsed('resultado')
	console.table({'0-1':(function(){
    var a=0,
    b=1,
    c=0
    z=[];
  	for(var i=0;i<=5;i++){
    c=a+b
    a = b
    b = c
    z.push(c)
  }
  return z     
               }
  )()})
console.groupEnd()
   
    
    
  }
  
  
  
  
  )()
