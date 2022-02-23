

function mediaAritmetica(list){

    const sumaLista = list.reduce(
        function (acumulado = 0,elemento) { return acumulado + elemento }
    );
    
    return sumaLista/list.length;
}





//console.log(mediaAritmetica());
