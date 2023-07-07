// //1

// function mayorMenor(num1,num2) {
//     if (num1>num2) {
//         console.log("El primer numero es mayor")
//     } else if (num1<num2){
//         console.log("El segundo numero es mayor")
//     } else{
//         console.log("Los numeros son iguales.")
//     }
// }
// mayorMenor(4,1)

// //2

// function iguales(num1,num2) {
//     if (num1==num2) {
//         console.log("Los numeros son iguales.")
//     } else{
//         console.log("Los numeros no son iguales.")
//     }
// }
// iguales(1,2)

// //3

// function mayorMenorIgual(num1,num2) {
//     if (num1>num2) {
//         console.log(num1 + " es mayor que " + num2)
//     } else if (num1<num2){
//         console.log(num2 + " es mayor que "+ num1)
//     } else{
//         console.log("Los numeros son iguales.")
//     }
// }
// mayorMenorIgual(4,4)

// //4

// function masChico(num1,num2,num3) {
//     if (num1>num2 && num1>num3) {
//         console.log(num3 + " es el numero mas chico")
//     } else if (num1<num2 && num1<num3){
//         console.log(num1 + " es el numero mas chico")
//     } else {
//         console.log(num2 + " es el numero mas chico")
//     }
// }
// masChico(1,6,15)

// //5 

// function masAlto(persona1, persona2) {
//     if (persona1.altura > persona2.altura) {
//       return persona1.nombre;
//     } else {
//       return persona2.nombre;
//     }
//   }
//   function masEdad(persona1, persona2) {
//     if (persona1.edad > persona2.edad) {
//       return persona1.nombre;
//     } else {
//       return persona2.nombre;
//     }
//   }
//   let persona1 = {
//     nombre: "David",
//     edad: 20,
//     altura: 1.80,
//   };
//   let persona2 = {
//     nombre: "Miguel",
//     edad: 25,
//     altura: 1.70,
//   };
//   console.log(`La persona más alta es: ${masAlto(persona1, persona2)}`);
//   console.log(`La persona con más edad es: ${masEdad(persona1, persona2)}`);

// //6

// function conduce(tuEdad,tuAltura,tuVision) {
//     if (tuEdad>=18 && tuAltura>=150 && tuVision>=8) {
//         return tuEdad,tuAltura,tuVision;
//     } else {
//         console.log(tuNombre + "no estas apto para conducir")
//     }
// }
// let tuNombre=prompt('Ingrese su nombre')
// let tuEdad=prompt('Ingrese su edad')
// let tuAltura=prompt('Ingrese su altura')
// let tuVision=prompt('Ingrese su nivel de visión de 1 a 10')
// console.log(tuNombre + " si estas apto para conducir");

// //7

// let nombre = prompt("Digita tu nombre:");
// let paseVIP = prompt("Cuenta con un pase VIP? (si/no)");
// let compra = prompt("Desea comprar su pase? (si/no)");
// let dinero = prompt("El pase tiene un valor de $1000 desea comprarlo? (si/no)");
// if (nombre === "Carlos") {
//   console.log("Bienvenido Carlos tienes entrada libre!");
// } else {
//     if (paseVIP === "si") {
//         console.log(`Bienvenido ${nombre}`);
//     } else {
//         if (compra === "no") {
//             console.log("Lo sentimos, esperamos verte pronto.");
//         } else {
//             if (dinero === "si") {
//                 console.log(`Este es su pase!. Bienvenido ${nombre}`);
//             } else {
//                 console.log("Lo sentimos, ingreso mal un dato.");
//             }
//         }
//     }
// }

// //8

// let numeroIncognita = 8;
// let numeroIngresado;
// numeroIngresado = prompt("Ingrese un numero del 1 al 10:");
// if (numeroIngresado>10 && numeroIngresado<1) {
//     console.log("Numero erroneo.");
// } else {
//     if (numeroIngresado == numeroIncognita) {
//         console.log("Ganaste.");
//     } else {
//         if (numeroIngresado>numeroIncognita) {
//             console.log("El numero que ingresaste es mayor");
//         } else {
//             console.log("El numero que ingresaste es menor");
//         }
//     }
// }
// numeroIngresado = prompt("Ingrese un numero del 1 al 10:");
// if (numeroIngresado>10 && numeroIngresado<1) {
//     console.log("Numero erroneo.");
// } else {
//     if (numeroIngresado == numeroIncognita) {
//         console.log("Ganaste.");
//     } else {
//         if (numeroIngresado>numeroIncognita) {
//             console.log("El numero que ingresaste es mayor");
//         } else {
//             console.log("El numero que ingresaste es menor");
//         }
//     }
// }
// numeroIngresado = prompt("Ingrese un numero del 1 al 10:");
// if (numeroIngresado>10 && numeroIngresado<1) {
//     console.log("Numero erroneo.");
// } else {
//     if (numeroIngresado == numeroIncognita) {
//         console.log("Ganaste.");
//     } else {
//         if (numeroIngresado>numeroIncognita) {
//             console.log("El numero que ingresaste es mayor");
//         } else {
//             console.log("El numero que ingresaste es menor");
//         }
//     }
// }

// //9

// let edad = prompt("Ingresa tu edad")
// if (edad <= 12) {
//     console.log("Eres un infante")
//     } else {
//         if (edad>=13 && edad<=18) {
//             console.log("Eres un adolecente")
//         } else {
//             if (edad>=19 && edad<=44) {
//                 console.log("Eres un mayor joven")
//             } else {
//                 if (edad>= 45 && edad<=99) {
//                     console.log("Eres un anciano")
//                 } else {
//                     console.log("En realidad esa es tu edad?")
//                 }
//             }
//         }
//     }

// //10

// let jugador1 = prompt("Jugador 1, elige piedra, papel o tijeras:");
// let jugador2 = prompt("Jugador 2, elige piedra, papel o tijeras:");

// if (jugador1 == jugador2) {
//     console.log("Empate!");
// } else {
//     if (jugador1 == "piedra" && jugador2 == "tijeras") {
//         console.log("Jugador 1 gana!");
//     } else {
//         if (jugador1 == "papel" && jugador2 == "piedra") {
//             console.log("Jugador 1 gana!");
//         } else {
//             if (jugador1 == "tijeras" && jugador2 == "papel") {
//                 console.log("Jugador 1 gana!");
//             } else {
//                 console.log("Jugador 2 gana!");
//             }
//         }
//     }
// }

// // 11

// let color = prompt("Ingrese un color:");

// switch (color) {
//   case "blanco":
//   case "negro":
//     console.log("Falta de color.");
//     break;
//   case "verde":
//     console.log("El color de la naturaleza.");
//     break;
//   case "azul":
//     console.log("El color del agua.");
//     break;
//   case "amarillo":
//     console.log("Elcolor del sol.");
//     break;
//   case "rojo":
//     console.log("El color del fuego.");
//     break;
//   case "marron":
//     console.log("El color de la tierra.");
//     break;
//   default:
//     console.log("Excelente elección, no lo teníamos pensado.");
//     break;
// }

// // 12

// let num1 = parseFloat(prompt("Ingrese el primer numero:"));
// let num2 = parseFloat(prompt("Ingrese el segundo numero:"));
// let operacion = prompt("Ingrese la operacion (+, -, *, /):");
// let resultado

// switch (operacion) {
//   case "+":
//     resultado = num1 + num2;
//     console.log(`El resultado de ${num1} + ${num2} es ${resultado}`);
//     break;
//   case "-":
//     resultado = num1 - num2;
//     console.log(`El resultado de ${num1} - ${num2} es ${resultado}`);
//     break;
//   case "*":
//     resultado = num1 * num2;
//     console.log(`El resultado de ${num1} * ${num2} es ${resultado}`);
//     break;
//   case "/":
//     if (secondNumber == 0) {
//         console.log("Error nunca se divide por 0.");
//     } else {
//       resultado = num1 / num2;
//       console.log(`El resultado de ${num1} / ${num2} es ${resultado}`);
//     }
//     break;
//   default:
//     alert("Error operacion invalida");
//     break;
// }

// // 13

// let dni = prompt("Ingrese su DNI:");
// let nombre = prompt("Ingrese su nombre:");
// let apellido = prompt("Ingrese su apellido:");
// let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):");
// let lugarNacimiento = prompt("Ingrese su lugar de nacimiento:");
// console.log(`
// DNI: ${dni}
// Nombre: ${nombre}
// Apellido: ${apellido}
// Fecha de nacimiento: ${fechaNacimiento}
// Lugar de nacimiento: ${lugarNacimiento}
// `);
// let confirma = prompt("Los datos son correctos? (si/no)");
// if (confirma === "si") {
//   let dniObjeto = {
//     DNI: dni,
//     Nombre: nombre,
//     Apellido: apellido,
//     FechaDeNacimiento: fechaNacimiento,
//     LugarDeNacimiento: lugarNacimiento,
//   };
//   console.table(dniObjeto);
//   console.log("Registro exitoso");
// } else {
//   console.log("Vuelva a intentarlo en 1 mes.");
// }





