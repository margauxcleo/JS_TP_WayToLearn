// Partie 3 - Exercice 1
//Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.
function checkEq(a, b) {
    return a === b;
}

// --------------------------------------------------------------------
// Partie 3 - Exercice 2
//Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.
function isEmpty(str) {
    return str.length == 0;
}

//--------------------------------------------------------------------
// Partie 3 - Exercice 3
//Avec deux chaînes, str1 et str2, renvoyez une seule chaîne au format « str1 | str2 ».
function concatStr(str1, str2) {
    return `${str1} | ${str2}`;
  }
//--------------------------------------------------------------------
// Partie 3 - Exercice 4
//Créez une fonction qui prend un nom et renvoie un message d’accueil sous la forme d’une chaîne. N’utilisez pas une fonction normale mais utilisez une fonction fléchée(Arrow).
const msg = name => `Hello ${name}, Welcome to WayToLearnX!`
//--------------------------------------------------------------------
// Partie 3 - Exercice 5
//Écrivez une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.
function size(str, n = 0) {
    if(str[n] === undefined) {
      return n
    }
   return size(str, num + 1)
 }
//--------------------------------------------------------------------
// Partie 3 - Exercice 6
//Créez une fonction qui prend deux chaînes str1 et str2 comme arguments et renvoie TRUE si le nombre total de caractères dans la première chaîne est égal au nombre total de caractères dans la deuxième chaîne sinon renvoie FALSE.
function compareSize(str1, str2) {
    return str1.length === str2.length;
  }
//--------------------------------------------------------------------
// Partie 3 - Exercice 7
//Créez une fonction qui prend la hauteur et la largeur et trouve le périmètre d’un rectangle.
function getPerimeter(height, width) {
    return (height + width) * 2;
  }
//--------------------------------------------------------------------
// Partie 3 - Exercice 8
function nbrsPattes(poulets, vaches, chevaux) {
    return poulets * 2 + (vaches + chevaux) * 4;
  }
//--------------------------------------------------------------------
// Partie 3 - Exercice 9
//Créez une fonction qui prend un nombre comme argument et renvoie « pair » pour les nombres pairs et « impair » pour les nombres impairs.