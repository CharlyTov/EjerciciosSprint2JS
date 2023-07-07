
// // 1

// let numero = parseFloat(prompt("Ingrese el numero:"));

// for (let i = 1; i <= 10; i++) {
//   tabla = numero * i;
//   console.log(tabla)
// }

// // 2

// let acumulado = 0;
// let numero = prompt("Ingrese un numero:");
// acumulado = acumulado + Number(numero);
// while (numero !== "0") {
//   numero = prompt("Ingrese un numero:");
//   acumulado = acumulado + Number(numero);
// }
// console.log("El valor acumulado es:", acumulado);

// // 3

// let acumulado = 80;
// let intentos = 0;
//   while (true) {
//   const num = Number(prompt("Ingresa cual crees es el numero:"));
//   intentos++;
//   if (num === acumulado) {
//     console.log("Felicidades! Descubriste el numero secreto en " + intentos + " intentos.");
//     break;
//   } else if (acumulado > num) {
//     console.log("El numero ingresado en menor.");
//   } else {
//     console.log("El numero ingresado en mayor.");
//   }
// }  

// // 4

// let num = Number(prompt("Ingrese un numero:"));
// let divisores = [];
// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     divisores.push(i);
//   }
// }
// console.log("Los divisores de ", num, " son: ", divisores);

// // 5

// let colores = ["rojo", "azul", "blanco", "negro", "amarillo", "violeta", "marron", "naranja", "rosa", "gris"];
// for ( let color of colores) {
//   console.log(color);
// }

// // 6

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let numero of numeros) {
//   console.log(numero ** 2);
// }

// // 7

// let familia = [
//     {
//     nombre: "David",
//     edad: 40,
//     altura: 180,
//     apellido: "Vegas",
//     profesion: "Ingeniero",
//     },
//     {
//     nombre: "Abril",
//     edad: 35,
//     altura: 165,
//     apellido: "Perez",
//     profesion: "Profesora",
//     },
//     {
//     nombre: "Santiago",
//     edad: 18,
//     altura: 175,
//     apellido: "Vegas",
//     profesion: "Estudiante",
//     },
//     {
//     nombre: "Patricia",
//     edad: 50,
//     altura: 170,
//     apellido: "Perez",
//     profesion: "Abogada",
//     },
//     {
//     nombre: "Fernanda",
//     edad: 16,
//     altura: 160,
//     apellido: "Vegas",
//     profesion: "Estudiante",
//     },
//   ];
//   for (let persona of familia) {
//     console.log(`
//       Hola, mi nombre es ${persona.nombre}.
//       Tengo ${persona.edad} años.
//       Mido ${persona.altura}.
//       Mi apellido es ${persona.apellido}.
//       Yo soy ${persona.profesion}.
//     `);
//   }

// // 8

// const numeros = [36, 27, 99, 28, 35, 76, 78, 89, 160, 379];
// for (const numero of numeros) {
//   if (numero % 2 !== 0) {
//     console.log("Los numeros impares son " + numero);
//   }
// }

// // 9

// let sumaPar = 0;
// let sumaImpar = 0;
// let numero = Number(prompt("Ingrese los numeros:"));
// while (numero !== 0) {
//   if (numero % 2 === 0) {
//     sumaPar += numero;
//   } else {
//     sumaImpar += numero;
//   }
//   numero = Number(prompt("Ingrese los numeros:"));
// }
// console.log(`La suma de los numeros pares es: ${sumaPar}.`);
// console.log(`La suma de los numeros impares es: ${sumaImpar}.`);

// // 10

let numeros = [46, 62, 108, 234, 5684, 123984, 1234, 9745, 34567, 1234567];
let numeroMayor = numeros[0];
for (let numero of numeros) {
  if (numero > numeroMayor) {
    numeroMayor = numero;
  }
}
console.log(numeroMayor);