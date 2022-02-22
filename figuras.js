// Lados del cuadrado
console.group("Cuadrado");


function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();


// Lados del triangulo
console.group("Triangulo");


function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
function areaTriangulo(altura,base){
    return (base * altura)/2;
}


console.groupEnd();



// codigo del circulo
console.group("Circulo");


function diametroCirculo(radio){
    return radio * 2;
}
function perimetroCirculo( radio){
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio){
    return radio * radio * Math.PI;
}

console.groupEnd();


// Aqui interactumos con html
function calcularPerimetroCuadrado(){
    const valor = document.getElementById("inputCuadrado").value;    
    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const valor = document.getElementById("inputCuadrado").value;    
    const area = areaCuadrado(valor);
    alert(area);
}