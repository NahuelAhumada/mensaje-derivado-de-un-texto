function elMensajePuedeRedactarse(texto, mensaje){
    let resultado=false;
    if(texto==undefined || mensaje==undefined){
        return resultado;
    }else if(mensaje.length>texto.length){
        return resultado;
    }
    //Evaluo sin espacios y en minuscula
    let caracteres=texto.trim().toLowerCase();
    let mensajeEv=mensaje.trim().toLowerCase();
    //Recorro la lista de carcateres del texto fuente
    for(let i =0;i<caracteres.length&&!resultado;i++){
        let valor=caracteres[i];
        if(mensaje.includes(valor)){

        }
    }
}