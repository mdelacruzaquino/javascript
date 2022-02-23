


function calcularPrecioConDescuento(precio,descuento){
    return (precio * (100 - descuento))/100;
}

function hacerDescuento(){
    const precio = document.getElementById("inputPrice").value;
    const descuento = document.getElementById("inputDiscount").value;
    const precioFinal = calcularPrecioConDescuento(precio,descuento)

    document.getElementById("resultPrice").innerText = "El prcio con decuento es: $" + precioFinal;
}