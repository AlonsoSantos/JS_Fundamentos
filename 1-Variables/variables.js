var nombre = 'Alonso' //string
console.log(nombre)  //dice el contenido del dato
console.log(typeof nombre)   //dice el tipo de dato

var esMayor = false //bolean
var edad = 30 //number
var salario = 100.25 //float - double
var mascota = null //objeto 

console.log(edad % 1 === 0)
console.log(salario % 1 === 1)

console.log(casa) //undefined

var numero = '1.5'
var textoANumero = parseFloat(numero)   //convierte de texto a numero decimal
var numeroATexto = textoANumero.toString() //convierte de numero a texto
var decimalAEntero = parseInt(textoANumero) //convierte de texto a numero entero

//JS es tipado dinamico porque identifica el tipo de variable automaticamente
//JS tiene case-sensitive que distingue entre mayusculas y minusculas
//JS no deja declarar variables que empiecen en numero o en caracter especial

//operadores relacionales

// == igual que
// === estrictamente igual que
// != diferente que
// !== estrictamente diferente que
// < mayor que
// > menor que
// <= mayor/igual que
// >= menor igual que

//operadores logicos

// && Y
// || O
// ! negacion

//operadores matematicos
// / division
// * multiplicacion
// + suma 
// - resta
// % divisible