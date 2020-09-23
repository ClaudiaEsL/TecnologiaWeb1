function ObtenerFechaHora (){
    var fecha_actual = new Date();

    var day = fecha_actual.getDay();
    var month = fecha_actual.getMonth();
    var year = fecha_actual.getFullYear();

    var hora = fecha_actual.getHours();
    var minutos = fecha_actual.getMinutes();
    var segundos = fecha_actual.getSeconds();

    document.write(day+'/'+month+'/'+year+'Hora: '+hora+':'+minutos+':'+segundos)
}