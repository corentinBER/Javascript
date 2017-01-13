"use strict";
debugger;
var table = [4,5,6];
var somme = 0;
//var recuperation = "";
for(var i = 0; i <= table.length - 1; i++){
   //alert(somme=somme+table[i]);
   document.getElementById("tab1").innerHTML ="&nbsp;" + table[0];
   document.getElementById("tab2").innerHTML ="+ " + table[1];
   document.getElementById("tab3").innerHTML ="+ " + table[2];
   document.getElementById("tab4").innerHTML =(somme=somme+table[i]); 
}

