var fecha = '1990-04-07'
fecha = fecha.replace(new RegExp('-','ig'),',')
var t_milisegundos_años = 1000*60*60*24*365,
    f_nacimiento = new Date(fecha),
    hoy_milisegundos = new Date().getTime(),
    f_nacimiento_milisegundos = f_nacimiento.getTime(),//naciimiento
    edad = Math.floor((hoy_milisegundos-f_nacimiento_milisegundos)/t_milisegundos_años)

console.log(`ha pasado ${edad} años desde ${f_nacimiento.getFullYear()}`)
