// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
		D: 1,
		B: 2, 
		C: 3
	}) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var objetoResultado = [];
  for (valor in objeto) {
    objetoResultado.push([valor, objeto[valor]]);
  }
  return objetoResultado;
  //   var deObjetoAarray = Object.entries(objeto);
  //   return deObjetoAarray;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  //   var nuevoObjeto = {};
  //   for (var i = 0; i < string.length; i++) {
  //     if (nuevoObjeto.hasOwnProperty(string[i])) {
  //       nuevoObjeto[string[i]] = nuevoObjeto[string[i]] + 1;
  //     } else {
  //       nuevoObjeto[string[i]] = 1;
  //     }
  //   }

  let obj = {};
  let arr = string.split("");
  arr.forEach((letra) => {
    let cuenta = 0;
    arr.forEach((letra2) => {
      if (letra === letra2) {
        cuenta++;
      }
    });
    obj[letra] = cuenta;
  });
  return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = "";
  var minusculas = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      minusculas = minusculas + s[i];
    } else {
      mayusculas = mayusculas + s[i];
    }
  }
  return mayusculas + minusculas;
}
function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  //   let str2 = str.split("").reverse().join("");
  //   return str2.split(" ").reverse().join(" ");

  let palabra = str.split(" ");
  let Invertido = [];
  for (let i = 0; i < palabra.length; i++) {
    Invertido.push(palabra[i].split("").reverse().join(""));
  }
  return Invertido.join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numeroString = numero.toString();
  var resultado = numeroString.split("").reverse().join("");
  if (numeroString === resultado) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevaCadena = "";
  for (i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      nuevaCadena = nuevaCadena + cadena[i];
    }
  }
  return nuevaCadena;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //   arr.sort(function (a, b) {
  //     return a.length - b.length;
  //   });
  //   return arr;

  //otra forma de hacer pero mas largo

  var cambio = true;
  while (cambio) {
    cambio = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        var aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
        cambio = true;
      }
    }
  }
  return arr;
}
function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.//         0 1  2         0 1 2
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí

  let coincidencia = [];
  for (let i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])) {
      coincidencia.push(arreglo1[i]);
    }
  }
  return coincidencia;

  //otra forma de resolverlos es usar un for anidado

  //   let coincidencia = [];
  //   for (let i = 0; i < arreglo1.length; i++) {
  //     for (let j = 0; j < arreglo2.length; i++) {
  //       if (arreglo1[i] === arreglo2[j]) {
  //         coincidencia.push(arreglo1[i]);
  //       }
  //     }
  //   }
  //   return coincidencia;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
