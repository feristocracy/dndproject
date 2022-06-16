// Generador automático de NPC's
// Fernando Maldonado Solís
// fermaldonadosolis@gmail.com

var clic = 1;

function divLogin(){ 

   if(clic==1){

   document.getElementById("mainBox").style.height = "400px";
   document.getElementById("botnpc").style.top = "45%";
   document.getElementById("botnpc").style.left = "50%";
   document.getElementById("botloot").style.display = "none";

   clic = clic + 1;


   /*const btn = document.getElementById("botnpc");

   btn.addEventListener("click", ()=>{
   
       if(btn.innerHTML === "NPC"){
           btn.innerHTML = "Back";
       }else{
           btn.innerHTML= "NPC";
       }
   });*/




   } else{ 
    
        document.getElementById("botnpc").onclick(randomizadorNPC());

       /*document.getElementById("mainBox").style.height = "250px";
       document.getElementById("botnpc").style.top = "75%";
       document.getElementById("botnpc").style.left = "30%";
       document.getElementById("botloot").style.display = "block";      

    clic = 1;*/

   }   

}






//*****************************************  RANDOMIZADOR NPC *************************************//
function randomizadorNPC() {

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
else if (rasgoNPC == 4) { rasgoNPC = "Mal aliento"}
else if (rasgoNPC == 5) { rasgoNPC = "Olor a perfume"}
else if (rasgoNPC == 6) { rasgoNPC = "Extraño color de ojos"}
else if (rasgoNPC == 7) { rasgoNPC = "Tos seca"}
else if (rasgoNPC == 8) { rasgoNPC = "Voz muy baja"}
else if (rasgoNPC == 9) { rasgoNPC = "Voz muy alta"}
else if (rasgoNPC == 10) { rasgoNPC = "Mal hablado"}
else if (rasgoNPC == 11) { rasgoNPC = "Ceceo"}
else if (rasgoNPC == 12) { rasgoNPC = "Tartamudeo"}
else if (rasgoNPC == 13) { rasgoNPC = "Tatuaje"}
else if (rasgoNPC == 14) { rasgoNPC = "Extraño color de piel"}
else if (rasgoNPC == 15) { rasgoNPC = "Calvo"}
else if (rasgoNPC == 16) { rasgoNPC = "Pelo muy largo"}
else if (rasgoNPC == 17) { rasgoNPC = "Extraño color de pelo"}
else if (rasgoNPC == 18) { rasgoNPC = "Cojea"}
else if (rasgoNPC == 19) { rasgoNPC = "Joyas características"}
else if (rasgoNPC == 20) { rasgoNPC = "Ropas llamativas"}
else if (rasgoNPC == 21) { rasgoNPC = "Mal vestido"}
else if (rasgoNPC == 22) { rasgoNPC = "Tic en los ojos"}
else if (rasgoNPC == 23) { rasgoNPC = "Nervioso y manotea"}
else if (rasgoNPC == 24) { rasgoNPC = "Muy atractivo"}
else if (rasgoNPC == 25) { rasgoNPC = "Espalda encorvada"}
else if (rasgoNPC == 26) { rasgoNPC = "Chaparro"}
else if (rasgoNPC == 27) { rasgoNPC = "En los huesos"}
else if (rasgoNPC == 28) { rasgoNPC = "Obeso"}
else if (rasgoNPC == 29) { rasgoNPC = "Se le va la onda"}
else if (rasgoNPC == 30) { rasgoNPC = "Mastica algo"}
else if (rasgoNPC == 31) { rasgoNPC = "Sucio y descuidado"}
else if (rasgoNPC == 32) { rasgoNPC = "Egoista"}
else if (rasgoNPC == 33) { rasgoNPC = "Servil"}
else if (rasgoNPC == 34) { rasgoNPC = "Soñoliento"}
else if (rasgoNPC == 35) { rasgoNPC = "Pedante"}
else if (rasgoNPC == 36) { rasgoNPC = "Excesivamente crítico"}
else if (rasgoNPC == 37) { rasgoNPC = "Amante del arte"}
else if (rasgoNPC == 38) { rasgoNPC = "Coleccionista"}
else if (rasgoNPC == 39) { rasgoNPC = "Tacaño"}
else if (rasgoNPC == 40) { rasgoNPC = "Derrochador"}
else if (rasgoNPC == 41) { rasgoNPC = "Pesimista"}
else if (rasgoNPC == 42) { rasgoNPC = "Optimista"}
else if (rasgoNPC == 43) { rasgoNPC = "Borracho"}
else if (rasgoNPC == 44) { rasgoNPC = "Psíquico"}
else if (rasgoNPC == 45) { rasgoNPC = "Cortés"}
else if (rasgoNPC == 46) { rasgoNPC = "Ultra religioso"}
else if (rasgoNPC == 47) { rasgoNPC = "Mal educado"}
else if (rasgoNPC == 48) { rasgoNPC = "Asistadizo"}
else if (rasgoNPC == 49) { rasgoNPC = "De alcurnia"}
else if (rasgoNPC == 50) { rasgoNPC = "Orgulloso"}
else if (rasgoNPC == 51) { rasgoNPC = "Mal genio"}
else if (rasgoNPC == 52) { rasgoNPC = "Desquiciado"}
else if (rasgoNPC == 53) { rasgoNPC = "Valiente"}
else if (rasgoNPC == 54) { rasgoNPC = "Cobarde"}
else if (rasgoNPC == 55) { rasgoNPC = "Curioso"}
else if (rasgoNPC == 56) { rasgoNPC = "Veraz"}
else if (rasgoNPC == 57) { rasgoNPC = "Mentiroso"}
else if (rasgoNPC == 58) { rasgoNPC = "Perezoso"}
else if (rasgoNPC == 59) { rasgoNPC = "Energético"}
else if (rasgoNPC == 60) { rasgoNPC = "Moralista"}
else if (rasgoNPC == 61) { rasgoNPC = "Cruel"}
else if (rasgoNPC == 62) { rasgoNPC = "Sexista"}
else if (rasgoNPC == 63) { rasgoNPC = "Racista"}
else if (rasgoNPC == 64) { rasgoNPC = "Fascinado por la magia"}
else if (rasgoNPC == 65) { rasgoNPC = "Receloso ante la magia"}
else if (rasgoNPC == 66) { rasgoNPC = "Bromista"}
else if (rasgoNPC == 67) { rasgoNPC = "Sin una extremidad"}
else if (rasgoNPC == 68) { rasgoNPC = "Sexi"}
else if (rasgoNPC == 69) { rasgoNPC = "Coqueto"}
else if (rasgoNPC == 70) { rasgoNPC = "Muchas heridas"}
else if (rasgoNPC == 71) { rasgoNPC = "Llagas y acné"}
else if (rasgoNPC == 72) { rasgoNPC = "Partes metálicas"}
else if (rasgoNPC == 73) { rasgoNPC = "Muy viejo"}
else if (rasgoNPC == 74) { rasgoNPC = "Demasiado joven"}
else if (rasgoNPC == 75) { rasgoNPC = "Animal compañia"}
else if (rasgoNPC == 76) { rasgoNPC = "Gemelos"}
else if (rasgoNPC == 77) { rasgoNPC = "Sádico"}
else if (rasgoNPC == 78) { rasgoNPC = "Sabio"}
else if (rasgoNPC == 79) { rasgoNPC = "Chismoso"}
else if (rasgoNPC == 80) { rasgoNPC = "Hipster"}
else if (rasgoNPC == 81) { rasgoNPC = "Hippie"}
else if (rasgoNPC == 82) { rasgoNPC = "Fuertemente armado"}
else if (rasgoNPC == 83) { rasgoNPC = "Andrógeno"}
else if (rasgoNPC == 84) { rasgoNPC = "Lgbt"}
else if (rasgoNPC == 85) { rasgoNPC = "Se queda viendo fijo"}
else if (rasgoNPC == 86) { rasgoNPC = "Mudo"}
else if (rasgoNPC == 87) { rasgoNPC = "Ciego"}
else if (rasgoNPC == 88) { rasgoNPC = "Sordo"}
else if (rasgoNPC == 89) { rasgoNPC = "Hostil"}
else if (rasgoNPC == 90) { rasgoNPC = "Valora la fuerza"}
else if (rasgoNPC == 91) { rasgoNPC = "De vida Salvaje"}
else if (rasgoNPC == 92) { rasgoNPC = "Magia durmiente"}
else if (rasgoNPC == 93) { rasgoNPC = "Pss.. espía aliado"}
else if (rasgoNPC == 94) { rasgoNPC = "Feo"}
else if (rasgoNPC == 95) { rasgoNPC = "Bruto"}
else if (rasgoNPC == 96) { rasgoNPC = "Apostador"}
else if (rasgoNPC == 97) { rasgoNPC = "Cyborg"}
else if (rasgoNPC == 98) { rasgoNPC = "Contrabandista"}
else if (rasgoNPC == 99) { rasgoNPC = "Misión alterna"}
else if (rasgoNPC == 100) { rasgoNPC = "Avatar de ..."}

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
else if (raza >=51 && raza <=58) {raza = "Vastayan Rúnico"}
else if (raza >=59 && raza <=66) {raza = "Vastayan Bestial"}
else if (raza >=67 && raza <=74) {raza = "Vastayan Terrano"}
else if (raza >=75 && raza <=82) {raza = "Troll"}
else if (raza >=83 && raza <=90) {raza = "Yordle"}
else if (raza >=90 && raza <=97) {raza = "Humano Techmatúrgico"}
else if (raza >=98 && raza <=99) {raza = "Mestizo Elemental"}
else if (raza ==100) {raza = "Oovicat"}

//************** CLASE ******************//
if (clase >=1 && clase <=9) {clase = "Bárbaro"}
else if (clase >=10 && clase <=18) {clase = "Bardo"}
else if (clase >=19 && clase <=27) {clase = "Clérigo"}
else if (clase >=28 && clase <=36) {clase = "Druida"}
else if (clase >=37 && clase <=45) {clase = "Explorador"}
else if (clase >=46 && clase <=54) {clase = "Guerrero"}
else if (clase >=37 && clase <=45) {clase = "Explorador"}
else if (clase >=55 && clase <=63) {clase = "Hechizero"}
else if (clase >=64 && clase <=72) {clase = "Mago"}
else if (clase >=73 && clase <=81) {clase = "Monje"}
else if (clase >=82 && clase <=91) {clase = "Paladín"}
else if (clase >=92 && clase <=100) {clase = "Pícaro"}

document.querySelector('#respuestas').innerHTML = '';
document.querySelector('#respuestas2').innerHTML = '';
document.querySelector('#respuestas3').innerHTML = '';
document.querySelector('#respuestas4').innerHTML = '';

var respuesta = document.createTextNode(rasgoNPC); //se pueden unir variables en creatTextNode
document.getElementById("respuestas").appendChild(respuesta); //solo puede haber una variable en appenChild

var respuesta2 = document.createTextNode(alineamiento);
document.getElementById("respuestas2").appendChild(respuesta2);

var respuesta3 = document.createTextNode(raza);
document.getElementById("respuestas3").appendChild(respuesta3);

var respuesta4 = document.createTextNode(clase);
document.getElementById("respuestas4").appendChild(respuesta4);

}

