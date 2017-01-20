function Product(name, description, weight, picture) {
   debugger;
    if ((name == undefined) || (name == "") || (name == null)){
        this.name = "Pas de vehuicul";

    }
    else{
        this.name = name;
    }
    this.description = description;
    this.weight = weight;
    this.picture = picture;
    this.addFeature = function (nameFeature, descriptionFeature) {
        this[nameFeature] = descriptionFeature;
    };
}

var voiture = new Product('', '854', '900', '../img/voiture.jpg');
voiture.addFeature("pays" , "france");

function initialiseProductFiche(param) {
    debugger;
    Object.keys(param).forEach(function (key) {
        debugger;
        if("addFeature" != key){
            if ("picture" != key) {
                var text = undefined != param[key] ? param[key] : "";
                document.getElementById(key).innerHTML = text;
            } 
            else {
                document.getElementById(key).src = param[key];    
            }
        }
    });
}

initialiseProductFiche(voiture);

/*function Personne(name, firstname, age){
	this.name = name;
        this.firstname = firstname;
	this.age = age;

}*/

