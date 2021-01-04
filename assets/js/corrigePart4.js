// Partie 4 - Exercice 1
//Créez une fonction pour concaténer deux tableaux entiers.
function concatener(tab1, tab2) {
    //Les trois points (…) représentent l’opérateur « Spread » dans ES6 qui permet à une expression d’être élargi.
    return [...tab1,...tab2]
}
// --------------------------------------------------------------------
// Partie 4 - Exercice 2
//Créez une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.
function find(tab, val) {
    for(var i = 0; i < tab.length; i++){
      if(tab[i] == val) return i;
    }
    return -1;
  }
//--------------------------------------------------------------------
// Partie 4 - Exercice 3
//Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.
function nbrExist(tab, val) {
    for (var i = 0; i < tab.length; i++){
      if (tab[i] === val){
        return true;
      }
    }
    return false;
}
//--------------------------------------------------------------------
// Partie 4 - Exercice 4
//Créez une fonction qui prend une chaîne (un nom aléatoire). Si le dernier caractère du nom est un « s », retournez TRUE, sinon retournez FALSE.
function checkS(str) {
    return str[str.length-1] === "s";
  }
//--------------------------------------------------------------------
// Partie 4 - Exercice 5
//Créez une fonction qui renvoie TRUE si une chaîne contient des espaces. Sinon renvoie FALSE.
function containSpaces(str) {
    return str.includes(' ')
  }

//--------------------------------------------------------------------
// Partie 4 - Exercice 6
//Créez une fonction qui prend un objet comme argument et renvoie une chaîne qui représente une personne. Les attributs de la personne devront être extraits des trois propriétés de l’objet:
function formatPrs(personne) {
    return `${personne.nom} a ${personne.age} ans. Il habite à ${personne.adresse}.`;
}
//--------------------------------------------------------------------
// Partie 4 - Exercice 7
//Créez une fonction qui prend une chaîne représentant l’humeur et renvoie une phrase au format suivant: « Aujourd’hui, je me sens {feeling} ». Cependant, si aucun argument n’est passé, retournez « Aujourd’hui, je me sens neutre ».
function myFeeling(feeling) {
    return `Aujourd'hui, je me sens ${feeling || "neutre"}`
  }
//--------------------------------------------------------------------
// Partie 4 - Exercice 8
//Créez une fonction qui renvoie le nombre d’arguments avec lesquels elle a été appelée.
function nbrArgs() {
    return arguments.length;
}
//--------------------------------------------------------------------
// Partie 4 - Exercice 9
//Créez une fonction qui prend un mot et détermine s’il est pluriel ou singulier. Un mot pluriel est celui qui se termine par « s ». S’il est pluriel renvoyer TRUE sinon FALSE.
function check(str) {
    return str[str.length - 1] == 's';
  }