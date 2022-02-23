
function mediana(lista){
    const list = lista.sort();
    const size = list.length;
    console.log(list);
    if(size % 2 == 0){
        let result = parseInt(list.length/2);
        let mediaAritmetica = (list[result] + list[result - 1])/2;
        console.log("La mediana es: " + mediaAritmetica);
    }else{
        let result = parseInt(list.length/2);
        console.log("La mediana es: " + list[result]);
    }

  
    
    //return sumaLista/list.length;
}
