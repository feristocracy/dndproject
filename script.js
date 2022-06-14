// Generador automático de NPC's
// Fernando Maldonado Solís
// fermaldonadosolis@gmail.com

//************** VARIABLES ******************//
var rasgoNPC, alineamiento, raza, clase;

//************** RANDOMIZACIÓN ******************//
rasgoNPC = Math.floor((Math.random() * 100) + 1);
alineamiento = Math.floor((Math.random() * 100) + 1);
raza = Math.floor((Math.random() * 100) + 1);
clase = Math.floor((Math.random() * 100) + 1);


//************** RASGOS ******************//
if (rasgoNPC == 1) { rasgoNPC = "Cicatriz"}
else if (rasgoNPC == 2) { rasgoNPC = "Altísimo"}
else if (rasgoNPC == 3) { rasgoNPC = "Le falta un dedo"}


//************** ALINEAMIENTO ******************//
if (alineamiento >=1 && alineamiento <=35) {alineamiento = "Legal Bueno"}
else if (alineamiento >=36 && alineamiento <=39) {alineamiento = "Neutral Bueno"}
else if (alineamiento >=40 && alineamiento <=41) {alineamiento = "Caótico Bueno"}
else if (alineamiento >=42 && alineamiento <=61) {alineamiento = "Legal Neutral"}
else if (alineamiento == 62) {alineamiento = "Neutral"}
else if (alineamiento >=63 && alineamiento <=64) {alineamiento = "Caótico Neutral"}
else if (alineamiento >=65 && alineamiento <=90) {alineamiento = "Legal Maligno"}
else if (alineamiento >=91 && alineamiento <=97) {alineamiento = "Neutral Maligno"}
else if (alineamiento >=98 && alineamiento <=100) {alineamiento = "Caótico Maligno"}

//************** RAZA ******************//
if (raza >=1 && raza <=50) {raza = "Humanos"}
else if (raza >=51 && raza <=58) {raza = "Vastayan Rúnicos"}
else if (raza >=59 && raza <=66) {raza = "Vastayan Bestiales"}
else if (raza >=67 && raza <=74) {raza = "Vastayan Terranos"}
else if (raza >=75 && raza <=82) {raza = "Trolls"}
else if (raza >=83 && raza <=90) {raza = "Yordles"}
else if (raza >=90 && raza <=97) {raza = "Humanos Techmatúrgicos"}
else if (raza >=98 && raza <=99) {raza = "Mestizos Elementales"}
else if (raza ==100) {raza = "Oovicat"}

//************** CLASE ******************//
if (clase >=1 && clase <=9) {clase = "Bárbaro"}
else if (clase >=10 && clase <=18) {clase = "Bardo"}
else if (clase >=19 && clase <=27) {clase = "Clérigo"}
else if (clase >=28 && clase <=36) {clase = "Druida"}
else if (clase >=37 && clase <=45) {clase = "Explorador"}
else if (clase >=46 && clase <=54) {clase = "Guerrero"}
else if (clase >=55 && clase <=63) {clase = "Hechizero"}
else if (clase >=64 && clase <=72) {clase = "Mago"}
else if (clase >=73 && clase <=81) {clase = "Monje"}
else if (clase >=82 && clase <=91) {clase = "Paladín"}
else if (clase >=92 && clase <=100) {clase = "Pícaro"}

document.write(rasgoNPC + "</br>" + alineamiento + "</br>" + raza + "</br>" + clase);