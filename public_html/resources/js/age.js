"use strict";
//METTEZ TOUT LE JS DANS UN AUTRE FICHIER AFIN DE NE PAS MELANGER L'HTML ET LE JS
//INSPIREZ-VOUS DU FICHIER ../js/regions.js

function giveFeature(age) {
    /* Indiquez par le biais d'alert ou d'un champ HTML la description qui correspond à l'âge saisi
     * 0 à 1 compris : Vous êtes un bébé.
     * 1 à 6 ans compris : Vous êtes un jeune enfant.
     * 7 à 11 ans compris : Vous êtes un enfant qui a atteint l'âge de raison.
     * 12 à 17 ans compris : Vous êtes un adolescent.
     * 17 à ???: Vous êtes un jeune adulte.
     * Supérieur à ??? : Vous êtes un sénior.
     */
    var choix = $('input[name=sexe]:checked').val();

debugger;
    if( age < 2 ) {
        document.write("resultat1").innerHTML = "vous etes un bébé"+ choix +".";
    }
    else if(age < 7) {
       document.getElementById("resultat1").innerHTML = "vous etes un jeune enfant"+ choix +".";
    }
    else if(age < 12) {
        document.getElementById("resultat1").innerHTML = "vous etes un grand enfant"+ choix +".";
    }
    else if(age < 18) {
        document.getElementById("resultat1").innerHTML = "vous muez"+ choix +".";
    }
    else if(age < 81) {
        document.getElementById("resultat1").innerHTML = "vous devenez adulte"+ choix +".";
    }
    else {
        document.getElementById("resultat1").innerHTML = "vous etes un vieux"+ choix +".";
    }debugger;
}
        
    /* SUITE DE L'EXERCICE :
     * Vous pouvez aussi ajouter un radio button grâce auquel vous déterminerez le sexe de l’utilisateur. 
     * A l’aide de ternaires, vous pourrez ainsi accorder les phrases en fonction de l’utilisateur.
   

<input id="age" style="margin-left:20px;" type="text" onkeypress="return \n\
(event.which >= 48 && event.which <= 57) || event.which = 8 || \n\
event.which == 127" onkeyup="giveFeature(value)" value=""></input>  */