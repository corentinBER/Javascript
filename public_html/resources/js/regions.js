"use strict";
        var generateDepartmentList = new Array("Ain", "Aisne", "Allier",
                "Alpes-de-Haute-Provence", "Alpes-Maritimes", "Ardèche", "Ardennes", "Ariège",
                "Aube", "Aude", "Aveyron", "Bas-Rhin", "Bouches-du-Rhône", "Calvados", "Cantal",
                "Charente", "Charente-Maritime", "Cher", "Corrèze", "Corse-du-Sud", "Côte-d'Or",
                "Côtes-d'Armor", "Creuse", "Deux-Sèvres", "Dordogne", "Doubs", "Drôme",
                "Essonne", "Eure", "Eure-et-Loir", "Finistère", "Gard", "Gers", "Gironde",
                "Guadeloupe", "Guyane", "Haut-Rhin", "Haute-Corse", "Haute-Garonne",
                "Haute-Loire", "Haute-Marne", "Haute-Saône", "Haute-Savoie", "Haute-Vienne",
                "Hautes-Alpes", "Hautes-Pyrénées", "Hauts-de-Seine", "Hérault",
                "Ille-et-Vilaine", "Indre", "Indre-et-Loire", "Isère", "Jura", "La Réunion",
                "Landes", "Loir-et-Cher", "Loire", "Loire-Atlantique", "Loiret", "Lot",
                "Lot-et-Garonne", "Lozère", "Maine-et-Loire", "Manche", "Marne", "Martinique",
                "Mayenne", "Mayotte", "Meurthe-et-Moselle", "Meuse", "Morbihan", "Moselle",
                "Nièvre", "Nord", "Oise", "Orne", "Paris", "Pas-de-Calais", "Puy-de-Dôme",
                "Pyrénées-Atlantiques", "Pyrénées-Orientales", "Rhône", "Saône-et-Loire",
                "Sarthe", "Savoie", "Seine-et-Marne", "Seine-Maritime", "Seine-Saint-Denis",
                "Somme", "Tarn", "Tarn-et-Garonne", "Territoire de Belfort", "Val-d'Oise",
                "Val-de-Marne", "Var", "Vaucluse", "Vendée", "Vienne", "Vosges", "Yonne",
                "Yvelines");
        var d = document.departmentListForm.departmentList;
        for (var i = 0; i < generateDepartmentList.length; i++){
        d.length++;
                d.options[d.length - 1].text = generateDepartmentList[i];
                }

function getRegion(department){
var region = "";
        var error = null;
        var department = "";
        if (department == "Ain" ||department == "Allier" ||department == "Ardèche"||department =="Cantal"||department =="Drôme"||department =="Isère"||department =="Loire"||department =="Haute-Loire"||department =="Puy-Dôme"||department =="Savoie"|department =="|Haute-Savoie"){
region == AAuvergne-Rhône-Alpes;
        alert (region);
}
else if (department =="Côte-d'Or"||department =="Doubs"||department =="Jura"||department =="Nièvre" ){
region == Champagne-Ardenne;
        alert (region);
}
else if (department == "Meurthe - et - Moselle" || "Meuse" || "Moselle" || "Vosges"){
region == Lorraine;
        alert (region);
}
else if (department == "Dordogne" || "Gironde" || "Landes" || "Lot - et - Garonne" || "Pyrénées - Atlantiques"){
region == Aquitaine;
        alert (region);
}
else if (department == "Corrèze" || "Creuse" || "Haute - Vienne"){
region == Limousin;
        alert (region);
}
else if (department == "Charente"|| "Charente - Maritime"|| "Deux - Sèvres"|| "Vienne"){
region == Limousin;
        alert (region);
}
else if (department == "Allier"|| "Cantal"|| "Haute - Loire"|| "Puy - de - Dôme"){
region == Limousin;
        alert (region);
}
else if (department == "Ain"|| "Ardèche"|| "Drôme"|| "Isère"|| "Loire"|| "Rhône"|| "Savoie"|| "Haute - Savoie"){
region == Limousin;
        alert (region);
}
else if (department == "Saône-et-Loire"){
region == Limousin;
        alert (region);
}
else if (department =="Haute - Saône"){
region == Limousin;
        alert (region);
}
else if (department == "Côtes-d'Armor"||department == "Finistère"||department ==" Ille-et-Vilaine"||department ==" Morbihan"){
        region == Limousin;
        alert (region);
}
/*else if (department == Cher, Eure - et - Loir, Indre, Indre - et - Loire, Loir - et - Cher, Loiret){
region == Limousin;
        alert (region);
}
else if (department == Aude, Gard, Hérault, Lozère, Pyrénées - Orientales){
region == Limousin;
        alert (region);
}
else if (department == (Ariège, Aveyron, Haute - Garonne, Gers, Lot, Hautes - Pyrénées, Tarn, Tarn - et - Garonne){
region == Limousin;
        alert (region);
}*/
else {
        error;
}

var resultOK = "Vous résidez dans la région " + region + ".";
       error== null ?document.getElementById("resultat").innerHTML = resultOK: error;
        }
        