/*Exercici 1:
L'exercici consisteix a crear un fitxer anomenat ciber.html i mostrar per consola un 'Hola mundo' 
(per activar la consola ->; F12). Pista: Console.log()
*/

console.log(`Hola, Mundo`);

/*Exercici 2:
Crea un alert que mostri el teu nom:*/

alert("El meu nom es Àlex");


/*Exercici 3:
Crea una variable que contingui el teu nom i un altre que contingui el teu cognom.*/

var nom = 'Àlex'
var cognom = 'Manyé'

console.log(`El meu nom es ${nom} i el meu cognom es ${cognom}`) */


/*Exercici 4:
Crea dos variables amb dos números i fes una suma entre ells.*/ 

var num1 = 3;
var num2 = 5;

var suma = num1 + num2;
console.log(suma); 


/*Exercici 5:
Crea una variable nota_examen juntament amb un alert que ens digui si l’examen ha estat aprovat o no juntament amb la nota. (caldrà utilitzar un condicional IF)*/
//REVISAR

nota_examen = 2;

if (nota_examen >=5){
    alert('estàs aprovat')
} else {alert('Ho sentim, estàs suspés')};
console.log() 

/*Exercici 6:
Reemplaça la paraula blau per la paraula verd del següent text Tinc un cotxe de color blau. Després intenta fer-ho remplaçant les o per les u*/ 

var string = `Tinc un cotxe de color blau`
var newString = string.replace("blau", "verd");
console.log(newString);
var newString2 = string.replace(/o/g,"u");
console.log(newString2); 


/*Exercici 7:
Donat el seguit llistat d’objectes ‘taula’, ‘cadira’, ‘ordinador’, ‘libreta’, 
per un bucle que mostri per pantalla cada objecte i la save posició al llistat.
*/ 
function llistat(){
var objects = ['taula', 'cadira', 'ordinador', 'libreta'];
    for (let i=0;i<objects.length; i++){
    console.log(`L'objecte ${objects[i]} està a la posició ${i}`)
    }
}

/*Exercici 8:
Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres: operador, valor1 i valor2.
Estructura de la funció que faci sumes, restes i multiplicacions. El resultat haurà de ser mostrar per pantalla.
function calculadora( __ __ __){
......... }
var resultat = calculadora(‘resta’,40,20);
*/ 

function calculadora(operador, valor1, valor2){
    let resultat = 0;
    switch (operador){
        case "suma":
        resultat = valor1+valor2;
            break;
        case "resta":
        resultat = valor1-valor2;
            break;
        case "multiplicació": 
        resultat = valor1*valor2;
        default:
        resultat = "L'operador no es correcte o hi ha algun error tipogràfic";
    } console.log(resultat);
} 

let resultat = calculadora('resta',60,15);

