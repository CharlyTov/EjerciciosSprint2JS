//1
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "! Bienvenido a JavaScript.");
  }
        // Llamada a la función con argumento
  saludar("Carlos Tovar");
//2
function multiplicar(num1,num2){
    console.log(num1*num2)  
  }
  multiplicar(9,2)
//3
function areaTriangulo (base,altura){
    console.log("El area del triangulo es: " + base * altura / 2); 
}
areaTriangulo(5,3)
function perimetroTriangulo (L1,L2,L3){
    console.log("El perimetro del triangulo es: " + (L1+L2+L3)); 
}
perimetroTriangulo(4,5,6);
//4
function calcularPrecio(precio,cantidad) {
    if (cantidad>=10 && cantidad<20) {
        calcularPrecio = cantidad*precio - (cantidad*precio*0.1);
        console.log("El valor con el 10% de descuento es: "+ calcularPrecio)
    } else if (cantidad>=20) {
        calcularPrecio = cantidad*precio - (cantidad*precio)*0.2;
        console.log("El valor con el 20% de descuento es: "+ calcularPrecio)
    } else{
        calcularPrecio = cantidad*precio;
        console.log("El valor sin descuento es: "+ calcularPrecio)
    }
    
}
calcularPrecio(100,20);
//5
function esMayorDeEdad(edad){
   if(edad>=18)
   console.log("Es mayor de edad")
   if(edad<17)
   console.log("Es menor de edad")
}
esMayorDeEdad(18);
//6
function calcularImpuesto(ingreso){
    if (ingreso<=10000) {
        calcularImpuesto = ingreso - (ingreso*0.1);
        console.log("El valor del impuesto con el 10% de descuento es: "+ calcularImpuesto)
    } else if (ingreso>=10000 && ingreso<=20000){
        calcularImpuesto = ingreso - (ingreso*0.15);
        console.log("El valor del impuesto con el 15% de descuento es: "+ calcularImpuesto)
    } else {
        calcularImpuesto = ingreso - (ingreso*0.2);
        console.log("El valor del impuesto con el 20% de descuento es: "+ calcularImpuesto)
    }
}
calcularImpuesto(150000)
//7

function verificaDia(dia) {
    switch (dia) {
        case "1":
            console.log("Dia laboral")
        break;
        case "2":
            console.log("Dia laboral")
        break;
        case "3":
            console.log("Dia laboral")
        break;
        case "4":
            console.log("Dia laboral")
        break;
        case "5":
            console.log("Dia laboral")
        break;
        case "6":
            console.log("Fin de semana")
        break;
        case "7":
            console.log("Fin de semana")
        break;
       
        default:
            console.log("Dia no valido")
            break;
    }
}
verificaDia('2')



