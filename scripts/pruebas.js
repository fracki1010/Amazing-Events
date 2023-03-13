/* let num1 = 3;
let num2 = 5;
let num3 = 6; */



/* num1 = prompt("ingrese el primer numero: ");
num2 = prompt("ingrese el segundo numero: ");
num3 = prompt("ingrese tercer numero: "); */

/* if(num1 > num2){
    console.log("el primer numero es mayor");
}else if(num1 < num2){
    console.log("el segundo numero es mayor");
}else{
    console.log("los numero son iguales");
} */

/* switch (num1, num2) {
    case num1 > num2:
        console.log("el primer numero es mayor")
        break;

    case num1 < num2:
        console.log("el segundo numero es mayor");
        break

    default:
        console.log("los numeros son iguales");
        break

} */

//condicional de 3 numero

/* if(num1 < num2 && num1 < num3){
    console.log("el primer numero es el mas chico")
}
if(num2 < num1 && num2 < num3){
    console.log("el segundo numero es el mas chico")
}
if(num3 < num1 && num3< num2){
    console.log("el  tercer numero es el mas chico")
} */

/* let personaMasAlta
let personaMasVieja

let persona1 = new Object({
    nombre: 'Franco',
    edad: 22,
    altura: 1.79
})

let persona2 = new Object({
    nombre: 'Marcos',
    edad: 12,
    altura: 1.90
})

if (persona1.altura > persona2.altura) {
    personaMasAlta = persona1.nombre;
} else {
    personaMasAlta = persona2.nombre;
}

if (persona1.edad > persona2.edad) {
    personaMasVieja = persona1.nombre;
} else {
    personaMasVieja = persona2.nombre;
}

console.log("la persona mas alta es "+ personaMasAlta + " y la de mayor edad "+personaMasVieja)
 */

//capacidad para conducir
/* let persona = new Object({
    nombre: '',
    edad: 0,
    altura: 0,
    vision: 0
})

persona.nombre = prompt("ingrese el nombre: ");
persona.edad = prompt("ingrese su edad: ");
persona.altura = prompt("ingrese su altura en cm: ");
persona.vision = prompt("ingrese su vision del 1 al 10: ")

if(persona.edad >= 18 && persona.altura >= 150 && persona.vision >= 8){
    console.log("Esta persona esta capacitada para conducir");

}else{
    console.log("Esta persona no puede conducir");
}
 */




/* let persona = new Object({
    nombre: '',
    pase: '',
    entrada: 'false'
})
let entrada

persona.nombre = prompt("Ingrese el nombre: ");
persona.pase = prompt("Que pase posee (vip/normal): ");
persona.entrada = prompt("Tiene entrada (si/no): ");


let UtiEntrada;
let compraEntrada;
let dinero;


if (persona.nombre == "Franco" || persona.pase == 'vip') {
    console.log("Bienvenido")
} else if (persona.entrada == "si" || persona.entrada == "Si") {
    UtiEntrada = prompt("desea utilizar su entrada (si/no)");
    if (UtiEntrada == "si" || UtiEntrada == "Si") {
        console.log("Bienvenido")
    } else {
        console.log("despedida")
    }
} else {
    let compraEntrada = prompt("desea comprar una entrada")
    if (compraEntrada == "si" || compraEntrada == "Si") {
        dinero = prompt("que dinero posee: ");
        if (dinero >= 1000) {
            console.log("Venta de entrada y bienvenida");
        } else {
            console.log("Rechazo de venta")
        }
    } else {
        console.log("Despedida")
    }
}

if (entrada == "si" || entrada == "Si") {
    console.log("Bienvenido")
} */




//adivinar el numero incognito
/* let numeroIncognita;
let numeroIngresado;


numeroIncognita = prompt("ingrese el numero a adivinar:");
numeroIngresado = prompt("elegir un numero: ");

if(numeroIncognita>numeroIngresado){
    console.log("el numero ingresado es menor, vuelve a intentarlo");
    numeroIngresado = prompt("ingrese un numero:");
    if(numeroIncognita>numeroIngresado){
        console.log("el numero ingresado es menor, vuelve a intentarlo");
        numeroIngresado = prompt("ingrese un numero:");
        if(numeroIncognita>numeroIngresado){
            numeroIngresado = prompt("ingrese un numero:");
            console.log("el numero ingresado es menor, Perdiste");
            
        }else if(numeroIncognita<numeroIngresado){
            console.log("el numero ingresado es mayor, Perdiste");
            numeroIngresado = prompt("ingrese un numero:");
        }else{
            console.log("Ganaste, haz adivinado el numero");
        }
    }else if(numeroIncognita<numeroIngresado){
        console.log("el numero ingresado es mayor, vuelve a intentarlo");
        numeroIngresado = prompt("ingrese un numero:");
        if(numeroIncognita>numeroIngresado){
            console.log("el numero ingresado es menor, Perdiste");
    
        }else if(numeroIncognita<numeroIngresado){
            console.log("el numero ingresado es mayor, Perdiste");
        }else{
            console.log("Ganaste, haz adivinado el numero");
        }
    }else{
        console.log("Ganaste, haz adivinado el numero");
    }
}else if(numeroIncognita<numeroIngresado){
    console.log("el numero ingresado es mayor, vuelve a intentarlo");
    numeroIngresado = prompt("ingrese un numero:");
    if(numeroIncognita>numeroIngresado){
        console.log("el numero ingresado es menor, vuelve a intentarlo");
        numeroIngresado = prompt("ingrese un numero:");
        if(numeroIncognita>numeroIngresado){
            console.log("el numero ingresado es menor, Perdiste");
            
        }else if(numeroIncognita<numeroIngresado){
            console.log("el numero ingresado es mayor, Perdiste");
        }else{
            console.log("Ganaste, haz adivinado el numero");
        }
    }else if(numeroIncognita<numeroIngresado){
        console.log("el numero ingresado es mayor, vuelve a intentarlo");
        numeroIngresado = prompt("ingrese un numero:");
        if(numeroIncognita>numeroIngresado){
            console.log("el numero ingresado es menor, Perdiste");
    
        }else if(numeroIncognita<numeroIngresado){
            console.log("el numero ingresado es mayor, Perdiste");
        }else{
            console.log("Ganaste, haz adivinado el numero");
        }
    }else{
        console.log("Ganaste, haz adivinado el numero");
    }
}else{
    console.log("Ganaste, haz adivinado el numero");
} */


//programa para decir que edad tienes
/* let edad;

edad = prompt("ingrese su edad:");

if(edad >= 0 && edad <= 12){
    console.log("Eres un infante");
}else if(edad >= 13 && edad <=18){
    console.log("Eres un adolescente");
}else if(edad>=19 && edad <=45){
    console.log("Eres un mayor joven");
}else if(edad >45 && edad <= 100){
    console.log("Eres un anciano");
}else{
    console.log("¿En realidad tienes esa edad?");
} */


//colores switch
/* let color;

color = prompt('ingrese un color por favor');

switch (color){
    case 'negro y blanco':
        console.log("falta de color");
    break
    case 'verde':
        console.log("el color de la naturaleza");
        break
    case 'azul':
        console.log("el color del agua");
        break
    case 'amarrillo':
        console.log("el color del sol");
        break
    case 'rojo':
        console.log("el color del fuego");
        break
    case 'marron':
        console.log("el color de la tierra");
        break
    default:
        console.log("excelente eleccion, no lo teniamos pensado")
} */


//DNI

/* let documento = new Object({});
let datosCorrectos

documento.nombre = prompt("ingrese su nombre:");
documento.apellido = prompt("ingrese su apellido:");
documento.edad = prompt("ingrese su edad:");
documento.nacionalidad = prompt("ingrese su nacionalidad:");
documento.dni = prompt("ingrese su numero de documento:");
documento.nacimiento = prompt("ingrese su fecha de nacimiento:");

let arr = Object.entries(documento)
console.log(arr[0][0], arr[0][1]);
console.log(arr[1][0], arr[1][1]);
console.log(arr[2][0], arr[2][1]);
console.log(arr[3][0], arr[3][1]);
console.log(arr[4][0], arr[4][1]);
console.log(arr[5][0], arr[5][1]);

datosCorrectos = prompt('Estos datos son correctos(si/no): ')
if(datosCorrectos == "si"){
    console.table(arr);
    console.log('Registro exitoso');
}else{
    console.log('vuelva a intentarlo');
}
 */