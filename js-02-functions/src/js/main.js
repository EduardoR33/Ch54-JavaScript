console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

function saludar( nombre ) {
  console.log("Qué te gustaría de regalod e cumpleaños " + nombre );
}


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/


const darRegalo = function (nombre, regalo){
  console.log( `Felicidades ${nombre}, te traje ${regalo}`);
};

darRegalo("Jen", "Sopa Nissin con camaron");

/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/

function sumaDos( numero, numero2 ) {
  const resultado = (numero + numero2);
  return console.log(`Tu suma es ${numero} + ${numero2} = ${resultado}`)
}

function restaDos( numero, numero2 ) {
  const resultado = (numero - numero2);
  return console.log(`Tu suma es ${numero} + ${numero2} = ${resultado}`)
}


/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function setUp () {
  console.log("Configuracion inicial de la aplicación")
})();
//setUp();



/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función declarada que calcule al área de un triángulo
// al función debe retornar el resultado.

console.log(`El área del triángulo es: ${area(5, 10)}`);
function area(a, b) {
  return (a * b) / 2;
}

const calculaArea2 = function (base, altura) {
  return (base*altura)/2;
}
console.log(calculaArea2(12, 20));

//nuevoejercicio
const calcularArea3 = (base, altura) => base * altura / 2;
console.log(`Resultado usando arrow function: ${calculaArea3(12,20)}`)

// ¿Qué sucede si uso console.log como retorno?
const imprimirArea = (base, altura) => console.log(calculaArea3(base, altura));

console.log(imprimirArea(12, 20));

function imprimirEnConsola( consola ) {
  console.log(mensaje);
}

// Realizar una función flecha que calcule el área de un círculo
// Área = pi * radio^2
// Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"

const calcularAreaCirculo = (radio) => Math.PI * Math.pow(radio, 2);
const imprimirAreaCirculo1 = (area) => {
  const parrafo = document.getElementById("area-circulo");

};
const radio = 5;
const area = calcularAreaCirculo(radio);
imprimirAreaCirculo1(area);

const circleArea = (radio) => Math.PI * radio ** 2;
const imprimirAreaCirculo = (radio) =>
  document.getElementById("area-circulo").innerText = circleArea(radio);
imprimirAreaCirculo(5);

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/







/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */




  
