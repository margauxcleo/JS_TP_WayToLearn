// Partie 5 - Exercice 1
//Écrivez une fonction qui prend un entier et:
//Si le nombre est un multiple de 3, retournez « Hello ».
//Si le nombre est un multiple de 5, retournez « World ».
//Si le nombre est un multiple de 3 et de 5, retournez « Hello World ».
function checkNbr(n) {
    return n % 15 === 0 ? "Hello World" : n % 3 === 0 ? "Hello" : "World";
  }
// --------------------------------------------------------------------
// Partie 5 - Exercice 2
//Écrivez l’expression régulière qui révèle le message caché. Vous devez supprimer tous les nombres pour révéler le message. Utilisez la classe de caractères \D dans votre expression.
var patt = /\D */g;

//--------------------------------------------------------------------
// Partie 5 - Exercice 3
//Créez une fonction qui prend un tableau avec des nombres et retourne un tableau avec les éléments multipliés par deux.
function tabX2(tab) {
    return tab.map(i => i * 2)
  }

//--------------------------------------------------------------------
// Partie 5 - Exercice 4
// Créez une fonction qui prend trois nombres comme arguments et renvoie TRUE si c’est un triangle, sinon renvoie FALSE.
function isTriangle(a, b, c) {
    return a + b > c && b + c > a && c + a > b
}
//--------------------------------------------------------------------
// Partie 5 - Exercice 5
//Créez une fonction qui renvoie la valeur ASCII du caractère transmis.
function charToAscii(c) {
  return c.charCodeAt(0);
}
//--------------------------------------------------------------------
// Partie 5 - Exercice 6
//Avec une fraction sous forme d’une chaîne, indiquez si elle est supérieure ou non à 1 lorsqu’elle est évaluée.
function FracSup1(f) {
    return eval(f) > 1;
  }
//--------------------------------------------------------------------
// Partie 5 - Exercice 7
// Créez une fonction qui prend un tableau et renvoie la somme de tous les nombres du tableau.
function sum(tab) {
    let s = 0
    for (let i = 0; i < tab.length; i++) {
      s += tab[i]
    }
    return s
  }
//--------------------------------------------------------------------
// Partie 5 - Exercice 8
// Créez une fonction qui prend un tableau de mots et le transforme en un tableau de longueur de chaque mot.
function countStr(tab) {
    return tab.map(str => str.length);
  }

//--------------------------------------------------------------------
// Partie 5 - Exercice 9
//Créez une fonction qui renvoie le nombre de syllabes dans une chaîne.