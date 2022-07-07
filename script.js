// Generador automático de NPC's y Loot boxes
// Fernando Maldonado Solís
// fermaldonadosolis@gmail.com

let clic = 1;
let pocionesYAceites = ["poción para curar heridas leves","poción para soportar los elementos","poción para esconderse de los animales","poción para esconderse de los animales","poción para esconderse de los muertos vivientes","poción salto","poción armadura de mago","poción colmillo mágico","aceite piedra mágica",
                        "aceite arma mágica","poción pasar sin dejar rastro","poción quitar el miedo","poción santuario","poción escudo de la fé +2","aceite garrote","aceite bendecir arma","poción agrandar persona","poción reducir persona","poción auxilio divino","poción piel robliza +2","poción resistencia de oso",
                          "poción contorno borroso","poción fuerza de toro","poción gracia felina","poción curar heridas moderadas","aceite oscuridad","poción visión en la oscuridad","poción lentificar veneno","poción esplendor de águila","poción astucia de zorro","poción de invisibilidad","poción restablecimiento menor",
                            "poción levitar","poción desorientar","poción sabiduría de buho","poción protección contra las flechas 10/magia","poción quitar parálisis","10 poción resistir energía","poción escudo de la fé +3","poción trepar cual arácnido","poción alineamiento indetectable", "poción piel robliza +3", "poción escudo de la fé +4",
                              "20 poción resistir energía","poción curar heridas graves","aceite luz del día","poción desplazamiento","aceite flecha flamígera","poción volar","poción forma gaseosa","poción colmillo mágico mayor +1","aceite arma mágica mayor +1","poción acelerar","poción heroísmo","aceite afiladura","poción circulo mágico contra alineamiento",
                                "aceite vestidura mágica +1","poción neutralizar veneno","poción indetectabilidad","poción protección contra la energía","poción furia","poción quitar ceguera/sordera","poción quitar maldición","poción quitar enfermedad","poción don de lenguas","poción respiración acuática","poción caminar sobre las aguas",
                                "poción piel robliza +4","poción escudo de la fé","poción esperanza alentadora","30 poción resistir energía","poción piel robliza +5","poción colmillo mágico mayor +2","poción arma mágica mayor +2","aceite vestidura mágica +2","poción protección contra las flechas 15/magia","poción colmillo mágico mayor +3","aceite arma mágica mayor +3",
                                "aceite vestidura mágica +3","poción colmillo mágico mayor +4","aceite vestidura mágica +4","poción colmillo mágico mayor +5","aceite arma mágica mayor +5","aceite vestidura mágica +5"];

let anillos = ["protección +1","caída de pluma","sustento","escalado","salto","nadar","contraconjuros","escudo mental","protección +2","escudo de fuerza","ariete","escalada, mejorado","salto, mejorado","nadar, mejorado","amistad con los animales","resistir energía, menor","poder camaleónico","caminar sobre las aguas","protección +3",
                "almacenar conjuros, menor","invisibilidad","magia (I)","evasión","visión de rayos x","intermitencia","resistir energía, mayor","protección +4","magia (II)","libertad de movimiento","resistir energía, superior","escudar al amigo (pareja)","protección +5","estrellas fugaces","almacenar conjuros","magia (III)","telecinesia",
                "regeneración","tres deseos","retornar conjuros","magia (IV)","llamar djinni","comandar elementales de aire","comandar elementales de tierra","comandar elementales de fuego","comandar elementales de agua","almacenar conjuros, mayor"];

let conjurosArcanos0 = ["abrir/cerrar","atontar","conocer la dirección","convocar instrumento","cuchichear mensaje","detectar magia","detectar veneno","leer magia","llamarada","luces danzantes","luz","mano del mago"," marca arcana","nona","perturbar muertos vivientes","prestidigitación","rayo de escarcha","remendar","resistencia","salpicadura de ácido","sonido fantasma","toque de fatiga"];

let conjurosArcanos1 = ["agrandar persona","alarma","alineamiento indetectable","animar cuerda","arma mágica","armadura de mago","aura mágica de Nystul","borrar","caída de pluma","causar miedo","comprensión idiomática","confusión menor","contacto electrizante","convocar monstruo (I)","curar heridas leves","detectar muertos vivientes","detectar puertas secretas","disco flotante de Tenser",
                           "disfrazarse","dormir","escudo","grasa","hechizar persona","hipnotismo","identificar","imagen silenciosa","impacto verdadero","manos ardientes","montura","niebla de obscurecimiento","protección contbra el caos/el mal/el bien/la ley","proyectil mágico","quitar miedo","rayo de debilitamiento","reducir persona","retirada expedita","rociada de color",
                            "salto", "sirviente invisible","soportar los elementos","toque gélido","trabar portal","ventriloquía" ];

let conjurosArcanos2 = ["apertura","astucia de zorro","atontar monstruo","boca mágica","calmar emociones","cautivar","ceguera/sordera","cerradura arcana","comandar muertos vivientes","contorno borroso","convocar enjambre","convocar monstruo (II)","curar heridas moderadas","desorientar","detectar pensamientos","esfera flamífera","esplendor de águila","estallar","explosión de sonido",
                            "falsa vida","flecha ácida de Melf","fuerza de toro","gracia felina","imagen menor","imagen múltiple","invisibilidad","lentificar veneno","levitar","llama continua","localizar objeto","mano espectral","mensajero animal","nube brumosa","obscurecer objeto","oscuridad","particulas nutilantes","pauta hipnótica","pirotectnia","protección contra las flechas","ráfaga de viento",
                            "rayo abrasador","resistencia de oso","resistir energía","sabiduría de búho","silencio","sobresaltar","telaraña","terribles carcajadas de tasha","toque de idiotez","toque de necrófago","trampa de leomund","trance animal","trepar cual arácnido","truco de la cuerda","ver lo invisible","viento susurrante","visión en la oscuridad"];

let conjurosArcanos3 = ["acelerar","afiladura","apacible descanso","arma mágica mayor","bola de fuego","clariaudiencia/clarividencia","circulo mágico contra e bien/el caos/el mal/la ley","convocar monstruo (III)","carcel fantasmal","cubiculo de leomund","curar heridas graves","desplazamiento","detener muertos vivientes","disparar magia","don de lenguas","encoger objeto","escritura ilusoria","esculpir sonido","esfera de invisibilidad",
                            "esperanza alentadora","flecha flamigera","forma gaseosa","forma gaseosa","furia","hablar con los animales","heroísmo","imagen mayor","impronta de la serpiente sepia","inmovilizar persona","indetectabilidad","intermitencia","labia","luz del día","muro de viento","nube apestosa","página secreta","protección contra la energía","ralentizar","rayo agotador","rayo relampagueante",
                            "respiración acuática","runas explosivas","sueño profundo","sugestión","toque vampírico","tormenta de aguanieve","vista arcana","volar"];

let conjurosArcanos4 = ["agrandar persona en grupo","alarido","ancla dimensional","asesino fantasmal","bruma sólida","cobijo seguro de leomund","confusión","conjuración sombría","contagio","convocar monstruo (IV)","creación menor","curar heridas críticas","desesperación aplastante","detectar escudriñamiento","enervación","escudo de fuego","escudriñamiento","esfera elástica de Otiluke","geas menor",
                            "globo menor de invulnerabilidad","hablar con las plantas","hechizar monstruo","invisibilidad mayor","lanzar maldición","lanzar maldición","libertad de movimiento","localizar criatura","miedo","mnemotecnia de Rary","modificar recuerdo","muro de fuego","muro de hielo","muro ilusorio","neutralizar veneno","ojo arcano","piel pétrea","pauta iridiscente","polimorfarse","puerta dimensional","reanimar a los muertos",
                            "reducir persona en grupo","repeler sabandijas","quitar maldición","tentáculos negros de Evard","terreno alucinatorio","tormenta de hielo","trampa de hielo","trampa de fuego","transformar piedra","zona de silencio"];

let conjurosArcanos5 = ["asolar","bruma mental","canción de discordia","cofre secreto de Leomund","Cono de frío","contactar con otro plano","convocar monstruo (V)","creacióm mayor","crecimiento animal","curar heridas leves en grupo","debilidad mental","disipar magia mayor","dominar persona","elaborar","espejo arcano","evocación sombría","exorcismo","imagen persistente","inmovilizar monstruo","ligadura de los planos, menor",
                            "mano interpuesta de Bigby","mastín giel de Mordenkainen","mensaje onírico","muro de fuerza","muro de piedra","nube aniquiladora","ofuscar videncia","ojos fisgones","olas de fatiga","pasamiento","permanencia","pesadilla","polimorfar funesto","romper encantamiento","sanctasanctórum privado de Mordenjainen","símbolo de dolor","símbolo de sueño","similitud","recado","teleportar","telecinesia","transmigración",
                            "transmutar barro en roca","transmutar roca en barro","vínculo telepático de Rary","vuelo de largo recorrido"];

let conjurosArcanos6 = ["analizar esencia mágica","animar objetos","astucia de zorro en grupo","bruma ácida","caminar por la sombra","campo antimagia","círculo de muerte","conocimiento de leyendas","contingencia","controlar las aguas","convocar monstruo (VI)","crear muertos vivientes","curar heridasa moderadas en grupo","de la carne a la piedra","de la muerte viviente a la muerte","de la piedra a la carne","desintegrar","disipar magia mayor",
                        "doble engañoso","elacubración de Mordenkainen","encontrar la senda","esfera congelante de Otiluke","esplendor de águila en grupo","festín de los héroes","fuerza de toro en grupo","geas/empeño","globo de invulnerabilidad","gracia felina en grupo","guardas y custodias","heroísmo, mayor","imagen permanente","muro de hierro","rechazo","relámpago zigzagueante","remover tierra","resistencia de oso en grupo","sabiduría de búho en grupo",
                        "símbolo de miedo","símbolo de persuasión","sugestión en grupo","transformación de Tenser","velo","cibración sintonizada"];

let conjurosArcanos7 = ["bola de fuego de explosión retardada","conjuración sombría mayor","controlar el clima","controlar muertos vivientes","convocaciones instantáneas de Drawmij","convocar monstruo (VII)","dedo de la muerte","demencia","deseo limitado","desplazamiento de plano","destierro","escudriñamiento mayor","espada de Mordenkainen","estatua","excursión etérea","inmovilizar persona en grupo","jaula de fuerza","magnífica mansión de Mordenkainen","mano aferradora de Bigby",
                        "olas de agotamiento","palabra de poder cegador","proyectar imagen","puerta en fase","recluir","retorno de conjuros","rociada prismática","símbolo de aturdimiento","símbolo de debilidad","simulacro","teleportar mayor","teleportar objeto","visión","vista arcana mayor"];

let conjurosArcanos8 = ["alarido mayor","antipatía","atrapar el alma","baile irresistible de Otto","cerradura dimensional","clonar","convocar monstruo (VIII)","crear muerto viviente mayor","cuerpo de hierro","discernir ubicación","esfera telecinética de Otiluke","estasis temporal","evocación sombría mayor","exigencia","explosión solar","hechizar monstruo en grupo","horrible marchitamiento",
                        "instante de presciencia","laberinto","ligadura","ligadura de los planos mayor","mente en blanco","muro prismático","nube incendiaria","ojos fisgones mayor","palabra de poder aturdidor","pantalla","pauta centelleante","polimorfar cualquier cosa","protección contra los conjuros","puño cerrado de Bigby","rayo polar","símbolo de locura","símbolo de muerte","simpatía"];

let conjurosArcanos9 = ["cambiar de forma","cautiverio","círculo de teletransporte","consumir energía","convocar monstruo (IX)","deseo","disyunción de Mordenkainen","dominar monstruo","esféra prismática","etereidad","inmovilizar monstruo en grupo","lamento de la banshee","libertad","ligadura del alma","mano aplastante de Bigby","némesis inexorable","palaba de poder mortal","parar el tiempo","presciencia",
                        "proyección astral","refugio","tromba de meteoritos","umbral","umbras"];

let conjurosDivinos0 = ["conocer la dirección","crear agua","curar heridas menores","detectar magia","detectar veneno","inflingir heridas menores","leer magia","llamarada","luz","orientación divina","purificar comida y agua","remendar","resistencia","virtud"];

let conjurosDivinos1 = ["alarma","arma mágica","bendecir","bendecir agua","bendecir arma","buenas bayas","calmar animales","causar miedo","colmillo mágico","comprensión idiomática","convocar aliado natural (I)","convocar monstruo (I)","curar heridas leves","detectar animales o plantas","detectar el bien/el caos/el mal/la ley","detectar muertos vivientes","detectar trampas y fosas","enmarañar","esconderse de los animales","esconderse de los muertos vivientes","escudo de entropía","escudo de la fé",
                        "fatalidad","favor divino","flamear","fuego feérico","garrote","hablar con los animales","hechizar animal","inflingir heridas leves","maldecir agua","niebla de obscurecimiento","orden imperiosa","pasar sin dejar rastro","perdición","piedra mágica","protección congtra el caos/el mal/el bien/la ley","quitar miedo","reloj de la muerte","salto","santuario","soportar los elementos","zancada prodigiosa"];

let conjurosDivinos2 = ["ablandar tierra y piedra","alineamiento indetectable","apacible descanso","arma espiritual","augurio","calentar metal","calmar emociones","campanas fúnebres","cautivar","consagrar","convocar aliado natural (II)","convocar plaga (o enjambre)","convocar monstruo (II)","curar heridas moderadas","deformar madera","encontrar trampas","escudar a otro","esfera flamígera","esplendor de águila","estallar",
                        "explosión de sonido","filo flamígero","fuerza de toro","gracias felina","hablar con las plantas","helar metal","inflingir heridas moderadas","inmovilizar animal","inmovilizar persona","integrar","lentificar veneno","mensajero animal","nube brumosa","oscuridad","piel robliza","profanar","quitar parálisis","ráfaga de viento","reducir animal","resistencia de oso","resistir energía","restablecimiento menor",
                        "sabiduría de búho","silencio","situación","trance animal","trampa de fuego","trampa de lazo","transformar madera","trepar cual arácnido","zona de verdad"];

let conjurosDivinos3 = ["apagar","brotar de espinas","caminar sobre las aguas","ceguera/sordera","círculo mágico contra el bien/el caos/el mal/la ley","colmillo mágico mayor","contagio","convocar aliado natural (III)","convocar monstruo (III)","crear comida y agua","crecimiento vegetal","curar heridas graves","disipar magia","dominar animal","fundirse con la piedra","glifo custodio","hablar con las plantas","hablar con los muertos",
                        "inflingir heridas graves","lanzar maldición","llama continua","llamar al relámpago","localizar objeto","luz abrasadora","luz del día","mano auxiliadora","muro de viento","neutralizar veneno","obscurecer objeto","obscuridad profunda","plegaria","protección contra la energía","purgar invisibilidad","quitar ceguera/sordera","quitar enfermedad","quitar maldición","reanimar a los muertos","reducir plantas","respiración acuática","sanar a una montura","tormenta de aguanieve",
                        "trampa de lazo","transformar piedra","vestidura mágica","visión en la oscuridad"];

let conjurosDivinos4 = ["adivinación","aliado de los planos menor","ancla dimensional","arma mágica mayor","asolar","caparazón antivegetal","caminar por el aire","comandar plantas","contacto herrumbroso","controlas las aguas","convocar aliado natural (IV)","convocar monstruo (IV)","curar heridas críticas","custodia contra la muerte","discernir mentiras","don de lenguas","espada sagrada","exorcismo","imbuir aptitud para los conjuros","inflingir heridas críticas","indetectabilidad","inmunidad a conjuros",
                        "libertad de movimiento","piedras puntiagudas","poder divino","recado","reencarnar","repeler sabandijas","restablecimiento","romper encantamiento","sabandijas gigantes","veneno","zancada arbórep"];

let conjurosDivinos5 = ["arma disruptora","comandar mayor","comunión","comunión con la naturaleza","controlar los vientos","convocar monstruo (V)","convocar aliado natural (V)","crecimiento animal","curar heridas leves en grupo","desacralizar","descarga flamígera","desplazamiento de plano","disipar el bien/el mal/el caos/la ley","dotar de consciencia","escudriñamiento","expiación","inflingir heridas ligeras en grupo","llamar a la tormenta de relámpagos",
                        "marca de la justicia","muro de espinas","muro de fuego","muro de piedra","piel pétrea","plaga de insectos","poder de la justicia","polimorfar funesto","rematar a los vivos","resistencia a conjuros","revivir a los muertos","romper encantamiento","sacralizar","símbolo de dolor","símbolo de sueño","tormenta de hielo","transmutar barro en roca","transmutar roca en barro","visión verdadera"];

let conjurosDivinos6 = ["aliado de los planos","animar objetos","barrera de cuchillos","bastón de conjuro","caminar con el viento","caparazón antivida","convocar aliado natural (VI)","convocar monstruo (VI)","crear muertos vivientes","curar heridas moderadas en grupo","dañar","de la muerte viviente a la muerte","destierro","disipar magia mayor","encontrar la senda","esplendor de águila","festín de los héroes","fuerza de toro en grupo",
                        "geas/empeño","glifo custodio mayor","gracia felina en grupo","inflingir heridas moderadas en grupo","interdicción","madera férrea","palabra de regreso","piedra parlante","remover tierra","repeler madera","resistencia de oso en grupo","roble guardían","sabiduría de búho en grupo","sanar","semillas de fuego","símbolo de miedo","símbolo de persuasión","viajar mediante plantas"];

let conjurosDivinos7 = ["animar plantas","bastón cambiante","blasfemia","controlar el clima","convocar aliado natural (VII)","convocar monstruo (VII)","curar heridas graves en grupo","destrucción","escudriñamiento mayor","excursión etérea","inflingir heridas graves en grupo","marabunta","máxima","palabra del caos","palabra sagrada","rayo solar","rechazo","refugio","regenerar","restablecimiento mayor","resurrección",
                        "símbolo de aturdimiento","símbolo de debilidad","transmutar metal en madera"];

let conjurosDivinos8 = ["aliados de los planos mayor","aura sacrilega","aura sagrada","campo antimagia","capa del caos","cerradura dimensional","controlar plantas","convocar aliado natural (VIII)","convocar monstruo (VIII)","crear muertos vivientes mayores","curar heridas críticas en grupo","explosión solar","dedo de la muerte","discernir ubicación","escudo de la ley","inflingir heridas críticas en grupo","inmunidad a los conjuros mayor",
                        "invertir gravedad","formas de animal","repeler piedra o metal","símbolo de locura","símbolo de muerte","terremoto","tormenta de fuego","torbellino"];

let conjurosDivinos9 = ["antipatía","desbrozar","cambiar de forma","consumir energía","convocar aliado natural (IX)","convocar monstruo (IX)","enjambre elemental","etereidad","implosión","ligadura del alma","milagro","presciencia","proyección astral","regenerar","resurrección verdadera","sanar en grupo","simpatía","tormenta de venganza","umbral"];

let npcRandom = ["Cicatriz","Altísimo","Le falta un dedo","Mal aliento","Olor a perfume","Extraño color de ojos","Tos seca","Voz muy baja","Voz muy alta","Mal hablado","Ceceo","Tartamudeo","Tatuaje","Extraño color de piel","Calvo","Pelo muy largo","Extraño color de pelo","Cojea","Joyas características","Ropas llamativas","Mal vestido","Tic en los ojos",
                "Nervioso y manotea","Muy atractivo","Espalda encorvada","Chaparro","En los huesos","Obeso","Se le va la onda","Mastica algo","Sucio y descuidado","Egoista","Servil","Soñoliento","Pedante","Excesivamente crítico","Amante del arte","Coleccionista","Tacaño","Derrochador","Pesimista","Optimista","Borracho","Psíquico","Cortés","Ultra religioso","Mal educado","Asistadizo","De alcurnia","Orgulloso","Mal genio",
                "Desquiciado","Valiente","Cobarde","Curioso","Veraz","Mentiroso","Perezoso","Energético","Moralista","Cruel","Sexista","Racista","Fascinado por la magia","Receloso ante la magia","Bromista","Sin una extremidad","Sexi","Coqueto","Muchas heridas","Llagas y acné","Partes metálicas","Muy viejo","Demasiado joven","Animal compañia","Gemelos","Sádico","Sabio","Chismoso","Hipster","Hippie","Fuertemente armado","Andrógeno","Lgbt","Se queda viendo fijo","Mudo","Ciego","Sordo","Hostil","Valora la fuerza",
                "De vida Salvaje","Magia durmiente","Pss.. espía aliado","Feo","Bruto","Apostador","Cyborg","Contrabandista","Misión alterna","Avatar de ..."];


//***************************************** DADOS *************************************//
function tiroDeDados(dados,lados)   {
                                    let resDado=0;
                                    for (i=0; i<dados; i++) {
                                                            let resDado = resDado + Math.floor((Math.random() * lados) + 1);
                                                            }
                                    return resDado;
                                    }

//***************************************** BOTÓN BACK *************************************//
function back() { //Regresar al menú principal
                document.getElementById("mainBox").style.height = "250px"; // Vuelve el contenedor al tamaño original
                document.getElementById("botnpc").style.top = "75%"; // vuelve el botón NPC a la posición original
                document.getElementById("botnpc").style.left = "30%"; //
                document.getElementById("botloot").style.top = "75%"; // vuelve el botón Loot a la posición original
                document.getElementById("botloot").style.left = "70%"; //
                document.getElementById("botloot").style.display = "block"; // vuelve a aparecer el botón de loot
                document.getElementById("botnpc").style.display = "block"; // vuelve a aparecer el botón NPC
                clic = 1; // la variable vuelve a su valor original para que el botón no vuelva a disparar la función randomizador NPC
                document.querySelector('#respuestas').innerHTML = ''; // se vacían los divs donde aparecían los valores random NPC
                document.querySelector('#respuestas2').innerHTML = ''; //
                document.querySelector('#respuestas3').innerHTML = ''; //
                document.querySelector('#respuestas4').innerHTML = ''; //
                document.getElementById("respuestaLoot1").style.display = "none"; //desaparecen las respuestas loot
                document.getElementById("respuestaLoot2").style.display = "none"; //
                document.getElementById("respuestaLoot3").style.display = "none"; //
                document.getElementById("label1").style.display = "none"; //desaparecen los labels loot
                document.getElementById("label2").style.display = "none"; //
                document.getElementById("label3").style.display = "none"; //
                document.getElementById("backbtn").style.top = "22%"; // el boton back vuelve a su posicion original
                document.getElementById("backbtn").style.display = "none"; // desaparece el botón "back"
                document.getElementById("titulo").style.top = "25%"; // regresa el titulo a posición original
                document.getElementById("logoDD").style.left = "calc(50% - 50px)"; // El logo regresa a la izquierda
                document.getElementById("logoDD").style.top = "-50px"; // El logo regresa abajo
                document.getElementById("nivel").style.display = "none";  // desaparece todo lo de loop
                document.getElementById("porcentuales").style.display = "none"; //
                document.getElementById("butt-one").style.display = "none"; //
                document.getElementById("butt-two").style.display = "none"; //
                document.getElementById("calculo1").style.display = "none"; //
                document.getElementById("botloot").style.display = "inline-block"; // El botón Loot aparece
                }



//***************************************** BOTÓN NPC *************************************// 
function divLogin( ){
                    if(clic==1){
                                document.getElementById("mainBox").style.height = "400px"; // Crece el contenedor
                                document.getElementById("botnpc").style.top = "45%"; // El botón NPC cambia de posición
                                document.getElementById("botnpc").style.left = "50%"; //
                                document.getElementById("botloot").style.display = "none"; // Desaparece el botón "Loot"
                                document.getElementById("titulo").style.top = "16%";
                                appear(); // Aparece el botón "back"
                                randomizadorNPC(); // Se ejecuta la función para generar NPC's
                                clic = clic + 1;
                                } 
   
                    else{ 
                        document.getElementById("botnpc").onclick(randomizadorNPC()); // Al presionar el botón NPC se sigue ejecutando la función
                        }   

                    }

function appear()   { //Aparece el botón "back"
                    document.getElementById("backbtn").style.display = "inline-block";
                    }

//***************************************** BOTÓN LOOT *************************************// 
function divLogin2( ){
    if(clic==1){
                document.getElementById("logoDD").style.top = "-25px"; // El logo baja
                document.getElementById("logoDD").style.left = "75%"; // El logo se va a la derecha
                document.getElementById("titulo").style.top = "3%"; // El titulo sube
                document.getElementById("mainBox").style.height = "450px"; // Crece el contenedor
                document.getElementById("botloot").style.display = "none"; // El botón Loot desaparece
                document.getElementById("botnpc").style.display = "none"; // Desaparece el botón "NPC"
                document.getElementById("nivel").style.display = "block"; // Aparece el input nivel
                document.getElementById("label1").style.display = "block"; //aparecen los labels loot
                document.getElementById("label2").style.display = "block"; //
                document.getElementById("label3").style.display = "block"; //
                document.getElementById("porcentuales").style.display = "block"; // Aparece el input porcentuales
                document.getElementById("butt-one").style.display = "block"; // Aparece el botón de Calcular
                document.getElementById("butt-two").style.display = "block"; // Aparece el botón de Reset
                appear(); // Aparece el botón "back"
                document.getElementById("backbtn").style.top = "5%";
                document.getElementById('enter-num').value = ''; // se borra el valor puesto en input
                document.getElementById('enter-num2').value = ''; //
                clic = clic + 1;
                }  

    }

//***************************************** FUNCIÓN RANDOMIZADOR NPC *************************************//
function randomizadorNPC() {

                            //************** VARIABLES ******************//
                            let rasgoNPC, alineamiento, raza, clase;

                            //************** RANDOMIZACIÓN ******************//
                            rasgoNPC = Math.floor((Math.random() * 100) + 1);
                            alineamiento = Math.floor((Math.random() * 100) + 1);
                            raza = Math.floor((Math.random() * 100) + 1);
                            clase = Math.floor((Math.random() * 100) + 1);


                            //************** RASGOS ******************//
                            rasgoNPC = npcRandom[Math.floor((Math.random() * 100))];

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

                            //************** Vaciado de campos ******************//
                            document.querySelector('#respuestas').innerHTML = '';
                            document.querySelector('#respuestas2').innerHTML = '';
                            document.querySelector('#respuestas3').innerHTML = '';
                            document.querySelector('#respuestas4').innerHTML = '';

                            //************** Llenado de campos ******************//
                            let respuesta = document.createTextNode(rasgoNPC); //se pueden unir variables en creatTextNode
                            document.getElementById("respuestas").appendChild(respuesta); //solo puede haber una variable en appenChild

                            let respuesta2 = document.createTextNode(alineamiento);
                            document.getElementById("respuestas2").appendChild(respuesta2);

                            let respuesta3 = document.createTextNode(raza);
                            document.getElementById("respuestas3").appendChild(respuesta3);

                            let respuesta4 = document.createTextNode(clase);
                            document.getElementById("respuestas4").appendChild(respuesta4);

                            }



//***************************************** FUNCIÓN RESET *************************************//
function reset()    {
                    document.getElementById('enter-num').value = ''; // se borra el valor puesto en input
                    document.getElementById('enter-num2').value = ''; //
                    document.getElementById("respuestaLoot1").style.display = "none"; // desaparecen las respuestas
                    document.getElementById("respuestaLoot2").style.display = "none"; //
                    document.getElementById("respuestaLoot3").style.display = "none"; //
                    }


//***************************************** FUNCIÓN CALCULAR LOOT *************************************//
function calcular() {
    let valor1 = document.getElementById("enter-num").value;
    let valor2 = document.getElementById("enter-num2").value;
    document.querySelector('#respuestaLoot1').innerHTML = " ";
    document.querySelector('#respuestaLoot2').innerHTML = " ";
    document.querySelector('#respuestaLoot3').innerHTML = " ";

    if (valor1 == 1){
                    if (valor2 >= 1 && valor2 <= 14) {document.querySelector('#respuestaLoot1').innerHTML = '10 Cobre';}
                    else if (valor2 >= 15 && valor2 <= 29) {document.querySelector('#respuestaLoot1').innerHTML = tiroDeDados(1, 4)*10 + " Plata";}
                    else if (valor2 >= 30 && valor2 <= 70) {document.querySelector('#respuestaLoot1').innerHTML = tiroDeDados(1, 6)*10 + " Plata";}
                    else if (valor2 >= 71 && valor2 <= 90)  {
                                                            document.querySelector('#respuestaLoot1').innerHTML = tiroDeDados(2, 6)*10 + " Plata";
                                                            document.querySelector('#respuestaLoot2').innerHTML = gemas(1, 1);
                                                            document.querySelector('#respuestaLoot3').innerHTML = mundano(1,4);
                                                            }
                    else if (valor2 >= 91 && valor2 <= 100) {document.querySelector('#respuestaLoot1').innerHTML = tiroDeDados(1, 4)*5 + " Oro"; document.querySelector('#respuestaLoot2').innerHTML = "1 Arte"; document.querySelector('#respuestaLoot3').innerHTML = " ";}
                    }

    else if (valor1 == 2)   {

                            }

    else if (valor1 == 3)   {

                            }

    else if (valor1 == 4)   {

                            }

    else if (valor1 == 5)   {

                            }

    else if (valor1 == 6)   {

                            }

    else if (valor1 == 7)   {

                            }

    else if (valor1 == 8)   {

                            }

    else if (valor1 == 9)   {

                            }

    else if (valor1 == 10)  {

                            }

    else if (valor1 == 11)  {

                            }

    else if (valor1 == 12)  {

                            }

    else if (valor1 == 1)   {

                            }

    else if (valor1 == 13)  {

                            }

    else if (valor1 == 14)  {

                            }

    else if (valor1 == 15)  {

                            }

    else if (valor1 == 16)  {

                            }

    else if (valor1 == 17)  {

                            }

    else if (valor1 == 18)  {

                            }

    else if (valor1 == 19)  {

                            }

    else if (valor1 == 20)  {

                            }

    document.getElementById("respuestaLoot1").style.display = "inline-block";
    document.getElementById("respuestaLoot2").style.display = "inline-block";
    document.getElementById("respuestaLoot3").style.display = "inline-block";

                    }


function gemas(dados , lados)   {
                                let cantidad = tiroDeDados(dados, lados); // Cantidad de gemas a recibir
                                let segmento = Math.floor((Math.random() * 100) + 1); // se tira un dado porcentual para ver qué segmento usar
                                let respuesta = " "; // se declara la variable donde estarán los premios
                                
                                let gemas1 = ["Ágata listada", "Ágata musgosa", "Ágata aojada", "Azurita", "Cuarzo azul", "Malaquita", "Obsidiana", "Rodocrosita", "Ojo de tigre", "Perla de agua dulce (con irregularidades)"];
                                let gemas2 = ["Heliotropo (piedra de sangre)", "Cornalina", "Calcedonia", "Crisoprasa", "Lolita", "Jaspe", "Adularia (piedra de luna)", "Ónice", "Peridoto", "Cristal de roca (cuadro transparente)", "Sarda", "Sardónice", "Cuarzo citrino", "Cuarzo rosado estrella", "Cuarzo ahumado", "Cuarzo rosado", "Circón"];
                                let gemas3 = ["Ámbar", "Amatista", "Crisobelino", "Coral", "Granate rojo", "Granate amarillo verdoso", "Jade", "Azabache", "Perla blanca", "Perla dorada", "Perla rosada", "Perla argéntea", "Esponela roja", "Esponela verde intenso", "Esponela rojo vinoso", "Turmalina"];
                                let gemas4 = ["Alejandrita", "Aguamarina", "Granate violáceo", "Perla negra", "Espinela azul intenso", "Topacio amarillo"];
                                let gemas5 = ["Esmeralda", "Ópalo de fuego", "Opalo blanco", "Opalo negro", "Zafiro azul", "Corindón amarillo intenso", "Coridón violado", "Zafiro negro", "Zafiro azul estrella", "Rubí estrella"];
                                let gemas6 = ["Esmeralda diáfana verde de gran brillo","Diamante azulado", "Diamante castaño", "Diamante rosa", "Diamante ambarino", "Jacinto"];
                                
                                if (segmento >= 1 && segmento <= 25){
                                    for(let i=0; i<cantidad; i++)  {
                                                                    let random = Math.floor((Math.random() * 10));
                                                                    respuesta = respuesta + gemas1[random] + "; ";
                                                                    }
                                                                    }

                                else if (segmento >= 26 && segmento <= 50)  {
                                    for(let i=0; i<cantidad; i++)  {
                                                                    let random = Math.floor((Math.random() * 17));
                                                                    respuesta = respuesta + gemas2[random] + "; ";
                                                                    }
                                                                            }

                                else if (segmento >= 51 && segmento <= 70)  {
                                    for(let i=0; i<cantidad; i++)  {
                                                                    let random = Math.floor((Math.random() * 16));
                                                                    respuesta = respuesta + gemas3[random] + "; ";
                                                                    }
                                                                            }

                                else if (segmento >= 71 && segmento <= 90)  {
                                    for(let i=0; i<cantidad; i++)  {
                                                                    let random = Math.floor((Math.random() * 6));
                                                                    respuesta = respuesta + gemas4[random] + "; ";
                                                                    }
                                                                            }

                                else if (segmento >= 91 && segmento <= 99) {
                                    for(let i=0; i<cantidad; i++)  {
                                                                    let random = Math.floor((Math.random() * 10));
                                                                    respuesta = respuesta + gemas5[random] + "; ";
                                                                    }
                                                                            }

                                else if (segmento == 100)   {
                                    for(let i=0; i<cantidad; i++)  {
                                                                    let random = Math.floor((Math.random() * 6));
                                                                    respuesta = respuesta + gemas6[random] + "; ";
                                                                    }
                                                            }
                                return respuesta;

                                }

function mundano(dados, lados)  {
                                let cantidad = tiroDeDados(dados, lados); // el resultado del tiro de dados
                                let respuesta = " "; // se declara la variable donde estarán los premios

                                for(let i=0; i<cantidad; i++)   {
                                
                                let segmento = tiroDeDados(1, 100); // se tira un dado porcentual para ver qué segmento usar
                                let segmento2 = tiroDeDados(1, 100); // otro tiro de dados para el subsegmento

                                if (segmento >= 1 && segmento <= 17){
                                                                    if (segmento2 >= 1 && segmento2 <= 12)  {
                                                                                                            respuesta = respuesta + tiroDeDados(1, 4) + " frasco(s) de fuego de alquimista; ";
                                                                                                            }
                                                                    else if (segmento2 >= 13 && segmento2 <= 24){
                                                                                                                respuesta = respuesta + tiroDeDados(2, 4) + " frasco(s) de ácido; ";
                                                                                                                }
                                                                    else if (segmento2 >= 25 && segmento2 <= 36){
                                                                                                                respuesta = respuesta + tiroDeDados(1, 4) + " vara(s) de ahumadera; ";
                                                                                                                }
                                                                    else if (segmento2 >= 37 && segmento2 <= 48){
                                                                                                                respuesta = respuesta + tiroDeDados(1, 4) + " frasco(s) de fuego de agua bendita; ";
                                                                                                                }
                                                                    else if (segmento2 >= 49 && segmento2 <= 62){
                                                                                                                respuesta = respuesta + tiroDeDados(1, 4) + " dosis(s) de contraveneno; ";
                                                                                                                }
                                                                    else if (segmento2 >= 63 && segmento2 <= 74){
                                                                                                                respuesta = respuesta + " antorcha siempreardiente; ";
                                                                                                                }
                                                                    else if (segmento2 >= 75 && segmento2 <= 88){
                                                                                                                respuesta = respuesta + tiroDeDados(1, 4) + " bolsa(s) de maraña; ";
                                                                                                                }
                                                                    else if (segmento2 >= 89 && segmento2 <= 100)   {
                                                                                                                    respuesta = respuesta + tiroDeDados(1, 4) + " piedra(s) de trueno; ";
                                                                                                                    }
                                                                    }

                                else if (segmento >= 18 && segmento <= 50)  {
                                                                            if (segmento2 >= 1 && segmento2 <= 12)  {
                                                                                                                    respuesta = respuesta + " camisote de mallas; ";
                                                                                                                    }
                                                                            else if (segmento2 >= 13 && segmento2 <= 18){
                                                                                                                    respuesta = respuesta + " armadura de cuero tachonado de gran calidad; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 19 && segmento2 <= 26){
                                                                                                                    respuesta = respuesta  + " coraza; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 27 && segmento2 <= 34){
                                                                                                                    respuesta = respuesta  + " cota de bandas; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 35 && segmento2 <= 54){
                                                                                                                    respuesta = respuesta  + " armadura de placas y mallas; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 55 && segmento2 <= 80){
                                                                                                                    respuesta = respuesta + " armadura completa; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 81 && segmento2 <= 90){
                                                                                                                        let subseg = tiroDeDados(1, 100);
                                                                                                                        if (subseg >= 1 && subseg <= 50)    {
                                                                                                                                                            respuesta = respuesta + " broquel de madera oscura; "
                                                                                                                                                            }
                                                                                                                        else if (subseg >= 51 && subseg <= 100) {
                                                                                                                                                                respuesta = respuesta + " escudo de madera oscura; "
                                                                                                                                                                }
                                                                                                                        }
                                                                            else if (segmento2 >= 91 && segmento2 <= 100)   {
                                                                                                                            let subseg1 = tiroDeDados(1, 100);
                                                                                                                            if (subseg1 >= 1 && subseg1 <= 17)  {
                                                                                                                                                                respuesta = respuesta + " broquel de gran calidad; "
                                                                                                                                                                }
                                                                                                                            else if (subseg1 >= 18 && subseg1 <= 40){
                                                                                                                                                                    respuesta = respuesta + " escudo ligero de madera de gran calidad; "
                                                                                                                                                                    }
                                                                                                                            else if (subseg1 >= 41 && subseg1 <= 60){
                                                                                                                                                                    respuesta = respuesta + " escudo ligero de acero de gran calidad; "
                                                                                                                                                                    }
                                                                                                                            else if (subseg1 >= 61 && subseg1 <= 83){
                                                                                                                                                                    respuesta = respuesta + " escudo pesado de madera de gran calidad; "
                                                                                                                                                                    }
                                                                                                                            else if (subseg1 >= 84 && subseg1 <= 100)   {
                                                                                                                                                                        respuesta = respuesta + " escudo pesado de acero de gran calidad; "
                                                                                                                                                                        }
                                                                                                                            }   
                                                                            }

                                else if (segmento >= 51 && segmento <= 83)  {
                                                                            if (segmento2 >= 1 && segmento2 <= 50)  {
                                                                                                                    let subseg2 = tiroDeDados(1,100);
                                                                                                                    if (subseg2 >= 1 && subseg2 <= 3)   {
                                                                                                                                                        respuesta = respuesta + " bastón; ";
                                                                                                                                                        }
                                                                                                                    else if (subseg2 >= 4 && subseg2 <= 8)  {
                                                                                                                                                            respuesta = respuesta + " cimitarra; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 9 && subseg2 <= 12) {
                                                                                                                                                            respuesta = respuesta + " daga; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 13 && subseg2 <= 22){
                                                                                                                                                            respuesta = respuesta + " espada bastarda; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 23 && subseg2 <= 27){
                                                                                                                                                            respuesta = respuesta + " espada corta; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 28 && subseg2 <= 40){
                                                                                                                                                            respuesta = respuesta + " espada larga; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 41 && subseg2 <= 50){
                                                                                                                                                            respuesta = respuesta + " espadón; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 51 && subseg2 <= 54){
                                                                                                                                                            respuesta = respuesta + " estoque; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 55 && subseg2 <= 64){
                                                                                                                                                            respuesta = respuesta + " gran hacha; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 65 && subseg2 <= 75){
                                                                                                                                                            respuesta = respuesta + " hacha de guerra enana; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 76 && subseg2 <= 79){
                                                                                                                                                            respuesta = respuesta + " kama; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 80 && subseg2 <= 83){
                                                                                                                                                            respuesta = respuesta + " lanza corta; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 84 && subseg2 <= 87){
                                                                                                                                                            respuesta = respuesta + " maza ligera; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 88 && subseg2 <= 92){
                                                                                                                                                            respuesta = respuesta + " maza pesada; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 93 && subseg2 <= 96){
                                                                                                                                                            respuesta = respuesta + " nunchaku; ";
                                                                                                                                                            }
                                                                                                                    else if (subseg2 >= 97 && subseg2 <= 100)   {
                                                                                                                                                                respuesta = respuesta + " siangham; ";
                                                                                                                                                                }
                                                                                                                    }
                                                                            else if (segmento2 >= 51 && segmento2 <= 70){
                                                                                                                        let subgseg3 = tiroDeDados(1, 100);
                                                                                                                        if (subseg3 >= 1 && subseg3 <= 3)   {
                                                                                                                                                            respuesta = respuesta + " alabarda; ";
                                                                                                                                                            }
                                                                                                                        else if (subseg3 >= 4 && subseg3 <= 5)  {
                                                                                                                                                                respuesta = respuesta + " alfanjón; ";
                                                                                                                                                                }
                                                                                                                        else if (subseg3 >= 6 && subseg3 <= 9)  {
                                                                                                                                                                respuesta = respuesta + " ballesta de mano; ";
                                                                                                                                                                }
                                                                                                                        else if (subseg3 >= 10 && subseg3 <= 12)    {
                                                                                                                                                                    respuesta = respuesta + " ballesta de repetición; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 13 && subseg3 <= 14)    {
                                                                                                                                                                    respuesta = respuesta + " bisarma; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 15 && subseg3 <= 16)    {
                                                                                                                                                                    respuesta = respuesta + " cachiporra; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 17 && subseg3 <= 19)    {
                                                                                                                                                                    respuesta = respuesta + " cadena armada; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 20 && subseg3 <= 21)    {
                                                                                                                                                                    respuesta = respuesta + " clava; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 22 && subseg3 <= 24)    {
                                                                                                                                                                    respuesta = respuesta + " espada de dos hojas; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 25 && subseg3 <= 26)    {
                                                                                                                                                                    respuesta = respuesta + " gran clava; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 27 && subseg3 <= 28)    {
                                                                                                                                                                    respuesta = respuesta + " guadaña; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 29 && subseg3 <= 30)    {
                                                                                                                                                                    respuesta = respuesta + " guantelete; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 31 && subseg3 <= 32)    {
                                                                                                                                                                    respuesta = respuesta + " guantelete armado; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 33 && subseg3 <= 34)    {
                                                                                                                                                                    respuesta = respuesta + " guja; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 35 && subseg3 <= 38)    {
                                                                                                                                                                    respuesta = respuesta + " hacha de batalla; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 39 && subseg3 <= 40)    {
                                                                                                                                                                    respuesta = respuesta + " hacha de mano; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 41 && subseg3 <= 43)    {
                                                                                                                                                                    respuesta = respuesta + " hacha doble orca; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 44 && subseg3 <= 45)    {
                                                                                                                                                                    respuesta = respuesta + " hoz; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 46 && subseg3 <= 48)    {
                                                                                                                                                                    respuesta = respuesta + " kukri; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 49 && subseg3 <= 50)    {
                                                                                                                                                                    respuesta = respuesta + " lanza larga; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 51 && subseg3 <= 52)    {
                                                                                                                                                                    respuesta = respuesta + " lanza ligera de caballería; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 53 && subseg3 <= 54)    {
                                                                                                                                                                    respuesta = respuesta + " lanza pesada de caballería; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 55 && subseg3 <= 57)    {
                                                                                                                                                                    respuesta = respuesta + " látigo; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 58 && subseg3 <= 60)    {
                                                                                                                                                                    respuesta = respuesta + " mangual doble; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 61 && subseg3 <= 64)    {
                                                                                                                                                                    respuesta = respuesta + " mangual ligero; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 65 && subseg3 <= 69)    {
                                                                                                                                                                    respuesta = respuesta + " mangual pesado; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 70 && subseg3 <= 72)    {
                                                                                                                                                                    respuesta = respuesta + " martillo de guerra; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 73 && subseg3 <= 75)    {
                                                                                                                                                                    respuesta = respuesta + " martillo ganchudo gnomo; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 76 && subseg3 <= 77)    {
                                                                                                                                                                    respuesta = respuesta + " martillo ligero; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 78 && subseg3 <= 80)    {
                                                                                                                                                                    respuesta = respuesta + " maza de armas; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 81 && subseg3 <= 83)    {
                                                                                                                                                                    respuesta = respuesta + " media lanza; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 84 && subseg3 <= 85)    {
                                                                                                                                                                    respuesta = respuesta + " pico ligero; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 86 && subseg3 <= 87)    {
                                                                                                                                                                    respuesta = respuesta + " pico pesado; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 88 && subseg3 <= 89)    {
                                                                                                                                                                    respuesta = respuesta + " puñal; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 90 && subseg3 <= 91)    {
                                                                                                                                                                    respuesta = respuesta + " red; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 92 && subseg3 <= 93)    {
                                                                                                                                                                    respuesta = respuesta + " ronca; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 94 && subseg3 <= 95)    {
                                                                                                                                                                    respuesta = respuesta + " shuriken; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 96 && subseg3 <= 97)    {
                                                                                                                                                                    respuesta = respuesta + " tridente; ";
                                                                                                                                                                    }
                                                                                                                        else if (subseg3 >= 98 && subseg3 <= 100)   {
                                                                                                                                                                    respuesta = respuesta + " urgrosh enano; ";
                                                                                                                                                                    }
                                                                                                                        }                                                
                                                                            else if (segmento2 >= 71 && segmento2 <= 100)   {
                                                                                                                            let subgseg4 = tiroDeDados(1, 100);
                                                                                                                            if (subseg4 >= 1 && subseg4 <= 10)  {
                                                                                                                                                                let subseg5 = tiroDeDados(1, 100);
                                                                                                                                                                if (subseg5 >= 1 && subseg5 <= 50) { respuesta = respuesta + " flechas(50); "; }
                                                                                                                                                                else if (subseg5 >= 51 && subseg5 <= 80) { respuesta = respuesta + " virotes de ballesta(50); "; }
                                                                                                                                                                else if (subseg5 >= 81 && subseg5 <= 100) { respuesta = respuesta + " balas de honda(50); "; }
                                                                                                                                                                }
                                                                                                                            else if (subseg4 >= 11 && subseg4 <= 15){
                                                                                                                                                                    respuesta = respuesta + " hacha arrojadiza; ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 16 && subseg4 <= 25){
                                                                                                                                                                    respuesta = respuesta + " ballesta pesada; ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 26 && subseg4 <= 35){
                                                                                                                                                                    respuesta = respuesta + " ballesta ligera; ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 36 && subseg4 <= 39){
                                                                                                                                                                    respuesta = respuesta + " dardo(50); ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 40 && subseg4 <= 41){
                                                                                                                                                                    respuesta = respuesta + " jabalina; ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 42 && subseg4 <= 46){
                                                                                                                                                                    respuesta = respuesta + " arco corto; ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 47 && subseg4 <= 51){
                                                                                                                                                                    respuesta = respuesta + " arco corto compuesto(fue+0); ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 52 && subseg4 <= 56){
                                                                                                                                                                    respuesta = respuesta + " arco corto compuesto(fue+1); ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 57 && subseg4 <= 61){
                                                                                                                                                                    respuesta = respuesta + " arco corto compuesto(fue+2); ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 62 && subseg4 <= 65){
                                                                                                                                                                    respuesta = respuesta + " honda; ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 66 && subseg4 <= 75){
                                                                                                                                                                    respuesta = respuesta + " arco largo; ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 76 && subseg4 <= 80){
                                                                                                                                                                    respuesta = respuesta + " arco largo; ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 81 && subseg4 <= 85){
                                                                                                                                                                    respuesta = respuesta + " arco largo compuesto(fue+1); ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 86 && subseg4 <= 90){
                                                                                                                                                                    respuesta = respuesta + " arco largo compuesto(fue+2); ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 91 && subseg4 <= 95){
                                                                                                                                                                    respuesta = respuesta + " arco largo compuesto(fue+3); ";
                                                                                                                                                                    }
                                                                                                                            else if (subseg4 >= 96 && subseg4 <= 100)   {
                                                                                                                                                                        respuesta = respuesta + " arco largo compuesto(fue+4); ";
                                                                                                                                                                        }
                                                                                                                            }                                                
                                                                            }

                                else if (segmento >= 84 && segmento <= 100) {
                                                                            if (segmento2 >= 1 && segmento2 <= 3)   {
                                                                                                                    respuesta = respuesta + " mochila vacía; ";
                                                                                                                    }
                                                                            else if (segmento2 >= 4 && segmento2 <= 6)  {
                                                                                                                        respuesta = respuesta + " palanqueta; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 7 && segmento2 <= 11) {
                                                                                                                        respuesta = respuesta + " linterna de ojo de buey; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 12 && segmento2 <= 16){
                                                                                                                        respuesta = respuesta + " cerradura sencilla; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 17 && segmento2 <= 21){
                                                                                                                        respuesta = respuesta + " cerradura corriente; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 22 && segmento2 <= 28){
                                                                                                                        respuesta = respuesta + " cerradura de calidad; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 29 && segmento2 <= 35){
                                                                                                                        respuesta = respuesta + " cerradura superior; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 36 && segmento2 <= 40){
                                                                                                                        respuesta = respuesta + " grilletes de gran calidad; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 41 && segmento2 <= 43){
                                                                                                                        respuesta = respuesta + " espejito de acero pulido; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 44 && segmento2 <= 46){
                                                                                                                        respuesta = respuesta + " cuerda de serda(50'); ";
                                                                                                                        }
                                                                            else if (segmento2 >= 47 && segmento2 <= 53){
                                                                                                                        respuesta = respuesta + " catalejo; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 54 && segmento2 <= 58){
                                                                                                                        respuesta = respuesta + " herramientas de gran calidad para artesano; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 59 && segmento2 <= 63){
                                                                                                                        respuesta = respuesta + " material de escalada; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 64 && segmento2 <= 68){
                                                                                                                        respuesta = respuesta + " material de disfraz; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 69 && segmento2 <= 73){
                                                                                                                        respuesta = respuesta + " material de curandero; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 74 && segmento2 <= 77){
                                                                                                                        respuesta = respuesta + " símbolo sagrado de plata; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 78 && segmento2 <= 81){
                                                                                                                        respuesta = respuesta + " reloj de arena; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 82 && segmento2 <= 88){
                                                                                                                        respuesta = respuesta + " lupa; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 89 && segmento2 <= 95){
                                                                                                                        respuesta = respuesta + " instrumento musical de gran calidad; ";
                                                                                                                        }
                                                                            else if (segmento2 >= 96 && segmento2 <= 100){
                                                                                                                        respuesta = respuesta + " herramienta de ladrón de gran calidad; ";
                                                                                                                        }
                                                                            }
                                                                }
                                return respuesta;
                                }

function menor(dados, lados){
                            let cantidad = tiroDeDados(dados, lados); // cantidad de premios a recibir
                            let respuesta = " ";

                            for(let i=0; i<cantidad; i++)   {
                                    let segmento = tiroDeDados(1, 100); // define el primer segmento

                                    if (segmento >= 1 && segmento <= 4) { //Armas y Escudos
                                                                        for(let j=0; j<1; j++)  {
                                                                        let menorRandom = tiroDeDados(1, 100);
                                                                        if (menorRandom >= 1 && menorRandom <= 60)  {
                                                                                                                    respuesta = respuesta + " Escudo+1; ";
                                                                                                                    }
                                                                        else if (menorRandom >= 61 && menorRandom <= 80){
                                                                                                                        respuesta = respuesta + " Armadura+1; ";
                                                                                                                        }
                                                                        else if (menorRandom >= 81 && menorRandom <= 85){
                                                                                                                        respuesta = respuesta + " Escudo+2; ";
                                                                                                                        }
                                                                        else if (menorRandom >= 86 && menorRandom <= 87){
                                                                                                                        respuesta = respuesta + " Armadura+2; ";
                                                                                                                        }
                                                                        else if (menorRandom >= 88 && menorRandom <= 89){
                                                                                                                        respuesta = respuesta + " Armadura Específica; ";
                                                                                                                        }
                                                                        else if (menorRandom >= 90 && menorRandom <= 91){
                                                                                                                        respuesta = respuesta + " Escudo Específico; ";
                                                                                                                        }
                                                                        else if (menorRandom >= 92 && menorRandom <= 100)   {
                                                                                                                            respuesta = respuesta + " Aptitud especial; "; j--; //se vuelve a tirar
                                                                                                                            }
                                                                                                }
                                                                        }

                                    else if (segmento >= 5 && segmento <= 9){ //Armas
                                                                            for(let j=0; j<1; j++)  {
                                                                            let menorRandom = tiroDeDados(1, 100);
                                                                            if (menorRandom >= 1 && menorRandom <= 70)  {
                                                                                                                        respuesta = respuesta + " Arma+1; ";
                                                                                                                        }
                                                                            else if (menorRandom >= 71 && menorRandom <= 85){
                                                                                                                            respuesta = respuesta + " Arma+2; ";
                                                                                                                            }
                                                                            else if (menorRandom >= 86 && menorRandom <= 90){
                                                                                                                            respuesta = respuesta + " Arma Específica; ";
                                                                                                                            }
                                                                            else if (menorRandom >= 91 && menorRandom <= 100){
                                                                                                                            respuesta = respuesta + " Aptitud especial; "; j--; //se vuelve a tirar
                                                                                                                            }
                                                                                                    }
                                                                            }

                                    else if (segmento >= 10 && segmento <= 44)  { //Pociones
                                                                                let menorRandom = tiroDeDados(1, 100);
                                                                                if (menorRandom >= 1 && menorRandom <= 10)  {
                                                                                                                            respuesta = respuesta + " " + pocionesYAceites[0] + "; ";
                                                                                                                            }
                                                                                else if (menorRandom >= 11 && menorRandom <= 13){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[1] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[2] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 16 && menorRandom <= 17){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[3] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 18 && menorRandom <= 19){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[4] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 20 && menorRandom <= 22){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[5] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 23 && menorRandom <= 25){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[6] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom == 26) {
                                                                                                            respuesta = respuesta + " " + pocionesYAceites[7] + "; ";
                                                                                                            }
                                                                                else if (menorRandom >= 27 && menorRandom <= 29){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[8] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom == 30) {
                                                                                                            respuesta = respuesta + " " + pocionesYAceites[9] + "; ";
                                                                                                            }
                                                                                else if (menorRandom >= 31 && menorRandom <= 32){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[10] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 33 && menorRandom <= 34){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[11] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom == 35) {
                                                                                                            respuesta = respuesta + " " + pocionesYAceites[12] + "; ";
                                                                                                            }
                                                                                else if (menorRandom >= 36 && menorRandom <= 38){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[13] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom == 39) {
                                                                                                            respuesta = respuesta + " " + pocionesYAceites[14] + "; ";
                                                                                                            }
                                                                                else if (menorRandom >= 40 && menorRandom <= 41){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[15] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 42 && menorRandom <= 44){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[16] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom == 45) {
                                                                                                            respuesta = respuesta + " " + pocionesYAceites[17] + "; ";
                                                                                                            }
                                                                                else if (menorRandom >= 46 && menorRandom <= 47){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[18] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 48 && menorRandom <= 50){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[19] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 51 && menorRandom <= 53){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[20] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 54 && menorRandom <= 56){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[21] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 57 && menorRandom <= 59){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[22] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 60 && menorRandom <= 62){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[23] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 63 && menorRandom <= 67){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[24] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom == 68) {
                                                                                                            respuesta = respuesta + " " + pocionesYAceites[25] + "; ";
                                                                                                            }
                                                                                else if (menorRandom >= 69 && menorRandom <= 71){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[26] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 72 && menorRandom <= 74){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[27] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 75 && menorRandom <= 76){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[28] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 77 && menorRandom <= 78){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[29] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 79 && menorRandom <= 81){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[30] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 82 && menorRandom <= 84){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[31] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 85 && menorRandom <= 86){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[32] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom == 87) {
                                                                                                            respuesta = respuesta + " " + pocionesYAceites[33] + "; ";
                                                                                                            }
                                                                                else if (menorRandom >= 88 && menorRandom <= 89){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[34] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 90 && menorRandom <= 91){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[35] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 92 && menorRandom <= 93){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[36] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 94 && menorRandom <= 96){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[37] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom == 97){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[38] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 98 && menorRandom <= 99){
                                                                                                                                respuesta = respuesta + " " + pocionesYAceites[39] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom == 100){
                                                                                                            respuesta = respuesta + " " + pocionesYAceites[40] + "; ";
                                                                                                            }
                                                                                }
                                    else if (segmento >= 45 && segmento <= 46)  { //Anillos
                                                                                let menorRandom = tiroDeDados(1, 100);
                                                                                if (menorRandom >= 1 && menorRandom <= 10)  {
                                                                                                                            respuesta = respuesta + " anillo de " + anillos[0] + "; ";
                                                                                                                            }
                                                                                else if (menorRandom >= 11 && menorRandom <= 13){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[1] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[2] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[3] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[4] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[5] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[6] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[7] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[8] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[9] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[10] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[14] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[15] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[16] + "; ";
                                                                                                                                }
                                                                                else if (menorRandom >= 14 && menorRandom <= 15){
                                                                                                                                respuesta = respuesta + " anillo de " + anillos[17] + "; ";
                                                                                                                                }
                                    else if (segmento >= 47 && segmento <= 75)  { //Rollos
                                                                                let segRollo = tiroDeDados(1, 100); //se decide si va a ser arcano o divino
                                                                                let cantidadRollo = tiroDeDados(1, 3); //cantidad de conjuros a recibir
                                                                                let nivelConjuro = tiroDeDados(1, 100); //nivel del conjuro al que puede acceder
                                                                                if (segRollo >= 1 && segRollo <= 70){ // conjuros arcanos
                                                                                                                    if (nivelConjuro >= 1 && nivelConjuro <= 5) { //nivel de conjuro arcano 0
                                                                                                                                                                for(i=0; i<cantidadRollo; i++)  {
                                                                                                                                                                                                let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                if (conj >= 1 && conj <= 5) {respuesta = respuesta + " " + conjurosArcanos0[0] + "; ";}
                                                                                                                                                                                                else if (conj >= 6 && conj <= 9) {respuesta = respuesta + " " + conjurosArcanos0[1] + "; ";}
                                                                                                                                                                                                else if (conj >= 10 && conj <= 11) {respuesta = respuesta + " " + conjurosArcanos0[2] + "; ";}
                                                                                                                                                                                                else if (conj >= 12 && conj <= 13) {respuesta = respuesta + " " + conjurosArcanos0[3] + "; ";}
                                                                                                                                                                                                else if (conj >= 14 && conj <= 18) {respuesta = respuesta + " " + conjurosArcanos0[4] + "; ";}
                                                                                                                                                                                                else if (conj >= 19 && conj <= 25) {respuesta = respuesta + " " + conjurosArcanos0[5] + "; ";}
                                                                                                                                                                                                else if (conj >= 26 && conj <= 29) {respuesta = respuesta + " " + conjurosArcanos0[6] + "; ";}
                                                                                                                                                                                                else if (conj >= 30 && conj <= 35) {respuesta = respuesta + " " + conjurosArcanos0[7] + "; ";}
                                                                                                                                                                                                else if (conj >= 36 && conj <= 40) {respuesta = respuesta + " " + conjurosArcanos0[8] + "; ";}
                                                                                                                                                                                                else if (conj >= 41 && conj <= 45) {respuesta = respuesta + " " + conjurosArcanos0[9] + "; ";}
                                                                                                                                                                                                else if (conj >= 46 && conj <= 51) {respuesta = respuesta + " " + conjurosArcanos0[10] + "; ";}
                                                                                                                                                                                                else if (conj >= 52 && conj <= 56) {respuesta = respuesta + " " + conjurosArcanos0[11] + "; ";}
                                                                                                                                                                                                else if (conj >= 57 && conj <= 60) {respuesta = respuesta + " " + conjurosArcanos0[12] + "; ";}
                                                                                                                                                                                                else if (conj >= 61 && conj <= 62) {respuesta = respuesta + " " + conjurosArcanos0[13] + "; ";}
                                                                                                                                                                                                else if (conj >= 63 && conj <= 66) {respuesta = respuesta + " " + conjurosArcanos0[14] + "; ";}
                                                                                                                                                                                                else if (conj >= 67 && conj <= 71) {respuesta = respuesta + " " + conjurosArcanos0[15] + "; ";}
                                                                                                                                                                                                else if (conj >= 72 && conj <= 75) {respuesta = respuesta + " " + conjurosArcanos0[16] + "; ";}
                                                                                                                                                                                                else if (conj >= 76 && conj <= 80) {respuesta = respuesta + " " + conjurosArcanos0[17] + "; ";}
                                                                                                                                                                                                else if (conj >= 81 && conj <= 87) {respuesta = respuesta + " " + conjurosArcanos0[18] + "; ";}
                                                                                                                                                                                                else if (conj >= 88 && conj <= 91) {respuesta = respuesta + " " + conjurosArcanos0[19] + "; ";}
                                                                                                                                                                                                else if (conj >= 92 && conj <= 96) {respuesta = respuesta + " " + conjurosArcanos0[20] + "; ";}
                                                                                                                                                                                                else if (conj >= 97 && conj <= 100) {respuesta = respuesta + " " + conjurosArcanos0[21] + "; ";}
                                                                                                                                                                                                }
                                                                                                                                                                }
                                                                                                                    else if (nivelConjuro >= 6 && nivelConjuro <= 50)   { //nivel de conjuro arcano 1
                                                                                                                                                                for(i=0; i<cantidadRollo; i++)  {
                                                                                                                                                                                                let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                if (conj >= 1 && conj <= 3) {respuesta = respuesta + " " + conjurosArcanos1[0] + "; ";}
                                                                                                                                                                                                else if (conj >= 4 && conj <= 6) {respuesta = respuesta + " " + conjurosArcanos1[1] + "; ";}    
                                                                                                                                                                                                else if (conj == 7) {respuesta = respuesta + " " + conjurosArcanos1[2] + "; ";}
                                                                                                                                                                                                else if (conj >= 8 && conj <= 9) {respuesta = respuesta + " " + conjurosArcanos1[3] + "; ";}       
                                                                                                                                                                                                else if (conj >= 10 && conj <= 12) {respuesta = respuesta + " " + conjurosArcanos1[4] + "; ";}
                                                                                                                                                                                                else if (conj >= 13 && conj <= 15) {respuesta = respuesta + " " + conjurosArcanos1[5] + "; ";}
                                                                                                                                                                                                else if (conj >= 16 && conj <= 17) {respuesta = respuesta + " " + conjurosArcanos1[6] + "; ";}
                                                                                                                                                                                                else if (conj >= 18 && conj <= 19) {respuesta = respuesta + " " + conjurosArcanos1[7] + "; ";}
                                                                                                                                                                                                else if (conj == 20) {respuesta = respuesta + " " + conjurosArcanos1[8] + "; ";}
                                                                                                                                                                                                else if (conj >= 21 && conj <= 22) {respuesta = respuesta + " " + conjurosArcanos1[9] + "; ";}
                                                                                                                                                                                                else if (conj >= 23 && conj <= 25) {respuesta = respuesta + " " + conjurosArcanos1[10] + "; ";}
                                                                                                                                                                                                else if (conj == 26) {respuesta = respuesta + " " + conjurosArcanos1[11] + "; ";}
                                                                                                                                                                                                else if (conj >= 27 && conj <= 28) {respuesta = respuesta + " " + conjurosArcanos1[12] + "; ";}
                                                                                                                                                                                                else if (conj >= 29 && conj <= 30) {respuesta = respuesta + " " + conjurosArcanos1[13] + "; ";}
                                                                                                                                                                                                else if (conj == 31) {respuesta = respuesta + " " + conjurosArcanos1[14] + "; ";}
                                                                                                                                                                                                else if (conj >= 32 && conj <= 33) {respuesta = respuesta + " " + conjurosArcanos1[15] + "; ";}
                                                                                                                                                                                                else if (conj >= 34 && conj <= 36) {respuesta = respuesta + " " + conjurosArcanos1[16] + "; ";}
                                                                                                                                                                                                else if (conj >= 37 && conj <= 39) {respuesta = respuesta + " " + conjurosArcanos1[17] + "; ";}
                                                                                                                                                                                                else if (conj >= 40 && conj <= 42) {respuesta = respuesta + " " + conjurosArcanos1[18] + "; ";}
                                                                                                                                                                                                else if (conj >= 43 && conj <= 44) {respuesta = respuesta + " " + conjurosArcanos1[19] + "; ";}
                                                                                                                                                                                                else if (conj >= 45 && conj <= 46) {respuesta = respuesta + " " + conjurosArcanos1[20] + "; ";}
                                                                                                                                                                                                else if (conj >= 47 && conj <= 48) {respuesta = respuesta + " " + conjurosArcanos1[21] + "; ";}
                                                                                                                                                                                                else if (conj >= 49 && conj <= 51) {respuesta = respuesta + " " + conjurosArcanos1[22] + "; ";}
                                                                                                                                                                                                else if (conj >= 52 && conj <= 53) {respuesta = respuesta + " " + conjurosArcanos1[23] + "; ";}
                                                                                                                                                                                                else if (conj >= 54 && conj <= 55) {respuesta = respuesta + " " + conjurosArcanos1[24] + "; ";}
                                                                                                                                                                                                else if (conj >= 56 && conj <= 57) {respuesta = respuesta + " " + conjurosArcanos1[25] + "; ";}
                                                                                                                                                                                                else if (conj >= 58 && conj <= 59) {respuesta = respuesta + " " + conjurosArcanos1[26] + "; ";}
                                                                                                                                                                                                else if (conj >= 60 && conj <= 61) {respuesta = respuesta + " " + conjurosArcanos1[27] + "; ";}
                                                                                                                                                                                                else if (conj >= 62 && conj <= 64) {respuesta = respuesta + " " + conjurosArcanos1[28] + "; ";}
                                                                                                                                                                                                else if (conj >= 65 && conj <= 66) {respuesta = respuesta + " " + conjurosArcanos1[29] + "; ";}
                                                                                                                                                                                                else if (conj >= 67 && conj <= 74) {respuesta = respuesta + " " + conjurosArcanos1[30] + "; ";}
                                                                                                                                                                                                else if (conj >= 75 && conj <= 76) {respuesta = respuesta + " " + conjurosArcanos1[31] + "; ";}
                                                                                                                                                                                                else if (conj >= 77 && conj <= 78) {respuesta = respuesta + " " + conjurosArcanos1[32] + "; ";}
                                                                                                                                                                                                else if (conj >= 79 && conj <= 80) {respuesta = respuesta + " " + conjurosArcanos1[33] + "; ";}
                                                                                                                                                                                                else if (conj >= 81 && conj <= 82) {respuesta = respuesta + " " + conjurosArcanos1[34] + "; ";}
                                                                                                                                                                                                else if (conj >= 83 && conj <= 85) {respuesta = respuesta + " " + conjurosArcanos1[35] + "; ";}
                                                                                                                                                                                                else if (conj >= 86 && conj <= 87) {respuesta = respuesta + " " + conjurosArcanos1[36] + "; ";}
                                                                                                                                                                                                else if (conj >= 88 && conj <= 89) {respuesta = respuesta + " " + conjurosArcanos1[37] + "; ";}
                                                                                                                                                                                                else if (conj >= 90 && conj <= 91) {respuesta = respuesta + " " + conjurosArcanos1[38] + "; ";}
                                                                                                                                                                                                else if (conj >= 92 && conj <= 94) {respuesta = respuesta + " " + conjurosArcanos1[39] + "; ";}
                                                                                                                                                                                                else if (conj >= 95 && conj <= 96) {respuesta = respuesta + " " + conjurosArcanos1[40] + "; ";}
                                                                                                                                                                                                else if (conj >= 97 && conj <= 98) {respuesta = respuesta + " " + conjurosArcanos1[41] + "; ";}
                                                                                                                                                                                                else if (conj >= 99 && conj <= 100) {respuesta = respuesta + " " + conjurosArcanos1[42] + "; ";}
                                                                                                                                                                                                }
                                                                                                                                                                        }
                                                                                                                    else if (nivelConjuro >= 51 && nivelConjuro <= 95)  { //nivel de conjuro arcano 2
                                                                                                                                                                for(i=0; i<cantidadRollo; i++)  {
                                                                                                                                                                                                let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                if (conj >= 1 && conj <= 3) {respuesta = respuesta + " " + conjurosArcanos2[0] + "; ";}
                                                                                                                                                                                                else if (conj >= 4 && conj <= 6) {respuesta = respuesta + " " + conjurosArcanos2[1] + "; ";}
                                                                                                                                                                                                else if (conj == 7) {respuesta = respuesta + " " + conjurosArcanos2[2] + "; ";}
                                                                                                                                                                                                else if (conj == 8) {respuesta = respuesta + " " + conjurosArcanos2[3] + "; ";}
                                                                                                                                                                                                else if (conj == 9) {respuesta = respuesta + " " + conjurosArcanos2[4] + "; "; }
                                                                                                                                                                                                else if (conj == 10) {respuesta = respuesta + " " + conjurosArcanos2[5] + "; ";}
                                                                                                                                                                                                else if (conj >= 11 && conj <= 12) {respuesta = respuesta + " " + conjurosArcanos2[6] + "; ";}
                                                                                                                                                                                                else if (conj == 13) {respuesta = respuesta + " " + conjurosArcanos2[7] + "; ";}
                                                                                                                                                                                                else if (conj >= 14 && conj <= 15) {respuesta = respuesta + " " + conjurosArcanos2[8] + "; ";}
                                                                                                                                                                                                else if (conj >= 16 && conj <= 17) {respuesta = respuesta + " " + conjurosArcanos2[9] + "; ";}
                                                                                                                                                                                                else if (conj >= 18 && conj <= 19) {respuesta = respuesta + " " + conjurosArcanos2[10] + "; ";}
                                                                                                                                                                                                else if (conj >= 20 && conj <= 21) {respuesta = respuesta + " " + conjurosArcanos2[11] + "; ";}
                                                                                                                                                                                                else if (conj == 22) {respuesta = respuesta + " " + conjurosArcanos2[12] + "; ";}
                                                                                                                                                                                                else if (conj == 23) {respuesta = respuesta + " " + conjurosArcanos2[13] + "; ";}
                                                                                                                                                                                                else if (conj >= 24 && conj <= 26) {respuesta = respuesta + " " + conjurosArcanos2[14] + "; ";}
                                                                                                                                                                                                else if (conj >= 27 && conj <= 29) {respuesta = respuesta + " " + conjurosArcanos2[15] + "; ";}
                                                                                                                                                                                                else if (conj >= 30 && conj <= 32) {respuesta = respuesta + " " + conjurosArcanos2[16] + "; ";}
                                                                                                                                                                                                else if (conj == 33) {respuesta = respuesta + " " + conjurosArcanos2[17] + "; ";}
                                                                                                                                                                                                else if (conj == 34) {respuesta = respuesta + " " + conjurosArcanos2[18] + "; ";}
                                                                                                                                                                                                else if (conj >= 35 && conj <= 36) {respuesta = respuesta + " " + conjurosArcanos2[19] + "; ";}
                                                                                                                                                                                                else if (conj >= 37 && conj <= 38) {respuesta = respuesta + " " + conjurosArcanos2[20] + "; ";}
                                                                                                                                                                                                else if (conj >= 39 && conj <= 41) {respuesta = respuesta + " " + conjurosArcanos2[21] + "; ";}
                                                                                                                                                                                                else if (conj >= 42 && conj <= 44) {respuesta = respuesta + " " + conjurosArcanos2[22] + "; ";}
                                                                                                                                                                                                else if (conj == 45) {respuesta = respuesta + " " + conjurosArcanos2[23] + "; ";}
                                                                                                                                                                                                else if (conj >= 46 && conj <= 47) {respuesta = respuesta + " " + conjurosArcanos2[24] + "; ";}
                                                                                                                                                                                                else if (conj >= 48 && conj <= 50) {respuesta = respuesta + " " + conjurosArcanos2[25] + "; ";}
                                                                                                                                                                                                else if (conj == 51)    {respuesta = respuesta + " " + conjurosArcanos2[26] + "; ";}
                                                                                                                                                                                                else if (conj >= 52 && conj <= 53)  {respuesta = respuesta + " " + conjurosArcanos2[27] + "; ";}
                                                                                                                                                                                                else if (conj == 54) {respuesta = respuesta + " " + conjurosArcanos2[28] + "; "; }
                                                                                                                                                                                                else if (conj == 55) {respuesta = respuesta + " " + conjurosArcanos2[29] + "; ";}
                                                                                                                                                                                                else if (conj == 56) {respuesta = respuesta + " " + conjurosArcanos2[30] + "; ";}
                                                                                                                                                                                                else if (conj == 57) {respuesta = respuesta + " " + conjurosArcanos2[31] + "; ";}
                                                                                                                                                                                                else if (conj == 58) {respuesta = respuesta + " " + conjurosArcanos2[32] + "; ";}
                                                                                                                                                                                                else if (conj == 59) {respuesta = respuesta + " " + conjurosArcanos2[33] + "; ";}
                                                                                                                                                                                                else if (conj == 60) {respuesta = respuesta + " " + conjurosArcanos2[34] + "; ";}
                                                                                                                                                                                                else if (conj >= 61 && conj <= 62) {respuesta = respuesta + " " + conjurosArcanos2[35] + "; ";}
                                                                                                                                                                                                else if (conj >= 63 && conj <= 64) {respuesta = respuesta + " " + conjurosArcanos2[36] + "; ";}
                                                                                                                                                                                                else if (conj >= 65 && conj <= 66) {respuesta = respuesta + " " + conjurosArcanos2[37] + "; ";}
                                                                                                                                                                                                else if (conj >= 67 && conj <= 69) {respuesta = respuesta + " " + conjurosArcanos2[38] + "; ";}
                                                                                                                                                                                                else if (conj == 70)  {respuesta = respuesta + " " + conjurosArcanos2[39] + "; ";}
                                                                                                                                                                                                else if (conj >= 71 && conj <= 72) {respuesta = respuesta + " " + conjurosArcanos2[40] + "; ";}
                                                                                                                                                                                                else if (conj >= 73 && conj <= 75) {respuesta = respuesta + " " + conjurosArcanos2[41] + "; ";}
                                                                                                                                                                                                else if (conj >= 76 && conj <= 78) {respuesta = respuesta + " " + conjurosArcanos2[42] + "; ";}
                                                                                                                                                                                                else if (conj >= 79 && conj <= 81) {respuesta = respuesta + " " + conjurosArcanos2[43] + "; ";}
                                                                                                                                                                                                else if (conj == 82) {respuesta = respuesta + " " + conjurosArcanos2[44] + "; ";}
                                                                                                                                                                                                else if (conj == 83) {respuesta = respuesta + " " + conjurosArcanos2[45] + "; ";}
                                                                                                                                                                                                else if (conj >= 84 && conj <= 85)  {respuesta = respuesta + " " + conjurosArcanos2[46] + "; ";}
                                                                                                                                                                                                else if (conj == 86) {respuesta = respuesta + " " + conjurosArcanos2[47] + "; ";}
                                                                                                                                                                                                else if (conj == 87) {respuesta = respuesta + " " + conjurosArcanos2[48] + "; ";}
                                                                                                                                                                                                else if (conj == 88) {respuesta = respuesta + " " + conjurosArcanos2[49] + "; ";}
                                                                                                                                                                                                else if (conj == 89) {respuesta = respuesta + " " + conjurosArcanos2[50] + "; ";}
                                                                                                                                                                                                else if (conj == 90) {respuesta = respuesta + " " + conjurosArcanos2[51] + "; ";}
                                                                                                                                                                                                else if (conj >= 91 && conj <= 92) {respuesta = respuesta + " " + conjurosArcanos2[52] + "; ";}
                                                                                                                                                                                                else if (conj == 93) {respuesta = respuesta + " " + conjurosArcanos2[53] + "; ";}
                                                                                                                                                                                                else if (conj >= 94 && conj <= 96) {respuesta = respuesta + " " + conjurosArcanos2[54] + "; ";}
                                                                                                                                                                                                else if (conj == 97) {respuesta = respuesta + " " + conjurosArcanos2[55] + "; ";}
                                                                                                                                                                                                else if (conj >= 98 && conj <= 100) {respuesta = respuesta + " " + conjurosArcanos2[56] + "; ";}
                                                                                                                                                                                                }
                                                                                                                                                                        }
                                                                                                                    else if (nivelConjuro >= 96 && nivelConjuro <= 100) { //nivel de conjuro arcano 3
                                                                                                                                                                for(i=0; i<cantidadRollo; i++)  {
                                                                                                                                                                                                let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                if (conj >= 1 && conj <= 3) {respuesta = respuesta + " " + conjurosArcanos3[0] + "; ";}
                                                                                                                                                                                                else if (conj >= 4 && conj <= 6) {respuesta = respuesta + " " + conjurosArcanos3[1] + "; ";}
                                                                                                                                                                                                else if (conj >= 7 && conj <= 8) {respuesta = respuesta + " " + conjurosArcanos3[2] + "; ";}
                                                                                                                                                                                                else if (conj >= 9 && conj <= 11) {respuesta = respuesta + " " + conjurosArcanos3[3] + "; ";}
                                                                                                                                                                                                else if (conj >= 12 && conj <= 13) {respuesta = respuesta + " " + conjurosArcanos3[4] + "; ";}
                                                                                                                                                                                                else if (conj >= 14 && conj <= 15) {respuesta = respuesta + " " + conjurosArcanos3[5] + "; ";}
                                                                                                                                                                                                else if (conj >= 16 && conj <= 23) {respuesta = respuesta + " " + conjurosArcanos3[6] + "; ";}
                                                                                                                                                                                                else if (conj >= 24 && conj <= 25) {respuesta = respuesta + " " + conjurosArcanos3[7] + "; ";}
                                                                                                                                                                                                else if (conj >= 26 && conj <= 27) {respuesta = respuesta + " " + conjurosArcanos3[8] + "; ";}
                                                                                                                                                                                                else if (conj >= 28 && conj <= 29) {respuesta = respuesta + " " + conjurosArcanos3[9] + "; ";}
                                                                                                                                                                                                else if (conj == 30) {respuesta = respuesta + " " + conjurosArcanos3[10] + "; ";}
                                                                                                                                                                                                else if (conj >= 31 && conj <= 32) {respuesta = respuesta + " " + conjurosArcanos3[11] + "; ";}
                                                                                                                                                                                                else if (conj >= 33 && conj <= 34) {respuesta = respuesta + " " + conjurosArcanos3[12] + "; ";}
                                                                                                                                                                                                else if (conj >= 35 && conj <= 37) {respuesta = respuesta + " " + conjurosArcanos3[13] + "; ";}
                                                                                                                                                                                                else if (conj >= 38 && conj <= 40) {respuesta = respuesta + " " + conjurosArcanos3[14] + "; ";}
                                                                                                                                                                                                else if (conj == 41) {respuesta = respuesta + " " + conjurosArcanos3[15] + "; ";}
                                                                                                                                                                                                else if (conj == 42) {respuesta = respuesta + " " + conjurosArcanos3[16] + "; ";}
                                                                                                                                                                                                else if (conj == 43) {respuesta = respuesta + " " + conjurosArcanos3[17] + "; ";}
                                                                                                                                                                                                else if (conj >= 44 && conj <= 46) {respuesta = respuesta + " " + conjurosArcanos3[18] + "; ";}
                                                                                                                                                                                                else if (conj == 47) {respuesta = respuesta + " " + conjurosArcanos3[19] + "; ";}
                                                                                                                                                                                                else if (conj >= 48 && conj <= 49) {respuesta = respuesta + " " + conjurosArcanos3[20] + "; ";}
                                                                                                                                                                                                else if (conj >= 50 && conj <= 51) {respuesta = respuesta + " " + conjurosArcanos3[21] + "; ";}
                                                                                                                                                                                                else if (conj >= 52 && conj <= 53) {respuesta = respuesta + " " + conjurosArcanos3[22] + "; ";}
                                                                                                                                                                                                else if (conj == 54) {respuesta = respuesta + " " + conjurosArcanos3[23] + "; ";}
                                                                                                                                                                                                else if (conj >= 55 && conj <= 56) {respuesta = respuesta + " " + conjurosArcanos3[24] + "; ";}
                                                                                                                                                                                                else if (conj >= 57 && conj <= 58) {respuesta = respuesta + " " + conjurosArcanos3[25] + "; ";}
                                                                                                                                                                                                else if (conj == 59) {respuesta = respuesta + " " + conjurosArcanos3[26] + "; ";}
                                                                                                                                                                                                else if (conj >= 60 && conj <= 61) {respuesta = respuesta + " " + conjurosArcanos3[27] + "; ";}
                                                                                                                                                                                                else if (conj >= 62 && conj <= 63) {respuesta = respuesta + " " + conjurosArcanos3[28] + "; ";}
                                                                                                                                                                                                else if (conj >= 64 && conj <= 65) {respuesta = respuesta + " " + conjurosArcanos3[29] + "; ";}
                                                                                                                                                                                                else if (conj == 66) {respuesta = respuesta + " " + conjurosArcanos3[30] + "; ";}
                                                                                                                                                                                                else if (conj >= 67 && conj <= 69) {respuesta = respuesta + " " + conjurosArcanos3[31] + "; ";}
                                                                                                                                                                                                else if (conj >= 70 && conj <= 71) {respuesta = respuesta + " " + conjurosArcanos3[32] + "; ";}
                                                                                                                                                                                                else if (conj >= 72 && conj <= 73) {respuesta = respuesta + " " + conjurosArcanos3[33] + "; ";}
                                                                                                                                                                                                else if (conj == 74) {respuesta = respuesta + " " + conjurosArcanos3[34] + "; ";}
                                                                                                                                                                                                else if (conj >= 75 && conj <= 77) {respuesta = respuesta + " " + conjurosArcanos3[35] + "; ";}
                                                                                                                                                                                                else if (conj >= 78 && conj <= 79) {respuesta = respuesta + " " + conjurosArcanos3[36] + "; ";}
                                                                                                                                                                                                else if (conj >= 80 && conj <= 81) {respuesta = respuesta + " " + conjurosArcanos3[37] + "; ";}
                                                                                                                                                                                                else if (conj >= 82 && conj <= 83) {respuesta = respuesta + " " + conjurosArcanos3[38] + "; ";}
                                                                                                                                                                                                else if (conj >= 84 && conj <= 86) {respuesta = respuesta + " " + conjurosArcanos3[39] + "; ";}
                                                                                                                                                                                                else if (conj == 87) {respuesta = respuesta + " " + conjurosArcanos3[40] + "; ";}
                                                                                                                                                                                                else if (conj >= 88 && conj <= 89) {respuesta = respuesta + " " + conjurosArcanos3[41] + "; ";}
                                                                                                                                                                                                else if (conj >= 90 && conj <= 91) {respuesta = respuesta + " " + conjurosArcanos3[42] + "; ";}
                                                                                                                                                                                                else if (conj >= 92 && conj <= 93) {respuesta = respuesta + " " + conjurosArcanos3[43] + "; ";}
                                                                                                                                                                                                else if (conj >= 94 && conj <= 95) {respuesta = respuesta + " " + conjurosArcanos3[44] + "; ";}
                                                                                                                                                                                                else if (conj >= 96 && conj <= 97) {respuesta = respuesta + " " + conjurosArcanos3[45] + "; ";}
                                                                                                                                                                                                else if (conj >= 98 && conj <= 100) {respuesta = respuesta + " " + conjurosArcanos3[46] + "; ";}
                                                                                                                                                                                                }
                                                                                                                                                                        }
                                                                                                                    }
    
                                                                                else if (segRollo >= 71 && segRollo <= 100) { // conjuros divinos
                                                                                                                            if (nivelConjuro >= 1 && nivelConjuro <= 5) { // nivel de conjuro divino 0
                                                                                                                                                                        let conj = tiroDeDados(1, 100);
                                                                                                                                                                        if (conj >= 1 && conj <= 7) {respuesta = respuesta + " " + conjurosDivinos0[0] + "; ";}
                                                                                                                                                                        else if (conj >= 8 && conj <= 14) {respuesta = respuesta + " " + conjurosDivinos0[1] + "; ";}
                                                                                                                                                                        else if (conj >= 15 && conj <= 21) {respuesta = respuesta + " " + conjurosDivinos0[2] + "; ";}
                                                                                                                                                                        else if (conj >= 22 && conj <= 29) {respuesta = respuesta + " " + conjurosDivinos0[3] + "; ";}
                                                                                                                                                                        else if (conj >= 30 && conj <= 36) {respuesta = respuesta + " " + conjurosDivinos0[4] + "; ";}
                                                                                                                                                                        else if (conj >= 37 && conj <= 43) {respuesta = respuesta + " " + conjurosDivinos0[5] + "; ";}
                                                                                                                                                                        else if (conj >= 44 && conj <= 50) {respuesta = respuesta + " " + conjurosDivinos0[6] + "; ";}
                                                                                                                                                                        else if (conj >= 51 && conj <= 57) {respuesta = respuesta + " " + conjurosDivinos0[7] + "; ";}
                                                                                                                                                                        else if (conj >= 58 && conj <= 65) {respuesta = respuesta + " " + conjurosDivinos0[8] + "; ";}
                                                                                                                                                                        else if (conj >= 66 && conj <= 72) {respuesta = respuesta + " " + conjurosDivinos0[9] + "; ";}
                                                                                                                                                                        else if (conj >= 73 && conj <= 79) {respuesta = respuesta + " " + conjurosDivinos0[10] + "; ";}
                                                                                                                                                                        else if (conj >= 80 && conj <= 86) {respuesta = respuesta + " " + conjurosDivinos0[11] + "; ";}
                                                                                                                                                                        else if (conj >= 87 && conj <= 93) {respuesta = respuesta + " " + conjurosDivinos0[12] + "; ";}
                                                                                                                                                                        else if (conj >= 94 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos0[13] + "; ";}
                                                                                                                                                                        }
                                                                                                                            else if (nivelConjuro >= 6 && nivelConjuro <= 50)   { // nivel de conjuro divino 1
                                                                                                                                                                                if (conj == 1) {respuesta = respuesta + " " + conjurosDivinos1[0] + "; ";}
                                                                                                                                                                                else if (conj >= 2 && conj <= 3) {respuesta = respuesta + " " + conjurosDivinos1[1] + "; ";}
                                                                                                                                                                                else if (conj >= 4 && conj <= 6) {respuesta = respuesta + " " + conjurosDivinos1[2] + "; ";}
                                                                                                                                                                                else if (conj >= 7 && conj <= 9) {respuesta = respuesta + " " + conjurosDivinos1[3] + "; ";}
                                                                                                                                                                                if (conj == 10) {respuesta = respuesta + " " + conjurosDivinos1[4] + "; ";}
                                                                                                                                                                                else if (conj >= 11 && conj <= 12) {respuesta = respuesta + " " + conjurosDivinos1[5] + "; ";}
                                                                                                                                                                                else if (conj >= 13 && conj <= 14) {respuesta = respuesta + " " + conjurosDivinos1[6] + "; ";}
                                                                                                                                                                                else if (conj >= 15 && conj <= 16) {respuesta = respuesta + " " + conjurosDivinos1[7] + "; ";}
                                                                                                                                                                                else if (conj >= 17 && conj <= 18) {respuesta = respuesta + " " + conjurosDivinos1[8] + "; ";}
                                                                                                                                                                                else if (conj >= 19 && conj <= 20) {respuesta = respuesta + " " + conjurosDivinos1[9] + "; ";}
                                                                                                                                                                                else if (conj >= 21 && conj <= 22) {respuesta = respuesta + " " + conjurosDivinos1[10] + "; ";}
                                                                                                                                                                                else if (conj >= 23 && conj <= 24) {respuesta = respuesta + " " + conjurosDivinos1[11] + "; ";}
                                                                                                                                                                                else if (conj >= 25 && conj <= 29) {respuesta = respuesta + " " + conjurosDivinos1[12] + "; ";}
                                                                                                                                                                                else if (conj >= 30 && conj <= 31) {respuesta = respuesta + " " + conjurosDivinos1[13] + "; ";}
                                                                                                                                                                                else if (conj >= 32 && conj <= 34) {respuesta = respuesta + " " + conjurosDivinos1[14] + "; ";}
                                                                                                                                                                                else if (conj >= 35 && conj <= 36) {respuesta = respuesta + " " + conjurosDivinos1[15] + "; ";}
                                                                                                                                                                                else if (conj >= 37 && conj <= 38) {respuesta = respuesta + " " + conjurosDivinos1[16] + "; ";}
                                                                                                                                                                                else if (conj >= 39 && conj <= 40) {respuesta = respuesta + " " + conjurosDivinos1[17] + "; ";}
                                                                                                                                                                                else if (conj >= 41 && conj <= 42) {respuesta = respuesta + " " + conjurosDivinos1[18] + "; ";}
                                                                                                                                                                                else if (conj >= 43 && conj <= 44) {respuesta = respuesta + " " + conjurosDivinos1[19] + "; ";}
                                                                                                                                                                                else if (conj >= 45 && conj <= 46) {respuesta = respuesta + " " + conjurosDivinos1[20] + "; ";}
                                                                                                                                                                                else if (conj >= 47 && conj <= 48) {respuesta = respuesta + " " + conjurosDivinos1[21] + "; ";}
                                                                                                                                                                                else if (conj >= 49 && conj <= 50) {respuesta = respuesta + " " + conjurosDivinos1[22] + "; ";}
                                                                                                                                                                                else if (conj >= 51 && conj <= 52) {respuesta = respuesta + " " + conjurosDivinos1[23] + "; ";}
                                                                                                                                                                                else if (conj >= 53 && conj <= 54) {respuesta = respuesta + " " + conjurosDivinos1[24] + "; ";}
                                                                                                                                                                                else if (conj >= 55 && conj <= 56) {respuesta = respuesta + " " + conjurosDivinos1[25] + "; ";}
                                                                                                                                                                                else if (conj >= 57 && conj <= 58) {respuesta = respuesta + " " + conjurosDivinos1[26] + "; ";}
                                                                                                                                                                                else if (conj >= 59 && conj <= 60) {respuesta = respuesta + " " + conjurosDivinos1[27] + "; ";}
                                                                                                                                                                                else if (conj >= 61 && conj <= 62) {respuesta = respuesta + " " + conjurosDivinos1[28] + "; ";}
                                                                                                                                                                                else if (conj >= 63 && conj <= 64) {respuesta = respuesta + " " + conjurosDivinos1[29] + "; ";}
                                                                                                                                                                                else if (conj >= 65 && conj <= 66) {respuesta = respuesta + " " + conjurosDivinos1[30] + "; ";}
                                                                                                                                                                                else if (conj >= 67 && conj <= 70) {respuesta = respuesta + " " + conjurosDivinos1[31] + "; ";}
                                                                                                                                                                                else if (conj >= 71 && conj <= 73) {respuesta = respuesta + " " + conjurosDivinos1[32] + "; ";}
                                                                                                                                                                                else if (conj >= 74 && conj <= 77) {respuesta = respuesta + " " + conjurosDivinos1[33] + "; ";}
                                                                                                                                                                                else if (conj >= 78 && conj <= 79) {respuesta = respuesta + " " + conjurosDivinos1[34] + "; ";}
                                                                                                                                                                                else if (conj >= 80 && conj <= 81) {respuesta = respuesta + " " + conjurosDivinos1[35] + "; ";}
                                                                                                                                                                                else if (conj >= 82 && conj <= 85) {respuesta = respuesta + " " + conjurosDivinos1[36] + "; ";}
                                                                                                                                                                                else if (conj >= 86 && conj <= 87) {respuesta = respuesta + " " + conjurosDivinos1[37] + "; ";}
                                                                                                                                                                                else if (conj >= 88 && conj <= 89) {respuesta = respuesta + " " + conjurosDivinos1[38] + "; ";}
                                                                                                                                                                                else if (conj >= 90 && conj <= 91) {respuesta = respuesta + " " + conjurosDivinos1[39] + "; ";}
                                                                                                                                                                                else if (conj >= 92 && conj <= 93) {respuesta = respuesta + " " + conjurosDivinos1[40] + "; ";}
                                                                                                                                                                                else if (conj >= 94 && conj <= 98) {respuesta = respuesta + " " + conjurosDivinos1[41] + "; ";}
                                                                                                                                                                                else if (conj >= 99 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos1[42] + "; ";}
                                                                                                                                                                                }
                                                                                                                            }
                                                                                }
                                    else if (segmento >= 76 && segmento <= 91)  { //Varitas

                                                                                }
                                    else if (segmento >= 92 && segmento <= 100) { //Objeto maravilloso

                                                                                }
                                                                                }
                                    else if (segmento >= 47 && segmento <= 75)  { //Rollos
                                                                                let menorRandom = tiroDeDados(1,100)
                                                                                if (menorRandom >= 1 && menorRandom <= 70)  {

                                                                                                                            }
                                                                                }
                                                            }
                            }

function artes(dados, lados){
                            cantidad = tiroDeDados(dados, lados); // el resultado del tiro de dados
                            let respuesta = " "; // se declara la variable donde estarán los premios
                            let artes1 = ["escultura","cuadro","joyería","cubiertos","partitura","mapa","texto antiguo","contenedor"];
                            let artesRandom;
                            for(i=0; i<cantidad; i++)   {
                                                        artesRandom = Math.floor((Math.random() * 8));
                                                        respuesta = respuesta + artesRandom + "; ";
                                                        }
                            return respuesta;
                            }