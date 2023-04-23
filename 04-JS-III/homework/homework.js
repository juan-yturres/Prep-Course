// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let arrayincrementado = [];
  for (let i = 0; i < array.length; i++) {
    arrayincrementado.push(array[i] + 1);
  }
  return arrayincrementado;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

//length
// array    [1,2,3,4,5]
//key  [i]  0 1 2 3 4
// var elemento = 4

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let acumulador = 0;
  for (i = 0; i < resultadosTest.length; i++) {
    acumulador += resultadosTest[i];
  }
  return acumulador / resultadosTest.length;
}

//let numerogrande = 0
// let numeros = [15, 20 ,25]
//key              0  1    2
//nos dice que devemos devolver el numero mas grande de una matriz de enteros
// y lo que nos pasa por parametros es ( numeros) que es un entero
//y devolver el numero mas grande

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numerogrande = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numerogrande) {
      numerogrande = numeros[i];
    }
  }
  return numerogrande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let acumulador = 1;
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  } else {
    for (let i = 0; i < arguments.length; i++)
      acumulador = acumulador * arguments[i];
  }
  return acumulador;
}

// var elemento = 18
//var arreglo = [ 15, 10, 5, 20 ]
// arreglo.length  0   1  2   3

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí:
  let contador = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contador++;
    }
  }
  return contador;
}

// domingo, lunes, martes, miercoles, jueves, viernes, sabado
//    1         2       3         4        5       6       7

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí:
  switch (numeroDeDia) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia Laboral";
      breack;
    case 1:
    case 7:
      return "Es fin de semana";
      break;
    default:
      breack;
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n.toString().charAt(0) === "9") {
    return true;
  } else {
    return false;
  }
}

// let elementos =[5,5,5,4];
//                  0 1 2
function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:;

  for (var i = 1; i < arreglo.length; i++) {
    if (arreglo[0] === arreglo[i]) {
      return true;
    } else return false;
  }
}

// let buscador =["enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre nobiembre,diciembre"]
//key                0      1      2     3     4    5      6      7       8        9          10    11
// let arraynuevo []
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let arraynuevo = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    )
      arraynuevo.push(array[i]);
  }
  if (arraynuevo.length === 3) {
    return arraynuevo;
  } else {
    return "No se encontraron los meses pedidos";
  }
}
// mayoracien [1,2,3,4,5,6,8,10,20,200]
//key          0  1 2 3 4 5 6 7 8 9 10

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let arraynuevo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      arraynuevo.push(array[i]);
    }
  }
  return arraynuevo;
}
//				+2   +2  +2 +2 +2 +2
// arraynumero = [1, 3 , 5 ,7, 9 ,11,]

// key    	[i]   0  1   2  3  4   5

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoArray = [];
  var suma = numero;
  for (let i = 0; i < 10; i++) {
    suma = suma + 2;
    nuevoArray.push(suma);
    if (suma === i) {
      break;
    }
  }
  if (nuevoArray.length < 10) {
    return "Se interrumpió la ejecución";
  }
  return nuevoArray;
}

//arraynuevo =[2 , 4,  6,  8,  10,   12, 14, 16, 18, 20,]
//key [i] 		0    1  2   3   4     5  6   7   8   9

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let suma = numero;
  let nuevoArray = [];
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    } else {
      suma = suma + 2;
      nuevoArray.push(suma);
    }
  }
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
