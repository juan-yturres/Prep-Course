// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
<<<<<<< HEAD
const nuevaString = 'hola'

=======
const nuevaString = 'hola';
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 7;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
<<<<<<< HEAD
  return (str);
=======
  return str;
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  var sum = (x + y);
  return sum; 
=======
  return x + y; 
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  var rest = (x - y);
  return rest;
=======
  // esto hace que deveria restar las dos variables 
  return x - y;
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  var Mult = (x * y);
  return Mult ;
=======
  // multiplicar las dos variables 
  return x * y; 
  
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  var divid = ( x / y);
  return divid; 
=======
  return x / y; 
  
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
 if(x===y) {
  return true;
 }else{
  return false;
 }
  }
=======
  return x === y ;
  
}

>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if( str1.length === str2.length){
    return true;
  }else{
    return false;
  }
=======
 if ( str1.length === str2.length) { 
  return true; 
 } else {
  return false ;
 }
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if(num<90) {
    return true;
  }else{
=======
  if ( num < 80 ) { 
    return true; 
  } else { 
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
    return false;
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if(num>50) {
    return true;
  }else{
    return false;
  }
}
=======
  if ( num > 50 ) { 
 return true ;
  } else {
   return false;
  } 

  } 
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
<<<<<<< HEAD
  return(x % y);
=======
  return x % y; 
  
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (num % 2 === 0){
    return true; 

  }else{
    return false;
  }
}

=======
  if ( num % 2 === 0) {
    return true ;
    } else {
     return false ; 
    }
  }
    
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (num % 2 === 0) {
    return false;
  }else{
    return true;
  }
=======
  if ( num % 2 === 0) {
    return false ;
    } else {
     return true ; 
    }
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
<<<<<<< HEAD
  return Math.pow(num,2);
=======
  return num ** 2 ; 
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
<<<<<<< HEAD
  return Math.pow(num,3);
=======
return Math.pow(num, 3);
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
<<<<<<< HEAD
  return Math.pow(num, exponent);
=======
  return Math.pow( num, exponent);
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
<<<<<<< HEAD
  return Math.round(num);
=======
  return Math.round( num);
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
<<<<<<< HEAD
  return Math.ceil(num);
=======
  return Math.ceil( num);
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
<<<<<<< HEAD
  return Math.random ("number");
=======
  return Math.random();
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero>0) {
    return "Es positivo";
<<<<<<< HEAD
  }else if (numero<0) {
    return "Es negativo";
  }else{
    return false;
  }

  }
=======
  }else if (numero<0){
    return "Es negativo";
  }else{
    return false
  }

  }

>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
<<<<<<< HEAD
  return (str + "!" );
=======
  var string= (str+ "!")
  return string
  
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
<<<<<<< HEAD
  var saluda = nombre + " " + apellido;
  return saluda;

=======
  var juan =nombre +" "+ apellido;
  return juan ;  
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}



function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
<<<<<<< HEAD
  var saluda = ("Hola");
  var saluda = saluda + " " + nombre + "!";
  return saluda;
=======
  var saludo =("Hola");
  var sal=saludo+" "+ nombre + "!";
  return sal;
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
  

}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
<<<<<<< HEAD
  return alto * ancho ;
=======
  return (alto * ancho); 
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
<<<<<<< HEAD
   return lado * 4;
=======
  return (lado * 4); 
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
<<<<<<< HEAD
 return base * altura /2;
=======
return  (base * altura) /2 ;
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
<<<<<<< HEAD
  return euro * 1.20 ;
=======
  return (euro* 1.20);
>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
<<<<<<< HEAD
  if (letra.length > 1) {
    return "Dato incorrecto";
  } 
   if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra ==="u") {
    return "Es vocal";
   }else{
    return "Dato incorrecto";
   } 
 }
=======
  if (letra.match(/[aeiou]/) && letra.length==1) {
    return ("Es vocal")
  }
   else if (letra.length>1) {
      return ("Dato incorrecto")
   }
    if (!letra.match(/[aeiou]/)) {
    return ("Dato incorrecto");
    }
}


>>>>>>> ecd7c216d8ca102da75c7c90ed54bcf0c2dddfff

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
