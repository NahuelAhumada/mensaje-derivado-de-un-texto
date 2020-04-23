function elMensajePuedeRedactarse(texto, mensaje){
    let resultado=false;
    if(texto==undefined || mensaje==undefined){
        return resultado;
    }else if(mensaje.length>texto.length){
        return resultado;
    }
    
    let caracteres=texto.trim().toLowerCase();
    let mensajeEv=mensaje.trim().toLowerCase();

}