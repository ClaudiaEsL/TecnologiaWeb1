/*Obtener la fecha y hora actual */
var fecha_actual = new Date();
/*Fecha*/
var day = fecha_actual.getDay();
var month = fecha_actual.getMonth();
var year = fecha_actual.getFullYear();
/*Hora */
var hora = fecha_actual.getHours();
var minutos = fecha_actual.getMinutes();
var segundos = fecha_actual.getSeconds();

document.write(' Fecha: '+day+'/'+month+'/'+year+' Hora: '+hora+':'+minutos+':'+segundos)
