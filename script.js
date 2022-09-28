// Generador automático de NPC's y Loot boxes
// Fernando Maldonado Solís
// fermaldonadosolis@gmail.com

let clic = 1;
const pocionesYAceites = ["poción para curar heridas leves","poción para soportar los elementos","poción para esconderse de los animales","poción para esconderse de los animales","poción para esconderse de los muertos vivientes","poción salto","poción armadura de mago","poción colmillo mágico","aceite piedra mágica",
                        "aceite arma mágica","poción pasar sin dejar rastro","poción quitar el miedo","poción santuario","poción escudo de la fé +2","aceite garrote","aceite bendecir arma","poción agrandar persona","poción reducir persona","poción auxilio divino","poción piel robliza +2","poción resistencia de oso",
                          "poción contorno borroso","poción fuerza de toro","poción gracia felina","poción curar heridas moderadas","aceite oscuridad","poción visión en la oscuridad","poción lentificar veneno","poción esplendor de águila","poción astucia de zorro","poción de invisibilidad","poción restablecimiento menor",
                            "poción levitar","poción desorientar","poción sabiduría de buho","poción protección contra las flechas 10/magia","poción quitar parálisis","10 poción resistir energía","poción escudo de la fé +3","poción trepar cual arácnido","poción alineamiento indetectable", "poción piel robliza +3", "poción escudo de la fé +4",
                              "20 poción resistir energía","poción curar heridas graves","aceite luz del día","poción desplazamiento","aceite flecha flamígera","poción volar","poción forma gaseosa","poción colmillo mágico mayor +1","aceite arma mágica mayor +1","poción acelerar","poción heroísmo","aceite afiladura","poción circulo mágico contra alineamiento",
                                "aceite vestidura mágica +1","poción neutralizar veneno","poción indetectabilidad","poción protección contra la energía","poción furia","poción quitar ceguera/sordera","poción quitar maldición","poción quitar enfermedad","poción don de lenguas","poción respiración acuática","poción caminar sobre las aguas",
                                "poción piel robliza +4","poción escudo de la fé","poción esperanza alentadora","30 poción resistir energía","poción piel robliza +5","poción colmillo mágico mayor +2","poción arma mágica mayor +2","aceite vestidura mágica +2","poción protección contra las flechas 15/magia","poción colmillo mágico mayor +3","aceite arma mágica mayor +3",
                                "aceite vestidura mágica +3","poción colmillo mágico mayor +4","aceite vestidura mágica +4","poción colmillo mágico mayor +5","aceite arma mágica mayor +5","aceite vestidura mágica +5"];

const anillos = ["protección +1","caída de pluma","sustento","escalado","salto","nadar","contraconjuros","escudo mental","protección +2","escudo de fuerza","ariete","escalada, mejorado","salto, mejorado","nadar, mejorado","amistad con los animales","resistir energía, menor","poder camaleónico","caminar sobre las aguas","protección +3",
                "almacenar conjuros, menor","invisibilidad","magia (I)","evasión","visión de rayos x","intermitencia","resistir energía, mayor","protección +4","magia (II)","libertad de movimiento","resistir energía, superior","escudar al amigo (pareja)","protección +5","estrellas fugaces","almacenar conjuros","magia (III)","telecinesia",
                "regeneración","tres deseos","retornar conjuros","magia (IV)","llamar djinni","comandar elementales de aire","comandar elementales de tierra","comandar elementales de fuego","comandar elementales de agua","almacenar conjuros, mayor"];

const conjurosArcanos0 = ["abrir/cerrar","atontar","conocer la dirección","convocar instrumento","cuchichear mensaje","detectar magia","detectar veneno","leer magia","llamarada","luces danzantes","luz","mano del mago"," marca arcana","nona","perturbar muertos vivientes","prestidigitación","rayo de escarcha","remendar","resistencia","salpicadura de ácido","sonido fantasma","toque de fatiga"];

const conjurosArcanos1 = ["agrandar persona","alarma","alineamiento indetectable","animar cuerda","arma mágica","armadura de mago","aura mágica de Nystul","borrar","caída de pluma","causar miedo","comprensión idiomática","confusión menor","contacto electrizante","convocar monstruo (I)","curar heridas leves","detectar muertos vivientes","detectar puertas secretas","disco flotante de Tenser",
                           "disfrazarse","dormir","escudo","grasa","hechizar persona","hipnotismo","identificar","imagen silenciosa","impacto verdadero","manos ardientes","montura","niebla de obscurecimiento","protección contbra el caos/el mal/el bien/la ley","proyectil mágico","quitar miedo","rayo de debilitamiento","reducir persona","retirada expedita","rociada de color",
                            "salto", "sirviente invisible","soportar los elementos","toque gélido","trabar portal","ventriloquía" ];

const conjurosArcanos2 = ["apertura","astucia de zorro","atontar monstruo","boca mágica","calmar emociones","cautivar","ceguera/sordera","cerradura arcana","comandar muertos vivientes","contorno borroso","convocar enjambre","convocar monstruo (II)","curar heridas moderadas","desorientar","detectar pensamientos","esfera flamífera","esplendor de águila","estallar","explosión de sonido",
                            "falsa vida","flecha ácida de Melf","fuerza de toro","gracia felina","imagen menor","imagen múltiple","invisibilidad","lentificar veneno","levitar","llama continua","localizar objeto","mano espectral","mensajero animal","nube brumosa","obscurecer objeto","oscuridad","particulas nutilantes","pauta hipnótica","pirotectnia","protección contra las flechas","ráfaga de viento",
                            "rayo abrasador","resistencia de oso","resistir energía","sabiduría de búho","silencio","sobresaltar","telaraña","terribles carcajadas de tasha","toque de idiotez","toque de necrófago","trampa de leomund","trance animal","trepar cual arácnido","truco de la cuerda","ver lo invisible","viento susurrante","visión en la oscuridad"];

const conjurosArcanos3 = ["acelerar","afiladura","apacible descanso","arma mágica mayor","bola de fuego","clariaudiencia/clarividencia","circulo mágico contra e bien/el caos/el mal/la ley","convocar monstruo (III)","carcel fantasmal","cubiculo de leomund","curar heridas graves","desplazamiento","detener muertos vivientes","disparar magia","don de lenguas","encoger objeto","escritura ilusoria","esculpir sonido","esfera de invisibilidad",
                            "esperanza alentadora","flecha flamigera","forma gaseosa","forma gaseosa","furia","hablar con los animales","heroísmo","imagen mayor","impronta de la serpiente sepia","inmovilizar persona","indetectabilidad","intermitencia","labia","luz del día","muro de viento","nube apestosa","página secreta","protección contra la energía","ralentizar","rayo agotador","rayo relampagueante",
                            "respiración acuática","runas explosivas","sueño profundo","sugestión","toque vampírico","tormenta de aguanieve","vista arcana","volar"];

const conjurosArcanos4 = ["agrandar persona en grupo","alarido","ancla dimensional","asesino fantasmal","bruma sólida","cobijo seguro de leomund","confusión","conjuración sombría","contagio","convocar monstruo (IV)","creación menor","curar heridas críticas","desesperación aplastante","detectar escudriñamiento","enervación","escudo de fuego","escudriñamiento","esfera elástica de Otiluke","geas menor",
                            "globo menor de invulnerabilidad","hablar con las plantas","hechizar monstruo","invisibilidad mayor","lanzar maldición","lanzar maldición","libertad de movimiento","localizar criatura","miedo","mnemotecnia de Rary","modificar recuerdo","muro de fuego","muro de hielo","muro ilusorio","neutralizar veneno","ojo arcano","piel pétrea","pauta iridiscente","polimorfarse","puerta dimensional","reanimar a los muertos",
                            "reducir persona en grupo","repeler sabandijas","quitar maldición","tentáculos negros de Evard","terreno alucinatorio","tormenta de hielo","trampa de hielo","trampa de fuego","transformar piedra","zona de silencio"];

const conjurosArcanos5 = ["asolar","bruma mental","canción de discordia","cofre secreto de Leomund","Cono de frío","contactar con otro plano","convocar monstruo (V)","creacióm mayor","crecimiento animal","curar heridas leves en grupo","debilidad mental","disipar magia mayor","dominar persona","elaborar","espejo arcano","evocación sombría","exorcismo","imagen persistente","inmovilizar monstruo","ligadura de los planos, menor",
                            "mano interpuesta de Bigby","mastín giel de Mordenkainen","mensaje onírico","muro de fuerza","muro de piedra","nube aniquiladora","ofuscar videncia","ojos fisgones","olas de fatiga","pasamiento","permanencia","pesadilla","polimorfar funesto","romper encantamiento","sanctasanctórum privado de Mordenjainen","símbolo de dolor","símbolo de sueño","similitud","recado","teleportar","telecinesia","transmigración",
                            "transmutar barro en roca","transmutar roca en barro","vínculo telepático de Rary","vuelo de largo recorrido"];

const conjurosArcanos6 = ["analizar esencia mágica","animar objetos","astucia de zorro en grupo","bruma ácida","caminar por la sombra","campo antimagia","círculo de muerte","conocimiento de leyendas","contingencia","controlar las aguas","convocar monstruo (VI)","crear muertos vivientes","curar heridasa moderadas en grupo","de la carne a la piedra","de la muerte viviente a la muerte","de la piedra a la carne","desintegrar","disipar magia mayor",
                        "doble engañoso","elacubración de Mordenkainen","encontrar la senda","esfera congelante de Otiluke","esplendor de águila en grupo","festín de los héroes","fuerza de toro en grupo","geas/empeño","globo de invulnerabilidad","gracia felina en grupo","guardas y custodias","heroísmo, mayor","imagen permanente","muro de hierro","rechazo","relámpago zigzagueante","remover tierra","resistencia de oso en grupo","sabiduría de búho en grupo",
                        "símbolo de miedo","símbolo de persuasión","sugestión en grupo","transformación de Tenser","velo","cibración sintonizada"];

const conjurosArcanos7 = ["bola de fuego de explosión retardada","conjuración sombría mayor","controlar el clima","controlar muertos vivientes","convocaciones instantáneas de Drawmij","convocar monstruo (VII)","dedo de la muerte","demencia","deseo limitado","desplazamiento de plano","destierro","escudriñamiento mayor","espada de Mordenkainen","estatua","excursión etérea","inmovilizar persona en grupo","jaula de fuerza","magnífica mansión de Mordenkainen","mano aferradora de Bigby",
                        "olas de agotamiento","palabra de poder cegador","proyectar imagen","puerta en fase","recluir","retorno de conjuros","rociada prismática","símbolo de aturdimiento","símbolo de debilidad","simulacro","teleportar mayor","teleportar objeto","visión","vista arcana mayor"];

const conjurosArcanos8 = ["alarido mayor","antipatía","atrapar el alma","baile irresistible de Otto","cerradura dimensional","clonar","convocar monstruo (VIII)","crear muerto viviente mayor","cuerpo de hierro","discernir ubicación","esfera telecinética de Otiluke","estasis temporal","evocación sombría mayor","exigencia","explosión solar","hechizar monstruo en grupo","horrible marchitamiento",
                        "instante de presciencia","laberinto","ligadura","ligadura de los planos mayor","mente en blanco","muro prismático","nube incendiaria","ojos fisgones mayor","palabra de poder aturdidor","pantalla","pauta centelleante","polimorfar cualquier cosa","protección contra los conjuros","puño cerrado de Bigby","rayo polar","símbolo de locura","símbolo de muerte","simpatía"];

const conjurosArcanos9 = ["cambiar de forma","cautiverio","círculo de teletransporte","consumir energía","convocar monstruo (IX)","deseo","disyunción de Mordenkainen","dominar monstruo","esféra prismática","etereidad","inmovilizar monstruo en grupo","lamento de la banshee","libertad","ligadura del alma","mano aplastante de Bigby","némesis inexorable","palaba de poder mortal","parar el tiempo","presciencia",
                        "proyección astral","refugio","tromba de meteoritos","umbral","umbras"];

const conjurosDivinos0 = ["conocer la dirección","crear agua","curar heridas menores","detectar magia","detectar veneno","inflingir heridas menores","leer magia","llamarada","luz","orientación divina","purificar comida y agua","remendar","resistencia","virtud"];

const conjurosDivinos1 = ["alarma","arma mágica","bendecir","bendecir agua","bendecir arma","buenas bayas","calmar animales","causar miedo","colmillo mágico","comprensión idiomática","convocar aliado natural (I)","convocar monstruo (I)","curar heridas leves","detectar animales o plantas","detectar el bien/el caos/el mal/la ley","detectar muertos vivientes","detectar trampas y fosas","enmarañar","esconderse de los animales","esconderse de los muertos vivientes","escudo de entropía","escudo de la fé",
                        "fatalidad","favor divino","flamear","fuego feérico","garrote","hablar con los animales","hechizar animal","inflingir heridas leves","maldecir agua","niebla de obscurecimiento","orden imperiosa","pasar sin dejar rastro","perdición","piedra mágica","protección congtra el caos/el mal/el bien/la ley","quitar miedo","reloj de la muerte","salto","santuario","soportar los elementos","zancada prodigiosa"];

const conjurosDivinos2 = ["ablandar tierra y piedra","alineamiento indetectable","apacible descanso","arma espiritual","augurio","calentar metal","calmar emociones","campanas fúnebres","cautivar","consagrar","convocar aliado natural (II)","convocar plaga (o enjambre)","convocar monstruo (II)","curar heridas moderadas","deformar madera","encontrar trampas","escudar a otro","esfera flamígera","esplendor de águila","estallar",
                        "explosión de sonido","filo flamígero","fuerza de toro","gracias felina","hablar con las plantas","helar metal","inflingir heridas moderadas","inmovilizar animal","inmovilizar persona","integrar","lentificar veneno","mensajero animal","nube brumosa","oscuridad","piel robliza","profanar","quitar parálisis","ráfaga de viento","reducir animal","resistencia de oso","resistir energía","restablecimiento menor",
                        "sabiduría de búho","silencio","situación","trance animal","trampa de fuego","trampa de lazo","transformar madera","trepar cual arácnido","zona de verdad"];

const conjurosDivinos3 = ["apagar","brotar de espinas","caminar sobre las aguas","ceguera/sordera","círculo mágico contra el bien/el caos/el mal/la ley","colmillo mágico mayor","contagio","convocar aliado natural (III)","convocar monstruo (III)","crear comida y agua","crecimiento vegetal","curar heridas graves","disipar magia","dominar animal","fundirse con la piedra","glifo custodio","hablar con las plantas","hablar con los muertos",
                        "inflingir heridas graves","lanzar maldición","llama continua","llamar al relámpago","localizar objeto","luz abrasadora","luz del día","mano auxiliadora","muro de viento","neutralizar veneno","obscurecer objeto","obscuridad profunda","plegaria","protección contra la energía","purgar invisibilidad","quitar ceguera/sordera","quitar enfermedad","quitar maldición","reanimar a los muertos","reducir plantas","respiración acuática","sanar a una montura","tormenta de aguanieve",
                        "trampa de lazo","transformar piedra","vestidura mágica","visión en la oscuridad"];

const conjurosDivinos4 = ["adivinación","aliado de los planos menor","ancla dimensional","arma mágica mayor","asolar","caparazón antivegetal","caminar por el aire","comandar plantas","contacto herrumbroso","controlas las aguas","convocar aliado natural (IV)","convocar monstruo (IV)","curar heridas críticas","custodia contra la muerte","discernir mentiras","don de lenguas","espada sagrada","exorcismo","imbuir aptitud para los conjuros","inflingir heridas críticas","indetectabilidad","inmunidad a conjuros",
                        "libertad de movimiento","piedras puntiagudas","poder divino","recado","reencarnar","repeler sabandijas","restablecimiento","romper encantamiento","sabandijas gigantes","veneno","zancada arbórep"];

const conjurosDivinos5 = ["arma disruptora","comandar mayor","comunión","comunión con la naturaleza","controlar los vientos","convocar monstruo (V)","convocar aliado natural (V)","crecimiento animal","curar heridas leves en grupo","desacralizar","descarga flamígera","desplazamiento de plano","disipar el bien/el mal/el caos/la ley","dotar de consciencia","escudriñamiento","expiación","inflingir heridas ligeras en grupo","llamar a la tormenta de relámpagos",
                        "marca de la justicia","muro de espinas","muro de fuego","muro de piedra","piel pétrea","plaga de insectos","poder de la justicia","polimorfar funesto","rematar a los vivos","resistencia a conjuros","revivir a los muertos","romper encantamiento","sacralizar","símbolo de dolor","símbolo de sueño","tormenta de hielo","transmutar barro en roca","transmutar roca en barro","visión verdadera"];

const conjurosDivinos6 = ["aliado de los planos","animar objetos","barrera de cuchillos","bastón de conjuro","caminar con el viento","caparazón antivida","convocar aliado natural (VI)","convocar monstruo (VI)","crear muertos vivientes","curar heridas moderadas en grupo","dañar","de la muerte viviente a la muerte","destierro","disipar magia mayor","encontrar la senda","esplendor de águila","festín de los héroes","fuerza de toro en grupo",
                        "geas/empeño","glifo custodio mayor","gracia felina en grupo","inflingir heridas moderadas en grupo","interdicción","madera férrea","palabra de regreso","piedra parlante","remover tierra","repeler madera","resistencia de oso en grupo","roble guardían","sabiduría de búho en grupo","sanar","semillas de fuego","símbolo de miedo","símbolo de persuasión","viajar mediante plantas"];

const conjurosDivinos7 = ["animar plantas","bastón cambiante","blasfemia","controlar el clima","convocar aliado natural (VII)","convocar monstruo (VII)","curar heridas graves en grupo","destrucción","escudriñamiento mayor","excursión etérea","inflingir heridas graves en grupo","marabunta","máxima","palabra del caos","palabra sagrada","rayo solar","rechazo","refugio","regenerar","restablecimiento mayor","resurrección",
                        "símbolo de aturdimiento","símbolo de debilidad","transmutar metal en madera"];

const conjurosDivinos8 = ["aliados de los planos mayor","aura sacrilega","aura sagrada","campo antimagia","capa del caos","cerradura dimensional","controlar plantas","convocar aliado natural (VIII)","convocar monstruo (VIII)","crear muertos vivientes mayores","curar heridas críticas en grupo","explosión solar","dedo de la muerte","discernir ubicación","escudo de la ley","inflingir heridas críticas en grupo","inmunidad a los conjuros mayor",
                        "invertir gravedad","formas de animal","repeler piedra o metal","símbolo de locura","símbolo de muerte","terremoto","tormenta de fuego","torbellino"];

const conjurosDivinos9 = ["antipatía","desbrozar","cambiar de forma","consumir energía","convocar aliado natural (IX)","convocar monstruo (IX)","enjambre elemental","etereidad","implosión","ligadura del alma","milagro","presciencia","proyección astral","regenerar","resurrección verdadera","sanar en grupo","simpatía","tormenta de venganza","umbral"];

const npcRandom = ["Cicatriz","Altísimo","Le falta un dedo","Mal aliento","Olor a perfume","Extraño color de ojos","Tos seca","Voz muy baja","Voz muy alta","Mal hablado","Ceceo","Tartamudeo","Tatuaje","Extraño color de piel","Calvo","Pelo muy largo","Extraño color de pelo","Cojea","Joyas características","Ropas llamativas","Mal vestido","Tic en los ojos",
                "Nervioso y manotea","Muy atractivo","Espalda encorvada","Chaparro","En los huesos","Obeso","Se le va la onda","Mastica algo","Sucio y descuidado","Egoista","Servil","Soñoliento","Pedante","Excesivamente crítico","Amante del arte","Coleccionista","Tacaño","Derrochador","Pesimista","Optimista","Borracho","Psíquico","Cortés","Ultra religioso","Mal educado","Asustadizo","De alcurnia","Orgulloso","Mal genio",
                "Desquiciado","Valiente","Cobarde","Curioso","Veraz","Mentiroso","Perezoso","Energético","Moralista","Cruel","Sexista","Racista","Fascinado por la magia","Receloso ante la magia","Bromista","Sin una extremidad","Sexi","Coqueto","Muchas heridas","Llagas y acné","Partes metálicas","Muy viejo","Demasiado joven","Animal compañia","Gemelos","Sádico","Sabio","Chismoso","Hipster","Hippie","Fuertemente armado","Andrógeno","Lgbt","Se queda viendo fijo","Mudo","Ciego","Sordo","Hostil","Valora la fuerza",
                "De vida Salvaje","Magia durmiente","Pss.. espía aliado","Feo","Bruto","Apostador","Cyborg","Contrabandista","Misión alterna","Avatar de ..."];

const varitas = ["detectar magia","luz","manos ardientes","hechizar animal","hechizar persona","rociada de color","curar heridas leves","detectar puertas secretas","agrandar persona","proyectil mágico (1o)","contacto electrizante","convocar monstruo (I)","proyectil mágico (3ro)","proyectil mágico (5to)","resistencia de oso","fuerza de toro","gracia felina","curar heridas moderadas","oscuridad","luz del día","lentificar veneno","esplendor de águila","falsa vida",
                "astucia de zorro","toque de necrófago","inmovilizar persona","invisibilidad","apertura","levitar","flecha ácida de Melf","imágen múltiple","sabiduría de búho","estallar","silencio","convocar monstruo (II)","telaraña","proyectil mágico (7mo)","proyectil mágico (9o)","Llamar al relámpago (5to)","hechizar persona, intensificado (conjuro 3er nivel)","contagio","curar heridas graves","disipar magia",
                "bola de fuego (5to)","afiladura","rayo relampagueante (5to)","imágen mayor","ralentizar","sugestión","convocar monstruo (III)","bola de fuego (6to)","rayo relampagueante (6to)","luz abrasadora (6to)","llamar al relámpago (8vo)","bola de fuego (8vo)","rayo relampagueante (8vo)","hechizar monstruo","curar heridas críticas","ancla dimensional","miedo","invisibilidad mayor","inmovilizar persona, intensificado (4to nivel)","tormenta de hielo",
                "inflingir heridas críticas","neutralizar veneno","veneno","polimorfarse","rayo de debilitamiento, intensificado (4to nivel)","sugestión, intensificado (4to nivel)","convocar monstruo (IV)","muro de fuego","muro de hielo","disipar magia (10vo)","bola de fuego (10vo)","rayo relampagueante","martillo del caos (8vo)","castigo divino (8vo)","ira del orden (8vo)","azote sacrílego (8vo)","reestablecimiento","piel pétrea"];

const objMaravMenores = ["fetiche de plumas de Quaal (ancla)","disolvente universal","elixir de amor","ungüento de eternidad","fetiche de plumas de Quaal (abanico)","polvo de irrastreabilidad","elixir de esconderse","elixir de furtividad","elixir de nadar","elixir de visión","lustre de plato","fetiche de plumas de Quaal (pájaro)","fetiche de plumas de Quaal (árbol)","fetiche de plumas de Quaal (barco de cisne)","elixir de la verdad","fetiche de plumas de Quaal (látigo)",
                    "polvo de sequedad","bolsa de trucos (gris)","mano del mago","brazales de armadura (+1)","capa de resistencia (+1)","perla de poder (conjuro de nivel 1)","filacteria de fidelidad","ungüento de resbalamiento","elixir de aliento de fuego","flauta de las alcantarillas","polvo de ilusión","gafas de visión minuciosa","broche de escudo","collar de bolas de fuego (tipo 1)","polvo de aparición","sombrero de disfraz","flauta del son",
                        "carcaj de Ehlonnna","amuleto de armadura natural (+1)","morral práctico de Heward","cuerno de niebla","gema elemental","túnica de huesos","pegamento soberano","bolsa de contención (tipo 1)","botas élficas","botas de las tierras del invierno eterno","vela de la verdad","capa élfica","ojos de águila","escarabeo azote de gólem","collar de bolas de fuego (tipo 1)","piedra de alarma",
                        "bolsa de trucos (óxido)","cuenta de fuerza","carillón de apertura","herraduras de velocidad","cuerda de escalada","polvo de desaparición","lente de detección","vestidura de los druidas","figurito de poder maravilloso (cuervo de plata)","amuleto de salud (+2)","brazales de armadura (+2)","capa de carisma (+2)","capa de resistencia (+2)","guanteletes de fuerza de ogro","guantes de atrapar flechas","guantes de destreza (+2)",
                        "diadema del intelecto (+2)","piedra loun (huso transparente)","bálsamo de Keoghtom","maravillosos pigmentos de Nalzur","perla de poder (conjuro nivel 2)","presea de sabiduría (+2)","ungüento pétreo","collar de bolas de fuego (tipo III)","ceño de persuasión","babuchas de trepar cual arácnido","incienso de meditación","bolsa de contención (tipo II)","brazales de arquería (menores)","piedra loun (prisma rosa turbio)",
                        "yelmo de comprensión idiomática y leer magia","atuendo de fuga","botella siemprehumeante","cuchara de Murlynd","collar de bolas de fuego (tipo IV)","botas de zancadas y brincos","abanico de viento","amuleto de puños poderosos","herraduras de un céfiro","flauta del desasosiego","collar de bolas de fuego (tipo V)","guantes de nadar y trepar","bolsa de trucos (canela)","ceño refulgente menor","cuemo de bondad/maldad","túnica de objetos útiles",
                        "bote plegable","capa de la mantarraya","botella de aire","bolsa de contención (tipo III)","presea contra venenos"];

const objMaravInter = ["botas de levitación","arpa hechizadora","amuleto de armadura natural (+2)","manual del gólem de carne","mano de la gloria","piedra loun (esfera rojo intenso)","piedra loun (esfera azul incandescente)","piedra loun (romboude azul pálido)","piedra loun (esfera rosa y verde)","piedra loun (romboide rosa)","piedra loun (esfera azul y escarlata)","baraja de ilusiones",
                    "collar de bolas de fuego (tipo VI)","vela de invocación","brazales de armadura (+3)","capa de resistencia (+3)","decantador inagotable de agua","collar de adaptación","perla de poder (conjuro de nivel 3)","talismán de la esfera","figurita de poder maravilloso (búho serpentino)","collar de bolas de fuego (tipo VII)","hilo de cuentas de plegaria (menor)",
                      "bolsa de contención (tipo IV)","figurita de poder maravilloso (grifo de bronce)","figurita de poder maravilloso (mosca de ébuno)","guante almacenador","piedra loun (romboide azul oscuro)","caballo de piedra (corredor)","manto del saltimbanqui","filactería de expulsión de muertos vivientes","guantelete oxidante","botas de velocidad","gafas de noche","manual del gólem de arcilla",
                        "medallón de los pensamientos","flauta del dolor","libro bendito de Boccab","cinturón de monje","gema del resplandor","lira de construcción","capa arácnida","caballo de piedra (destrero)","cinturón de los enanos","presea cerradora de heridas","cuerno de los tritones","perla de las sirenas","figurita de poder maravilloso (perro de ónice)","amuleto de salud (/4)","cinturón de fuerza gigante (+4)",
                        "botas aladas","brazales de armadura (+4)","capa de carisma (+4)","capa de resistencia (+4)","guantes de destreza (+4)","diadema del intelecto (+4)","perla de poder (conjuro de nivel 4)","presea de sabiduría (+4)","vaina de bordes afilados","figurita de poder maravilloso (leones dorados)","carillón de interrupicón","escoba voladora","figurita de poder maravilloso (elefante de marmol)","amuleto de armadura natural (+3)","piedra loun (huso iridiscente)",
                        "brazalete de la amistad","alfombra voladora (5 por 5')","cuerno detonante","piedra laun (elopsoide lavanda pálido)","piedra laun (huso blanco perla)","agujero portátil","piedra de la buena suerte","figurita de poder maravilloso (cameros de marfil)","cuerda de enmarañar","manual del gólem de piedra","máscara de la calavera","azadán de los titanes","ceño refulgente mayor","amuleto de puños poderosos +2","capa de desplazamiento menor","yelmo de acción subacuática",
                        "brazales de arquería (mayores)","brazales de armadura (+5)","capa de resistencia (+5)","ojos de la fatalidad","perla de poder (conjuro de nivel 5)","mazo de los titanes","hilo de cuentas de plegaria","capa del murciélago","bandas de hierro de Bilarro","cubo de resistencia al frío","yelmo de telepatía","presea contra venenos","túnica de colores hipnóticos","manual de salud corporal +1","manual de ejercicio beneficioso +1","tomo de claridad de pensamiento +1","tomo de liderazgo e influencia +1",
                          "tomo de entendimiento +1"];

const objMaraMayor = ["grilletes dimensionales","figurita de poder maravilloso (corcel de obsidiana)","tambores de pánico","piedra laun (naranja)","piedra laun (prisma verde pálido)","linterna de revelación","túnica de camuflaje","amuleto de armadura natural (+4)","amuleto contra detección y localización","alfombra voladora (5 por 10')","manual del gólem de hierro","amuleto de salud (+6)","cinturón de fuerza de gigante (+6)","brazales de armadura (+6)","capa de carisma (+6)","guantes de desstreza (+6)","diadema del intelecto (+6)",
                    "piedra laun (prisma púrpura vibrante)","perla de poder (conjuro de nivel 6)","presea de sabiduría +6","escarabeo de protección","piedra laun (elipsoide lavanda y verde)","anillo umbral","bola de cristal","manual gólem de piedra mayal","orbe de las tormentas","bolas de teletransporte","brazales de armadura (+7)","perla de poder (conjuro de nivel 7)","amuleto de armadura natural (+5)","capa de desplazamiento mayor","bola de cristal con ver lo invisible","cuerno del valhalla",
                    "bola de cristal con detectar pensamientos","alfombra voladora (6 por 9')","amuleto de puños poderosos +3","alas de vuelo","capa de etereidad","fortaleza instantánea de Daem","manual de salud corporal +2","manual de ejercicio beneficioso +2","manual de rapidez de acción +2","tomo de claridad de pensamiento +2","tomo de liderazgo e influencia +2","tomo de entendimiento +2","ojos hechizadores","túnica de las estrellas","alfombra voladora (10x10')","craneoscuro","cubo de fuerza","brazales de armadura (+8)","perla de poder (conjuro de nivel 8)","bola de cristal con telepatía",
                    "cuerno detonante mayor","perla de poder (dos conjuros)","yelmo de teletransporte","gema de visión","túnica del archimago","vestiduras de la fé","bola de cristal con visión verdadera","perla de poder (conjuro de nivel 9)","pozo de muchos mundos","manual de salud corporal +3","manual de ejercicio beneficioso +3","manual de ejercicio beneficioso +3","manual de rapidez de acción +3","tomo de claridad de pensamiento +3","tomo de liderazgo e influencia +3","tomo de entendimiento +3","aparato de kwalish",
                    "toga de resistencia a conjuros","espejo de oposición","hilo de cuentas de plegaria mayor","amuleto de puños poderosos +4","ojos petrificantes","cuenco de comandar elementales de agua","brasero de comandar elementales de fuego","Incensario de control de elementales de aire","piedra de control de elementales de tierra","manual de salud corporal +4","manual de ejercicio beneficioso +4","manual de rapidéz de acción +4","tomo de claridad de pensamiento +4","tomo de liderazgo e influencia +4",
                    "tomo de entendimiento +4","amuleto de los planos","túnica de los ojos","yelmo de fulgor","manual de salud corporal +5","manual de ejercicio beneficioso +5","manual de rapidéz de acción +5","tomo de claridad de pensamiento +5","tomo de liderazgo e influencia +5","tomo de entendimiento +5","botella del ifrit","amuleto de puños poderosos +5","diamante del caos","umbral cúbico","frasco de hierro","espejo de poder mental","espejo atrapavidas"];

const cetros = ["metamágico (ampliación, menor)","metamágico (prolongación, menor)","metamágico (silencio, menor)","inamovible","metamágico (potenciación, menor)","detección de metales y minerales","cancelación","metamágico (ampliación)","metamágico (prolongación)","metamágico (silencio)","de las maravillas","pitón","metamágico (maximización, menor)","extinguellamas","de la víbora","detección de enemigos","metamágico (ampliación, mayor)","metamágico (prolongación, mayor)",
            "metamágico (silencio, mayor)","magnificencia","marchitante","metamágico (potenciación)","truenos y relámpagos","metamágico (apresuración, menor)","negación","absorción","mangual","metamágico (maximización)","gobierno","seguridad","poder señorial","metamágico (potenciación, mayor)","metamágico (apresuarción)","alerta","metamágico (maximización)","metamágico (apresuarción, mayor)"];

const bastones = ["hechizador","fuego","enjambre de insectos","curación","cambio de tamaño","iluminador","escarcha","defensa","abjuración","conjuración","encantamiento","evocación","ilusión","nigromancia","transmutación","adivinación","tierra y piedra","de los bosques","vida","paso","poder"];

const rasgo1 = document.getElementById("rasgo1");
const alineamiento1 = document.getElementById("alineamiento1");
const raza1 = document.getElementById("raza1");
const clase1 = document.getElementById("clase1");
const npcModal = document.getElementById("npcModal");
const inputNivel = document.getElementById("nivel");
const inputPorcentuales = document.getElementById("porcentuales");
const respuestaLoot1 = document.getElementById("respuestaLoot1");
const respuestaLoot2 = document.getElementById("respuestaLoot2");
const respuestaLoot3 = document.getElementById("respuestaLoot3");
const lootForm = document.getElementById("lootForm");
const mainContainer = document.getElementById("mainContainer");


npcModal.addEventListener("click", e => {
  randomizadorNPC(e);
});

lootModal.addEventListener("submit", e => {
  e.preventDefault();
  calcular(e);
});

mainContainer.addEventListener("click", e => {
  clearForm(e);
});


function credits() {
  const tituloPrincipal = document.getElementById("titulo");
  tituloPrincipal.innerHTML = "Credits!";
  tituloPrincipal.style.left = "23%";
  tituloPrincipal.style.top = "30%";
  tituloPrincipal.style.fontSize = "50px";
  tituloPrincipal.style.color = "yellow";
  }
function creditsout() {
  const tituloPrincipal = document.getElementById("titulo");
  tituloPrincipal.style.fontSize = "36px";
  tituloPrincipal.innerHTML = "D&D</br>App";
  tituloPrincipal.style.left = "39%";
  tituloPrincipal.style.top = "25%";
  tituloPrincipal.style.color = "black";
  }

function creditspres() {
  const contenedorCreditos = document.querySelector(".contenedor_creditos");
  document.querySelector(".login_contenedor").style.display = "none";
  contenedorCreditos.style.display = "block";
  contenedorCreditos.style.width = "500px";
  contenedorCreditos.style.height = "600px";
  document.querySelector("body").style.background = "black";
 }

function creditpresoff() {
                        document.querySelector(".contenedor_creditos").style.display ="none";
                        document.querySelector(".login_contenedor").style.display = "block";
                        document.querySelector("body").style.background = "url(img/fondo.jpg)";
                        }

const clearForm = e => {
  if (e.target.classList.contains("btn-success"))
    {
    lootForm.reset();
    respuestaLoot1.innerHTML = " ";
    respuestaLoot2.innerHTML = " ";
    respuestaLoot3.innerHTML = " ";
    respuestaLoot1.classList.remove("alert");
    respuestaLoot2.classList.remove("alert");
    respuestaLoot3.classList.remove("alert");
    respuestaLoot1.classList.remove("alert-success");
    respuestaLoot2.classList.remove("alert-success");
    respuestaLoot3.classList.remove("alert-success");
    respuestaLoot1.classList.remove("alert-danger");
    respuestaLoot2.classList.remove("alert-danger");
    respuestaLoot3.classList.remove("alert-danger");
    return;
    e.stopPropagation();
    }
}

//***************************************** DADOS *************************************//
const tiroDeDados = (dados, lados) => {
                                      let resDado=0;
                                      for (i=0; i<dados; i++) {
                                                              resDado = resDado + Math.floor((Math.random() * lados) + 1);
                                                              }
                                      return resDado;
                                      }

//***************************************** BOTÓN BACK *************************************//
function back() { //Regresar al menú principal
                document.getElementById("botnpc2").textContent = "NPC"; // se devuelve el nombre al botón
                document.getElementById("titulo").innerHTML = "D&D</br>App";
                document.getElementById("mainBox").style.height = "250px"; // Vuelve el contenedor al tamaño original
                document.getElementById("mainBox").style.width = "320px"; //
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
                document.getElementById("titulo").style.left = "39%"; //
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
                    if(clic==1){document.getElementById("botnpc2").textContent = "Random"; // se cambia el texto del botón
                                document.getElementById("mainBox").style.height = "400px"; // Crece el contenedor
                                document.getElementById("botnpc").style.top = "45%"; // El botón NPC cambia de posición
                                document.getElementById("botnpc").style.left = "50%"; //
                                document.getElementById("botloot").style.display = "none"; // Desaparece el botón "Loot"
                                document.getElementById("titulo").style.top = "16%";
                                document.getElementById("titulo").style.left = "27%";
                                document.getElementById("titulo").innerHTML = "NPC</br>Generator";
                                
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
                //document.getElementById("titulo").style.top = "16%";
                
                document.getElementById("titulo").innerHTML = "Loot</br>Generator";
                document.getElementById("logoDD").style.top = "-25px"; // El logo baja
                document.getElementById("logoDD").style.left = "85%"; // El logo se va a la derecha
                document.getElementById("titulo").style.top = "2%"; // El titulo sube
                document.getElementById("titulo").style.left = "43%"; // El titulo se va más a la derecha
                document.getElementById("mainBox").style.height = "800px"; // Crece el contenedor
                document.getElementById("mainBox").style.width = "500px"; // Crece el contenedor
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
                document.getElementById("titulo").style.left = "35%";

                clic = clic + 1;
                }  

    }

//***************************************** FUNCIÓN RANDOMIZADOR NPC *************************************//
const randomizadorNPC = e => {
  if (e.target.classList.contains("btn-warning")) {

                            //************** VARIABLES ******************//
                            let rasgoNPC, alineamiento, raza, clase;

                            //************** RANDOMIZACIÓN ******************//
                            rasgoNPC = tiroDeDados(1, 100);
                            alineamiento = tiroDeDados(1, 100);
                            raza = tiroDeDados(1, 100);
                            clase = tiroDeDados(1, 100);


                            //************** RASGOS ******************//
                            rasgoNPC = npcRandom[Math.floor((Math.random() * 100))];

                            //************** ALINEAMIENTO ******************//
                            alineamiento = rangoAlineamiento(alineamiento);
                            function rangoAlineamiento(alineamiento){
                                                                    if (alineamiento >=1 && alineamiento <=35) return "Legal Bueno";
                                                                    if (alineamiento >=36 && alineamiento <=39) return "Neutral Bueno";
                                                                    if (alineamiento >=40 && alineamiento <=41) return "Caótico Bueno";
                                                                    if (alineamiento >=42 && alineamiento <=61) return "Legal Neutral";
                                                                    if (alineamiento == 62) return "Neutral";
                                                                    if (alineamiento >=63 && alineamiento <=64) return "Caótico Neutral";
                                                                    if (alineamiento >=65 && alineamiento <=90) return "Legal Maligno";
                                                                    if (alineamiento >=91 && alineamiento <=97) return "Neutral Maligno";
                                                                    if (alineamiento >=98 && alineamiento <=100) return "Caótico Maligno";
                                                                    }

                            //************** RAZA ******************//
                            raza = rangoRaza(raza);
                            function rangoRaza(raza){                 
                                                    if (raza >=1 && raza <=50) return "Humanos";
                                                    if (raza >=51 && raza <=58) return "Vastayan Rúnico";
                                                    if (raza >=59 && raza <=66) return "Vastayan Bestial";
                                                    if (raza >=67 && raza <=74) return "Vastayan Terrano";
                                                    if (raza >=75 && raza <=82) return "Troll";
                                                    if (raza >=83 && raza <=90) return "Yordle";
                                                    if (raza >=90 && raza <=97) return "Humano Techmatúrgico";
                                                    if (raza >=98 && raza <=99) return "Mestizo Elemental";
                                                    if (raza ==100) return "Oovicat";
                                                    }

                            //************** CLASE ******************//
                            clase = rangoClase(clase);
                            function rangoClase(clase){
                                                      if (clase >=1 && clase <=9) return "Bárbaro";
                                                      if (clase >=10 && clase <=18) return "Bardo";
                                                      if (clase >=19 && clase <=27) return "Clérigo";
                                                      if (clase >=28 && clase <=36) return "Druida";
                                                      if (clase >=37 && clase <=45) return "Explorador";
                                                      if (clase >=46 && clase <=54) return "Guerrero";
                                                      if (clase >=37 && clase <=45) return "Explorador";
                                                      if (clase >=55 && clase <=63) return "Hechizero";
                                                      if (clase >=64 && clase <=72) return "Mago";
                                                      if (clase >=73 && clase <=81) return "Monje";
                                                      if (clase >=82 && clase <=91) return "Paladín";
                                                      if (clase >=92 && clase <=100) return "Pícaro";
                                                      }

                            rasgo1.innerHTML = rasgoNPC;
                            alineamiento1.innerHTML = alineamiento;
                            raza1.innerHTML = raza;
                            clase1.innerHTML = clase;

                            
                            return;
                                                    }
                            }

//***************************************** FUNCIÓN RESET *************************************//
function reset()    {
                    document.getElementById('enter-num').value = ''; // se borra el valor puesto en input
                    document.getElementById('enter-num2').value = ''; //
                    document.getElementById("respuestaLoot1").style.display = "none"; // desaparecen las respuestas
                    document.getElementById("respuestaLoot2").style.display = "none"; //
                    document.getElementById("respuestaLoot3").style.display = "none"; //
                    document.getElementById("label1").style.color = "black";
                    document.getElementById("label2").style.color = "black";
                    document.getElementById("label3").style.color = "black";
                    }

//***************************************** FUNCIÓN CALCULAR LOOT *************************************//
const calcular = e => {

  respuestaLoot1.innerHTML = " ";
  respuestaLoot2.innerHTML = " ";
  respuestaLoot3.innerHTML = " ";

    let valor1 = inputNivel.value;
    let valor2 = inputPorcentuales.value;


    let premios = tiroDeDados(1, 6);

    respuestaLoot1.classList.remove("alert");
    respuestaLoot2.classList.remove("alert");
    respuestaLoot3.classList.remove("alert");
    respuestaLoot1.classList.remove("alert-success");
    respuestaLoot2.classList.remove("alert-success");
    respuestaLoot3.classList.remove("alert-success");
    respuestaLoot1.classList.remove("alert-danger");
    respuestaLoot2.classList.remove("alert-danger");
    respuestaLoot3.classList.remove("alert-danger");

    if (premios == 1) {
                          respuestaLoot1.classList.add("alert");
                          respuestaLoot1.classList.add("alert-success");
                          respuestaLoot2.classList.add("alert");
                          respuestaLoot2.classList.add("alert-danger");
                          respuestaLoot3.classList.add("alert");
                          respuestaLoot3.classList.add("alert-danger");
                      }
    else if (premios == 2){
      respuestaLoot1.classList.add("alert");
      respuestaLoot1.classList.add("alert-danger");
      respuestaLoot2.classList.add("alert");
      respuestaLoot2.classList.add("alert-success");
      respuestaLoot3.classList.add("alert");
      respuestaLoot3.classList.add("alert-danger");
                          }
    else if (premios == 3){
      respuestaLoot1.classList.add("alert");
      respuestaLoot1.classList.add("alert-danger");
      respuestaLoot2.classList.add("alert");
      respuestaLoot2.classList.add("alert-danger");
      respuestaLoot3.classList.add("alert");
      respuestaLoot3.classList.add("alert-success");
                          }
    else if (premios == 4){
      respuestaLoot1.classList.add("alert");
      respuestaLoot1.classList.add("alert-success");
      respuestaLoot2.classList.add("alert");
      respuestaLoot2.classList.add("alert-success");
      respuestaLoot3.classList.add("alert");
      respuestaLoot3.classList.add("alert-danger");
                          }
    else if (premios == 5){
      respuestaLoot1.classList.add("alert");
      respuestaLoot1.classList.add("alert-success");
      respuestaLoot2.classList.add("alert");
      respuestaLoot2.classList.add("alert-danger");
      respuestaLoot3.classList.add("alert");
      respuestaLoot3.classList.add("alert-success");
                          }
    else if (premios == 6){
      respuestaLoot1.classList.add("alert");
      respuestaLoot1.classList.add("alert-success");
      respuestaLoot2.classList.add("alert");
      respuestaLoot2.classList.add("alert-success");
      respuestaLoot3.classList.add("alert");
      respuestaLoot3.classList.add("alert-success");
                          }


    

    if (valor1 == 1){
                    if (valor2 >= 1 && valor2 <= 14) {respuestaLoot1.innerHTML = "10 Cobres";
                                                      respuestaLoot2.innerHTML = "No hay premio :(";
                                                      respuestaLoot3.innerHTML = "No hay premio :(";}
                    else if (valor2 >= 15 && valor2 <= 29) {respuestaLoot1.innerHTML = tiroDeDados(1, 4)*10 + " Plata";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";}
                    else if (valor2 >= 30 && valor2 <= 70) {respuestaLoot1.innerHTML = tiroDeDados(1, 6)*10 + " Plata";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";}
                    else if (valor2 >= 71 && valor2 <= 90)  {
                                                            respuestaLoot1.innerHTML = tiroDeDados(2, 6)*10 + " Plata";
                                                            respuestaLoot2.innerHTML = gemas(1, 1);
                                                            respuestaLoot3.innerHTML = mundano(1,1);
                                                            }
                    else if (valor2 >= 91 && valor2 <= 100) {
                                                            respuestaLoot1.innerHTML = tiroDeDados(1, 4)*5 + " Oro";
                                                            respuestaLoot2.innerHTML = artes(1, 1);
                                                            respuestaLoot3.innerHTML = menor(1, 1);
                                                            }
                    }

    else if (valor1 == 2) {
                          if (valor2 >= 1 && valor2 <= 13){
                                                          respuestaLoot1.innerHTML = "No hay premio :(";
                                                          respuestaLoot2.innerHTML = "No hay premio :(";
                                                          respuestaLoot3.innerHTML = "No hay premio :(";
                                                          }

                          else if (valor2 >= 14 && valor2 <= 23) {respuestaLoot1.innerHTML = tiroDeDados(1, 8)*10 + " Plata";
                          respuestaLoot2.innerHTML = "No hay premio :(";
                          respuestaLoot3.innerHTML = "No hay premio :(";}
                          else if (valor2 >= 24 && valor2 <= 65) {respuestaLoot1.innerHTML = tiroDeDados(2, 8)*10 + " Plata";
                          respuestaLoot2.innerHTML = "No hay premio :(";
                          respuestaLoot3.innerHTML = "No hay premio :(";}
                          else if (valor2 >= 66 && valor2 <= 85)  {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(4, 6)*10 + " Plata";
                                                                  respuestaLoot2.innerHTML = gemas(1, 3);
                                                                  respuestaLoot3.innerHTML = mundano(1,1);
                                                                  }
                          else if (valor2 >= 86 && valor2 <= 100) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(2, 6)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = artes(1, 3);
                                                                  respuestaLoot3.innerHTML = menor(1, 1);
                                                                  }
                          }

    else if (valor1 == 3)   {
                            if (valor2 >= 1 && valor2 <= 11){
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }

                            else if (valor2 >= 12 && valor2 <= 33) {respuestaLoot1.innerHTML = tiroDeDados(2, 8)*10 + " Plata";
                            respuestaLoot2.innerHTML = "No hay premio :(";
                            respuestaLoot3.innerHTML = "No hay premio :(";}
                            else if (valor2 >= 34 && valor2 <= 51) {respuestaLoot1.innerHTML = tiroDeDados(4, 6)*10 + " Plata";
                            respuestaLoot2.innerHTML = "No hay premio :(";
                            respuestaLoot3.innerHTML = "No hay premio :(";}
                            else if (valor2 >= 52 && valor2 <= 78){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 4)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = "No hay premio :(";
                                                                  respuestaLoot3.innerHTML = mundano(1,3);
                                                                  }
                            else if (valor2 >= 79 && valor2 <= 100) {
                                                                    respuestaLoot1.innerHTML = tiroDeDados(2, 6)*10 + " Oro";
                                                                    respuestaLoot2.innerHTML = artes(1, 3);
                                                                    respuestaLoot3.innerHTML = menor(1, 1);
                                                                    }
                            }

    else if (valor1 == 4) {
                          if (valor2 >= 1 && valor2 <= 11){
                                                          respuestaLoot1.innerHTML = "No hay premio :(";
                                                          respuestaLoot2.innerHTML = "No hay premio :(";
                                                          respuestaLoot3.innerHTML = "No hay premio :(";
                                                          }
                          else if (valor2 >= 12 && valor2 <= 40) {respuestaLoot1.innerHTML = tiroDeDados(3, 8)*10 + " Plata";
                          respuestaLoot2.innerHTML = "No hay premio :(";
                          respuestaLoot3.innerHTML = "No hay premio :(";}
                          else if (valor2 >= 41 && valor2 <= 70)  {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(4, 10)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = "No hay premio :(";
                                                                  respuestaLoot3.innerHTML = mundano(1, 4);
                                                                  }

                          else if (valor2 >= 71 && valor2 <= 90){
                                                                respuestaLoot1.innerHTML = tiroDeDados(1, 4)*10 + " Oro";
                                                                respuestaLoot2.innerHTML = gemas(1, 4);
                                                                respuestaLoot3.innerHTML = menor(1, 1);
                                                                }
                          else if (valor2 >= 91 && valor2 <= 100) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 8)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = artes(1, 3);
                                                                  respuestaLoot3.innerHTML = menor(1, 1);
                                                                  }
                          }

    else if (valor1 == 5) {
                          if (valor2 >= 1 && valor2 <= 10){
                                                          respuestaLoot1.innerHTML = "No hay premio :(";
                                                          respuestaLoot2.innerHTML = "No hay premio :(";
                                                          respuestaLoot3.innerHTML = "No hay premio :(";
                                                          }
                          else if (valor2 >= 11 && valor2 <= 44) {respuestaLoot1.innerHTML = tiroDeDados(3, 6)*10 + " Plata";
                          respuestaLoot2.innerHTML = "No hay premio :(";
                          respuestaLoot3.innerHTML = "No hay premio :(";}
                          else if (valor2 >= 45 && valor2 <= 59){
                                                                respuestaLoot1.innerHTML = tiroDeDados(1, 4)*10 + " Oro";
                                                                respuestaLoot2.innerHTML = "No hay premio :(";
                                                                respuestaLoot3.innerHTML = mundano(1, 4);
                                                                }

                          else if (valor2 >= 60 && valor2 <= 89){
                                                                respuestaLoot1.innerHTML = tiroDeDados(1, 6)*10 + " Oro";
                                                                respuestaLoot2.innerHTML = gemas(1, 4);
                                                                respuestaLoot3.innerHTML = menor(1, 3);
                                                                }
                          else if (valor2 >= 90 && valor2 <= 100) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 8)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = artes(1, 4);
                                                                  respuestaLoot3.innerHTML = menor(1, 4);
                                                                  }
                          }

    else if (valor1 == 6) {
                          if (valor2 >= 1 && valor2 <= 10){
                                                          respuestaLoot1.innerHTML = "No hay premio :(";
                                                          respuestaLoot2.innerHTML = "No hay premio :(";
                                                          respuestaLoot3.innerHTML = "No hay premio :(";
                                                          }
                          else if (valor2 >= 11 && valor2 <= 36) {respuestaLoot1.innerHTML = tiroDeDados(1, 4)*10 + " Oro";
                          respuestaLoot2.innerHTML = "No hay premio :(";
                          respuestaLoot3.innerHTML = "No hay premio :(";}
                          else if (valor2 >= 37 && valor2 <= 59){
                                                                respuestaLoot1.innerHTML = tiroDeDados(1, 6)*10 + " Oro";
                                                                respuestaLoot2.innerHTML = "No hay premio :(";
                                                                respuestaLoot3.innerHTML = mundano(1, 4);
                                                                }

                          else if (valor2 >= 60 && valor2 <= 95){
                                                                respuestaLoot1.innerHTML = tiroDeDados(1, 8)*10 + " Oro";
                                                                respuestaLoot2.innerHTML = gemas(1, 4);
                                                                respuestaLoot3.innerHTML = menor(1, 3);
                                                                }
                          else if (valor2 >= 96 && valor2 <= 100) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 10)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = artes(1, 4);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 1);
                                                                  }
                          }

    else if (valor1 == 7) {
                          if (valor2 >= 1 && valor2 <= 10){
                                                          respuestaLoot1.innerHTML = "No hay premio :(";
                                                          respuestaLoot2.innerHTML = "No hay premio :(";
                                                          respuestaLoot3.innerHTML = "No hay premio :(";
                                                          }
                          else if (valor2 >= 11 && valor2 <= 44) {respuestaLoot1.innerHTML = tiroDeDados(1, 8)*10 + " Oro";
                          respuestaLoot2.innerHTML = "No hay premio :(";
                          respuestaLoot3.innerHTML = "No hay premio :(";}
                          else if (valor2 >= 45 && valor2 <= 85){
                                                                respuestaLoot1.innerHTML = tiroDeDados(1, 10)*10 + " Oro";
                                                                respuestaLoot2.innerHTML = gemas(1, 4);
                                                                respuestaLoot3.innerHTML = menor(1, 3);
                                                                }
                          else if (valor2 >= 86 && valor2 <= 97){
                                                                respuestaLoot1.innerHTML = tiroDeDados(2, 6)*10 + " Oro";
                                                                respuestaLoot2.innerHTML = artes(1, 4);
                                                                respuestaLoot3.innerHTML = menor(1, 4);
                                                                }
                          else if (valor2 >= 98 && valor2 <= 100) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(3, 4)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = "No hay premio :(";
                                                                  respuestaLoot3.innerHTML = intermedio(1, 1);
                                                                  }
                          }
    else if (valor1 == 8) {
                          if (valor2 >= 1 && valor2 <= 10){
                                                          respuestaLoot1.innerHTML = "No hay premio :(";
                                                          respuestaLoot2.innerHTML = "No hay premio :(";
                                                          respuestaLoot3.innerHTML = "No hay premio :(";
                                                          }
                          else if (valor2 >= 11 && valor2 <= 44) {respuestaLoot1.innerHTML = tiroDeDados(1, 8)*10 + " Oro";
                          respuestaLoot2.innerHTML = "No hay premio :(";
                          respuestaLoot3.innerHTML = "No hay premio :(";}
                          else if (valor2 >= 45 && valor2 <= 79){
                                                                respuestaLoot1.innerHTML = tiroDeDados(2, 4)*10 + " Oro";
                                                                respuestaLoot2.innerHTML = gemas(1, 8);
                                                                respuestaLoot3.innerHTML = menor(1, 4);
                                                                }
                          else if (valor2 >= 80 && valor2 <= 96){
                                                                respuestaLoot1.innerHTML = tiroDeDados(2, 6)*10 + " Oro";
                                                                respuestaLoot2.innerHTML = artes(1, 4);
                                                                respuestaLoot3.innerHTML = menor(1, 4);
                                                                }
                          else if (valor2 >= 97 && valor2 <= 100) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(3, 4)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = "No hay premio :(";
                                                                  respuestaLoot3.innerHTML = intermedio(1, 1);
                                                                  }
                          }

    else if (valor1 == 9)   {
                            if (valor2 >= 1 && valor2 <= 11){
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 12 && valor2 <= 50) {respuestaLoot1.innerHTML = tiroDeDados(1, 12)*10 + " Platino";
                            respuestaLoot2.innerHTML = "No hay premio :(";
                            respuestaLoot3.innerHTML = "No hay premio :(";}
                            else if (valor2 >= 51 && valor2 <= 79){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(2, 6)*10 + " Platino";
                                                                  respuestaLoot2.innerHTML = gemas(1, 8);
                                                                  respuestaLoot3.innerHTML = menor(1, 4);
                                                                  }
                            else if (valor2 >= 80 && valor2 <= 91){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(4, 4)*10 + " Platino";
                                                                  respuestaLoot2.innerHTML = artes(1, 4);
                                                                  respuestaLoot3.innerHTML = menor(1, 4);
                                                                  }
                            else if (valor2 >= 92 && valor2 <= 100) {
                                                                    respuestaLoot1.innerHTML = tiroDeDados(2, 10)*10 + " Platino";
                                                                    respuestaLoot2.innerHTML = "No hay premio :(";
                                                                    respuestaLoot3.innerHTML = intermedio(1, 1);
                                                                    }
                            }

    else if (valor1 == 10)  {
                            if (valor2 >= 1 && valor2 <= 10){
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 11 && valor2 <= 39) {respuestaLoot1.innerHTML = tiroDeDados(2, 8)*10 + " Oro";
                            respuestaLoot2.innerHTML = "No hay premio :(";
                            respuestaLoot3.innerHTML = "No hay premio :(";}
                            else if (valor2 >= 40 && valor2 <= 87){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(5, 4)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(1, 8);
                                                                  respuestaLoot3.innerHTML = menor(1, 4);
                                                                  }
                            else if (valor2 >= 88 && valor2 <= 98){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(4, 6)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = artes(1, 6);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 1);
                                                                  }
                            else if (valor2 >= 99 && valor2 <= 100) {
                              respuestaLoot1.innerHTML = "No hay premio :(";
                          respuestaLoot2.innerHTML = "No hay premio :(";
                          respuestaLoot3.innerHTML = mayor(1, 1);}
                            }

    else if (valor1 == 11)  {
                            if (valor2 >= 1 && valor2 <= 8) {
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 9 && valor2 <= 38) {respuestaLoot1.innerHTML = tiroDeDados(3, 8)*10 + " Oro";
                            respuestaLoot2.innerHTML = "No hay premio :(";
                            respuestaLoot3.innerHTML = "No hay premio :(";}
                            else if (valor2 >= 39 && valor2 <= 83){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(4, 6)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(1, 10);
                                                                  respuestaLoot3.innerHTML = menor(1, 4);
                                                                  }
                            else if (valor2 >= 84 && valor2 <= 97){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(4, 8)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = artes(1, 6);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 1);
                                                                  }
                            else if (valor2 >= 98 && valor2 <= 100) {
                              respuestaLoot1.innerHTML = "No hay premio :(";
                          respuestaLoot2.innerHTML = "No hay premio :(";
                          respuestaLoot3.innerHTML = mayor(1, 1);}
                            }

    else if (valor1 == 12)  {
                            if (valor2 >= 1 && valor2 <= 15){
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 15 && valor2 <= 69){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(3, 10)*10 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(1, 10);
                                                                  respuestaLoot3.innerHTML = "No hay premio :(";
                                                                  }
                            else if (valor2 >= 70 && valor2 <= 82){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 4)*10 + " Platino";
                                                                  respuestaLoot2.innerHTML = artes(1, 8);
                                                                  respuestaLoot3.innerHTML = menor(1, 6);
                                                                  }
                            else if (valor2 >= 83 && valor2 <= 97){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 6)*10 + " Platino";
                                                                  respuestaLoot2.innerHTML = artes(1, 8);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 1);
                                                                  }
                            else if (valor2 >= 98 && valor2 <= 100) {
                              respuestaLoot1.innerHTML = "No hay premio :(";
                                                                    respuestaLoot2.innerHTML = artes(1, 8);
                                                                    respuestaLoot3.innerHTML = mayor(1, 1);
                                                                    }
                            }

    else if (valor1 == 13)  {
                            if (valor2 >= 1 && valor2 <= 8){
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 9 && valor2 <= 60){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 4)*10 + " Platino";
                                                                  respuestaLoot2.innerHTML = gemas(1, 12);
                                                                  respuestaLoot3.innerHTML = menor(1, 6);
                                                                  }
                            else if (valor2 >= 61 && valor2 <= 73){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 4)*10 + " Platino";
                                                                  respuestaLoot2.innerHTML = artes(1, 10);
                                                                  respuestaLoot3.innerHTML = menor(1, 6);
                                                                  }
                            else if (valor2 >= 74 && valor2 <= 95){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 8)*10 + " Platino";
                                                                  respuestaLoot2.innerHTML = artes(1, 10);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 1);
                                                                  }
                            else if (valor2 >= 96 && valor2 <= 100) {
                                                                    respuestaLoot1.innerHTML = "No hay premio :(";
                                                                    respuestaLoot2.innerHTML = "No hay premio :(";
                                                                    respuestaLoot3.innerHTML = mayor(1, 1);
                                                                    }
                            }

    else if (valor1 == 14)  {
                            if (valor2 >= 1 && valor2 <= 9) {
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 10 && valor2 <= 43){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 4)*10 + " Platino";
                                                                  respuestaLoot2.innerHTML = gemas(2, 8);
                                                                  respuestaLoot3.innerHTML = menor(1, 6);
                                                                  }
                            else if (valor2 >= 48 && valor2 <= 75){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 4)*10 + " Platino";
                                                                  respuestaLoot2.innerHTML = gemas(2, 8);
                                                                  respuestaLoot3.innerHTML = menor(1, 6);
                                                                  }
                            else if (valor2 >= 76 && valor2 <= 92){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 10)*10 + " Platino";
                                                                  respuestaLoot2.innerHTML = artes(2, 6);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 1);
                                                                  }
                            else if (valor2 >= 93 && valor2 <= 100) {
                                                                    respuestaLoot1.innerHTML = tiroDeDados(1, 10)*10 + " Platino";
                                                                    respuestaLoot2.innerHTML = artes(2, 6);
                                                                    respuestaLoot3.innerHTML = mayor(1, 1);
                                                                    }
                            }

    else if (valor1 == 15)  {
                            if (valor2 >= 1 && valor2 <= 8) {
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 9 && valor2 <= 44) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 4)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(2, 10);
                                                                  respuestaLoot3.innerHTML = menor(1, 10);
                                                                  }
                            else if (valor2 >= 45 && valor2 <= 74){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 4)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(2, 10);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 1);
                                                                  }
                            else if (valor2 >= 75 && valor2 <= 90){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(2, 4)*10 + " Platino";
                                                                  respuestaLoot2.innerHTML = artes(2, 8);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 1);
                                                                  }
                            else if (valor2 >= 91 && valor2 <= 100) {
                                                                    respuestaLoot1.innerHTML = "No hay premio :(";
                                                                    respuestaLoot2.innerHTML = artes(2, 8);
                                                                    respuestaLoot3.innerHTML = mayor(1, 1);
                                                                    }
                            }

    else if (valor1 == 16)  {
                            if (valor2 >= 1 && valor2 <= 3) {
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 4 && valor2 <= 40) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 10)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(4, 6);
                                                                  respuestaLoot3.innerHTML = menor(1, 10);
                                                                  }
                            else if (valor2 >= 41 && valor2 <= 74){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(1, 10)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(4, 6);
                                                                  respuestaLoot3.innerHTML = menor(1, 10);
                                                                  }
                            else if (valor2 >= 75 && valor2 <= 90){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(3, 4)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = artes(2, 10);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 3);
                                                                  }
                            else if (valor2 >= 91 && valor2 <= 100) {
                                                                    respuestaLoot1.innerHTML = tiroDeDados(3, 4)*100 + " Oro";
                                                                    respuestaLoot2.innerHTML = artes(2, 10);
                                                                    respuestaLoot3.innerHTML = mayor(1, 1);
                                                                    }
                            }

    else if (valor1 == 17)  {
                            if (valor2 >= 1 && valor2 <= 4) {
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 5 && valor2 <= 32) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(3, 4)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(4, 8);
                                                                  respuestaLoot3.innerHTML = "No hay premio :(";
                                                                  }
                            else if (valor2 >= 33 && valor2 <= 63){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(3, 4)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(4, 8);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 3);
                                                                  }
                            else if (valor2 >= 64 && valor2 <= 83){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(2, 8)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = artes(2, 10);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 3);
                                                                  }
                            else if (valor2 >= 84 && valor2 <= 100) {
                                                                    respuestaLoot1.innerHTML = tiroDeDados(2, 8)*100 + " Oro";
                                                                    respuestaLoot2.innerHTML = artes(2, 10);
                                                                    respuestaLoot3.innerHTML = mayor(1, 1);
                                                                    }
                            }

    else if (valor1 == 18)  {
                            if (valor2 >= 1 && valor2 <= 4) {
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 5 && valor2 <= 24) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(3, 4)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(3, 12);
                                                                  respuestaLoot3.innerHTML = "No hay premio :(";
                                                                  }
                            else if (valor2 >= 25 && valor2 <= 65){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(3, 6)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(3, 12);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 4);
                                                                  }
                            else if (valor2 >= 66 && valor2 <= 80){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(4, 4)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = artes(3, 10);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 4);
                                                                  }
                            else if (valor2 >= 81 && valor2 <= 100) {
                                                                    respuestaLoot1.innerHTML = tiroDeDados(5, 4)*100 + " Oro";
                                                                    respuestaLoot2.innerHTML = artes(3, 10);
                                                                    respuestaLoot3.innerHTML = mayor(1, 1);
                                                                    }
                            }

    else if (valor1 == 19)  {
                            if (valor2 >= 1 && valor2 <= 2) {
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 3 && valor2 <= 23) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(3, 6)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(6, 6);
                                                                  respuestaLoot3.innerHTML = "No hay premio :(";
                                                                  }
                            else if (valor2 >= 24 && valor2 <= 59){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(3, 6)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(6, 6);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 4);
                                                                  }
                            else if (valor2 >= 60 && valor2 <= 70){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(3, 8)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = artes(6, 6);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 4);
                                                                  }
                            else if (valor2 >= 71 && valor2 <= 100) {
                                                                    respuestaLoot1.innerHTML = tiroDeDados(3, 10)*100 + " Oro";
                                                                    respuestaLoot2.innerHTML = artes(6, 6);
                                                                    respuestaLoot3.innerHTML = mayor(1, 1);
                                                                    }
                            }

    else if (valor1 == 20)  {
                            if (valor2 >= 1 && valor2 <= 2) {
                                                            respuestaLoot1.innerHTML = "No hay premio :(";
                                                            respuestaLoot2.innerHTML = "No hay premio :(";
                                                            respuestaLoot3.innerHTML = "No hay premio :(";
                                                            }
                            else if (valor2 >= 3 && valor2 <= 24) {
                                                                  respuestaLoot1.innerHTML = tiroDeDados(4, 6)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(4, 10);
                                                                  respuestaLoot3.innerHTML = "No hay premio :(";
                                                                  }
                            else if (valor2 >= 25 && valor2 <= 37){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(4, 6)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = gemas(4, 10);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 4);
                                                                  }
                            else if (valor2 >= 38 && valor2 <= 65){
                                                                  respuestaLoot1.innerHTML = tiroDeDados(4, 8)*100 + " Oro";
                                                                  respuestaLoot2.innerHTML = artes(7, 6);
                                                                  respuestaLoot3.innerHTML = intermedio(1, 4);
                                                                  }
                            else if (valor2 >= 66 && valor2 <= 100) {
                                                                    respuestaLoot1.innerHTML = tiroDeDados(4, 10)*100 + " Oro";
                                                                    respuestaLoot2.innerHTML = artes(7, 6);
                                                                    respuestaLoot3.innerHTML = mayor(1, 3);
                                                                    }
                            }

    /* document.getElementById("respuestaLoot1").style.display = "inline-block";
    document.getElementById("respuestaLoot2").style.display = "inline-block";
    document.getElementById("respuestaLoot3").style.display = "inline-block"; */

                    }

function artes(dados, lados){
  cantidad = tiroDeDados(dados, lados); // el resultado del tiro de dados
  let respuesta = " ARTES: "; // se declara la variable donde estarán los premios
  let artes1 = ["escultura","cuadro","joyería","cubiertos","partitura","mapa","texto antiguo","contenedor"];
  let bandera = 0; //para conteo del while
  while(bandera < cantidad)   {
                              respuesta = respuesta + artes1[Math.floor((Math.random() * 7))] + "; ";
                              bandera++;
                              }
  return respuesta;
                            }

function gemas(dados , lados)   {
                                let cantidad = tiroDeDados(dados, lados); // Cantidad de gemas a recibir
                                let respuesta = " GEMAS: "; // se declara la variable donde estarán los premios
                                let bandera = 0; //para conteo del while
                                
                                let gemas1 = ["Ágata listada", "Ágata musgosa", "Ágata aojada", "Azurita", "Cuarzo azul", "Malaquita", "Obsidiana", "Rodocrosita", "Ojo de tigre", "Perla de agua dulce (con irregularidades)"];
                                let gemas2 = ["Heliotropo (piedra de sangre)", "Cornalina", "Calcedonia", "Crisoprasa", "Lolita", "Jaspe", "Adularia (piedra de luna)", "Ónice", "Peridoto", "Cristal de roca (cuadro transparente)", "Sarda", "Sardónice", "Cuarzo citrino", "Cuarzo rosado estrella", "Cuarzo ahumado", "Cuarzo rosado", "Circón"];
                                let gemas3 = ["Ámbar", "Amatista", "Crisobelino", "Coral", "Granate rojo", "Granate amarillo verdoso", "Jade", "Azabache", "Perla blanca", "Perla dorada", "Perla rosada", "Perla argéntea", "Esponela roja", "Esponela verde intenso", "Esponela rojo vinoso", "Turmalina"];
                                let gemas4 = ["Alejandrita", "Aguamarina", "Granate violáceo", "Perla negra", "Espinela azul intenso", "Topacio amarillo"];
                                let gemas5 = ["Esmeralda", "Ópalo de fuego", "Opalo blanco", "Opalo negro", "Zafiro azul", "Corindón amarillo intenso", "Coridón violado", "Zafiro negro", "Zafiro azul estrella", "Rubí estrella"];
                                let gemas6 = ["Esmeralda diáfana verde de gran brillo","Diamante azulado", "Diamante castaño", "Diamante rosa", "Diamante ambarino", "Jacinto"];
                                
                                while(bandera < cantidad){
                                  let segmento = Math.floor((Math.random() * 100) + 1); // se tira un dado porcentual para ver qué segmento usar
                                if (segmento >= 1 && segmento <= 25){
                                                                    let random = Math.floor((Math.random() * 10));
                                                                    respuesta = respuesta + gemas1[random] + "; ";
                                                                    }

                                else if (segmento >= 26 && segmento <= 50)  {
                                                                            let random = Math.floor((Math.random() * 17));
                                                                            respuesta = respuesta + gemas2[random] + "; ";
                                                                            }

                                else if (segmento >= 51 && segmento <= 70)  {
                                                                            let random = Math.floor((Math.random() * 16));
                                                                            respuesta = respuesta + gemas3[random] + "; ";
                                                                            }

                                else if (segmento >= 71 && segmento <= 90)  {
                                                                            let random = Math.floor((Math.random() * 6));
                                                                            respuesta = respuesta + gemas4[random] + "; ";
                                                                            }

                                else if (segmento >= 91 && segmento <= 99) {
                                                                            let random = Math.floor((Math.random() * 10));
                                                                            respuesta = respuesta + gemas5[random] + "; ";
                                                                            }

                                else if (segmento == 100)   {
                                                            let random = Math.floor((Math.random() * 6));
                                                            respuesta = respuesta + gemas6[random] + "; ";
                                                            }
                                                          bandera++;
                                                          }//ciclo while
                                return respuesta;
                                }//función gemas

function mundano(dados, lados)  {
                                let cantidad = tiroDeDados(dados, lados); // el resultado del tiro de dados
                                let respuesta = " OBJ. MUNDANO: "; // se declara la variable donde estarán los premios
                                let bandera = 0; // para conteo del while
                                while(bandera < cantidad)   {
                                
                                let segmento = tiroDeDados(1, 100); // se tira un dado porcentual para ver qué segmento usar
                                let segmento2 = tiroDeDados(1, 100); // otro tiro de dados para el subsegmento

                                if (segmento >= 1 && segmento <= 17){
                                                                    if (segmento2 >= 1 && segmento2 <= 12) {respuesta = respuesta + tiroDeDados(1, 4) + " frasco(s) de fuego de alquimista; ";}
                                                                    else if (segmento2 >= 13 && segmento2 <= 24) {respuesta = respuesta + tiroDeDados(2, 4) + " frasco(s) de ácido; ";}
                                                                    else if (segmento2 >= 25 && segmento2 <= 36) {respuesta = respuesta + tiroDeDados(1, 4) + " vara(s) de ahumadera; ";}
                                                                    else if (segmento2 >= 37 && segmento2 <= 48) {respuesta = respuesta + tiroDeDados(1, 4) + " frasco(s) de fuego de agua bendita; ";}
                                                                    else if (segmento2 >= 49 && segmento2 <= 62) {respuesta = respuesta + tiroDeDados(1, 4) + " dosis(s) de contraveneno; ";}
                                                                    else if (segmento2 >= 63 && segmento2 <= 74) {respuesta = respuesta + " antorcha siempreardiente; ";}
                                                                    else if (segmento2 >= 75 && segmento2 <= 88) {respuesta = respuesta + tiroDeDados(1, 4) + " bolsa(s) de maraña; ";}
                                                                    else if (segmento2 >= 89 && segmento2 <= 100) {respuesta = respuesta + tiroDeDados(1, 4) + " piedra(s) de trueno; ";}
                                                                    }

                                else if (segmento >= 18 && segmento <= 50)  {
                                                                            if (segmento2 >= 1 && segmento2 <= 12) {respuesta = respuesta + " camisote de mallas; ";}
                                                                            else if (segmento2 >= 13 && segmento2 <= 18) {respuesta = respuesta + " armadura de cuero tachonado de gran calidad; ";}
                                                                            else if (segmento2 >= 19 && segmento2 <= 26) {respuesta = respuesta  + " coraza; "; }
                                                                            else if (segmento2 >= 27 && segmento2 <= 34) {respuesta = respuesta  + " cota de bandas; ";}
                                                                            else if (segmento2 >= 35 && segmento2 <= 54) {respuesta = respuesta  + " armadura de placas y mallas; ";}
                                                                            else if (segmento2 >= 55 && segmento2 <= 80) {respuesta = respuesta + " armadura completa; ";}
                                                                            else if (segmento2 >= 81 && segmento2 <= 90){
                                                                                                                        let subseg = tiroDeDados(1, 100);
                                                                                                                        if (subseg >= 1 && subseg <= 50) {respuesta = respuesta + " broquel de madera oscura; "}
                                                                                                                        else if (subseg >= 51 && subseg <= 100) {respuesta = respuesta + " escudo de madera oscura; "}
                                                                                                                        }
                                                                            else if (segmento2 >= 91 && segmento2 <= 100)   {
                                                                                                                            let subseg1 = tiroDeDados(1, 100);
                                                                                                                            if (subseg1 >= 1 && subseg1 <= 17) {respuesta = respuesta + " broquel de gran calidad; "}
                                                                                                                            else if (subseg1 >= 18 && subseg1 <= 40) {respuesta = respuesta + " escudo ligero de madera de gran calidad; "}
                                                                                                                            else if (subseg1 >= 41 && subseg1 <= 60) {respuesta = respuesta + " escudo ligero de acero de gran calidad; "}
                                                                                                                            else if (subseg1 >= 61 && subseg1 <= 83) {respuesta = respuesta + " escudo pesado de madera de gran calidad; "}
                                                                                                                            else if (subseg1 >= 84 && subseg1 <= 100) {respuesta = respuesta + " escudo pesado de acero de gran calidad; "}
                                                                                                                            }   
                                                                            }

                                else if (segmento >= 51 && segmento <= 83)  {
                                                                            if (segmento2 >= 1 && segmento2 <= 50)  {
                                                                                                                    let subseg2 = tiroDeDados(1,100);
                                                                                                                    if (subseg2 >= 1 && subseg2 <= 3) {respuesta = respuesta + " bastón; ";}
                                                                                                                    else if (subseg2 >= 4 && subseg2 <= 8) {respuesta = respuesta + " cimitarra; ";}
                                                                                                                    else if (subseg2 >= 9 && subseg2 <= 12) {respuesta = respuesta + " daga; ";}
                                                                                                                    else if (subseg2 >= 13 && subseg2 <= 22) {respuesta = respuesta + " espada bastarda; ";}
                                                                                                                    else if (subseg2 >= 23 && subseg2 <= 27) {respuesta = respuesta + " espada corta; ";}
                                                                                                                    else if (subseg2 >= 28 && subseg2 <= 40) {respuesta = respuesta + " espada larga; ";}
                                                                                                                    else if (subseg2 >= 41 && subseg2 <= 50) {respuesta = respuesta + " espadón; ";}
                                                                                                                    else if (subseg2 >= 51 && subseg2 <= 54) {respuesta = respuesta + " estoque; ";}
                                                                                                                    else if (subseg2 >= 55 && subseg2 <= 64) {respuesta = respuesta + " gran hacha; ";}
                                                                                                                    else if (subseg2 >= 65 && subseg2 <= 75) {respuesta = respuesta + " hacha de guerra enana; ";}
                                                                                                                    else if (subseg2 >= 76 && subseg2 <= 79) {respuesta = respuesta + " kama; ";}
                                                                                                                    else if (subseg2 >= 80 && subseg2 <= 83) {respuesta = respuesta + " lanza corta; ";}
                                                                                                                    else if (subseg2 >= 84 && subseg2 <= 87) {respuesta = respuesta + " maza ligera; ";}
                                                                                                                    else if (subseg2 >= 88 && subseg2 <= 92) {respuesta = respuesta + " maza pesada; ";}
                                                                                                                    else if (subseg2 >= 93 && subseg2 <= 96) {respuesta = respuesta + " nunchaku; ";}
                                                                                                                    else if (subseg2 >= 97 && subseg2 <= 100) {respuesta = respuesta + " siangham; ";}
                                                                                                                    }
                                                                            else if (segmento2 >= 51 && segmento2 <= 70){
                                                                                                                        let subseg3 = tiroDeDados(1, 100);
                                                                                                                        if (subseg3 >= 1 && subseg3 <= 3) {respuesta = respuesta + " alabarda; ";}
                                                                                                                        else if (subseg3 >= 4 && subseg3 <= 5) {respuesta = respuesta + " alfanjón; ";}
                                                                                                                        else if (subseg3 >= 6 && subseg3 <= 9) {respuesta = respuesta + " ballesta de mano; ";}
                                                                                                                        else if (subseg3 >= 10 && subseg3 <= 12) {respuesta = respuesta + " ballesta de repetición; ";}
                                                                                                                        else if (subseg3 >= 13 && subseg3 <= 14) {respuesta = respuesta + " bisarma; ";}
                                                                                                                        else if (subseg3 >= 15 && subseg3 <= 16) {respuesta = respuesta + " cachiporra; ";}
                                                                                                                        else if (subseg3 >= 17 && subseg3 <= 19) {respuesta = respuesta + " cadena armada; ";}
                                                                                                                        else if (subseg3 >= 20 && subseg3 <= 21) {respuesta = respuesta + " clava; ";}
                                                                                                                        else if (subseg3 >= 22 && subseg3 <= 24) {respuesta = respuesta + " espada de dos hojas; ";}
                                                                                                                        else if (subseg3 >= 25 && subseg3 <= 26) {respuesta = respuesta + " gran clava; ";}
                                                                                                                        else if (subseg3 >= 27 && subseg3 <= 28) {respuesta = respuesta + " guadaña; ";}
                                                                                                                        else if (subseg3 >= 29 && subseg3 <= 30) {respuesta = respuesta + " guantelete; ";}
                                                                                                                        else if (subseg3 >= 31 && subseg3 <= 32) {respuesta = respuesta + " guantelete armado; ";}
                                                                                                                        else if (subseg3 >= 33 && subseg3 <= 34) {respuesta = respuesta + " guja; ";}
                                                                                                                        else if (subseg3 >= 35 && subseg3 <= 38) {respuesta = respuesta + " hacha de batalla; ";}
                                                                                                                        else if (subseg3 >= 39 && subseg3 <= 40) {respuesta = respuesta + " hacha de mano; ";}
                                                                                                                        else if (subseg3 >= 41 && subseg3 <= 43) {respuesta = respuesta + " hacha doble orca; ";}
                                                                                                                        else if (subseg3 >= 44 && subseg3 <= 45) {respuesta = respuesta + " hoz; ";}
                                                                                                                        else if (subseg3 >= 46 && subseg3 <= 48) {respuesta = respuesta + " kukri; ";}
                                                                                                                        else if (subseg3 >= 49 && subseg3 <= 50) {respuesta = respuesta + " lanza larga; ";}
                                                                                                                        else if (subseg3 >= 51 && subseg3 <= 52) {respuesta = respuesta + " lanza ligera de caballería; ";}
                                                                                                                        else if (subseg3 >= 53 && subseg3 <= 54) {respuesta = respuesta + " lanza pesada de caballería; ";}
                                                                                                                        else if (subseg3 >= 55 && subseg3 <= 57) {respuesta = respuesta + " látigo; ";}
                                                                                                                        else if (subseg3 >= 58 && subseg3 <= 60) {respuesta = respuesta + " mangual doble; ";}
                                                                                                                        else if (subseg3 >= 61 && subseg3 <= 64) {respuesta = respuesta + " mangual ligero; ";}
                                                                                                                        else if (subseg3 >= 65 && subseg3 <= 69) {respuesta = respuesta + " mangual pesado; ";}
                                                                                                                        else if (subseg3 >= 70 && subseg3 <= 72) {respuesta = respuesta + " martillo de guerra; ";}
                                                                                                                        else if (subseg3 >= 73 && subseg3 <= 75) {respuesta = respuesta + " martillo ganchudo gnomo; ";}
                                                                                                                        else if (subseg3 >= 76 && subseg3 <= 77) {respuesta = respuesta + " martillo ligero; ";}
                                                                                                                        else if (subseg3 >= 78 && subseg3 <= 80) {respuesta = respuesta + " maza de armas; ";}
                                                                                                                        else if (subseg3 >= 81 && subseg3 <= 83) {respuesta = respuesta + " media lanza; ";}
                                                                                                                        else if (subseg3 >= 84 && subseg3 <= 85) {respuesta = respuesta + " pico ligero; ";}
                                                                                                                        else if (subseg3 >= 86 && subseg3 <= 87) {respuesta = respuesta + " pico pesado; ";}
                                                                                                                        else if (subseg3 >= 88 && subseg3 <= 89) {respuesta = respuesta + " puñal; ";}
                                                                                                                        else if (subseg3 >= 90 && subseg3 <= 91) {respuesta = respuesta + " red; ";}
                                                                                                                        else if (subseg3 >= 92 && subseg3 <= 93) {respuesta = respuesta + " ronca; ";}
                                                                                                                        else if (subseg3 >= 94 && subseg3 <= 95) {respuesta = respuesta + " shuriken; ";}
                                                                                                                        else if (subseg3 >= 96 && subseg3 <= 97) {respuesta = respuesta + " tridente; ";}
                                                                                                                        else if (subseg3 >= 98 && subseg3 <= 100) {respuesta = respuesta + " urgrosh enano; ";}
                                                                                                                        }                                                
                                                                            else if (segmento2 >= 71 && segmento2 <= 100)   {
                                                                                                                            let subseg4 = tiroDeDados(1, 100);
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
                                                                            if (segmento2 >= 1 && segmento2 <= 3) {respuesta = respuesta + " mochila vacía; ";}
                                                                            else if (segmento2 >= 4 && segmento2 <= 6)  {respuesta = respuesta + " palanqueta; ";}
                                                                            else if (segmento2 >= 7 && segmento2 <= 11) {respuesta = respuesta + " linterna de ojo de buey; ";}
                                                                            else if (segmento2 >= 12 && segmento2 <= 16) {respuesta = respuesta + " cerradura sencilla; ";}
                                                                            else if (segmento2 >= 17 && segmento2 <= 21) {respuesta = respuesta + " cerradura corriente; ";}
                                                                            else if (segmento2 >= 22 && segmento2 <= 28) {respuesta = respuesta + " cerradura de calidad; ";}
                                                                            else if (segmento2 >= 29 && segmento2 <= 35) {respuesta = respuesta + " cerradura superior; ";}
                                                                            else if (segmento2 >= 36 && segmento2 <= 40) {respuesta = respuesta + " grilletes de gran calidad; ";}
                                                                            else if (segmento2 >= 41 && segmento2 <= 43) {respuesta = respuesta + " espejito de acero pulido; ";}
                                                                            else if (segmento2 >= 44 && segmento2 <= 46) {respuesta = respuesta + " cuerda de serda(50'); ";}
                                                                            else if (segmento2 >= 47 && segmento2 <= 53) {respuesta = respuesta + " catalejo; ";}
                                                                            else if (segmento2 >= 54 && segmento2 <= 58) {respuesta = respuesta + " herramientas de gran calidad para artesano; ";}
                                                                            else if (segmento2 >= 59 && segmento2 <= 63) {respuesta = respuesta + " material de escalada; ";}
                                                                            else if (segmento2 >= 64 && segmento2 <= 68) {respuesta = respuesta + " material de disfraz; ";}
                                                                            else if (segmento2 >= 69 && segmento2 <= 73) {respuesta = respuesta + " material de curandero; ";}
                                                                            else if (segmento2 >= 74 && segmento2 <= 77) {respuesta = respuesta + " símbolo sagrado de plata; ";}
                                                                            else if (segmento2 >= 78 && segmento2 <= 81) {respuesta = respuesta + " reloj de arena; ";}
                                                                            else if (segmento2 >= 82 && segmento2 <= 88) {respuesta = respuesta + " lupa; ";}
                                                                            else if (segmento2 >= 89 && segmento2 <= 95) {respuesta = respuesta + " instrumento musical de gran calidad; ";}
                                                                            else if (segmento2 >= 96 && segmento2 <= 100){respuesta = respuesta + " herramienta de ladrón de gran calidad; ";}
                                                                            }
                                                                bandera++;
                                                                }//while
                                return respuesta;
                                }

function menor(dados, lados){
                            let cantidad = tiroDeDados(dados, lados); // cantidad de premios a recibir
                            let respuesta = " ";
                            let banderafunction = 0; //para llevar un conteo del ciclo while
                            while(banderafunction < cantidad) {
                                    let segmento = tiroDeDados(1, 100); // define el primer segmento

                                    if (segmento >= 1 && segmento <= 4) { //Armas y Escudos
                                                                        respuesta = respuesta + " ARMAS Y ESCUDOS: ";
                                                                        for(j=0; j<1; j++)  {
                                                                                            let menorRandom = tiroDeDados(1, 100);
                                                                                            if (menorRandom >= 1 && menorRandom <= 60)  {respuesta = respuesta + " Escudo+1; ";}
                                                                                            else if (menorRandom >= 61 && menorRandom <= 80) {respuesta = respuesta + " Armadura+1; ";}
                                                                                            else if (menorRandom >= 81 && menorRandom <= 85) {respuesta = respuesta + " Escudo+2; ";}
                                                                                            else if (menorRandom >= 86 && menorRandom <= 87) {respuesta = respuesta + " Armadura+2; ";}
                                                                                            else if (menorRandom >= 88 && menorRandom <= 89) {respuesta = respuesta + " Armadura Específica; ";}
                                                                                            else if (menorRandom >= 90 && menorRandom <= 91) {respuesta = respuesta + " Escudo Específico; ";}
                                                                                            else if (menorRandom >= 92 && menorRandom <= 100) {respuesta = respuesta + " Aptitud especial; "; j--;} //se vuelve a tirar
                                                                                            }
                                                                        }
                                    else if (segmento >= 5 && segmento <= 9){ //Armas
                                                                            respuesta = respuesta + "ARMAS: ";
                                                                            for(j=0; j<1; j++)  {
                                                                                                let menorRandom = tiroDeDados(1, 100);
                                                                                                if (menorRandom >= 1 && menorRandom <= 70)  {respuesta = respuesta + " Arma+1; ";}
                                                                                                else if (menorRandom >= 71 && menorRandom <= 85){ respuesta = respuesta + " Arma+2; "; }
                                                                                                else if (menorRandom >= 86 && menorRandom <= 90){ respuesta = respuesta + " Arma Específica; ";}
                                                                                                else if (menorRandom >= 91 && menorRandom <= 100){ respuesta = respuesta + " Aptitud especial; "; j--;} //se vuelve a tira
                                                                                                }
                                                                            }
                                    else if (segmento >= 10 && segmento <= 44)  { //Pociones
                                                                                respuesta = respuesta + " POCIÓN O ACEITE: ";
                                                                                let menorRandom = tiroDeDados(1, 100);
                                                                                if (menorRandom >= 1 && menorRandom <= 10) {respuesta = respuesta + " " + pocionesYAceites[0] + "; ";}
                                                                                else if (menorRandom >= 11 && menorRandom <= 13) {respuesta = respuesta + " " + pocionesYAceites[1] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + " " + pocionesYAceites[2] + "; ";}
                                                                                else if (menorRandom >= 16 && menorRandom <= 17) {respuesta = respuesta + " " + pocionesYAceites[3] + "; ";}
                                                                                else if (menorRandom >= 18 && menorRandom <= 19) {respuesta = respuesta + " " + pocionesYAceites[4] + "; ";}
                                                                                else if (menorRandom >= 20 && menorRandom <= 22) {respuesta = respuesta + " " + pocionesYAceites[5] + "; ";}
                                                                                else if (menorRandom >= 23 && menorRandom <= 25) {respuesta = respuesta + " " + pocionesYAceites[6] + "; ";}
                                                                                else if (menorRandom == 26) {respuesta = respuesta + " " + pocionesYAceites[7] + "; ";}
                                                                                else if (menorRandom >= 27 && menorRandom <= 29) {respuesta = respuesta + " " + pocionesYAceites[8] + "; ";}
                                                                                else if (menorRandom == 30) {respuesta = respuesta + " " + pocionesYAceites[9] + "; ";}
                                                                                else if (menorRandom >= 31 && menorRandom <= 32) {respuesta = respuesta + " " + pocionesYAceites[10] + "; ";}
                                                                                else if (menorRandom >= 33 && menorRandom <= 34) {respuesta = respuesta + " " + pocionesYAceites[11] + "; ";}
                                                                                else if (menorRandom == 35) {respuesta = respuesta + " " + pocionesYAceites[12] + "; ";}
                                                                                else if (menorRandom >= 36 && menorRandom <= 38) {respuesta = respuesta + " " + pocionesYAceites[13] + "; ";}
                                                                                else if (menorRandom == 39) {respuesta = respuesta + " " + pocionesYAceites[14] + "; ";}
                                                                                else if (menorRandom >= 40 && menorRandom <= 41) {respuesta = respuesta + " " + pocionesYAceites[15] + "; ";}
                                                                                else if (menorRandom >= 42 && menorRandom <= 44) {respuesta = respuesta + " " + pocionesYAceites[16] + "; ";}
                                                                                else if (menorRandom == 45) { respuesta = respuesta + " " + pocionesYAceites[17] + "; ";}
                                                                                else if (menorRandom >= 46 && menorRandom <= 47) {respuesta = respuesta + " " + pocionesYAceites[18] + "; ";}
                                                                                else if (menorRandom >= 48 && menorRandom <= 50) {respuesta = respuesta + " " + pocionesYAceites[19] + "; ";}
                                                                                else if (menorRandom >= 51 && menorRandom <= 53) {respuesta = respuesta + " " + pocionesYAceites[20] + "; ";}
                                                                                else if (menorRandom >= 54 && menorRandom <= 56) {respuesta = respuesta + " " + pocionesYAceites[21] + "; ";}
                                                                                else if (menorRandom >= 57 && menorRandom <= 59) {respuesta = respuesta + " " + pocionesYAceites[22] + "; ";}
                                                                                else if (menorRandom >= 60 && menorRandom <= 62) {respuesta = respuesta + " " + pocionesYAceites[23] + "; ";}
                                                                                else if (menorRandom >= 63 && menorRandom <= 67) {respuesta = respuesta + " " + pocionesYAceites[24] + "; ";}
                                                                                else if (menorRandom == 68) { respuesta = respuesta + " " + pocionesYAceites[25] + "; ";}
                                                                                else if (menorRandom >= 69 && menorRandom <= 71) {respuesta = respuesta + " " + pocionesYAceites[26] + "; ";}
                                                                                else if (menorRandom >= 72 && menorRandom <= 74) {respuesta = respuesta + " " + pocionesYAceites[27] + "; ";}
                                                                                else if (menorRandom >= 75 && menorRandom <= 76) {respuesta = respuesta + " " + pocionesYAceites[28] + "; ";}
                                                                                else if (menorRandom >= 77 && menorRandom <= 78) {respuesta = respuesta + " " + pocionesYAceites[29] + "; ";}
                                                                                else if (menorRandom >= 79 && menorRandom <= 81) {respuesta = respuesta + " " + pocionesYAceites[30] + "; ";}
                                                                                else if (menorRandom >= 82 && menorRandom <= 84) {respuesta = respuesta + " " + pocionesYAceites[31] + "; ";}
                                                                                else if (menorRandom >= 85 && menorRandom <= 86) {respuesta = respuesta + " " + pocionesYAceites[32] + "; ";}
                                                                                else if (menorRandom == 87) {respuesta = respuesta + " " + pocionesYAceites[33] + "; ";}
                                                                                else if (menorRandom >= 88 && menorRandom <= 89) {respuesta = respuesta + " " + pocionesYAceites[34] + "; ";}
                                                                                else if (menorRandom >= 90 && menorRandom <= 91) {respuesta = respuesta + " " + pocionesYAceites[35] + "; ";}
                                                                                else if (menorRandom >= 92 && menorRandom <= 93) {respuesta = respuesta + " " + pocionesYAceites[36] + "; ";}
                                                                                else if (menorRandom >= 94 && menorRandom <= 96) {respuesta = respuesta + " " + pocionesYAceites[37] + "; ";}
                                                                                else if (menorRandom == 97) {respuesta = respuesta + " " + pocionesYAceites[38] + "; ";}
                                                                                else if (menorRandom >= 98 && menorRandom <= 99) {respuesta = respuesta + " " + pocionesYAceites[39] + "; ";}
                                                                                else if (menorRandom == 100) {respuesta = respuesta + " " + pocionesYAceites[40] + "; ";}
                                                                                            
                                                                                }
                                    else if (segmento >= 45 && segmento <= 46)  { //Anillos
                                                                                respuesta = respuesta + " ANILLO: ";
                                                                                let menorRandom = tiroDeDados(1, 100);
                                                                                if (menorRandom >= 1 && menorRandom <= 10) {respuesta = respuesta + anillos[0] + "; ";}
                                                                                else if (menorRandom >= 11 && menorRandom <= 13) {respuesta = respuesta + anillos[1] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[2] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[3] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[4] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[5] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[6] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[7] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[8] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[9] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[10] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[14] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[15] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[16] + "; ";}
                                                                                else if (menorRandom >= 14 && menorRandom <= 15) {respuesta = respuesta + anillos[17] + "; ";}
                                                                                }
                                    else if (segmento >= 47 && segmento <= 75)  { //Rollos
                                                                                let segRollo = tiroDeDados(1, 100); //se decide si va a ser arcano o divino
                                                                                let cantidadRollo = tiroDeDados(1, 3); //cantidad de conjuros a recibir
                                                                                let bandera = 0;
                                                                                if (segRollo >= 1 && segRollo <= 70){ // conjuros arcanos
                                                                                  respuesta = respuesta + " CONJ. ARCANO: ";
                                                                                              while(bandera < cantidadRollo) {
                                                                                                                    let nivelConjuro = tiroDeDados(1, 100); //nivel del conjuro al que puede acceder
                                                                                                                    if (nivelConjuro >= 1 && nivelConjuro <= 5) { //nivel de conjuro arcano 0
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
                                                                                                                                                                
                                                                                                                    else if (nivelConjuro >= 6 && nivelConjuro <= 50) { //nivel de conjuro arcano 1
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
                                                                                                                    else if (nivelConjuro >= 51 && nivelConjuro <= 95)  { //nivel de conjuro arcano 2
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
                                                                                                                    else if (nivelConjuro >= 96 && nivelConjuro <= 100) { //nivel de conjuro arcano 3
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
                                                                                                                    bandera++;
                                                                                                                    } //while
                                                                                                                    } //if
    
                                                                                else if (segRollo >= 71 && segRollo <= 100) { // conjuros divinos
                                                                                          respuesta = respuesta + "CONJ. DIVINO: ";
                                                                                          while(bandera < cantidadRollo)  {
                                                                                            let nivelConjuro = tiroDeDados(1, 100); //nivel del conjuro al que puede acceder
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
                                                                                                                                                                                let conj = tiroDeDados(1, 100);
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
                                                                                                                            else if (nivelConjuro >= 51 && nivelConjuro <= 95)  { // nivel de conjuro divino 2
                                                                                                                                                                                let conj = tiroDeDados(1, 100);
                                                                                                                                                                                if (conj == 1) {respuesta = respuesta + " " + conjurosDivinos2[0] + "; ";}
                                                                                                                                                                                else if (conj >= 2 && conj <= 3) {respuesta = respuesta + " " + conjurosDivinos2[1] + "; ";}
                                                                                                                                                                                else if (conj == 4) {respuesta = respuesta + " " + conjurosDivinos2[3] + "; ";}
                                                                                                                                                                                else if (conj >= 5 && conj <= 6) {respuesta = respuesta + " " + conjurosDivinos2[4] + "; ";}
                                                                                                                                                                                else if (conj >= 7 && conj <= 8) {respuesta = respuesta + " " + conjurosDivinos2[5] + "; ";}
                                                                                                                                                                                else if (conj == 9) {respuesta = respuesta + " " + conjurosDivinos2[6] + "; ";}
                                                                                                                                                                                else if (conj >= 10 && conj <= 11) {respuesta = respuesta + " " + conjurosDivinos2[7] + "; ";}
                                                                                                                                                                                else if (conj == 12) {respuesta = respuesta + " " + conjurosDivinos2[8] + "; ";}
                                                                                                                                                                                else if (conj >= 13 && conj <= 14) {respuesta = respuesta + " " + conjurosDivinos2[9] + "; ";}
                                                                                                                                                                                else if (conj >= 15 && conj <= 16) {respuesta = respuesta + " " + conjurosDivinos2[10] + "; ";}
                                                                                                                                                                                else if (conj >= 17 && conj <= 18) {respuesta = respuesta + " " + conjurosDivinos2[11] + "; ";}
                                                                                                                                                                                else if (conj >= 19 && conj <= 20) {respuesta = respuesta + " " + conjurosDivinos2[12] + "; ";}
                                                                                                                                                                                else if (conj >= 21 && conj <= 22) {respuesta = respuesta + " " + conjurosDivinos2[13] + "; ";}
                                                                                                                                                                                else if (conj >= 23 && conj <= 26) {respuesta = respuesta + " " + conjurosDivinos2[14] + "; ";}
                                                                                                                                                                                else if (conj >= 27 && conj <= 28) {respuesta = respuesta + " " + conjurosDivinos2[15] + "; ";}
                                                                                                                                                                                else if (conj >= 29 && conj <= 30) {respuesta = respuesta + " " + conjurosDivinos2[16] + "; ";}
                                                                                                                                                                                else if (conj >= 31 && conj <= 32) {respuesta = respuesta + " " + conjurosDivinos2[17] + "; ";}
                                                                                                                                                                                else if (conj >= 33 && conj <= 34) {respuesta = respuesta + " " + conjurosDivinos2[18] + "; ";}
                                                                                                                                                                                else if (conj >= 35 && conj <= 37) {respuesta = respuesta + " " + conjurosDivinos2[19] + "; ";}
                                                                                                                                                                                else if (conj >= 38 && conj <= 39) {respuesta = respuesta + " " + conjurosDivinos2[20] + "; ";}
                                                                                                                                                                                else if (conj >= 40 && conj <= 41) {respuesta = respuesta + " " + conjurosDivinos2[21] + "; ";}
                                                                                                                                                                                else if (conj >= 42 && conj <= 43) {respuesta = respuesta + " " + conjurosDivinos2[22] + "; ";}
                                                                                                                                                                                else if (conj == 44) {respuesta = respuesta + " " + conjurosDivinos2[23] + "; ";}
                                                                                                                                                                                else if (conj >= 45 && conj <= 47) {respuesta = respuesta + " " + conjurosDivinos2[24] + "; ";}
                                                                                                                                                                                else if (conj >= 48 && conj <= 50) {respuesta = respuesta + " " + conjurosDivinos2[25] + "; ";}
                                                                                                                                                                                else if (conj == 51) {respuesta = respuesta + " " + conjurosDivinos2[26] + "; ";}
                                                                                                                                                                                else if (conj == 52) {respuesta = respuesta + " " + conjurosDivinos2[27] + "; ";}
                                                                                                                                                                                else if (conj >= 53 && conj <= 54) {respuesta = respuesta + " " + conjurosDivinos2[28] + "; ";}
                                                                                                                                                                                else if (conj >= 55 && conj <= 56) {respuesta = respuesta + " " + conjurosDivinos2[29] + "; ";}
                                                                                                                                                                                else if (conj >= 57 && conj <= 59) {respuesta = respuesta + " " + conjurosDivinos2[30] + "; ";}
                                                                                                                                                                                else if (conj >= 60 && conj <= 61) {respuesta = respuesta + " " + conjurosDivinos2[31] + "; ";}
                                                                                                                                                                                else if (conj >= 62 && conj <= 64) {respuesta = respuesta + " " + conjurosDivinos2[32] + "; ";}
                                                                                                                                                                                else if (conj == 65) {respuesta = respuesta + " " + conjurosDivinos2[33] + "; ";}
                                                                                                                                                                                else if (conj >= 66 && conj <= 67) {respuesta = respuesta + " " + conjurosDivinos2[34] + "; ";}
                                                                                                                                                                                else if (conj >= 68 && conj <= 69) {respuesta = respuesta + " " + conjurosDivinos2[35] + "; ";}
                                                                                                                                                                                else if (conj >= 70 && conj <= 71) {respuesta = respuesta + " " + conjurosDivinos2[36] + "; ";}
                                                                                                                                                                                else if (conj >= 72 && conj <= 73) {respuesta = respuesta + " " + conjurosDivinos2[37] + "; ";}
                                                                                                                                                                                else if (conj >= 74 && conj <= 75) {respuesta = respuesta + " " + conjurosDivinos2[38] + "; ";}
                                                                                                                                                                                else if (conj == 76) {respuesta = respuesta + " " + conjurosDivinos2[39] + "; ";}
                                                                                                                                                                                else if (conj == 77) {respuesta = respuesta + " " + conjurosDivinos2[40] + "; ";}
                                                                                                                                                                                else if (conj >= 78 && conj <= 80) {respuesta = respuesta + " " + conjurosDivinos2[41] + "; ";}
                                                                                                                                                                                else if (conj >= 81 && conj <= 83) {respuesta = respuesta + " " + conjurosDivinos2[42] + "; ";}
                                                                                                                                                                                else if (conj >= 84 && conj <= 86) {respuesta = respuesta + " " + conjurosDivinos2[43] + "; ";}
                                                                                                                                                                                else if (conj >= 87 && conj <= 89) {respuesta = respuesta + " " + conjurosDivinos2[44] + "; ";}
                                                                                                                                                                                else if (conj >= 90 && conj <= 91) {respuesta = respuesta + " " + conjurosDivinos2[45] + "; ";}
                                                                                                                                                                                else if (conj == 92) {respuesta = respuesta + " " + conjurosDivinos2[46] + "; ";}
                                                                                                                                                                                else if (conj == 93) {respuesta = respuesta + " " + conjurosDivinos2[47] + "; ";}
                                                                                                                                                                                else if (conj == 94) {respuesta = respuesta + " " + conjurosDivinos2[48] + "; ";}
                                                                                                                                                                                else if (conj == 95) {respuesta = respuesta + " " + conjurosDivinos2[49] + "; ";}
                                                                                                                                                                                else if (conj == 96) {respuesta = respuesta + " " + conjurosDivinos2[50] + "; ";}
                                                                                                                                                                                else if (conj >= 97 && conj <= 98) {respuesta = respuesta + " " + conjurosDivinos2[51] + "; ";}
                                                                                                                                                                                else if (conj >= 99 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos2[52] + "; ";}
                                                                                                                                                                                }
                                                                                                                            else if (nivelConjuro >= 96 && nivelConjuro <= 100) { // nivel de conjuro divino 3
                                                                                                                                                                                let conj = tiroDeDados(1, 100);
                                                                                                                                                                                if (conj >= 1 && conj <= 2) {respuesta = respuesta + " " + conjurosDivinos3[0] + "; ";}
                                                                                                                                                                                else if (conj >= 3 && conj <= 4) {respuesta = respuesta + " " + conjurosDivinos3[1] + "; ";}
                                                                                                                                                                                else if (conj >= 5 && conj <= 6) {respuesta = respuesta + " " + conjurosDivinos3[2] + "; ";}
                                                                                                                                                                                else if (conj >= 7 && conj <= 8) {respuesta = respuesta + " " + conjurosDivinos3[3] + "; ";}
                                                                                                                                                                                else if (conj >= 9 && conj <= 14) {respuesta = respuesta + " " + conjurosDivinos3[4] + "; ";}
                                                                                                                                                                                else if (conj >= 15 && conj <= 16) {respuesta = respuesta + " " + conjurosDivinos3[5] + "; ";}
                                                                                                                                                                                else if (conj >= 17 && conj <= 18) {respuesta = respuesta + " " + conjurosDivinos3[6] + "; ";}
                                                                                                                                                                                else if (conj >= 19 && conj <= 20) {respuesta = respuesta + " " + conjurosDivinos3[7] + "; ";}
                                                                                                                                                                                else if (conj >= 21 && conj <= 22) {respuesta = respuesta + " " + conjurosDivinos3[8] + "; ";}
                                                                                                                                                                                else if (conj >= 23 && conj <= 24) {respuesta = respuesta + " " + conjurosDivinos3[9] + "; ";}
                                                                                                                                                                                else if (conj >= 25 && conj <= 26) {respuesta = respuesta + " " + conjurosDivinos3[10] + "; ";}
                                                                                                                                                                                else if (conj >= 27 && conj <= 30) {respuesta = respuesta + " " + conjurosDivinos3[11] + "; ";}
                                                                                                                                                                                else if (conj >= 31 && conj <= 32) {respuesta = respuesta + " " + conjurosDivinos3[12] + "; ";}
                                                                                                                                                                                else if (conj >= 33 && conj <= 34) {respuesta = respuesta + " " + conjurosDivinos3[13] + "; ";}
                                                                                                                                                                                else if (conj >= 35 && conj <= 36) {respuesta = respuesta + " " + conjurosDivinos3[14] + "; ";}
                                                                                                                                                                                else if (conj >= 37 && conj <= 38) {respuesta = respuesta + " " + conjurosDivinos3[15] + "; ";}
                                                                                                                                                                                else if (conj >= 39 && conj <= 40) {respuesta = respuesta + " " + conjurosDivinos3[16] + "; ";}
                                                                                                                                                                                else if (conj >= 41 && conj <= 43) {respuesta = respuesta + " " + conjurosDivinos3[17] + "; ";}
                                                                                                                                                                                else if (conj >= 44 && conj <= 45) {respuesta = respuesta + " " + conjurosDivinos3[18] + "; ";}
                                                                                                                                                                                else if (conj >= 46 && conj <= 47) {respuesta = respuesta + " " + conjurosDivinos3[19] + "; ";}
                                                                                                                                                                                else if (conj >= 48 && conj <= 49) {respuesta = respuesta + " " + conjurosDivinos3[20] + "; ";}
                                                                                                                                                                                else if (conj >= 50 && conj <= 51) {respuesta = respuesta + " " + conjurosDivinos3[21] + "; ";}
                                                                                                                                                                                else if (conj >= 52 && conj <= 53) {respuesta = respuesta + " " + conjurosDivinos3[22] + "; ";}
                                                                                                                                                                                else if (conj >= 54 && conj <= 56) {respuesta = respuesta + " " + conjurosDivinos3[23] + "; ";}
                                                                                                                                                                                else if (conj >= 57 && conj <= 58) {respuesta = respuesta + " " + conjurosDivinos3[24] + "; ";}
                                                                                                                                                                                else if (conj >= 59 && conj <= 60) {respuesta = respuesta + " " + conjurosDivinos3[25] + "; ";}
                                                                                                                                                                                else if (conj >= 61 && conj <= 62) {respuesta = respuesta + " " + conjurosDivinos3[26] + "; ";}
                                                                                                                                                                                else if (conj >= 63 && conj <= 65) {respuesta = respuesta + " " + conjurosDivinos3[27] + "; ";}
                                                                                                                                                                                else if (conj >= 66 && conj <= 67) {respuesta = respuesta + " " + conjurosDivinos3[28] + "; ";}
                                                                                                                                                                                else if (conj >= 68 && conj <= 69) {respuesta = respuesta + " " + conjurosDivinos3[29] + "; ";}
                                                                                                                                                                                else if (conj >= 70 && conj <= 72) {respuesta = respuesta + " " + conjurosDivinos3[30] + "; ";}
                                                                                                                                                                                else if (conj >= 73 && conj <= 74) {respuesta = respuesta + " " + conjurosDivinos3[31] + "; ";}
                                                                                                                                                                                else if (conj >= 75 && conj <= 76) {respuesta = respuesta + " " + conjurosDivinos3[32] + "; ";}
                                                                                                                                                                                else if (conj >= 77 && conj <= 79) {respuesta = respuesta + " " + conjurosDivinos3[33] + "; ";}
                                                                                                                                                                                else if (conj >= 80 && conj <= 81) {respuesta = respuesta + " " + conjurosDivinos3[34] + "; ";}
                                                                                                                                                                                else if (conj >= 82 && conj <= 83) {respuesta = respuesta + " " + conjurosDivinos3[35] + "; ";}
                                                                                                                                                                                else if (conj >= 84 && conj <= 85) {respuesta = respuesta + " " + conjurosDivinos3[36] + "; ";}
                                                                                                                                                                                else if (conj >= 86 && conj <= 87) {respuesta = respuesta + " " + conjurosDivinos3[37] + "; ";}
                                                                                                                                                                                else if (conj >= 88 && conj <= 90) {respuesta = respuesta + " " + conjurosDivinos3[38] + "; ";}
                                                                                                                                                                                else if (conj == 91) {respuesta = respuesta + " " + conjurosDivinos3[39] + "; ";}
                                                                                                                                                                                else if (conj >= 92 && conj <= 93) {respuesta = respuesta + " " + conjurosDivinos3[40] + "; ";}
                                                                                                                                                                                else if (conj >= 94 && conj <= 95) {respuesta = respuesta + " " + conjurosDivinos3[41] + "; ";}
                                                                                                                                                                                else if (conj >= 96 && conj <= 97) {respuesta = respuesta + " " + conjurosDivinos3[42] + "; ";}
                                                                                                                                                                                else if (conj >= 98 && conj <= 99) {respuesta = respuesta + " " + conjurosDivinos3[43] + "; ";}
                                                                                                                                                                                else if (conj == 100) {respuesta = respuesta + " " + conjurosDivinos3[44] + "; ";}
                                                                                                                                                                                }
                                                                                                                            bandera++;
                                                                                                                            } //while
                                                                                                                          } //else if
                                                                                }
                                    else if (segmento >= 76 && segmento <= 91)  { //Varitas
                                                                                let segmVaritas = tiroDeDados(1, 100); //define el primer segmento de varitas
                                                                                respuesta = respuesta + " VARITA: ";
                                                                                if (segmVaritas >= 1 && segmVaritas <= 2) {respuesta = respuesta + " " + varitas[0] + "; ";} 
                                                                                else if (segmVaritas >= 3 && segmVaritas <= 4) {respuesta = respuesta + " " + varitas[1] + "; ";} 
                                                                                else if (segmVaritas >= 5 && segmVaritas <= 7) {respuesta = respuesta + " " + varitas[2] + "; ";} 
                                                                                else if (segmVaritas >= 8 && segmVaritas <= 10) {respuesta = respuesta + " " + varitas[3] + "; ";} 
                                                                                else if (segmVaritas >= 11 && segmVaritas <= 13) {respuesta = respuesta + " " + varitas[4] + "; ";} 
                                                                                else if (segmVaritas >= 14 && segmVaritas <= 16) {respuesta = respuesta + " " + varitas[5] + "; ";} 
                                                                                else if (segmVaritas >= 17 && segmVaritas <= 19) {respuesta = respuesta + " " + varitas[6] + "; ";} 
                                                                                else if (segmVaritas >= 20 && segmVaritas <= 22) {respuesta = respuesta + " " + varitas[7] + "; ";} 
                                                                                else if (segmVaritas >= 23 && segmVaritas <= 25) {respuesta = respuesta + " " + varitas[8] + "; ";} 
                                                                                else if (segmVaritas >= 26 && segmVaritas <= 28) {respuesta = respuesta + " " + varitas[9] + "; ";} 
                                                                                else if (segmVaritas >= 29 && segmVaritas <= 31) {respuesta = respuesta + " " + varitas[10] + "; ";} 
                                                                                else if (segmVaritas >= 32 && segmVaritas <= 34) {respuesta = respuesta + " " + varitas[11] + "; ";} 
                                                                                else if (segmVaritas >= 35 && segmVaritas <= 36) {respuesta = respuesta + " " + varitas[12] + "; ";} 
                                                                                else if (segmVaritas == 37) {respuesta = respuesta + " " + varitas[13] + "; ";}
                                                                                else if (segmVaritas >= 38 && segmVaritas <= 40) {respuesta = respuesta + " " + varitas[14] + "; ";}
                                                                                else if (segmVaritas >= 41 && segmVaritas <= 43) {respuesta = respuesta + " " + varitas[15] + "; ";}
                                                                                else if (segmVaritas >= 44 && segmVaritas <= 46) {respuesta = respuesta + " " + varitas[16] + "; ";}
                                                                                else if (segmVaritas >= 47 && segmVaritas <= 49) {respuesta = respuesta + " " + varitas[17] + "; ";}
                                                                                else if (segmVaritas >= 50 && segmVaritas <= 51) {respuesta = respuesta + " " + varitas[18] + "; ";}
                                                                                else if (segmVaritas >= 52 && segmVaritas <= 54) {respuesta = respuesta + " " + varitas[19] + "; ";}
                                                                                else if (segmVaritas >= 55 && segmVaritas <= 57) {respuesta = respuesta + " " + varitas[20] + "; ";}
                                                                                else if (segmVaritas >= 58 && segmVaritas <= 60) {respuesta = respuesta + " " + varitas[21] + "; ";}
                                                                                else if (segmVaritas >= 61 && segmVaritas <= 63) {respuesta = respuesta + " " + varitas[22] + "; ";}
                                                                                else if (segmVaritas >= 64 && segmVaritas <= 66) {respuesta = respuesta + " " + varitas[23] + "; ";}
                                                                                else if (segmVaritas >= 67 && segmVaritas <= 68) {respuesta = respuesta + " " + varitas[24] + "; ";}
                                                                                else if (segmVaritas >= 69 && segmVaritas <= 71) {respuesta = respuesta + " " + varitas[25] + "; ";}
                                                                                else if (segmVaritas >= 72 && segmVaritas <= 74) {respuesta = respuesta + " " + varitas[26] + "; ";}
                                                                                else if (segmVaritas >= 75 && segmVaritas <= 77) {respuesta = respuesta + " " + varitas[27] + "; ";}
                                                                                else if (segmVaritas >= 78 && segmVaritas <= 80) {respuesta = respuesta + " " + varitas[28] + "; ";}
                                                                                else if (segmVaritas >= 81 && segmVaritas <= 83) {respuesta = respuesta + " " + varitas[29] + "; ";}
                                                                                else if (segmVaritas >= 84 && segmVaritas <= 86) {respuesta = respuesta + " " + varitas[30] + "; ";}
                                                                                else if (segmVaritas >= 87 && segmVaritas <= 89) {respuesta = respuesta + " " + varitas[31] + "; ";}
                                                                                else if (segmVaritas >= 90 && segmVaritas <= 91) {respuesta = respuesta + " " + varitas[32] + "; ";}
                                                                                else if (segmVaritas >= 92 && segmVaritas <= 94) {respuesta = respuesta + " " + varitas[33] + "; ";}
                                                                                else if (segmVaritas >= 95 && segmVaritas <= 97) {respuesta = respuesta + " " + varitas[34] + "; ";}
                                                                                else if (segmVaritas >= 98 && segmVaritas <= 100) {respuesta = respuesta + " " + varitas[35] + "; ";}
                                                                                }
                                    else if (segmento >= 92 && segmento <= 100) { //Objeto maravilloso
                                                                                let objetoElegido = Math.floor((Math.random() * 100));
                                                                                respuesta = respuesta + " OBJ. MARAV. MENOR: " + objMaravMenores[objetoElegido] + "; ";
                                                                                }
                                                        banderafunction++;
                                                        }
                            return respuesta;
                            }
                            
function intermedio(dados, lados) {
                                  let cantidad = tiroDeDados(dados, lados); // cantidad de premios a recibir
                                  let respuesta = " ";
                                  let banderafunction = 0; //sirve para llevar un conteo del ciclo while
                                  while(banderafunction < cantidad) {
                                                            let segmento = tiroDeDados(1, 100); // define el primer segmento

                                                            if (segmento >= 1 && segmento <= 10){ //Armas y Escudos
                                                                                                respuesta = respuesta + " ARMAS Y ESCUDOS: ";
                                                                                                for(j=0; j<1; j++){
                                                                                                                  let menorRandom = tiroDeDados(1, 100);
                                                                                                                  if (menorRandom >= 1 && menorRandom <= 5)  {respuesta = respuesta + " Escudo+1; ";}
                                                                                                                  else if (menorRandom >= 6 && menorRandom <= 10) {respuesta = respuesta + " Armadura+1; ";}
                                                                                                                  else if (menorRandom >= 11 && menorRandom <= 20) {respuesta = respuesta + " Escudo+2; ";}
                                                                                                                  else if (menorRandom >= 21 && menorRandom <= 30) {respuesta = respuesta + " Armadura+2; ";}
                                                                                                                  else if (menorRandom >= 31 && menorRandom <= 40) {respuesta = respuesta + " Escudo+3; ";}
                                                                                                                  else if (menorRandom >= 41 && menorRandom <= 50) {respuesta = respuesta + " Armadura+3; ";}
                                                                                                                  else if (menorRandom >= 51 && menorRandom <= 55) {respuesta = respuesta + " Escudo+4; ";}
                                                                                                                  else if (menorRandom >= 56 && menorRandom <= 57) {respuesta = respuesta + " Armadura+4; ";}
                                                                                                                  else if (menorRandom >= 58 && menorRandom <= 60) {respuesta = respuesta + " Armadura Específica; ";}
                                                                                                                  else if (menorRandom >= 61 && menorRandom <= 63) {respuesta = respuesta + " Escudo Específico; ";}
                                                                                                                  else if (menorRandom >= 64 && menorRandom <= 100) {respuesta = respuesta + " Aptitud especial; "; j--;} //se vuelve a tirar
                                                                                                                  }
                                                                                                }
                                                            else if (segmento >= 11 && segmento <= 20){ //Armas
                                                                                                      respuesta = respuesta + "ARMAS: ";
                                                                                                      for(j=0; j<1; j++){
                                                                                                        let menorRandom = tiroDeDados(1, 100);
                                                                                                        if (menorRandom >= 1 && menorRandom <= 10)  {respuesta = respuesta + " Arma+1; ";}
                                                                                                        else if (menorRandom >= 11 && menorRandom <= 20){ respuesta = respuesta + " Arma+2; "; }
                                                                                                        else if (menorRandom >= 21 && menorRandom <= 58){ respuesta = respuesta + " Arma+3; ";}
                                                                                                        else if (menorRandom >= 59 && menorRandom <= 62){ respuesta = respuesta + " Arma+4; ";}
                                                                                                        else if (menorRandom >= 63 && menorRandom <= 68){ respuesta = respuesta + " Arma Específica; ";}
                                                                                                        else if (menorRandom >= 69 && menorRandom <= 100){ respuesta = respuesta + " Aptitud especial; "; j--;} //se vuelve a tirar
                                                                                                                        }
                                                                                                      }
                                                            else if (segmento >= 21 && segmento <= 30){ //Pociones
                                                                                                      respuesta = respuesta + " POCIÓN O ACEITE: ";
                                                                                                      let menorRandom = tiroDeDados(1, 100);
                                                                                                      if (menorRandom >= 1 && menorRandom <= 2) {respuesta = respuesta + " " + pocionesYAceites[15] + "; ";}
                                                                                                      else if (menorRandom >= 3 && menorRandom <= 4) {respuesta = respuesta + " " + pocionesYAceites[16] + "; ";}
                                                                                                      else if (menorRandom == 5) {respuesta = respuesta + " " + pocionesYAceites[17] + "; ";}
                                                                                                      else if (menorRandom == 6) {respuesta = respuesta + " " + pocionesYAceites[18] + "; ";}
                                                                                                      else if (menorRandom == 7) {respuesta = respuesta + " " + pocionesYAceites[19] + "; ";}
                                                                                                      else if (menorRandom >= 8 && menorRandom <= 10) {respuesta = respuesta + " " + pocionesYAceites[20] + "; ";}
                                                                                                      else if (menorRandom >= 11 && menorRandom <= 13) {respuesta = respuesta + " " + pocionesYAceites[21] + "; ";}
                                                                                                      else if (menorRandom >= 14 && menorRandom <= 16) {respuesta = respuesta + " " + pocionesYAceites[22] + "; ";}
                                                                                                      else if (menorRandom >= 17 && menorRandom <= 19) {respuesta = respuesta + " " + pocionesYAceites[23] + "; ";}
                                                                                                      else if (menorRandom >= 20 && menorRandom <= 27) {respuesta = respuesta + " " + pocionesYAceites[24] + "; ";}
                                                                                                      else if (menorRandom == 28) {respuesta = respuesta + " " + pocionesYAceites[25] + "; ";}
                                                                                                      else if (menorRandom >= 29 && menorRandom <= 30) {respuesta = respuesta + " " + pocionesYAceites[26] + "; ";}
                                                                                                      else if (menorRandom == 31) {respuesta = respuesta + " " + pocionesYAceites[27] + "; ";}
                                                                                                      else if (menorRandom >= 32 && menorRandom <= 33) {respuesta = respuesta + " " + pocionesYAceites[28] + "; ";}
                                                                                                      else if (menorRandom >= 34 && menorRandom <= 35) {respuesta = respuesta + " " + pocionesYAceites[29] + "; ";}
                                                                                                      else if (menorRandom >= 36 && menorRandom <= 37) {respuesta = respuesta + " " + pocionesYAceites[30] + "; ";}
                                                                                                      else if (menorRandom == 38) {respuesta = respuesta + " " + pocionesYAceites[31] + "; ";}
                                                                                                      else if (menorRandom == 39) { respuesta = respuesta + " " + pocionesYAceites[32] + "; ";}
                                                                                                      else if (menorRandom == 40) {respuesta = respuesta + " " + pocionesYAceites[33] + "; ";}
                                                                                                      else if (menorRandom >= 41 && menorRandom <= 42) {respuesta = respuesta + " " + pocionesYAceites[34] + "; ";}
                                                                                                      else if (menorRandom == 43) {respuesta = respuesta + " " + pocionesYAceites[35] + "; ";}
                                                                                                      else if (menorRandom == 44) {respuesta = respuesta + " " + pocionesYAceites[36] + "; ";}
                                                                                                      else if (menorRandom >= 45 && menorRandom <= 46) {respuesta = respuesta + " " + pocionesYAceites[37] + "; ";}
                                                                                                      else if (menorRandom >= 47 && menorRandom <= 48) {respuesta = respuesta + " " + pocionesYAceites[38] + "; ";}
                                                                                                      else if (menorRandom == 49) {respuesta = respuesta + " " + pocionesYAceites[39] + "; ";}
                                                                                                      else if (menorRandom == 50) { respuesta = respuesta + " " + pocionesYAceites[40] + "; ";}
                                                                                                      else if (menorRandom == 51) {respuesta = respuesta + " " + pocionesYAceites[41] + "; ";}
                                                                                                      else if (menorRandom == 52) {respuesta = respuesta + " " + pocionesYAceites[42] + "; ";}
                                                                                                      else if (menorRandom >= 53 && menorRandom <= 55) {respuesta = respuesta + " " + pocionesYAceites[43] + "; ";}
                                                                                                      else if (menorRandom >= 56 && menorRandom <= 60) {respuesta = respuesta + " " + pocionesYAceites[44] + "; ";}
                                                                                                      else if (menorRandom == 61) {respuesta = respuesta + " " + pocionesYAceites[45] + "; ";}
                                                                                                      else if (menorRandom >= 62 && menorRandom <= 64) {respuesta = respuesta + " " + pocionesYAceites[46] + "; ";}
                                                                                                      else if (menorRandom == 65) {respuesta = respuesta + " " + pocionesYAceites[47] + "; ";}
                                                                                                      else if (menorRandom >= 66 && menorRandom <= 68) {respuesta = respuesta + " " + pocionesYAceites[48] + "; ";}
                                                                                                      else if (menorRandom == 69) {respuesta = respuesta + " " + pocionesYAceites[49] + "; ";}
                                                                                                      else if (menorRandom >= 70 && menorRandom <= 71) {respuesta = respuesta + " " + pocionesYAceites[50] + "; ";}
                                                                                                      else if (menorRandom >= 72 && menorRandom <= 73) {respuesta = respuesta + " " + pocionesYAceites[51] + "; ";}
                                                                                                      else if (menorRandom >= 74 && menorRandom <= 75) {respuesta = respuesta + " " + pocionesYAceites[52] + "; ";}
                                                                                                      else if (menorRandom >= 76 && menorRandom <= 78) {respuesta = respuesta + " " + pocionesYAceites[53] + "; ";}
                                                                                                      else if (menorRandom >= 79 && menorRandom <= 80) {respuesta = respuesta + " " + pocionesYAceites[54] + "; ";}
                                                                                                      else if (menorRandom == 81) {respuesta = respuesta + " " + pocionesYAceites[55] + "; ";}
                                                                                                      else if (menorRandom >= 82 && menorRandom <= 83) {respuesta = respuesta + " " + pocionesYAceites[56] + "; ";}
                                                                                                      else if (menorRandom >= 84 && menorRandom <= 86) {respuesta = respuesta + " " + pocionesYAceites[57] + "; ";}
                                                                                                      else if (menorRandom >= 87 && menorRandom <= 88) {respuesta = respuesta + " " + pocionesYAceites[58] + "; ";}
                                                                                                      else if (menorRandom >= 89 && menorRandom <= 91) {respuesta = respuesta + " " + pocionesYAceites[59] + "; ";}
                                                                                                      else if (menorRandom >= 92 && menorRandom <= 93) {respuesta = respuesta + " " + pocionesYAceites[60] + "; ";}
                                                                                                      else if (menorRandom == 94) {respuesta = respuesta + " " + pocionesYAceites[61] + "; ";}
                                                                                                      else if (menorRandom == 95) {respuesta = respuesta + " " + pocionesYAceites[62] + "; ";}
                                                                                                      else if (menorRandom == 96) {respuesta = respuesta + " " + pocionesYAceites[63] + "; ";}
                                                                                                      else if (menorRandom == 97) {respuesta = respuesta + " " + pocionesYAceites[64] + "; ";}
                                                                                                      else if (menorRandom >= 98 && menorRandom <= 99) {respuesta = respuesta + " " + pocionesYAceites[65] + "; ";}
                                                                                                      else if (menorRandom == 100) {respuesta = respuesta + " " + pocionesYAceites[66] + "; ";}
                                                                                                      }
                                                            else if (segmento >= 31 && segmento <= 40){ //Anillos
                                                                                                      respuesta = respuesta + " ANILLO: ";
                                                                                                      let menorRandom = tiroDeDados(1, 100);
                                                                                                      if (menorRandom >= 1 && menorRandom <= 5) {respuesta = respuesta + anillos[6] + "; ";}
                                                                                                      else if (menorRandom >= 6 && menorRandom <= 8) {respuesta = respuesta + anillos[7] + "; ";}
                                                                                                      else if (menorRandom >= 9 && menorRandom <= 18) {respuesta = respuesta + anillos[8] + "; ";}
                                                                                                      else if (menorRandom >= 19 && menorRandom <= 23) {respuesta = respuesta + anillos[9] + "; ";}
                                                                                                      else if (menorRandom >= 24 && menorRandom <= 28) {respuesta = respuesta + anillos[10] + "; ";}
                                                                                                      else if (menorRandom >= 29 && menorRandom <= 34) {respuesta = respuesta + anillos[11] + "; ";}
                                                                                                      else if (menorRandom >= 35 && menorRandom <= 40) {respuesta = respuesta + anillos[12] + "; ";}
                                                                                                      else if (menorRandom >= 41 && menorRandom <= 46) {respuesta = respuesta + anillos[13] + "; ";}
                                                                                                      else if (menorRandom >= 47 && menorRandom <= 51) {respuesta = respuesta + anillos[14] + "; ";}
                                                                                                      else if (menorRandom >= 52 && menorRandom <= 56) {respuesta = respuesta + anillos[15] + "; ";}
                                                                                                      else if (menorRandom >= 57 && menorRandom <= 61) {respuesta = respuesta + anillos[16] + "; ";}
                                                                                                      else if (menorRandom >= 67 && menorRandom <= 71) {respuesta = respuesta + anillos[17] + "; ";}
                                                                                                      else if (menorRandom >= 72 && menorRandom <= 76) {respuesta = respuesta + anillos[18] + "; ";}
                                                                                                      else if (menorRandom >= 77 && menorRandom <= 81) {respuesta = respuesta + anillos[19] + "; ";}
                                                                                                      else if (menorRandom >= 82 && menorRandom <= 85) {respuesta = respuesta + anillos[20] + "; ";}
                                                                                                      else if (menorRandom >= 86 && menorRandom <= 90) {respuesta = respuesta + anillos[21] + "; ";}
                                                                                                      else if (menorRandom >= 91 && menorRandom <= 93) {respuesta = respuesta + anillos[22] + "; ";}
                                                                                                      else if (menorRandom >= 94 && menorRandom <= 97) {respuesta = respuesta + anillos[23] + "; ";}
                                                                                                      else if (menorRandom >= 98 && menorRandom <= 100) {respuesta = respuesta + anillos[24] + "; ";}
                                                                                                      }
                                                            else if (segmento >= 41 && segmento <= 50){ //Cetros
                                                                                                      respuesta = respuesta + " CETRO: ";
                                                                                                      let cetrosRandom = tiroDeDados(1, 100);
                                                                                                      if (cetrosRandom >= 1 && cetrosRandom <= 7) {respuesta = respuesta + " " + cetros[0] + "; ";}
                                                                                                      else if (cetrosRandom >= 8 && cetrosRandom <= 14) {respuesta = respuesta + " " + cetros[1] + "; ";}
                                                                                                      else if (cetrosRandom >= 15 && cetrosRandom <= 21) {respuesta = respuesta + " " + cetros[2] + "; ";}
                                                                                                      else if (cetrosRandom >= 22 && cetrosRandom <= 28) {respuesta = respuesta + " " + cetros[3] + "; ";}
                                                                                                      else if (cetrosRandom >= 29 && cetrosRandom <= 35) {respuesta = respuesta + " " + cetros[4] + "; ";}
                                                                                                      else if (cetrosRandom >= 36 && cetrosRandom <= 42) {respuesta = respuesta + " " + cetros[5] + "; ";}
                                                                                                      else if (cetrosRandom >= 43 && cetrosRandom <= 53) {respuesta = respuesta + " " + cetros[6] + "; ";}
                                                                                                      else if (cetrosRandom >= 54 && cetrosRandom <= 57) {respuesta = respuesta + " " + cetros[7] + "; ";}
                                                                                                      else if (cetrosRandom >= 58 && cetrosRandom <= 61) {respuesta = respuesta + " " + cetros[8] + "; ";}
                                                                                                      else if (cetrosRandom >= 62 && cetrosRandom <= 65) {respuesta = respuesta + " " + cetros[9] + "; ";}
                                                                                                      else if (cetrosRandom >= 66 && cetrosRandom <= 71) {respuesta = respuesta + " " + cetros[10] + "; ";}
                                                                                                      else if (cetrosRandom >= 72 && cetrosRandom <= 79) {respuesta = respuesta + " " + cetros[11] + "; ";}
                                                                                                      else if (cetrosRandom >= 80 && cetrosRandom <= 83) {respuesta = respuesta + " " + cetros[12] + "; ";}
                                                                                                      else if (cetrosRandom >= 84 && cetrosRandom <= 89) {respuesta = respuesta + " " + cetros[13] + "; ";}
                                                                                                      else if (cetrosRandom >= 90 && cetrosRandom <= 97) {respuesta = respuesta + " " + cetros[14] + "; ";}
                                                                                                      else if (cetrosRandom >= 98 && cetrosRandom <= 99) {respuesta = respuesta + " " + cetros[21] + "; ";}
                                                                                                      else if (cetrosRandom == 100) {respuesta = respuesta + " " + cetros[23] + "; ";}
                                                                                                      }
                                                            else if (segmento >= 51 && segmento <= 65){ //Rollos
                                                                                                      let segRollo = tiroDeDados(1, 100); //se decide si va a ser arcano o divino
                                                                                                      let cantidadRollo = tiroDeDados(1, 4); //cantidad de conjuros a recibir
                                                                                                      let bandera = 0;
                                                                                                      if (segRollo >= 1 && segRollo <= 70){ // conjuros arcanos
                                                                                                        respuesta = respuesta + " CONJ. ARCANO: ";
                                                                                                        while(bandera < cantidadRollo)  {
                                                                                                                                        let nivelConjuro = tiroDeDados(1, 100); //nivel del conjuro al que puede acceder
                                                                                                                                          if (nivelConjuro >= 1 && nivelConjuro <= 5) { //nivel de conjuro arcano 2
                                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                                      if (conj >= 1 && conj <= 3) {respuesta = respuesta + " " + conjurosArcanos2[0] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 4 && conj <= 6) {respuesta = respuesta + " " + conjurosArcanos2[1] + "; ";}
                                                                                                                                                                                                                      else if (conj == 7) {respuesta = respuesta + " " + conjurosArcanos2[2] + "; ";}
                                                                                                                                                                                                                      else if (conj == 8) {respuesta = respuesta + " " + conjurosArcanos2[3] + "; ";}
                                                                                                                                                                                                                      else if (conj == 9) {respuesta = respuesta + " " + conjurosArcanos2[4] + "; ";}
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
                                                                                                                                                                                                                      else if (conj == 51) {respuesta = respuesta + " " + conjurosArcanos2[26] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 52 && conj <= 53) {respuesta = respuesta + " " + conjurosArcanos2[27] + "; ";}
                                                                                                                                                                                                                      else if (conj == 54) {respuesta = respuesta + " " + conjurosArcanos2[28] + "; ";}
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
                                                                                                                                                                                                                      else if (conj == 70) {respuesta = respuesta + " " + conjurosArcanos2[39] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 71 && conj <= 72) {respuesta = respuesta + " " + conjurosArcanos2[40] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 73 && conj <= 75) {respuesta = respuesta + " " + conjurosArcanos2[41] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 76 && conj <= 78) {respuesta = respuesta + " " + conjurosArcanos2[42] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 79 && conj <= 81) {respuesta = respuesta + " " + conjurosArcanos2[43] + "; ";}
                                                                                                                                                                                                                      else if (conj == 82) {respuesta = respuesta + " " + conjurosArcanos2[44] + "; ";}
                                                                                                                                                                                                                      else if (conj == 83) {respuesta = respuesta + " " + conjurosArcanos2[45] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 84 && conj <= 85) {respuesta = respuesta + " " + conjurosArcanos2[46] + "; ";}
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
                                                                                                                                          else if (nivelConjuro >= 6 && nivelConjuro <= 65)   { //nivel de conjuro arcano 3
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
                                                                                                                                          else if (nivelConjuro >= 66 && nivelConjuro <= 95)  { //nivel de conjuro arcano 4
                                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                                      if (conj >= 1 && conj <= 2) {respuesta = respuesta + " " + conjurosArcanos4[0] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 3 && conj <= 4) {respuesta = respuesta + " " + conjurosArcanos4[1] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 5 && conj <= 7) {respuesta = respuesta + " " + conjurosArcanos4[2] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 8 && conj <= 9) {respuesta = respuesta + " " + conjurosArcanos4[3] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 10 && conj <= 11) {respuesta = respuesta + " " + conjurosArcanos4[4] + "; "; }
                                                                                                                                                                                                                      else if (conj >= 12 && conj <= 13) {respuesta = respuesta + " " + conjurosArcanos4[5] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 14 && conj <= 16) {respuesta = respuesta + " " + conjurosArcanos4[6] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 17 && conj <= 18) {respuesta = respuesta + " " + conjurosArcanos4[7] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 19 && conj <= 20) {respuesta = respuesta + " " + conjurosArcanos4[8] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 21 && conj <= 22) {respuesta = respuesta + " " + conjurosArcanos4[9] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 23 && conj <= 24) {respuesta = respuesta + " " + conjurosArcanos4[10] + "; ";}
                                                                                                                                                                                                                      else if (conj == 25) {respuesta = respuesta + " " + conjurosArcanos4[11] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 26 && conj <= 27) {respuesta = respuesta + " " + conjurosArcanos4[12] + "; ";}
                                                                                                                                                                                                                      else if (conj == 28) {respuesta = respuesta + " " + conjurosArcanos4[13] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 29 && conj <= 30) {respuesta = respuesta + " " + conjurosArcanos4[14] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 31 && conj <= 33) {respuesta = respuesta + " " + conjurosArcanos4[15] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 34 && conj <= 35) {respuesta = respuesta + " " + conjurosArcanos4[16] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 36 && conj <= 37) {respuesta = respuesta + " " + conjurosArcanos4[17] + "; ";}
                                                                                                                                                                                                                      else if (conj == 38) {respuesta = respuesta + " " + conjurosArcanos4[18] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 39 && conj <= 41) {respuesta = respuesta + " " + conjurosArcanos4[19] + "; ";}
                                                                                                                                                                                                                      else if (conj == 42) {respuesta = respuesta + " " + conjurosArcanos4[20] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 43 && conj <= 45) {respuesta = respuesta + " " + conjurosArcanos4[21] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 46 && conj <= 48) {respuesta = respuesta + " " + conjurosArcanos4[22] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 49 && conj <= 50) {respuesta = respuesta + " " + conjurosArcanos4[23] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 51 && conj <= 53) {respuesta = respuesta + " " + conjurosArcanos4[24] + "; ";}
                                                                                                                                                                                                                      else if (conj == 54) {respuesta = respuesta + " " + conjurosArcanos4[25] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 55 && conj <= 56)    {respuesta = respuesta + " " + conjurosArcanos4[26] + "; ";}
                                                                                                                                                                                                                      else if (conj == 57)  {respuesta = respuesta + " " + conjurosArcanos4[27] + "; ";}
                                                                                                                                                                                                                      else if (conj == 58) {respuesta = respuesta + " " + conjurosArcanos4[28] + "; "; }
                                                                                                                                                                                                                      else if (conj >= 59 && conj <= 61) {respuesta = respuesta + " " + conjurosArcanos4[29] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 62 && conj <= 64) {respuesta = respuesta + " " + conjurosArcanos4[30] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 65 && conj <= 66) {respuesta = respuesta + " " + conjurosArcanos4[31] + "; ";}
                                                                                                                                                                                                                      else if (conj == 67) {respuesta = respuesta + " " + conjurosArcanos4[32] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 68 && conj <= 70) {respuesta = respuesta + " " + conjurosArcanos4[33] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 71 && conj <= 73) {respuesta = respuesta + " " + conjurosArcanos4[34] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 74 && conj <= 75) {respuesta = respuesta + " " + conjurosArcanos4[35] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 76 && conj <= 77) {respuesta = respuesta + " " + conjurosArcanos4[36] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 78 && conj <= 81) {respuesta = respuesta + " " + conjurosArcanos4[37] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 82 && conj <= 83) {respuesta = respuesta + " " + conjurosArcanos4[38] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 84 && conj <= 85)  {respuesta = respuesta + " " + conjurosArcanos4[39] + "; ";}
                                                                                                                                                                                                                      else if (conj == 86) {respuesta = respuesta + " " + conjurosArcanos4[40] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 87 && conj <= 89) {respuesta = respuesta + " " + conjurosArcanos4[41] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 90 && conj <= 91) {respuesta = respuesta + " " + conjurosArcanos4[42] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 92 && conj <= 93) {respuesta = respuesta + " " + conjurosArcanos4[43] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 94 && conj <= 95) {respuesta = respuesta + " " + conjurosArcanos4[44] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 96 && conj <= 97) {respuesta = respuesta + " " + conjurosArcanos4[45] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 98 && conj <= 99)  {respuesta = respuesta + " " + conjurosArcanos4[46] + "; ";}
                                                                                                                                                                                                                      else if (conj == 100) {respuesta = respuesta + " " + conjurosArcanos4[47] + "; ";}
                                                                                                                                                                                              }
                                                                                                                                          else if (nivelConjuro >= 96 && nivelConjuro <= 100) { //nivel de conjuro arcano 5
                                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                                      if (conj >= 1 && conj <= 2) {respuesta = respuesta + " " + conjurosArcanos5[0] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 3 && conj <= 4) {respuesta = respuesta + " " + conjurosArcanos5[1] + "; ";}
                                                                                                                                                                                                                      else if (conj == 5) {respuesta = respuesta + " " + conjurosArcanos5[2] + "; ";}
                                                                                                                                                                                                                      else if (conj == 6) {respuesta = respuesta + " " + conjurosArcanos5[3] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 7 && conj <= 9) {respuesta = respuesta + " " + conjurosArcanos5[4] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 10 && conj <= 11) {respuesta = respuesta + " " + conjurosArcanos5[5] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 12 && conj <= 13) {respuesta = respuesta + " " + conjurosArcanos5[6] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 14 && conj <= 15) {respuesta = respuesta + " " + conjurosArcanos5[7] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 16 && conj <= 17) {respuesta = respuesta + " " + conjurosArcanos5[8] + "; ";}
                                                                                                                                                                                                                      else if (conj == 18) {respuesta = respuesta + " " + conjurosArcanos5[9] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 19 && conj <= 20) {respuesta = respuesta + " " + conjurosArcanos5[10] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 21 && conj <= 23) {respuesta = respuesta + " " + conjurosArcanos5[11] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 24 && conj <= 25) {respuesta = respuesta + " " + conjurosArcanos5[12] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 26 && conj <= 27) {respuesta = respuesta + " " + conjurosArcanos5[13] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 28 && conj <= 29) {respuesta = respuesta + " " + conjurosArcanos5[14] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 30 && conj <= 31) {respuesta = respuesta + " " + conjurosArcanos5[15] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 32 && conj <= 34) {respuesta = respuesta + " " + conjurosArcanos5[16] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 35 && conj <= 36) {respuesta = respuesta + " " + conjurosArcanos5[17] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 37 && conj <= 40) {respuesta = respuesta + " " + conjurosArcanos5[18] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 41 && conj <= 42) {respuesta = respuesta + " " + conjurosArcanos5[19] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 43 && conj <= 44) {respuesta = respuesta + " " + conjurosArcanos5[20] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 45 && conj <= 46) {respuesta = respuesta + " " + conjurosArcanos5[21] + "; ";}
                                                                                                                                                                                                                      else if (conj == 47) {respuesta = respuesta + " " + conjurosArcanos5[22] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 48 && conj <= 50) {respuesta = respuesta + " " + conjurosArcanos5[23] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 51 && conj <= 53) {respuesta = respuesta + " " + conjurosArcanos5[24] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 54 && conj <= 55) {respuesta = respuesta + " " + conjurosArcanos5[25] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 56 && conj <= 57) {respuesta = respuesta + " " + conjurosArcanos5[26] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 58 && conj <= 59) {respuesta = respuesta + " " + conjurosArcanos5[27] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 60 && conj <= 61) {respuesta = respuesta + " " + conjurosArcanos5[28] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 62 && conj <= 64) {respuesta = respuesta + " " + conjurosArcanos5[29] + "; ";}
                                                                                                                                                                                                                      else if (conj == 65) {respuesta = respuesta + " " + conjurosArcanos5[30] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 66 && conj <= 67) {respuesta = respuesta + " " + conjurosArcanos5[31] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 68 && conj <= 70) {respuesta = respuesta + " " + conjurosArcanos5[32] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 71 && conj <= 73) {respuesta = respuesta + " " + conjurosArcanos5[33] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 74 && conj <= 75) {respuesta = respuesta + " " + conjurosArcanos5[34] + "; ";}
                                                                                                                                                                                                                      else if (conj == 76) {respuesta = respuesta + " " + conjurosArcanos5[35] + "; ";}
                                                                                                                                                                                                                      else if (conj == 77) {respuesta = respuesta + " " + conjurosArcanos5[36] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 78 && conj <= 79) {respuesta = respuesta + " " + conjurosArcanos5[37] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 80 && conj <= 82) {respuesta = respuesta + " " + conjurosArcanos5[38] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 83 && conj <= 87) {respuesta = respuesta + " " + conjurosArcanos5[39] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 88 && conj <= 89) {respuesta = respuesta + " " + conjurosArcanos5[40] + "; ";}
                                                                                                                                                                                                                      else if (conj == 90) {respuesta = respuesta + " " + conjurosArcanos5[41] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 91 && conj <= 92) {respuesta = respuesta + " " + conjurosArcanos5[42] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 93 && conj <= 94) {respuesta = respuesta + " " + conjurosArcanos5[43] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 95 && conj <= 96) {respuesta = respuesta + " " + conjurosArcanos5[44] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 97 && conj <= 100) {respuesta = respuesta + " " + conjurosArcanos5[45] + "; ";}
                                                                                                                                                                                              }
                                                                                                                                          bandera++;
                                                                                                                                          } //while
                                                                                                                                          } //if

                                                                                                      else if (segRollo >= 71 && segRollo <= 100) { // conjuros divinos
                                                                                                          respuesta = respuesta +  " CONJ. DIVINO: ";
                                                                                                          while(bandera < cantidadRollo)  {
                                                                                                          let nivelConjuro = tiroDeDados(1,100);
                                                                                                                                                  if (nivelConjuro >= 1 && nivelConjuro <= 5) { // nivel de conjuro divino 2
                                                                                                                                                                                              let conj = tiroDeDados(1, 100);
                                                                                                                                                                                              if (conj == 1) {respuesta = respuesta + " " + conjurosDivinos2[0] + "; ";}
                                                                                                                                                                                              else if (conj >= 2 && conj <= 3) {respuesta = respuesta + " " + conjurosDivinos2[1] + "; ";}
                                                                                                                                                                                              else if (conj == 4) {respuesta = respuesta + " " + conjurosDivinos2[2] + "; ";}
                                                                                                                                                                                              else if (conj >= 5 && conj <= 6) {respuesta = respuesta + " " + conjurosDivinos2[3] + "; ";}
                                                                                                                                                                                              else if (conj >= 7 && conj <= 8) {respuesta = respuesta + " " + conjurosDivinos2[4] + "; ";}
                                                                                                                                                                                              else if (conj == 9) {respuesta = respuesta + " " + conjurosDivinos2[5] + "; ";}
                                                                                                                                                                                              else if (conj >= 10 && conj <= 11) {respuesta = respuesta + " " + conjurosDivinos2[6] + "; ";}
                                                                                                                                                                                              else if (conj == 12) {respuesta = respuesta + " " + conjurosDivinos2[7] + "; ";}
                                                                                                                                                                                              else if (conj >= 13 && conj <= 14) {respuesta = respuesta + " " + conjurosDivinos2[8] + "; ";}
                                                                                                                                                                                              else if (conj >= 15 && conj <= 16) {respuesta = respuesta + " " + conjurosDivinos2[9] + "; ";}
                                                                                                                                                                                              else if (conj >= 17 && conj <= 18) {respuesta = respuesta + " " + conjurosDivinos2[10] + "; ";}
                                                                                                                                                                                              else if (conj >= 19 && conj <= 20) {respuesta = respuesta + " " + conjurosDivinos2[11] + "; ";}
                                                                                                                                                                                              else if (conj >= 21 && conj <= 22) {respuesta = respuesta + " " + conjurosDivinos2[12] + "; ";}
                                                                                                                                                                                              else if (conj >= 23 && conj <= 26) {respuesta = respuesta + " " + conjurosDivinos2[13] + "; ";}
                                                                                                                                                                                              else if (conj >= 27 && conj <= 28) {respuesta = respuesta + " " + conjurosDivinos2[14] + "; ";}
                                                                                                                                                                                              else if (conj >= 29 && conj <= 30) {respuesta = respuesta + " " + conjurosDivinos2[15] + "; ";}
                                                                                                                                                                                              else if (conj >= 31 && conj <= 32) {respuesta = respuesta + " " + conjurosDivinos2[16] + "; ";}
                                                                                                                                                                                              else if (conj >= 33 && conj <= 34) {respuesta = respuesta + " " + conjurosDivinos2[17] + "; ";}
                                                                                                                                                                                              else if (conj >= 35 && conj <= 37) {respuesta = respuesta + " " + conjurosDivinos2[18] + "; ";}
                                                                                                                                                                                              else if (conj >= 38 && conj <= 39) {respuesta = respuesta + " " + conjurosDivinos2[19] + "; ";}
                                                                                                                                                                                              else if (conj >= 40 && conj <= 41) {respuesta = respuesta + " " + conjurosDivinos2[20] + "; ";}
                                                                                                                                                                                              else if (conj >= 42 && conj <= 43) {respuesta = respuesta + " " + conjurosDivinos2[21] + "; ";}
                                                                                                                                                                                              else if (conj == 44) {respuesta = respuesta + " " + conjurosDivinos2[22] + "; ";}
                                                                                                                                                                                              else if (conj >= 45 && conj <= 47) {respuesta = respuesta + " " + conjurosDivinos2[23] + "; ";}
                                                                                                                                                                                              else if (conj >= 48 && conj <= 50) {respuesta = respuesta + " " + conjurosDivinos2[24] + "; ";}
                                                                                                                                                                                              else if (conj == 51) {respuesta = respuesta + " " + conjurosDivinos2[25] + "; ";}
                                                                                                                                                                                              else if (conj == 52) {respuesta = respuesta + " " + conjurosDivinos2[26] + "; ";}
                                                                                                                                                                                              else if (conj >= 53 && conj <= 54) {respuesta = respuesta + " " + conjurosDivinos2[27] + "; ";}
                                                                                                                                                                                              else if (conj >= 55 && conj <= 56) {respuesta = respuesta + " " + conjurosDivinos2[28] + "; ";}
                                                                                                                                                                                              else if (conj >= 57 && conj <= 59) {respuesta = respuesta + " " + conjurosDivinos2[29] + "; ";}
                                                                                                                                                                                              else if (conj >= 60 && conj <= 61) {respuesta = respuesta + " " + conjurosDivinos2[30] + "; ";}
                                                                                                                                                                                              else if (conj >= 62 && conj <= 64) {respuesta = respuesta + " " + conjurosDivinos2[31] + "; ";}
                                                                                                                                                                                              else if (conj == 65) {respuesta = respuesta + " " + conjurosDivinos2[32] + "; ";}
                                                                                                                                                                                              else if (conj >= 66 && conj <= 67) {respuesta = respuesta + " " + conjurosDivinos2[33] + "; ";}
                                                                                                                                                                                              else if (conj >= 68 && conj <= 69) {respuesta = respuesta + " " + conjurosDivinos2[34] + "; ";}
                                                                                                                                                                                              else if (conj >= 70 && conj <= 71) {respuesta = respuesta + " " + conjurosDivinos2[35] + "; ";}
                                                                                                                                                                                              else if (conj >= 72 && conj <= 73) {respuesta = respuesta + " " + conjurosDivinos2[36] + "; ";}
                                                                                                                                                                                              else if (conj >= 74 && conj <= 75) {respuesta = respuesta + " " + conjurosDivinos2[37] + "; ";}
                                                                                                                                                                                              else if (conj == 76) {respuesta = respuesta + " " + conjurosDivinos2[38] + "; ";}
                                                                                                                                                                                              else if (conj == 77) {respuesta = respuesta + " " + conjurosDivinos2[39] + "; ";}
                                                                                                                                                                                              else if (conj >= 78 && conj <= 80) {respuesta = respuesta + " " + conjurosDivinos2[40] + "; ";}
                                                                                                                                                                                              else if (conj >= 81 && conj <= 83) {respuesta = respuesta + " " + conjurosDivinos2[41] + "; ";}
                                                                                                                                                                                              else if (conj >= 84 && conj <= 86) {respuesta = respuesta + " " + conjurosDivinos2[42] + "; ";}
                                                                                                                                                                                              else if (conj >= 87 && conj <= 89) {respuesta = respuesta + " " + conjurosDivinos2[43] + "; ";}
                                                                                                                                                                                              else if (conj >= 90 && conj <= 91) {respuesta = respuesta + " " + conjurosDivinos2[44] + "; ";}
                                                                                                                                                                                              else if (conj == 92) {respuesta = respuesta + " " + conjurosDivinos2[45] + "; ";}
                                                                                                                                                                                              else if (conj == 93) {respuesta = respuesta + " " + conjurosDivinos2[46] + "; ";}
                                                                                                                                                                                              else if (conj == 94) {respuesta = respuesta + " " + conjurosDivinos2[47] + "; ";}
                                                                                                                                                                                              else if (conj == 95) {respuesta = respuesta + " " + conjurosDivinos2[48] + "; ";}
                                                                                                                                                                                              else if (conj == 96) {respuesta = respuesta + " " + conjurosDivinos2[49] + "; ";}
                                                                                                                                                                                              else if (conj >= 97 && conj <= 98) {respuesta = respuesta + " " + conjurosDivinos2[50] + "; ";}
                                                                                                                                                                                              else if (conj >= 99 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos2[51] + "; ";}
                                                                                                                                                                                              }
                                                                                                                                                  else if (nivelConjuro >= 6 && nivelConjuro <= 65)   { // nivel de conjuro divino 3
                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                      if (conj >= 1 && conj <= 2) {respuesta = respuesta + " " + conjurosDivinos3[0] + "; ";}
                                                                                                                                                                                                      else if (conj >= 3 && conj <= 4) {respuesta = respuesta + " " + conjurosDivinos3[1] + "; ";}
                                                                                                                                                                                                      else if (conj >= 5 && conj <= 6) {respuesta = respuesta + " " + conjurosDivinos3[2] + "; ";}
                                                                                                                                                                                                      else if (conj >= 7 && conj <= 8) {respuesta = respuesta + " " + conjurosDivinos3[3] + "; ";}
                                                                                                                                                                                                      if (conj >= 9 && conj <= 14) {respuesta = respuesta + " " + conjurosDivinos3[4] + "; ";}
                                                                                                                                                                                                      else if (conj >= 15 && conj <= 16) {respuesta = respuesta + " " + conjurosDivinos3[5] + "; ";}
                                                                                                                                                                                                      else if (conj >= 17 && conj <= 18) {respuesta = respuesta + " " + conjurosDivinos3[6] + "; ";}
                                                                                                                                                                                                      else if (conj >= 19 && conj <= 20) {respuesta = respuesta + " " + conjurosDivinos3[7] + "; ";}
                                                                                                                                                                                                      else if (conj >= 21 && conj <= 22) {respuesta = respuesta + " " + conjurosDivinos3[8] + "; ";}
                                                                                                                                                                                                      else if (conj >= 23 && conj <= 24) {respuesta = respuesta + " " + conjurosDivinos3[9] + "; ";}
                                                                                                                                                                                                      else if (conj >= 25 && conj <= 26) {respuesta = respuesta + " " + conjurosDivinos3[10] + "; ";}
                                                                                                                                                                                                      else if (conj >= 27 && conj <= 30) {respuesta = respuesta + " " + conjurosDivinos3[11] + "; ";}
                                                                                                                                                                                                      else if (conj >= 31 && conj <= 32) {respuesta = respuesta + " " + conjurosDivinos3[12] + "; ";}
                                                                                                                                                                                                      else if (conj >= 33 && conj <= 34) {respuesta = respuesta + " " + conjurosDivinos3[13] + "; ";}
                                                                                                                                                                                                      else if (conj >= 35 && conj <= 36) {respuesta = respuesta + " " + conjurosDivinos3[14] + "; ";}
                                                                                                                                                                                                      else if (conj >= 37 && conj <= 38) {respuesta = respuesta + " " + conjurosDivinos3[15] + "; ";}
                                                                                                                                                                                                      else if (conj >= 39 && conj <= 40) {respuesta = respuesta + " " + conjurosDivinos3[16] + "; ";}
                                                                                                                                                                                                      else if (conj >= 41 && conj <= 43) {respuesta = respuesta + " " + conjurosDivinos3[17] + "; ";}
                                                                                                                                                                                                      else if (conj >= 44 && conj <= 45) {respuesta = respuesta + " " + conjurosDivinos3[18] + "; ";}
                                                                                                                                                                                                      else if (conj >= 46 && conj <= 47) {respuesta = respuesta + " " + conjurosDivinos3[19] + "; ";}
                                                                                                                                                                                                      else if (conj >= 48 && conj <= 49) {respuesta = respuesta + " " + conjurosDivinos3[20] + "; ";}
                                                                                                                                                                                                      else if (conj >= 50 && conj <= 51) {respuesta = respuesta + " " + conjurosDivinos3[21] + "; ";}
                                                                                                                                                                                                      else if (conj >= 52 && conj <= 53) {respuesta = respuesta + " " + conjurosDivinos3[22] + "; ";}
                                                                                                                                                                                                      else if (conj >= 54 && conj <= 56) {respuesta = respuesta + " " + conjurosDivinos3[23] + "; ";}
                                                                                                                                                                                                      else if (conj >= 57 && conj <= 58) {respuesta = respuesta + " " + conjurosDivinos3[24] + "; ";}
                                                                                                                                                                                                      else if (conj >= 59 && conj <= 60) {respuesta = respuesta + " " + conjurosDivinos3[25] + "; ";}
                                                                                                                                                                                                      else if (conj >= 61 && conj <= 62) {respuesta = respuesta + " " + conjurosDivinos3[26] + "; ";}
                                                                                                                                                                                                      else if (conj >= 63 && conj <= 65) {respuesta = respuesta + " " + conjurosDivinos3[27] + "; ";}
                                                                                                                                                                                                      else if (conj >= 66 && conj <= 67) {respuesta = respuesta + " " + conjurosDivinos3[28] + "; ";}
                                                                                                                                                                                                      else if (conj >= 68 && conj <= 69) {respuesta = respuesta + " " + conjurosDivinos3[29] + "; ";}
                                                                                                                                                                                                      else if (conj >= 70 && conj <= 72) {respuesta = respuesta + " " + conjurosDivinos3[30] + "; ";}
                                                                                                                                                                                                      else if (conj >= 73 && conj <= 74) {respuesta = respuesta + " " + conjurosDivinos3[31] + "; ";}
                                                                                                                                                                                                      else if (conj >= 75 && conj <= 76) {respuesta = respuesta + " " + conjurosDivinos3[32] + "; ";}
                                                                                                                                                                                                      else if (conj >= 77 && conj <= 79) {respuesta = respuesta + " " + conjurosDivinos3[33] + "; ";}
                                                                                                                                                                                                      else if (conj >= 80 && conj <= 81) {respuesta = respuesta + " " + conjurosDivinos3[34] + "; ";}
                                                                                                                                                                                                      else if (conj >= 82 && conj <= 83) {respuesta = respuesta + " " + conjurosDivinos3[35] + "; ";}
                                                                                                                                                                                                      else if (conj >= 84 && conj <= 85) {respuesta = respuesta + " " + conjurosDivinos3[36] + "; ";}
                                                                                                                                                                                                      else if (conj >= 86 && conj <= 87) {respuesta = respuesta + " " + conjurosDivinos3[37] + "; ";}
                                                                                                                                                                                                      else if (conj >= 88 && conj <= 90) {respuesta = respuesta + " " + conjurosDivinos3[38] + "; ";}
                                                                                                                                                                                                      else if (conj == 91) {respuesta = respuesta + " " + conjurosDivinos3[39] + "; ";}
                                                                                                                                                                                                      else if (conj >= 92 && conj <= 93) {respuesta = respuesta + " " + conjurosDivinos3[40] + "; ";}
                                                                                                                                                                                                      else if (conj >= 94 && conj <= 95) {respuesta = respuesta + " " + conjurosDivinos3[41] + "; ";}
                                                                                                                                                                                                      else if (conj >= 96 && conj <= 97) {respuesta = respuesta + " " + conjurosDivinos3[42] + "; ";}
                                                                                                                                                                                                      else if (conj >= 98 && conj <= 99) {respuesta = respuesta + " " + conjurosDivinos3[43] + "; ";}
                                                                                                                                                                                                      else if (conj == 100) {respuesta = respuesta + " " + conjurosDivinos3[44] + "; ";}
                                                                                                                                                                                                      }
                                                                                                                                                  else if (nivelConjuro >= 66 && nivelConjuro <= 95)  { // nivel de conjuro divino 4
                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                      if (conj >= 1 && conj <= 2) {respuesta = respuesta + " " + conjurosDivinos4[0] + "; ";}
                                                                                                                                                                                                      else if (conj >= 3 && conj <= 4) {respuesta = respuesta + " " + conjurosDivinos4[1] + "; ";}
                                                                                                                                                                                                      else if (conj >= 5 && conj <= 6) {respuesta = respuesta + " " + conjurosDivinos4[3] + "; ";}
                                                                                                                                                                                                      else if (conj >= 5 && conj <= 9) {respuesta = respuesta + " " + conjurosDivinos4[4] + "; ";}
                                                                                                                                                                                                      else if (conj >= 10 && conj <= 12) {respuesta = respuesta + " " + conjurosDivinos4[5] + "; ";}
                                                                                                                                                                                                      else if (conj >= 13 && conj <= 14) {respuesta = respuesta + " " + conjurosDivinos4[6] + "; ";}
                                                                                                                                                                                                      else if (conj >= 15 && conj <= 16) {respuesta = respuesta + " " + conjurosDivinos4[7] + "; ";}
                                                                                                                                                                                                      else if (conj >= 17 && conj <= 21) {respuesta = respuesta + " " + conjurosDivinos4[8] + "; ";}
                                                                                                                                                                                                      else if (conj >= 22 && conj <= 23) {respuesta = respuesta + " " + conjurosDivinos4[9] + "; ";}
                                                                                                                                                                                                      else if (conj >= 24 && conj <= 25) {respuesta = respuesta + " " + conjurosDivinos4[10] + "; ";}
                                                                                                                                                                                                      else if (conj >= 26 && conj <= 27) {respuesta = respuesta + " " + conjurosDivinos4[11] + "; ";}
                                                                                                                                                                                                      else if (conj >= 28 && conj <= 30) {respuesta = respuesta + " " + conjurosDivinos4[12] + "; ";}
                                                                                                                                                                                                      else if (conj >= 31 && conj <= 33) {respuesta = respuesta + " " + conjurosDivinos4[13] + "; ";}
                                                                                                                                                                                                      else if (conj >= 34 && conj <= 39) {respuesta = respuesta + " " + conjurosDivinos4[14] + "; ";}
                                                                                                                                                                                                      else if (conj >= 40 && conj <= 44) {respuesta = respuesta + " " + conjurosDivinos4[15] + "; ";}
                                                                                                                                                                                                      else if (conj >= 45 && conj <= 47) {respuesta = respuesta + " " + conjurosDivinos4[16] + "; ";}
                                                                                                                                                                                                      else if (conj >= 48 && conj <= 52) {respuesta = respuesta + " " + conjurosDivinos4[17] + "; ";}
                                                                                                                                                                                                      else if (conj >= 53 && conj <= 54) {respuesta = respuesta + " " + conjurosDivinos4[18] + "; ";}
                                                                                                                                                                                                      else if (conj >= 55 && conj <= 57) {respuesta = respuesta + " " + conjurosDivinos4[19] + "; ";}
                                                                                                                                                                                                      else if (conj >= 58 && conj <= 60) {respuesta = respuesta + " " + conjurosDivinos4[20] + "; ";}
                                                                                                                                                                                                      else if (conj >= 61 && conj <= 63) {respuesta = respuesta + " " + conjurosDivinos4[21] + "; ";}
                                                                                                                                                                                                      else if (conj >= 64 && conj <= 65) {respuesta = respuesta + " " + conjurosDivinos4[22] + "; ";}
                                                                                                                                                                                                      else if (conj >= 66 && conj <= 69) {respuesta = respuesta + " " + conjurosDivinos4[23] + "; ";}
                                                                                                                                                                                                      else if (conj >= 70 && conj <= 74) {respuesta = respuesta + " " + conjurosDivinos4[24] + "; ";}
                                                                                                                                                                                                      else if (conj >= 75 && conj <= 76) {respuesta = respuesta + " " + conjurosDivinos4[25] + "; ";}
                                                                                                                                                                                                      else if (conj >= 77 && conj <= 79) {respuesta = respuesta + " " + conjurosDivinos4[26] + "; ";}
                                                                                                                                                                                                      else if (conj >= 80 && conj <= 82) {respuesta = respuesta + " " + conjurosDivinos4[27] + "; ";}
                                                                                                                                                                                                      else if (conj >= 83 && conj <= 84) {respuesta = respuesta + " " + conjurosDivinos4[28] + "; ";}
                                                                                                                                                                                                      else if (conj >= 85 && conj <= 86) {respuesta = respuesta + " " + conjurosDivinos4[29] + "; ";}
                                                                                                                                                                                                      else if (conj >= 87 && conj <= 91) {respuesta = respuesta + " " + conjurosDivinos4[30] + "; ";}
                                                                                                                                                                                                      else if (conj >= 92 && conj <= 93) {respuesta = respuesta + " " + conjurosDivinos4[31] + "; ";}
                                                                                                                                                                                                      else if (conj >= 94 && conj <= 95) {respuesta = respuesta + " " + conjurosDivinos4[32] + "; ";}
                                                                                                                                                                                                      else if (conj >= 96 && conj <= 98) {respuesta = respuesta + " " + conjurosDivinos4[33] + "; ";}
                                                                                                                                                                                                      else if (conj >= 99 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos4[34] + "; ";}
                                                                                                                                                                                                      }
                                                                                                                                                  else if (nivelConjuro >= 96 && nivelConjuro <= 100) { // nivel de conjuro divino 5
                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                      if (conj >= 1 && conj <= 4) {respuesta = respuesta + " " + conjurosDivinos5[0] + "; ";}
                                                                                                                                                                                                      else if (conj >= 5 && conj <= 8) {respuesta = respuesta + " " + conjurosDivinos5[1] + "; ";}
                                                                                                                                                                                                      else if (conj >= 9 && conj <= 10) {respuesta = respuesta + " " + conjurosDivinos5[2] + "; ";}
                                                                                                                                                                                                      else if (conj >= 10 && conj <= 8) {respuesta = respuesta + " " + conjurosDivinos5[3] + "; ";}
                                                                                                                                                                                                      else if (conj >= 11 && conj <= 12) {respuesta = respuesta + " " + conjurosDivinos5[4] + "; ";}
                                                                                                                                                                                                      else if (conj >= 13 && conj <= 15) {respuesta = respuesta + " " + conjurosDivinos5[5] + "; ";}
                                                                                                                                                                                                      else if (conj >= 16 && conj <= 18) {respuesta = respuesta + " " + conjurosDivinos5[6] + "; ";}
                                                                                                                                                                                                      else if (conj >= 19 && conj <= 21) {respuesta = respuesta + " " + conjurosDivinos5[7] + "; ";}
                                                                                                                                                                                                      else if (conj >= 22 && conj <= 27) {respuesta = respuesta + " " + conjurosDivinos5[8] + "; ";}
                                                                                                                                                                                                      else if (conj >= 28 && conj <= 29) {respuesta = respuesta + " " + conjurosDivinos5[9] + "; ";}
                                                                                                                                                                                                      else if (conj >= 30 && conj <= 32) {respuesta = respuesta + " " + conjurosDivinos5[10] + "; ";}
                                                                                                                                                                                                      else if (conj >= 33 && conj <= 35) {respuesta = respuesta + " " + conjurosDivinos5[11] + "; ";}
                                                                                                                                                                                                      else if (conj >= 36 && conj <= 39) {respuesta = respuesta + " " + conjurosDivinos5[12] + "; ";}
                                                                                                                                                                                                      else if (conj >= 40 && conj <= 34) {respuesta = respuesta + " " + conjurosDivinos5[13] + "; ";}
                                                                                                                                                                                                      else if (conj >= 41 && conj <= 42) {respuesta = respuesta + " " + conjurosDivinos5[14] + "; ";}
                                                                                                                                                                                                      else if (conj >= 43 && conj <= 44) {respuesta = respuesta + " " + conjurosDivinos5[15] + "; ";}
                                                                                                                                                                                                      else if (conj >= 45 && conj <= 47) {respuesta = respuesta + " " + conjurosDivinos5[16] + "; ";}
                                                                                                                                                                                                      else if (conj >= 48 && conj <= 50) {respuesta = respuesta + " " + conjurosDivinos5[17] + "; ";}
                                                                                                                                                                                                      else if (conj >= 51 && conj <= 52) {respuesta = respuesta + " " + conjurosDivinos5[18] + "; ";}
                                                                                                                                                                                                      else if (conj >= 52 && conj <= 54) {respuesta = respuesta + " " + conjurosDivinos5[19] + "; ";}
                                                                                                                                                                                                      else if (conj >= 55 && conj <= 57) {respuesta = respuesta + " " + conjurosDivinos5[20] + "; ";}
                                                                                                                                                                                                      else if (conj >= 58 && conj <= 60) {respuesta = respuesta + " " + conjurosDivinos5[21] + "; ";}
                                                                                                                                                                                                      else if (conj >= 61 && conj <= 62) {respuesta = respuesta + " " + conjurosDivinos5[22] + "; ";}
                                                                                                                                                                                                      else if (conj >= 63 && conj <= 65) {respuesta = respuesta + " " + conjurosDivinos5[23] + "; ";}
                                                                                                                                                                                                      else if (conj >= 66 && conj <= 68) {respuesta = respuesta + " " + conjurosDivinos5[24] + "; ";}
                                                                                                                                                                                                      else if (conj >= 69 && conj <= 71) {respuesta = respuesta + " " + conjurosDivinos5[25] + "; ";}
                                                                                                                                                                                                      else if (conj >= 72 && conj <= 74) {respuesta = respuesta + " " + conjurosDivinos5[26] + "; ";}
                                                                                                                                                                                                      else if (conj >= 75 && conj <= 77) {respuesta = respuesta + " " + conjurosDivinos5[27] + "; ";}
                                                                                                                                                                                                      else if (conj >= 78 && conj <= 79) {respuesta = respuesta + " " + conjurosDivinos5[28] + "; ";}
                                                                                                                                                                                                      else if (conj >= 80 && conj <= 83) {respuesta = respuesta + " " + conjurosDivinos5[29] + "; ";}
                                                                                                                                                                                                      else if (conj >= 84 && conj <= 85) {respuesta = respuesta + " " + conjurosDivinos5[30] + "; ";}
                                                                                                                                                                                                      else if (conj >= 86 && conj <= 74) {respuesta = respuesta + " " + conjurosDivinos5[31] + "; ";}
                                                                                                                                                                                                      else if (conj >= 87 && conj <= 76) {respuesta = respuesta + " " + conjurosDivinos5[32] + "; ";}
                                                                                                                                                                                                      else if (conj >= 88 && conj <= 90) {respuesta = respuesta + " " + conjurosDivinos5[33] + "; ";}
                                                                                                                                                                                                      else if (conj >= 91 && conj <= 93) {respuesta = respuesta + " " + conjurosDivinos5[34] + "; ";}
                                                                                                                                                                                                      else if (conj >= 94 && conj <= 96) {respuesta = respuesta + " " + conjurosDivinos5[35] + "; ";}
                                                                                                                                                                                                      else if (conj >= 97 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos5[36] + "; ";}
                                                                                                                                                                                                      }
                                                                                                                                                  bandera++;
                                                                                                                                                  } //while
                                                                                                                                                } //else if
                                                                                                      }
                                                            else if (segmento >= 66 && segmento <= 68){ //Bastones
                                                                                                      let randomBastones = tiroDeDados(1, 100);
                                                                                                      respuesta = respuesta +  " BASTÓN: ";
                                                                                                      if (randomBastones >= 1 && randomBastones <= 15) {respuesta = respuesta + " " + bastones[0] + "; ";}
                                                                                                      else if (randomBastones >= 16 && randomBastones <= 30) {respuesta = respuesta + " " + bastones[1] + "; ";}
                                                                                                      else if (randomBastones >= 31 && randomBastones <= 40) {respuesta = respuesta + " " + bastones[2] + "; ";}
                                                                                                      else if (randomBastones >= 41 && randomBastones <= 60) {respuesta = respuesta + " " + bastones[3] + "; ";}
                                                                                                      else if (randomBastones >= 61 && randomBastones <= 75) {respuesta = respuesta + " " + bastones[4] + "; ";}
                                                                                                      else if (randomBastones >= 76 && randomBastones <= 90) {respuesta = respuesta + " " + bastones[5] + "; ";}
                                                                                                      else if (randomBastones >= 91 && randomBastones <= 95) {respuesta = respuesta + " " + bastones[6] + "; ";}
                                                                                                      else if (randomBastones >= 96 && randomBastones <= 100) {respuesta = respuesta + " " + bastones[7] + "; ";}
                                                                                                      }
                                                            else if (segmento >= 69 && segmento <= 83){ //Varitas
                                                                                                      let segmVaritas = tiroDeDados(1, 100); //define el primer segmento de varitas
                                                                                                      respuesta = respuesta + " VARITA: ";
                                                                                                      if (segmVaritas >= 1 && segmVaritas <= 3) {respuesta = respuesta + " " + varitas[13] + "; ";} 
                                                                                                      else if (segmVaritas >= 4 && segmVaritas <= 7) {respuesta = respuesta + " " + varitas[14] + "; ";} 
                                                                                                      else if (segmVaritas >= 8 && segmVaritas <= 11) {respuesta = respuesta + " " + varitas[15] + "; ";} 
                                                                                                      else if (segmVaritas >= 12 && segmVaritas <= 15) {respuesta = respuesta + " " + varitas[16] + "; ";} 
                                                                                                      else if (segmVaritas >= 16 && segmVaritas <= 20) {respuesta = respuesta + " " + varitas[17] + "; ";} 
                                                                                                      else if (segmVaritas >= 21 && segmVaritas <= 22) {respuesta = respuesta + " " + varitas[18] + "; ";} 
                                                                                                      else if (segmVaritas >= 23 && segmVaritas <= 24) {respuesta = respuesta + " " + varitas[19] + "; ";} 
                                                                                                      else if (segmVaritas >= 25 && segmVaritas <= 27) {respuesta = respuesta + " " + varitas[20] + "; ";} 
                                                                                                      else if (segmVaritas >= 28 && segmVaritas <= 31) {respuesta = respuesta + " " + varitas[21] + "; ";} 
                                                                                                      else if (segmVaritas >= 32 && segmVaritas <= 33) {respuesta = respuesta + " " + varitas[22] + "; ";} 
                                                                                                      else if (segmVaritas >= 34 && segmVaritas <= 37) {respuesta = respuesta + " " + varitas[23] + "; ";} 
                                                                                                      else if (segmVaritas == 38) {respuesta = respuesta + " " + varitas[24] + "; ";} 
                                                                                                      else if (segmVaritas == 39) {respuesta = respuesta + " " + varitas[25] + "; ";} 
                                                                                                      else if (segmVaritas >= 40 && segmVaritas <= 42) {respuesta = respuesta + " " + varitas[26] + "; ";}
                                                                                                      else if (segmVaritas >= 43 && segmVaritas <= 44) {respuesta = respuesta + " " + varitas[27] + "; ";}
                                                                                                      else if (segmVaritas == 45) {respuesta = respuesta + " " + varitas[28] + "; ";}
                                                                                                      else if (segmVaritas >= 46 && segmVaritas <= 47) {respuesta = respuesta + " " + varitas[29] + "; ";}
                                                                                                      else if (segmVaritas >= 48 && segmVaritas <= 49) {respuesta = respuesta + " " + varitas[30] + "; ";}
                                                                                                      else if (segmVaritas >= 50 && segmVaritas <= 53) {respuesta = respuesta + " " + varitas[31] + "; ";}
                                                                                                      else if (segmVaritas == 54) {respuesta = respuesta + " " + varitas[32] + "; ";}
                                                                                                      else if (segmVaritas >= 55 && segmVaritas <= 56) {respuesta = respuesta + " " + varitas[33] + "; ";}
                                                                                                      else if (segmVaritas == 57) {respuesta = respuesta + " " + varitas[34] + "; ";}
                                                                                                      else if (segmVaritas >= 58 && segmVaritas <= 59) {respuesta = respuesta + " " + varitas[35] + "; ";}
                                                                                                      else if (segmVaritas >= 60 && segmVaritas <= 62) {respuesta = respuesta + " " + varitas[36] + "; ";}
                                                                                                      else if (segmVaritas >= 63 && segmVaritas <= 64) {respuesta = respuesta + " " + varitas[37] + "; ";}
                                                                                                      else if (segmVaritas >= 65 && segmVaritas <= 67) {respuesta = respuesta + " " + varitas[38] + "; ";}
                                                                                                      else if (segmVaritas == 68) {respuesta = respuesta + " " + varitas[39] + "; ";}
                                                                                                      else if (segmVaritas >= 69 && segmVaritas <= 70) {respuesta = respuesta + " " + varitas[40] + "; ";}
                                                                                                      else if (segmVaritas >= 71 && segmVaritas <= 74) {respuesta = respuesta + " " + varitas[41] + "; ";}
                                                                                                      else if (segmVaritas >= 75 && segmVaritas <= 77) {respuesta = respuesta + " " + varitas[42] + "; ";}
                                                                                                      else if (segmVaritas >= 78 && segmVaritas <= 81) {respuesta = respuesta + " " + varitas[43] + "; ";}
                                                                                                      else if (segmVaritas >= 82 && segmVaritas <= 83) {respuesta = respuesta + " " + varitas[44] + "; ";}
                                                                                                      else if (segmVaritas >= 84 && segmVaritas <= 87) {respuesta = respuesta + " " + varitas[45] + "; ";}
                                                                                                      else if (segmVaritas >= 88 && segmVaritas <= 89) {respuesta = respuesta + " " + varitas[46] + "; ";}
                                                                                                      else if (segmVaritas >= 90 && segmVaritas <= 91) {respuesta = respuesta + " " + varitas[47] + "; ";}
                                                                                                      else if (segmVaritas >= 92 && segmVaritas <= 94) {respuesta = respuesta + " " + varitas[48] + "; ";}
                                                                                                      else if (segmVaritas >= 95 && segmVaritas <= 97) {respuesta = respuesta + " " + varitas[49] + "; ";}
                                                                                                      else if (segmVaritas == 98) {respuesta = respuesta + " " + varitas[50] + "; ";}
                                                                                                      else if (segmVaritas == 99) {respuesta = respuesta + " " + varitas[51] + "; ";}
                                                                                                      else if (segmVaritas == 100) {respuesta = respuesta + " " + varitas[52] + "; ";}
                                                                                                      }
                                                            else if (segmento >= 84 && segmento <= 100) { //Objeto Maravilloso
                                                                                                        let objetoElegido = Math.floor((Math.random() * 100));
                                                                                                        respuesta = respuesta + " OBJ. MARAV. INTER: " + objMaravInter[objetoElegido] + "; ";
                                                                                                        }
                                                            banderafunction++;
                                                            }
                                  return respuesta;
                                  }
                                  
function mayor(dados, lados){
                                  let cantidad = tiroDeDados(dados, lados); // cantidad de premios a recibir
                                  let respuesta = " ";
                                  let banderafunction = 0; //sirve para llevar un conteo del ciclo while
                                  while(banderafunction < cantidad) {
                                                            let segmento = tiroDeDados(1, 100); // define el primer segmento

                                                            if (segmento >= 1 && segmento <= 10){ //Armas y Escudos
                                                                                                respuesta = respuesta + " ARMAS Y ESCUDOS: ";
                                                                                                for(j=0; j<1; j++){
                                                                                                                  let menorRandom = tiroDeDados(1, 100);
                                                                                                                  if (menorRandom >= 1 && menorRandom <= 8)  {respuesta = respuesta + " Escudo+3; ";}
                                                                                                                  else if (menorRandom >= 9 && menorRandom <= 16) {respuesta = respuesta + " Armadura+3; ";}
                                                                                                                  else if (menorRandom >= 17 && menorRandom <= 27) {respuesta = respuesta + " Escudo+4; ";}
                                                                                                                  else if (menorRandom >= 28 && menorRandom <= 38) {respuesta = respuesta + " Armadura+4; ";}
                                                                                                                  else if (menorRandom >= 39 && menorRandom <= 49) {respuesta = respuesta + " Escudo+5; ";}
                                                                                                                  else if (menorRandom >= 50 && menorRandom <= 57) {respuesta = respuesta + " Armadura+5; ";}
                                                                                                                  else if (menorRandom >= 58 && menorRandom <= 60) {respuesta = respuesta + " Armadura específica; ";}
                                                                                                                  else if (menorRandom >= 61 && menorRandom <= 63) {respuesta = respuesta + " Escudo específico; ";}
                                                                                                                  else if (menorRandom >= 64 && menorRandom <= 100) {respuesta = respuesta + " Aptitud especial; "; j--;} //se vuelve a tirar
                                                                                                                  }
                                                                                                }
                                                            else if (segmento >= 11 && segmento <= 20){ //Armas
                                                                                                      respuesta = respuesta + "ARMAS: ";
                                                                                                      for(j=0; j<1; j++){
                                                                                                        let menorRandom = tiroDeDados(1, 100);
                                                                                                        if (menorRandom >= 1 && menorRandom <= 20)  {respuesta = respuesta + " Arma+3; ";}
                                                                                                        else if (menorRandom >= 21 && menorRandom <= 38) {respuesta = respuesta + " Arma+4; ";}
                                                                                                        else if (menorRandom >= 39 && menorRandom <= 49) {respuesta = respuesta + " Arma+5; ";}
                                                                                                        else if (menorRandom >= 50 && menorRandom <= 63) {respuesta = respuesta + " Arma Específica; ";}
                                                                                                        else if (menorRandom >= 64 && menorRandom <= 100) {respuesta = respuesta + " Aptitud especial; "; j--;} //se vuelve a tirar
                                                                                                                        }
                                                                                                      }
                                                            else if (segmento >= 21 && segmento <= 25){ //Pociones
                                                                                                      respuesta = respuesta + " POCIÓN O ACEITE: ";
                                                                                                      let menorRandom = tiroDeDados(1, 100);
                                                                                                      if (menorRandom >= 1 && menorRandom <= 2) {respuesta = respuesta + " " + pocionesYAceites[21] + "; ";}
                                                                                                      else if (menorRandom >= 3 && menorRandom <= 7) {respuesta = respuesta + " " + pocionesYAceites[24] + "; ";}
                                                                                                      else if (menorRandom >= 8 && menorRandom <= 9) {respuesta = respuesta + " " + pocionesYAceites[26] + "; ";}
                                                                                                      else if (menorRandom >= 10 && menorRandom <= 11) {respuesta = respuesta + " " + pocionesYAceites[30] + "; ";}
                                                                                                      else if (menorRandom == 12) {respuesta = respuesta + " " + pocionesYAceites[31] + "; ";}
                                                                                                      else if (menorRandom == 13) {respuesta = respuesta + " " + pocionesYAceites[36] + "; ";}
                                                                                                      else if (menorRandom == 14) {respuesta = respuesta + " " + pocionesYAceites[38] + "; ";}
                                                                                                      else if (menorRandom == 15) {respuesta = respuesta + " " + pocionesYAceites[40] + "; ";}
                                                                                                      else if (menorRandom == 16) {respuesta = respuesta + " " + pocionesYAceites[41] + "; ";}
                                                                                                      else if (menorRandom >= 17 && menorRandom <= 18) {respuesta = respuesta + " " + pocionesYAceites[42] + "; ";}
                                                                                                      else if (menorRandom >= 19 && menorRandom <= 20) {respuesta = respuesta + " " + pocionesYAceites[43] + "; ";}
                                                                                                      else if (menorRandom >= 21 && menorRandom <= 28) {respuesta = respuesta + " " + pocionesYAceites[44] + "; ";}
                                                                                                      else if (menorRandom == 29) {respuesta = respuesta + " " + pocionesYAceites[45] + "; ";}
                                                                                                      else if (menorRandom >= 30 && menorRandom <= 32) {respuesta = respuesta + " " + pocionesYAceites[46] + "; ";}
                                                                                                      else if (menorRandom == 33) {respuesta = respuesta + " " + pocionesYAceites[47] + "; ";}
                                                                                                      else if (menorRandom >= 34 && menorRandom <= 38) {respuesta = respuesta + " " + pocionesYAceites[48] + "; ";}
                                                                                                      else if (menorRandom == 39) {respuesta = respuesta + " " + pocionesYAceites[49] + "; ";}
                                                                                                      else if (menorRandom >= 40 && menorRandom <= 41) { respuesta = respuesta + " " + pocionesYAceites[52] + "; ";}
                                                                                                      else if (menorRandom >= 42 && menorRandom <= 44) {respuesta = respuesta + " " + pocionesYAceites[53] + "; ";}
                                                                                                      else if (menorRandom >= 45 && menorRandom <= 46) {respuesta = respuesta + " " + pocionesYAceites[54] + "; ";}
                                                                                                      else if (menorRandom == 47) {respuesta = respuesta + " " + pocionesYAceites[55] + "; ";}
                                                                                                      else if (menorRandom >= 48 && menorRandom <= 50) {respuesta = respuesta + " " + pocionesYAceites[56] + "; ";}
                                                                                                      else if (menorRandom >= 51 && menorRandom <= 52) {respuesta = respuesta + " " + pocionesYAceites[57] + "; ";}
                                                                                                      else if (menorRandom >= 53 && menorRandom <= 54) {respuesta = respuesta + " " + pocionesYAceites[58] + "; ";}
                                                                                                      else if (menorRandom == 55) {respuesta = respuesta + " " + pocionesYAceites[59] + "; ";}
                                                                                                      else if (menorRandom == 56) { respuesta = respuesta + " " + pocionesYAceites[60] + "; ";}
                                                                                                      else if (menorRandom == 57) {respuesta = respuesta + " " + pocionesYAceites[61] + "; ";}
                                                                                                      else if (menorRandom == 58) {respuesta = respuesta + " " + pocionesYAceites[62] + "; ";}
                                                                                                      else if (menorRandom == 59) {respuesta = respuesta + " " + pocionesYAceites[63] + "; ";}
                                                                                                      else if (menorRandom == 60) {respuesta = respuesta + " " + pocionesYAceites[64] + "; ";}
                                                                                                      else if (menorRandom == 61) {respuesta = respuesta + " " + pocionesYAceites[65] + "; ";}
                                                                                                      else if (menorRandom >= 62 && menorRandom <= 63) {respuesta = respuesta + " " + pocionesYAceites[66] + "; ";}
                                                                                                      else if (menorRandom == 64) {respuesta = respuesta + " " + pocionesYAceites[67] + "; ";}
                                                                                                      else if (menorRandom == 65) {respuesta = respuesta + " " + pocionesYAceites[68] + "; ";}
                                                                                                      else if (menorRandom >= 66 && menorRandom <= 68) {respuesta = respuesta + " " + pocionesYAceites[69] + "; ";}
                                                                                                      else if (menorRandom == 69) {respuesta = respuesta + " " + pocionesYAceites[70] + "; ";}
                                                                                                      else if (menorRandom >= 70 && menorRandom <= 73) {respuesta = respuesta + " " + pocionesYAceites[71] + "; ";}
                                                                                                      else if (menorRandom >= 74 && menorRandom <= 77) {respuesta = respuesta + " " + pocionesYAceites[72] + "; ";}
                                                                                                      else if (menorRandom >= 78 && menorRandom <= 81) {respuesta = respuesta + " " + pocionesYAceites[73] + "; ";}
                                                                                                      else if (menorRandom == 82) {respuesta = respuesta + " " + pocionesYAceites[74] + "; ";}
                                                                                                      else if (menorRandom >= 83 && menorRandom <= 85) {respuesta = respuesta + " " + pocionesYAceites[75] + "; ";}
                                                                                                      else if (menorRandom >= 86 && menorRandom <= 88) {respuesta = respuesta + " " + pocionesYAceites[76] + "; ";}
                                                                                                      else if (menorRandom >= 89 && menorRandom <= 91) {respuesta = respuesta + " " + pocionesYAceites[77] + "; ";}
                                                                                                      else if (menorRandom >= 92 && menorRandom <= 93) {respuesta = respuesta + " " + pocionesYAceites[78] + "; ";}
                                                                                                      else if (menorRandom >= 94 && menorRandom <= 95) {respuesta = respuesta + " " + pocionesYAceites[79] + "; ";}
                                                                                                      else if (menorRandom >= 96 && menorRandom <= 97) {respuesta = respuesta + " " + pocionesYAceites[80] + "; ";}
                                                                                                      else if (menorRandom == 98) {respuesta = respuesta + " " + pocionesYAceites[81] + "; ";}
                                                                                                      else if (menorRandom == 99) {respuesta = respuesta + " " + pocionesYAceites[82] + "; ";}
                                                                                                      else if (menorRandom == 100) {respuesta = respuesta + " " + pocionesYAceites[83] + "; ";}
                                                                                                      }
                                                            else if (segmento >= 26 && segmento <= 35){ //Anillos
                                                                                                      respuesta = respuesta + " ANILLO: ";
                                                                                                      let menorRandom = tiroDeDados(1, 100);
                                                                                                      if (menorRandom >= 1 && menorRandom <= 2) {respuesta = respuesta + anillos[15] + "; ";}
                                                                                                      else if (menorRandom == 3) {respuesta = respuesta + anillos[16] + "; ";}
                                                                                                      else if (menorRandom == 4) {respuesta = respuesta + anillos[17] + "; ";}
                                                                                                      else if (menorRandom >= 5 && menorRandom <= 7) {respuesta = respuesta + anillos[18] + "; ";}
                                                                                                      else if (menorRandom >= 8 && menorRandom <= 10) {respuesta = respuesta + anillos[19] + "; ";}
                                                                                                      else if (menorRandom >= 11 && menorRandom <= 15) {respuesta = respuesta + anillos[20] + "; ";}
                                                                                                      else if (menorRandom >= 16 && menorRandom <= 19) {respuesta = respuesta + anillos[21] + "; ";}
                                                                                                      else if (menorRandom >= 20 && menorRandom <= 25) {respuesta = respuesta + anillos[22] + "; ";}
                                                                                                      else if (menorRandom >= 26 && menorRandom <= 28) {respuesta = respuesta + anillos[23] + "; ";}
                                                                                                      else if (menorRandom >= 29 && menorRandom <= 32) {respuesta = respuesta + anillos[24] + "; ";}
                                                                                                      else if (menorRandom >= 33 && menorRandom <= 39) {respuesta = respuesta + anillos[25] + "; ";}
                                                                                                      else if (menorRandom >= 40 && menorRandom <= 49) {respuesta = respuesta + anillos[26] + "; ";}
                                                                                                      else if (menorRandom >= 50 && menorRandom <= 55) {respuesta = respuesta + anillos[27] + "; ";}
                                                                                                      else if (menorRandom >= 56 && menorRandom <= 60) {respuesta = respuesta + anillos[28] + "; ";}
                                                                                                      else if (menorRandom >= 61 && menorRandom <= 63) {respuesta = respuesta + anillos[29] + "; ";}
                                                                                                      else if (menorRandom >= 64 && menorRandom <= 65) {respuesta = respuesta + anillos[30] + "; ";}
                                                                                                      else if (menorRandom >= 66 && menorRandom <= 70) {respuesta = respuesta + anillos[31] + "; ";}
                                                                                                      else if (menorRandom >= 71 && menorRandom <= 74) {respuesta = respuesta + anillos[32] + "; ";}
                                                                                                      else if (menorRandom >= 75 && menorRandom <= 79) {respuesta = respuesta + anillos[33] + "; ";}
                                                                                                      else if (menorRandom >= 80 && menorRandom <= 83) {respuesta = respuesta + anillos[34] + "; ";}
                                                                                                      else if (menorRandom >= 84 && menorRandom <= 86) {respuesta = respuesta + anillos[35] + "; ";}
                                                                                                      else if (menorRandom >= 87 && menorRandom <= 88) {respuesta = respuesta + anillos[36] + "; ";}
                                                                                                      else if (menorRandom == 89) {respuesta = respuesta + anillos[37] + "; ";}
                                                                                                      else if (menorRandom >= 90 && menorRandom <= 92) {respuesta = respuesta + anillos[38] + "; ";}
                                                                                                      else if (menorRandom >= 93 && menorRandom <= 94) {respuesta = respuesta + anillos[39] + "; ";}
                                                                                                      else if (menorRandom == 95) {respuesta = respuesta + anillos[40] + "; ";}
                                                                                                      else if (menorRandom == 96) {respuesta = respuesta + anillos[41] + "; ";}
                                                                                                      else if (menorRandom == 97) {respuesta = respuesta + anillos[42] + "; ";}
                                                                                                      else if (menorRandom == 98) {respuesta = respuesta + anillos[43] + "; ";}
                                                                                                      else if (menorRandom == 99) {respuesta = respuesta + anillos[44] + "; ";}
                                                                                                      else if (menorRandom == 100) {respuesta = respuesta + anillos[45] + "; ";}
                                                                                                      }
                                                            else if (segmento >= 36 && segmento <= 45){ //Cetros
                                                                                                      respuesta = respuesta + " CETRO: ";
                                                                                                      let cetrosRandom = tiroDeDados(1, 100);
                                                                                                      if (cetrosRandom >= 1 && cetrosRandom <= 4) {respuesta = respuesta + " " + cetros[6] + "; ";}
                                                                                                      else if (cetrosRandom >= 5 && cetrosRandom <= 6) {respuesta = respuesta + " " + cetros[7] + "; ";}
                                                                                                      else if (cetrosRandom >= 7 && cetrosRandom <= 8) {respuesta = respuesta + " " + cetros[8] + "; ";}
                                                                                                      else if (cetrosRandom >= 9 && cetrosRandom <= 10) {respuesta = respuesta + " " + cetros[9] + "; ";}
                                                                                                      else if (cetrosRandom >= 11 && cetrosRandom <= 14) {respuesta = respuesta + " " + cetros[10] + "; ";}
                                                                                                      else if (cetrosRandom >= 15 && cetrosRandom <= 18) {respuesta = respuesta + " " + cetros[11] + "; ";}
                                                                                                      else if (cetrosRandom >= 19 && cetrosRandom <= 21) {respuesta = respuesta + " " + cetros[13] + "; ";}
                                                                                                      else if (cetrosRandom >= 22 && cetrosRandom <= 25) {respuesta = respuesta + " " + cetros[14] + "; ";}
                                                                                                      else if (cetrosRandom >= 26 && cetrosRandom <= 30) {respuesta = respuesta + " " + cetros[15] + "; ";}
                                                                                                      else if (cetrosRandom >= 31 && cetrosRandom <= 36) {respuesta = respuesta + " " + cetros[16] + "; ";}
                                                                                                      else if (cetrosRandom >= 37 && cetrosRandom <= 42) {respuesta = respuesta + " " + cetros[17] + "; ";}
                                                                                                      else if (cetrosRandom >= 43 && cetrosRandom <= 48) {respuesta = respuesta + " " + cetros[18] + "; ";}
                                                                                                      else if (cetrosRandom >= 49 && cetrosRandom <= 53) {respuesta = respuesta + " " + cetros[19] + "; ";}
                                                                                                      else if (cetrosRandom >= 54 && cetrosRandom <= 58) {respuesta = respuesta + " " + cetros[20] + "; ";}
                                                                                                      else if (cetrosRandom >= 59 && cetrosRandom <= 64) {respuesta = respuesta + " " + cetros[21] + "; ";}
                                                                                                      else if (cetrosRandom >= 65 && cetrosRandom <= 69) {respuesta = respuesta + " " + cetros[22] + "; ";}
                                                                                                      else if (cetrosRandom >= 70 && cetrosRandom <= 73) {respuesta = respuesta + " " + cetros[23] + "; ";}
                                                                                                      else if (cetrosRandom >= 74 && cetrosRandom <= 77) {respuesta = respuesta + " " + cetros[24] + "; ";}
                                                                                                      else if (cetrosRandom >= 78 && cetrosRandom <= 80) {respuesta = respuesta + " " + cetros[25] + "; ";}
                                                                                                      else if (cetrosRandom >= 81 && cetrosRandom <= 84) {respuesta = respuesta + " " + cetros[26] + "; ";}
                                                                                                      else if (cetrosRandom >= 85 && cetrosRandom <= 86) {respuesta = respuesta + " " + cetros[27] + "; ";}
                                                                                                      else if (cetrosRandom >= 87 && cetrosRandom <= 88) {respuesta = respuesta + " " + cetros[28] + "; ";}
                                                                                                      else if (cetrosRandom >= 89 && cetrosRandom <= 90) {respuesta = respuesta + " " + cetros[29] + "; ";}
                                                                                                      else if (cetrosRandom >= 91 && cetrosRandom <= 92) {respuesta = respuesta + " " + cetros[30] + "; ";}
                                                                                                      else if (cetrosRandom >= 93 && cetrosRandom <= 94) {respuesta = respuesta + " " + cetros[31] + "; ";}
                                                                                                      else if (cetrosRandom >= 95 && cetrosRandom <= 96) {respuesta = respuesta + " " + cetros[32] + "; ";}
                                                                                                      else if (cetrosRandom >= 97 && cetrosRandom <= 98) {respuesta = respuesta + " " + cetros[33] + "; ";}
                                                                                                      else if (cetrosRandom == 99) {respuesta = respuesta + " " + cetros[34] + "; ";}
                                                                                                      else if (cetrosRandom == 100) {respuesta = respuesta + " " + cetros[35] + "; ";}
                                                                                                      }
                                                            else if (segmento >= 46 && segmento <= 55){ //Rollos
                                                                                                      let segRollo = tiroDeDados(1, 100); //se decide si va a ser arcano o divino
                                                                                                      let cantidadRollo = tiroDeDados(1, 6); //cantidad de conjuros a recibir
                                                                                                      let bandera = 0;
                                                                                                      if (segRollo >= 1 && segRollo <= 70){ // conjuros arcanos
                                                                                                        respuesta = respuesta + " CONJ. ARCANO: ";
                                                                                                        while(bandera < cantidadRollo)  { //entregamos el numero de conjuros
                                                                                                                                        let nivelConjuro = tiroDeDados(1, 100); //nivel del conjuro al que puede acceder
                                                                                                                                          if (nivelConjuro >= 1 && nivelConjuro <= 5) { //nivel de conjuro arcano 4
                                                                                                                                                                                    let conj = tiroDeDados(1, 100);
                                                                                                                                                                                    if (conj >= 1 && conj <= 2) {respuesta = respuesta + " " + conjurosArcanos4[0] + "; ";}
                                                                                                                                                                                    else if (conj >= 3 && conj <= 4) {respuesta = respuesta + " " + conjurosArcanos4[1] + "; ";}
                                                                                                                                                                                    else if (conj >= 5 && conj <= 7) {respuesta = respuesta + " " + conjurosArcanos4[2] + "; ";}
                                                                                                                                                                                    else if (conj >= 8 && conj <= 9) {respuesta = respuesta + " " + conjurosArcanos4[3] + "; ";}
                                                                                                                                                                                    else if (conj >= 10 && conj <= 11) {respuesta = respuesta + " " + conjurosArcanos4[4] + "; "; }
                                                                                                                                                                                    else if (conj >= 12 && conj <= 13) {respuesta = respuesta + " " + conjurosArcanos4[5] + "; ";}
                                                                                                                                                                                    else if (conj >= 14 && conj <= 16) {respuesta = respuesta + " " + conjurosArcanos4[6] + "; ";}
                                                                                                                                                                                    else if (conj >= 17 && conj <= 18) {respuesta = respuesta + " " + conjurosArcanos4[7] + "; ";}
                                                                                                                                                                                    else if (conj >= 19 && conj <= 20) {respuesta = respuesta + " " + conjurosArcanos4[8] + "; ";}
                                                                                                                                                                                    else if (conj >= 21 && conj <= 22) {respuesta = respuesta + " " + conjurosArcanos4[9] + "; ";}
                                                                                                                                                                                    else if (conj >= 23 && conj <= 24) {respuesta = respuesta + " " + conjurosArcanos4[10] + "; ";}
                                                                                                                                                                                    else if (conj == 25) {respuesta = respuesta + " " + conjurosArcanos4[11] + "; ";}
                                                                                                                                                                                    else if (conj >= 26 && conj <= 27) {respuesta = respuesta + " " + conjurosArcanos4[12] + "; ";}
                                                                                                                                                                                    else if (conj == 28) {respuesta = respuesta + " " + conjurosArcanos4[13] + "; ";}
                                                                                                                                                                                    else if (conj >= 29 && conj <= 30) {respuesta = respuesta + " " + conjurosArcanos4[14] + "; ";}
                                                                                                                                                                                    else if (conj >= 31 && conj <= 33) {respuesta = respuesta + " " + conjurosArcanos4[15] + "; ";}
                                                                                                                                                                                    else if (conj >= 34 && conj <= 35) {respuesta = respuesta + " " + conjurosArcanos4[16] + "; ";}
                                                                                                                                                                                    else if (conj >= 36 && conj <= 37) {respuesta = respuesta + " " + conjurosArcanos4[17] + "; ";}
                                                                                                                                                                                    else if (conj == 38) {respuesta = respuesta + " " + conjurosArcanos4[18] + "; ";}
                                                                                                                                                                                    else if (conj >= 39 && conj <= 41) {respuesta = respuesta + " " + conjurosArcanos4[19] + "; ";}
                                                                                                                                                                                    else if (conj == 42) {respuesta = respuesta + " " + conjurosArcanos4[20] + "; ";}
                                                                                                                                                                                    else if (conj >= 43 && conj <= 45) {respuesta = respuesta + " " + conjurosArcanos4[21] + "; ";}
                                                                                                                                                                                    else if (conj >= 46 && conj <= 48) {respuesta = respuesta + " " + conjurosArcanos4[22] + "; ";}
                                                                                                                                                                                    else if (conj >= 49 && conj <= 50) {respuesta = respuesta + " " + conjurosArcanos4[23] + "; ";}
                                                                                                                                                                                    else if (conj >= 51 && conj <= 53) {respuesta = respuesta + " " + conjurosArcanos4[24] + "; ";}
                                                                                                                                                                                    else if (conj == 54) {respuesta = respuesta + " " + conjurosArcanos4[25] + "; ";}
                                                                                                                                                                                    else if (conj >= 55 && conj <= 56)    {respuesta = respuesta + " " + conjurosArcanos4[26] + "; ";}
                                                                                                                                                                                    else if (conj == 57)  {respuesta = respuesta + " " + conjurosArcanos4[27] + "; ";}
                                                                                                                                                                                    else if (conj == 58) {respuesta = respuesta + " " + conjurosArcanos4[28] + "; "; }
                                                                                                                                                                                    else if (conj >= 59 && conj <= 61) {respuesta = respuesta + " " + conjurosArcanos4[29] + "; ";}
                                                                                                                                                                                    else if (conj >= 62 && conj <= 64) {respuesta = respuesta + " " + conjurosArcanos4[30] + "; ";}
                                                                                                                                                                                    else if (conj >= 65 && conj <= 66) {respuesta = respuesta + " " + conjurosArcanos4[31] + "; ";}
                                                                                                                                                                                    else if (conj == 67) {respuesta = respuesta + " " + conjurosArcanos4[32] + "; ";}
                                                                                                                                                                                    else if (conj >= 68 && conj <= 70) {respuesta = respuesta + " " + conjurosArcanos4[33] + "; ";}
                                                                                                                                                                                    else if (conj >= 71 && conj <= 73) {respuesta = respuesta + " " + conjurosArcanos4[34] + "; ";}
                                                                                                                                                                                    else if (conj >= 74 && conj <= 75) {respuesta = respuesta + " " + conjurosArcanos4[35] + "; ";}
                                                                                                                                                                                    else if (conj >= 76 && conj <= 77) {respuesta = respuesta + " " + conjurosArcanos4[36] + "; ";}
                                                                                                                                                                                    else if (conj >= 78 && conj <= 81) {respuesta = respuesta + " " + conjurosArcanos4[37] + "; ";}
                                                                                                                                                                                    else if (conj >= 82 && conj <= 83) {respuesta = respuesta + " " + conjurosArcanos4[38] + "; ";}
                                                                                                                                                                                    else if (conj >= 84 && conj <= 85)  {respuesta = respuesta + " " + conjurosArcanos4[39] + "; ";}
                                                                                                                                                                                    else if (conj == 86) {respuesta = respuesta + " " + conjurosArcanos4[40] + "; ";}
                                                                                                                                                                                    else if (conj >= 87 && conj <= 89) {respuesta = respuesta + " " + conjurosArcanos4[41] + "; ";}
                                                                                                                                                                                    else if (conj >= 90 && conj <= 91) {respuesta = respuesta + " " + conjurosArcanos4[42] + "; ";}
                                                                                                                                                                                    else if (conj >= 92 && conj <= 93) {respuesta = respuesta + " " + conjurosArcanos4[43] + "; ";}
                                                                                                                                                                                    else if (conj >= 94 && conj <= 95) {respuesta = respuesta + " " + conjurosArcanos4[44] + "; ";}
                                                                                                                                                                                    else if (conj >= 96 && conj <= 97) {respuesta = respuesta + " " + conjurosArcanos4[45] + "; ";}
                                                                                                                                                                                    else if (conj >= 98 && conj <= 99)  {respuesta = respuesta + " " + conjurosArcanos4[46] + "; ";}
                                                                                                                                                                                    else if (conj == 100) {respuesta = respuesta + " " + conjurosArcanos4[47] + "; ";}
                                                                                                                                                                                      }                
                                                                                                                                          else if (nivelConjuro >= 6 && nivelConjuro <= 50)   { //nivel de conjuro arcano 5
                                                                                                                                                                                              let conj = tiroDeDados(1, 100);
                                                                                                                                                                                              if (conj >= 1 && conj <= 2) {respuesta = respuesta + " " + conjurosArcanos5[0] + "; ";}
                                                                                                                                                                                              else if (conj >= 3 && conj <= 4) {respuesta = respuesta + " " + conjurosArcanos5[1] + "; ";}
                                                                                                                                                                                              else if (conj == 5) {respuesta = respuesta + " " + conjurosArcanos5[2] + "; ";}
                                                                                                                                                                                              else if (conj == 6) {respuesta = respuesta + " " + conjurosArcanos5[3] + "; ";}
                                                                                                                                                                                              else if (conj >= 7 && conj <= 9) {respuesta = respuesta + " " + conjurosArcanos5[4] + "; ";}
                                                                                                                                                                                              else if (conj >= 10 && conj <= 11) {respuesta = respuesta + " " + conjurosArcanos5[5] + "; ";}
                                                                                                                                                                                              else if (conj >= 12 && conj <= 13) {respuesta = respuesta + " " + conjurosArcanos5[6] + "; ";}
                                                                                                                                                                                              else if (conj >= 14 && conj <= 15) {respuesta = respuesta + " " + conjurosArcanos5[7] + "; ";}
                                                                                                                                                                                              else if (conj >= 16 && conj <= 17) {respuesta = respuesta + " " + conjurosArcanos5[8] + "; ";}
                                                                                                                                                                                              else if (conj == 18) {respuesta = respuesta + " " + conjurosArcanos5[9] + "; ";}
                                                                                                                                                                                              else if (conj >= 19 && conj <= 20) {respuesta = respuesta + " " + conjurosArcanos5[10] + "; ";}
                                                                                                                                                                                              else if (conj >= 21 && conj <= 23) {respuesta = respuesta + " " + conjurosArcanos5[11] + "; ";}
                                                                                                                                                                                              else if (conj >= 24 && conj <= 25) {respuesta = respuesta + " " + conjurosArcanos5[12] + "; ";}
                                                                                                                                                                                              else if (conj >= 26 && conj <= 27) {respuesta = respuesta + " " + conjurosArcanos5[13] + "; ";}
                                                                                                                                                                                              else if (conj >= 28 && conj <= 29) {respuesta = respuesta + " " + conjurosArcanos5[14] + "; ";}
                                                                                                                                                                                              else if (conj >= 30 && conj <= 31) {respuesta = respuesta + " " + conjurosArcanos5[15] + "; ";}
                                                                                                                                                                                              else if (conj >= 32 && conj <= 34) {respuesta = respuesta + " " + conjurosArcanos5[16] + "; ";}
                                                                                                                                                                                              else if (conj >= 35 && conj <= 36) {respuesta = respuesta + " " + conjurosArcanos5[17] + "; ";}
                                                                                                                                                                                              else if (conj >= 37 && conj <= 40) {respuesta = respuesta + " " + conjurosArcanos5[18] + "; ";}
                                                                                                                                                                                              else if (conj >= 41 && conj <= 42) {respuesta = respuesta + " " + conjurosArcanos5[19] + "; ";}
                                                                                                                                                                                              else if (conj >= 43 && conj <= 44) {respuesta = respuesta + " " + conjurosArcanos5[20] + "; ";}
                                                                                                                                                                                              else if (conj >= 45 && conj <= 46) {respuesta = respuesta + " " + conjurosArcanos5[21] + "; ";}
                                                                                                                                                                                              else if (conj == 47) {respuesta = respuesta + " " + conjurosArcanos5[22] + "; ";}
                                                                                                                                                                                              else if (conj >= 48 && conj <= 50) {respuesta = respuesta + " " + conjurosArcanos5[23] + "; ";}
                                                                                                                                                                                              else if (conj >= 51 && conj <= 53) {respuesta = respuesta + " " + conjurosArcanos5[24] + "; ";}
                                                                                                                                                                                              else if (conj >= 54 && conj <= 55) {respuesta = respuesta + " " + conjurosArcanos5[25] + "; ";}
                                                                                                                                                                                              else if (conj >= 56 && conj <= 57) {respuesta = respuesta + " " + conjurosArcanos5[26] + "; ";}
                                                                                                                                                                                              else if (conj >= 58 && conj <= 59) {respuesta = respuesta + " " + conjurosArcanos5[27] + "; ";}
                                                                                                                                                                                              else if (conj >= 60 && conj <= 61) {respuesta = respuesta + " " + conjurosArcanos5[28] + "; ";}
                                                                                                                                                                                              else if (conj >= 62 && conj <= 64) {respuesta = respuesta + " " + conjurosArcanos5[29] + "; ";}
                                                                                                                                                                                              else if (conj == 65) {respuesta = respuesta + " " + conjurosArcanos5[30] + "; ";}
                                                                                                                                                                                              else if (conj >= 66 && conj <= 67) {respuesta = respuesta + " " + conjurosArcanos5[31] + "; ";}
                                                                                                                                                                                              else if (conj >= 68 && conj <= 70) {respuesta = respuesta + " " + conjurosArcanos5[32] + "; ";}
                                                                                                                                                                                              else if (conj >= 71 && conj <= 73) {respuesta = respuesta + " " + conjurosArcanos5[33] + "; ";}
                                                                                                                                                                                              else if (conj >= 74 && conj <= 75) {respuesta = respuesta + " " + conjurosArcanos5[34] + "; ";}
                                                                                                                                                                                              else if (conj == 76) {respuesta = respuesta + " " + conjurosArcanos5[35] + "; ";}
                                                                                                                                                                                              else if (conj == 77) {respuesta = respuesta + " " + conjurosArcanos5[36] + "; ";}
                                                                                                                                                                                              else if (conj >= 78 && conj <= 79) {respuesta = respuesta + " " + conjurosArcanos5[37] + "; ";}
                                                                                                                                                                                              else if (conj >= 80 && conj <= 82) {respuesta = respuesta + " " + conjurosArcanos5[38] + "; ";}
                                                                                                                                                                                              else if (conj >= 83 && conj <= 87) {respuesta = respuesta + " " + conjurosArcanos5[39] + "; ";}
                                                                                                                                                                                              else if (conj >= 88 && conj <= 89) {respuesta = respuesta + " " + conjurosArcanos5[40] + "; ";}
                                                                                                                                                                                              else if (conj == 90) {respuesta = respuesta + " " + conjurosArcanos5[41] + "; ";}
                                                                                                                                                                                              else if (conj >= 91 && conj <= 92) {respuesta = respuesta + " " + conjurosArcanos5[42] + "; ";}
                                                                                                                                                                                              else if (conj >= 93 && conj <= 94) {respuesta = respuesta + " " + conjurosArcanos5[43] + "; ";}
                                                                                                                                                                                              else if (conj >= 95 && conj <= 96) {respuesta = respuesta + " " + conjurosArcanos5[44] + "; ";}
                                                                                                                                                                                              else if (conj >= 97 && conj <= 100) {respuesta = respuesta + " " + conjurosArcanos5[45] + "; ";}
                                                                                                                                                                                              }
                                                                                                                                          else if (nivelConjuro >= 51 && nivelConjuro <= 70)  { //nivel de conjuro arcano 6
                                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                                      if (conj >= 1 && conj <= 3) {respuesta = respuesta + " " + conjurosArcanos6[0] + "; ";}
                                                                                                                                                                                                                      else if (conj == 4) {respuesta = respuesta + " " + conjurosArcanos6[1] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 5 && conj <= 7) {respuesta = respuesta + " " + conjurosArcanos6[2] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 8 && conj <= 9) {respuesta = respuesta + " " + conjurosArcanos6[3] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 10 && conj <= 12) {respuesta = respuesta + " " + conjurosArcanos6[4] + "; "; }
                                                                                                                                                                                                                      else if (conj >= 13 && conj <= 15) {respuesta = respuesta + " " + conjurosArcanos6[5] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 16 && conj <= 17) {respuesta = respuesta + " " + conjurosArcanos6[6] + "; ";}
                                                                                                                                                                                                                      else if (conj == 18) {respuesta = respuesta + " " + conjurosArcanos6[7] + "; ";}
                                                                                                                                                                                                                      else if (conj == 19) {respuesta = respuesta + " " + conjurosArcanos6[8] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 20 && conj <= 21) {respuesta = respuesta + " " + conjurosArcanos6[9] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 22 && conj <= 23) {respuesta = respuesta + " " + conjurosArcanos6[10] + "; ";}
                                                                                                                                                                                                                      else if (conj == 24) {respuesta = respuesta + " " + conjurosArcanos6[11] + "; ";}
                                                                                                                                                                                                                      else if (conj == 25) {respuesta = respuesta + " " + conjurosArcanos6[12] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 26 && conj <= 27) {respuesta = respuesta + " " + conjurosArcanos6[13] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 28 && conj <= 29) {respuesta = respuesta + " " + conjurosArcanos6[14] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 30 && conj <= 32) {respuesta = respuesta + " " + conjurosArcanos6[15] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 33 && conj <= 35) {respuesta = respuesta + " " + conjurosArcanos6[16] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 36 && conj <= 39) {respuesta = respuesta + " " + conjurosArcanos6[17] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 40 && conj <= 41) {respuesta = respuesta + " " + conjurosArcanos6[18] + "; ";}
                                                                                                                                                                                                                      else if (conj == 42) {respuesta = respuesta + " " + conjurosArcanos6[19] + "; ";}
                                                                                                                                                                                                                      else if (conj == 43) {respuesta = respuesta + " " + conjurosArcanos6[20] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 44 && conj <= 45) {respuesta = respuesta + " " + conjurosArcanos6[21] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 46 && conj <= 48) {respuesta = respuesta + " " + conjurosArcanos6[22] + "; ";}
                                                                                                                                                                                                                      else if (conj == 49) {respuesta = respuesta + " " + conjurosArcanos6[23] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 50 && conj <= 52) {respuesta = respuesta + " " + conjurosArcanos6[24] + "; ";}
                                                                                                                                                                                                                      else if (conj == 53) {respuesta = respuesta + " " + conjurosArcanos6[25] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 55 && conj <= 56)    {respuesta = respuesta + " " + conjurosArcanos6[26] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 57 && conj <= 59)  {respuesta = respuesta + " " + conjurosArcanos6[27] + "; ";}
                                                                                                                                                                                                                      else if (conj == 60) {respuesta = respuesta + " " + conjurosArcanos6[28] + "; "; }
                                                                                                                                                                                                                      else if (conj >= 61 && conj <= 62) {respuesta = respuesta + " " + conjurosArcanos6[29] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 63 && conj <= 64) {respuesta = respuesta + " " + conjurosArcanos6[30] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 65 && conj <= 66) {respuesta = respuesta + " " + conjurosArcanos6[31] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 67 && conj <= 68) {respuesta = respuesta + " " + conjurosArcanos6[32] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 69 && conj <= 70) {respuesta = respuesta + " " + conjurosArcanos6[33] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 71 && conj <= 72) {respuesta = respuesta + " " + conjurosArcanos6[34] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 73 && conj <= 75) {respuesta = respuesta + " " + conjurosArcanos6[35] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 76 && conj <= 77) {respuesta = respuesta + " " + conjurosArcanos6[36] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 78 && conj <= 80) {respuesta = respuesta + " " + conjurosArcanos6[37] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 81 && conj <= 82) {respuesta = respuesta + " " + conjurosArcanos6[38] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 83 && conj <= 85)  {respuesta = respuesta + " " + conjurosArcanos6[39] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 86 && conj <= 88) {respuesta = respuesta + " " + conjurosArcanos6[40] + "; ";}
                                                                                                                                                                                                                      else if (conj == 89) {respuesta = respuesta + " " + conjurosArcanos6[41] + "; ";}
                                                                                                                                                                                                                      else if (conj == 90) {respuesta = respuesta + " " + conjurosArcanos6[42] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 91 && conj <= 92) {respuesta = respuesta + " " + conjurosArcanos6[43] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 93 && conj <= 94) {respuesta = respuesta + " " + conjurosArcanos6[44] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 95 && conj <= 96) {respuesta = respuesta + " " + conjurosArcanos6[45] + "; ";}
                                                                                                                                                                                                                      else if (conj == 97)  {respuesta = respuesta + " " + conjurosArcanos6[46] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 98 && conj <= 100) {respuesta = respuesta + " " + conjurosArcanos6[47] + "; ";}
                                                                                                                                                                                              }
                                                                                                                                          else if (nivelConjuro >= 71 && nivelConjuro <= 85){ //nivel de conjuro arcano 7
                                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                                      if (conj >= 1 && conj <= 3) {respuesta = respuesta + " " + conjurosArcanos7[0] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 4 && conj <= 6) {respuesta = respuesta + " " + conjurosArcanos7[1] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 7 && conj <= 9) {respuesta = respuesta + " " + conjurosArcanos7[2] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 10 && conj <= 12) {respuesta = respuesta + " " + conjurosArcanos7[3] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 13 && conj <= 14) {respuesta = respuesta + " " + conjurosArcanos7[4] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 15 && conj <= 17) {respuesta = respuesta + " " + conjurosArcanos7[5] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 18 && conj <= 20) {respuesta = respuesta + " " + conjurosArcanos7[6] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 21 && conj <= 23) {respuesta = respuesta + " " + conjurosArcanos7[7] + "; ";}
                                                                                                                                                                                                                      else if (conj == 24) {respuesta = respuesta + " " + conjurosArcanos7[8] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 25 && conj <= 27) {respuesta = respuesta + " " + conjurosArcanos7[9] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 28 && conj <= 31) {respuesta = respuesta + " " + conjurosArcanos7[10] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 32 && conj <= 34) {respuesta = respuesta + " " + conjurosArcanos7[11] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 35 && conj <= 37) {respuesta = respuesta + " " + conjurosArcanos7[12] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 38 && conj <= 39) {respuesta = respuesta + " " + conjurosArcanos7[13] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 40 && conj <= 43) {respuesta = respuesta + " " + conjurosArcanos7[14] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 44 && conj <= 47) {respuesta = respuesta + " " + conjurosArcanos7[15] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 48 && conj <= 50) {respuesta = respuesta + " " + conjurosArcanos7[16] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 51 && conj <= 54) {respuesta = respuesta + " " + conjurosArcanos7[17] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 55 && conj <= 57) {respuesta = respuesta + " " + conjurosArcanos7[18] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 58 && conj <= 59) {respuesta = respuesta + " " + conjurosArcanos7[19] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 60 && conj <= 62) {respuesta = respuesta + " " + conjurosArcanos7[20] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 63 && conj <= 65) {respuesta = respuesta + " " + conjurosArcanos7[21] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 66 && conj <= 68) {respuesta = respuesta + " " + conjurosArcanos7[22] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 69 && conj <= 71) {respuesta = respuesta + " " + conjurosArcanos7[23] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 72 && conj <= 74) {respuesta = respuesta + " " + conjurosArcanos7[24] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 75 && conj <= 77) {respuesta = respuesta + " " + conjurosArcanos7[25] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 78 && conj <= 80) {respuesta = respuesta + " " + conjurosArcanos7[26] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 81 && conj <= 84) {respuesta = respuesta + " " + conjurosArcanos7[27] + "; ";}
                                                                                                                                                                                                                      else if (conj == 85) {respuesta = respuesta + " " + conjurosArcanos7[28] + "; ";}
                                                                                                                                                                                                                      else if (conj == 86) {respuesta = respuesta + " " + conjurosArcanos7[29] + "; ";}
                                                                                                                                                                                                                      else if (conj == 87) {respuesta = respuesta + " " + conjurosArcanos7[30] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 88 && conj <= 92) {respuesta = respuesta + " " + conjurosArcanos7[31] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 93 && conj <= 95) {respuesta = respuesta + " " + conjurosArcanos7[32] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 96 && conj <= 97) {respuesta = respuesta + " " + conjurosArcanos7[33] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 98 && conj <= 100) {respuesta = respuesta + " " + conjurosArcanos7[34] + "; ";}
                                                                                                                                                                                            }
                                                                                                                                          else if (nivelConjuro >= 86 && nivelConjuro <= 95){ //nivel de conjuro arcano 8
                                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                                      if (conj >= 1 && conj <= 3) {respuesta = respuesta + " " + conjurosArcanos8[0] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 4 && conj <= 5) {respuesta = respuesta + " " + conjurosArcanos8[1] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 6 && conj <= 8) {respuesta = respuesta + " " + conjurosArcanos8[2] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 9 && conj <= 11) {respuesta = respuesta + " " + conjurosArcanos8[3] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 12 && conj <= 14) {respuesta = respuesta + " " + conjurosArcanos8[4] + "; ";}
                                                                                                                                                                                                                      else if (conj == 15) {respuesta = respuesta + " " + conjurosArcanos8[5] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 16 && conj <= 18) {respuesta = respuesta + " " + conjurosArcanos8[6] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 19 && conj <= 21) {respuesta = respuesta + " " + conjurosArcanos8[7] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 22 && conj <= 24) {respuesta = respuesta + " " + conjurosArcanos8[8] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 25 && conj <= 28) {respuesta = respuesta + " " + conjurosArcanos8[9] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 29 && conj <= 32) {respuesta = respuesta + " " + conjurosArcanos8[10] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 33 && conj <= 36) {respuesta = respuesta + " " + conjurosArcanos8[11] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 37 && conj <= 39) {respuesta = respuesta + " " + conjurosArcanos8[12] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 40 && conj <= 42) {respuesta = respuesta + " " + conjurosArcanos8[13] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 43 && conj <= 45) {respuesta = respuesta + " " + conjurosArcanos8[14] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 46 && conj <= 49) {respuesta = respuesta + " " + conjurosArcanos8[15] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 50 && conj <= 52) {respuesta = respuesta + " " + conjurosArcanos8[16] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 53 && conj <= 55) {respuesta = respuesta + " " + conjurosArcanos8[17] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 56 && conj <= 58) {respuesta = respuesta + " " + conjurosArcanos8[18] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 59 && conj <= 61) {respuesta = respuesta + " " + conjurosArcanos8[19] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 62 && conj <= 64) {respuesta = respuesta + " " + conjurosArcanos8[20] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 65 && conj <= 67) {respuesta = respuesta + " " + conjurosArcanos8[21] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 68 && conj <= 70) {respuesta = respuesta + " " + conjurosArcanos8[22] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 71 && conj <= 73) {respuesta = respuesta + " " + conjurosArcanos8[23] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 74 && conj <= 76) {respuesta = respuesta + " " + conjurosArcanos8[24] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 77 && conj <= 79) {respuesta = respuesta + " " + conjurosArcanos8[25] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 80 && conj <= 81) {respuesta = respuesta + " " + conjurosArcanos8[26] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 82 && conj <= 84) {respuesta = respuesta + " " + conjurosArcanos8[27] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 85 && conj <= 87) {respuesta = respuesta + " " + conjurosArcanos8[28] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 88 && conj <= 90) {respuesta = respuesta + " " + conjurosArcanos8[29] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 91 && conj <= 93) {respuesta = respuesta + " " + conjurosArcanos8[30] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 94 && conj <= 96) {respuesta = respuesta + " " + conjurosArcanos8[31] + "; ";}
                                                                                                                                                                                                                      else if (conj == 97) {respuesta = respuesta + " " + conjurosArcanos8[32] + "; ";}
                                                                                                                                                                                                                      else if (conj == 98) {respuesta = respuesta + " " + conjurosArcanos8[33] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 99 && conj <= 100) {respuesta = respuesta + " " + conjurosArcanos8[34] + "; ";}
                                                                                                                                                                                            }
                                                                                                                                          else if (nivelConjuro >= 96 && nivelConjuro <= 100) { //nivel de conjuro arcano 9
                                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                                      if (conj >= 1 && conj <= 6) {respuesta = respuesta + " " + conjurosArcanos9[0] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 7 && conj <= 10) {respuesta = respuesta + " " + conjurosArcanos9[1] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 11 && conj <= 13) {respuesta = respuesta + " " + conjurosArcanos9[2] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 14 && conj <= 17) {respuesta = respuesta + " " + conjurosArcanos9[3] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 18 && conj <= 21) {respuesta = respuesta + " " + conjurosArcanos9[4] + "; ";}
                                                                                                                                                                                                                      else if (conj == 22) {respuesta = respuesta + " " + conjurosArcanos9[5] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 23 && conj <= 26) {respuesta = respuesta + " " + conjurosArcanos9[6] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 27 && conj <= 31) {respuesta = respuesta + " " + conjurosArcanos9[7] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 32 && conj <= 35) {respuesta = respuesta + " " + conjurosArcanos9[8] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 36 && conj <= 40) {respuesta = respuesta + " " + conjurosArcanos9[9] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 41 && conj <= 44) {respuesta = respuesta + " " + conjurosArcanos9[10] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 45 && conj <= 48) {respuesta = respuesta + " " + conjurosArcanos9[11] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 49 && conj <= 54) {respuesta = respuesta + " " + conjurosArcanos9[12] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 55 && conj <= 57) {respuesta = respuesta + " " + conjurosArcanos9[13] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 58 && conj <= 61) {respuesta = respuesta + " " + conjurosArcanos9[14] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 62 && conj <= 65) {respuesta = respuesta + " " + conjurosArcanos9[15] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 66 && conj <= 70) {respuesta = respuesta + " " + conjurosArcanos9[16] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 71 && conj <= 75) {respuesta = respuesta + " " + conjurosArcanos9[17] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 76 && conj <= 79) {respuesta = respuesta + " " + conjurosArcanos9[18] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 80 && conj <= 82) {respuesta = respuesta + " " + conjurosArcanos9[19] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 83 && conj <= 86) {respuesta = respuesta + " " + conjurosArcanos9[20] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 87 && conj <= 91) {respuesta = respuesta + " " + conjurosArcanos9[21] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 92 && conj <= 96) {respuesta = respuesta + " " + conjurosArcanos9[22] + "; ";}
                                                                                                                                                                                                                      else if (conj >= 97 && conj <= 100) {respuesta = respuesta + " " + conjurosArcanos9[23] + "; ";}
                                                                                                                                                                                              }
                                                                                                                                          bandera++;
                                                                                                                                        } //while
                                                                                                                                          } //if

                                                                                                      else if (segRollo >= 71 && segRollo <= 100) { // conjuros divinos 
                                                                                                              respuesta = respuesta +  " CONJ. DIVINO: ";
                                                                                                              while(bandera < cantidadRollo)  {
                                                                                                                let nivelConjuro = tiroDeDados(1, 100); //nivel del conjuro al que puede acceder
                                                                                                                                                  if (nivelConjuro >= 1 && nivelConjuro <= 5) { // nivel de conjuro divino 4
                                                                                                                                                                                              let conj = tiroDeDados(1, 100);
                                                                                                                                                                                              if (conj >= 1 && conj <= 2) {respuesta = respuesta + " " + conjurosDivinos4[0] + "; ";}
                                                                                                                                                                                              else if (conj >= 3 && conj <= 4) {respuesta = respuesta + " " + conjurosDivinos4[1] + "; ";}
                                                                                                                                                                                              else if (conj >= 5 && conj <= 9) {respuesta = respuesta + " " + conjurosDivinos4[2] + "; ";}
                                                                                                                                                                                              else if (conj >= 10 && conj <= 12) {respuesta = respuesta + " " + conjurosDivinos4[3] + "; ";}
                                                                                                                                                                                              else if (conj >= 13 && conj <= 14) {respuesta = respuesta + " " + conjurosDivinos4[4] + "; ";}
                                                                                                                                                                                              else if (conj >= 15 && conj <= 16) {respuesta = respuesta + " " + conjurosDivinos4[5] + "; ";}
                                                                                                                                                                                              else if (conj >= 17 && conj <= 21) {respuesta = respuesta + " " + conjurosDivinos4[6] + "; ";}
                                                                                                                                                                                              else if (conj >= 22 && conj <= 23) {respuesta = respuesta + " " + conjurosDivinos4[7] + "; ";}
                                                                                                                                                                                              else if (conj >= 24 && conj <= 25) {respuesta = respuesta + " " + conjurosDivinos4[8] + "; ";}
                                                                                                                                                                                              else if (conj >= 26 && conj <= 27) {respuesta = respuesta + " " + conjurosDivinos4[9] + "; ";}
                                                                                                                                                                                              else if (conj >= 28 && conj <= 30) {respuesta = respuesta + " " + conjurosDivinos4[10] + "; ";}
                                                                                                                                                                                              else if (conj >= 31 && conj <= 33) {respuesta = respuesta + " " + conjurosDivinos4[11] + "; ";}
                                                                                                                                                                                              else if (conj >= 34 && conj <= 39) {respuesta = respuesta + " " + conjurosDivinos4[12] + "; ";}
                                                                                                                                                                                              else if (conj >= 40 && conj <= 44) {respuesta = respuesta + " " + conjurosDivinos4[13] + "; ";}
                                                                                                                                                                                              else if (conj >= 45 && conj <= 47) {respuesta = respuesta + " " + conjurosDivinos4[14] + "; ";}
                                                                                                                                                                                              else if (conj >= 48 && conj <= 52) {respuesta = respuesta + " " + conjurosDivinos4[15] + "; ";}
                                                                                                                                                                                              else if (conj >= 53 && conj <= 54) {respuesta = respuesta + " " + conjurosDivinos4[16] + "; ";}
                                                                                                                                                                                              else if (conj >= 55 && conj <= 57) {respuesta = respuesta + " " + conjurosDivinos4[17] + "; ";}
                                                                                                                                                                                              else if (conj >= 58 && conj <= 60) {respuesta = respuesta + " " + conjurosDivinos4[18] + "; ";}
                                                                                                                                                                                              else if (conj >= 61 && conj <= 63) {respuesta = respuesta + " " + conjurosDivinos4[19] + "; ";}
                                                                                                                                                                                              else if (conj >= 64 && conj <= 65) {respuesta = respuesta + " " + conjurosDivinos4[20] + "; ";}
                                                                                                                                                                                              else if (conj >= 66 && conj <= 69) {respuesta = respuesta + " " + conjurosDivinos4[21] + "; ";}
                                                                                                                                                                                              else if (conj >= 70 && conj <= 74) {respuesta = respuesta + " " + conjurosDivinos4[22] + "; ";}
                                                                                                                                                                                              else if (conj >= 75 && conj <= 76) {respuesta = respuesta + " " + conjurosDivinos4[23] + "; ";}
                                                                                                                                                                                              else if (conj >= 77 && conj <= 79) {respuesta = respuesta + " " + conjurosDivinos4[24] + "; ";}
                                                                                                                                                                                              else if (conj >= 80 && conj <= 82) {respuesta = respuesta + " " + conjurosDivinos4[25] + "; ";}
                                                                                                                                                                                              else if (conj >= 83 && conj <= 84) {respuesta = respuesta + " " + conjurosDivinos4[26] + "; ";}
                                                                                                                                                                                              else if (conj >= 85 && conj <= 86) {respuesta = respuesta + " " + conjurosDivinos4[27] + "; ";}
                                                                                                                                                                                              else if (conj >= 87 && conj <= 91) {respuesta = respuesta + " " + conjurosDivinos4[28] + "; ";}
                                                                                                                                                                                              else if (conj >= 92 && conj <= 93) {respuesta = respuesta + " " + conjurosDivinos4[29] + "; ";}
                                                                                                                                                                                              else if (conj >= 94 && conj <= 95) {respuesta = respuesta + " " + conjurosDivinos4[30] + "; ";}
                                                                                                                                                                                              else if (conj >= 96 && conj <= 98) {respuesta = respuesta + " " + conjurosDivinos4[31] + "; ";}
                                                                                                                                                                                              else if (conj >= 99 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos4[32] + "; ";}
                                                                                                                                                                                              }
                                                                                                                                                  else if (nivelConjuro >= 6 && nivelConjuro <= 50)   { // nivel de conjuro divino 5
                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                      if (conj >= 1 && conj <= 4) {respuesta = respuesta + " " + conjurosDivinos5[0] + "; ";}
                                                                                                                                                                                                      else if (conj >= 5 && conj <= 8) {respuesta = respuesta + " " + conjurosDivinos5[1] + "; ";}
                                                                                                                                                                                                      else if (conj >= 9 && conj <= 6) {respuesta = respuesta + " " + conjurosDivinos5[2] + "; ";}
                                                                                                                                                                                                      else if (conj >= 10 && conj <= 8) {respuesta = respuesta + " " + conjurosDivinos5[3] + "; ";}
                                                                                                                                                                                                      else if (conj >= 11 && conj <= 12) {respuesta = respuesta + " " + conjurosDivinos5[4] + "; ";}
                                                                                                                                                                                                      else if (conj >= 13 && conj <= 15) {respuesta = respuesta + " " + conjurosDivinos5[5] + "; ";}
                                                                                                                                                                                                      else if (conj >= 16 && conj <= 18) {respuesta = respuesta + " " + conjurosDivinos5[6] + "; ";}
                                                                                                                                                                                                      else if (conj >= 19 && conj <= 21) {respuesta = respuesta + " " + conjurosDivinos5[7] + "; ";}
                                                                                                                                                                                                      else if (conj >= 22 && conj <= 27) {respuesta = respuesta + " " + conjurosDivinos5[8] + "; ";}
                                                                                                                                                                                                      else if (conj >= 28 && conj <= 29) {respuesta = respuesta + " " + conjurosDivinos5[9] + "; ";}
                                                                                                                                                                                                      else if (conj >= 30 && conj <= 32) {respuesta = respuesta + " " + conjurosDivinos5[10] + "; ";}
                                                                                                                                                                                                      else if (conj >= 33 && conj <= 35) {respuesta = respuesta + " " + conjurosDivinos5[11] + "; ";}
                                                                                                                                                                                                      else if (conj >= 36 && conj <= 39) {respuesta = respuesta + " " + conjurosDivinos5[12] + "; ";}
                                                                                                                                                                                                      else if (conj >= 40 && conj <= 34) {respuesta = respuesta + " " + conjurosDivinos5[13] + "; ";}
                                                                                                                                                                                                      else if (conj >= 41 && conj <= 42) {respuesta = respuesta + " " + conjurosDivinos5[14] + "; ";}
                                                                                                                                                                                                      else if (conj >= 43 && conj <= 44) {respuesta = respuesta + " " + conjurosDivinos5[15] + "; ";}
                                                                                                                                                                                                      else if (conj >= 45 && conj <= 47) {respuesta = respuesta + " " + conjurosDivinos5[16] + "; ";}
                                                                                                                                                                                                      else if (conj >= 48 && conj <= 50) {respuesta = respuesta + " " + conjurosDivinos5[17] + "; ";}
                                                                                                                                                                                                      else if (conj >= 51 && conj <= 45) {respuesta = respuesta + " " + conjurosDivinos5[18] + "; ";}
                                                                                                                                                                                                      else if (conj >= 52 && conj <= 54) {respuesta = respuesta + " " + conjurosDivinos5[19] + "; ";}
                                                                                                                                                                                                      else if (conj >= 55 && conj <= 57) {respuesta = respuesta + " " + conjurosDivinos5[20] + "; ";}
                                                                                                                                                                                                      else if (conj >= 58 && conj <= 60) {respuesta = respuesta + " " + conjurosDivinos5[21] + "; ";}
                                                                                                                                                                                                      else if (conj >= 61 && conj <= 62) {respuesta = respuesta + " " + conjurosDivinos5[22] + "; ";}
                                                                                                                                                                                                      else if (conj >= 63 && conj <= 65) {respuesta = respuesta + " " + conjurosDivinos5[23] + "; ";}
                                                                                                                                                                                                      else if (conj >= 57 && conj <= 58) {respuesta = respuesta + " " + conjurosDivinos5[24] + "; ";}
                                                                                                                                                                                                      else if (conj >= 59 && conj <= 60) {respuesta = respuesta + " " + conjurosDivinos5[25] + "; ";}
                                                                                                                                                                                                      else if (conj >= 61 && conj <= 62) {respuesta = respuesta + " " + conjurosDivinos5[26] + "; ";}
                                                                                                                                                                                                      else if (conj >= 63 && conj <= 65) {respuesta = respuesta + " " + conjurosDivinos5[27] + "; ";}
                                                                                                                                                                                                      else if (conj >= 66 && conj <= 68) {respuesta = respuesta + " " + conjurosDivinos5[28] + "; ";}
                                                                                                                                                                                                      else if (conj >= 69 && conj <= 71) {respuesta = respuesta + " " + conjurosDivinos5[29] + "; ";}
                                                                                                                                                                                                      else if (conj >= 72 && conj <= 74) {respuesta = respuesta + " " + conjurosDivinos5[30] + "; ";}
                                                                                                                                                                                                      else if (conj >= 75 && conj <= 77) {respuesta = respuesta + " " + conjurosDivinos5[31] + "; ";}
                                                                                                                                                                                                      else if (conj >= 78 && conj <= 79) {respuesta = respuesta + " " + conjurosDivinos5[32] + "; ";}
                                                                                                                                                                                                      else if (conj >= 80 && conj <= 83) {respuesta = respuesta + " " + conjurosDivinos5[33] + "; ";}
                                                                                                                                                                                                      else if (conj >= 84 && conj <= 85) {respuesta = respuesta + " " + conjurosDivinos5[34] + "; ";}
                                                                                                                                                                                                      else if (conj >= 86 && conj <= 83) {respuesta = respuesta + " " + conjurosDivinos5[35] + "; ";}
                                                                                                                                                                                                      else if (conj >= 87 && conj <= 85) {respuesta = respuesta + " " + conjurosDivinos5[36] + "; ";}
                                                                                                                                                                                                      else if (conj >= 88 && conj <= 90) {respuesta = respuesta + " " + conjurosDivinos5[37] + "; ";}
                                                                                                                                                                                                      else if (conj >= 91 && conj <= 93) {respuesta = respuesta + " " + conjurosDivinos5[38] + "; ";}
                                                                                                                                                                                                      else if (conj >= 94 && conj <= 96) {respuesta = respuesta + " " + conjurosDivinos5[39] + "; ";}
                                                                                                                                                                                                      else if (conj >= 97 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos5[40] + "; ";}
                                                                                                                                                                                                      }
                                                                                                                                                  else if (nivelConjuro >= 51 && nivelConjuro <= 70)  { // nivel de conjuro divino 6
                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                      if (conj >= 1 && conj <= 2) {respuesta = respuesta + " " + conjurosDivinos6[0] + "; ";}
                                                                                                                                                                                                      else if (conj >= 3 && conj <= 5) {respuesta = respuesta + " " + conjurosDivinos6[1] + "; ";}
                                                                                                                                                                                                      else if (conj >= 6 && conj <= 8) {respuesta = respuesta + " " + conjurosDivinos6[3] + "; ";}
                                                                                                                                                                                                      else if (conj >= 9 && conj <= 11) {respuesta = respuesta + " " + conjurosDivinos6[4] + "; ";}
                                                                                                                                                                                                      else if (conj >= 12 && conj <= 14) {respuesta = respuesta + " " + conjurosDivinos6[5] + "; ";}
                                                                                                                                                                                                      else if (conj >= 15 && conj <= 17) {respuesta = respuesta + " " + conjurosDivinos6[6] + "; ";}
                                                                                                                                                                                                      else if (conj >= 18 && conj <= 20) {respuesta = respuesta + " " + conjurosDivinos6[7] + "; ";}
                                                                                                                                                                                                      else if (conj >= 21 && conj <= 23) {respuesta = respuesta + " " + conjurosDivinos6[8] + "; ";}
                                                                                                                                                                                                      else if (conj == 24) {respuesta = respuesta + " " + conjurosDivinos6[9] + "; ";}
                                                                                                                                                                                                      else if (conj >= 25 && conj <= 28) {respuesta = respuesta + " " + conjurosDivinos6[10] + "; ";}
                                                                                                                                                                                                      else if (conj >= 29 && conj <= 31) {respuesta = respuesta + " " + conjurosDivinos6[11] + "; ";}
                                                                                                                                                                                                      else if (conj >= 32 && conj <= 34) {respuesta = respuesta + " " + conjurosDivinos6[12] + "; ";}
                                                                                                                                                                                                      else if (conj >= 35 && conj <= 37) {respuesta = respuesta + " " + conjurosDivinos6[13] + "; ";}
                                                                                                                                                                                                      else if (conj >= 38 && conj <= 41) {respuesta = respuesta + " " + conjurosDivinos6[14] + "; ";}
                                                                                                                                                                                                      else if (conj >= 42 && conj <= 44) {respuesta = respuesta + " " + conjurosDivinos6[15] + "; ";}
                                                                                                                                                                                                      else if (conj >= 45 && conj <= 48) {respuesta = respuesta + " " + conjurosDivinos6[16] + "; ";}
                                                                                                                                                                                                      else if (conj >= 49 && conj <= 51) {respuesta = respuesta + " " + conjurosDivinos6[17] + "; ";}
                                                                                                                                                                                                      else if (conj >= 52 && conj <= 55) {respuesta = respuesta + " " + conjurosDivinos6[18] + "; ";}
                                                                                                                                                                                                      else if (conj == 56) {respuesta = respuesta + " " + conjurosDivinos6[19] + "; ";}
                                                                                                                                                                                                      else if (conj == 57) {respuesta = respuesta + " " + conjurosDivinos6[20] + "; ";}
                                                                                                                                                                                                      else if (conj >= 58 && conj <= 61) {respuesta = respuesta + " " + conjurosDivinos6[21] + "; ";}
                                                                                                                                                                                                      else if (conj >= 62 && conj <= 64) {respuesta = respuesta + " " + conjurosDivinos6[22] + "; ";}
                                                                                                                                                                                                      else if (conj == 65) {respuesta = respuesta + " " + conjurosDivinos6[23] + "; ";}
                                                                                                                                                                                                      else if (conj >= 66 && conj <= 68) {respuesta = respuesta + " " + conjurosDivinos6[24] + "; ";}
                                                                                                                                                                                                      else if (conj >= 69 && conj <= 71) {respuesta = respuesta + " " + conjurosDivinos6[25] + "; ";}
                                                                                                                                                                                                      else if (conj >= 72 && conj <= 74) {respuesta = respuesta + " " + conjurosDivinos6[26] + "; ";}
                                                                                                                                                                                                      else if (conj >= 75 && conj <= 77) {respuesta = respuesta + " " + conjurosDivinos6[27] + "; ";}
                                                                                                                                                                                                      else if (conj >= 78 && conj <= 80) {respuesta = respuesta + " " + conjurosDivinos6[28] + "; ";}
                                                                                                                                                                                                      else if (conj >= 81 && conj <= 84) {respuesta = respuesta + " " + conjurosDivinos6[29] + "; ";}
                                                                                                                                                                                                      else if (conj == 85) {respuesta = respuesta + " " + conjurosDivinos6[30] + "; ";}
                                                                                                                                                                                                      else if (conj >= 86 && conj <= 89) {respuesta = respuesta + " " + conjurosDivinos6[31] + "; ";}
                                                                                                                                                                                                      else if (conj >= 90 && conj <= 92) {respuesta = respuesta + " " + conjurosDivinos6[32] + "; ";}
                                                                                                                                                                                                      else if (conj >= 93 && conj <= 95) {respuesta = respuesta + " " + conjurosDivinos6[33] + "; ";}
                                                                                                                                                                                                      else if (conj == 96) {respuesta = respuesta + " " + conjurosDivinos6[34] + "; ";}
                                                                                                                                                                                                      else if (conj == 97) {respuesta = respuesta + " " + conjurosDivinos6[35] + "; ";}
                                                                                                                                                                                                      else if (conj >= 98 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos6[36] + "; ";}
                                                                                                                                                                                                      }
                                                                                                                                                  else if (nivelConjuro >= 71 && nivelConjuro <= 85)  { // nivel de conjuro divino 7
                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                      if (conj >= 1 && conj <= 5) {respuesta = respuesta + " " + conjurosDivinos7[0] + "; ";}
                                                                                                                                                                                                      else if (conj >= 6 && conj <= 10) {respuesta = respuesta + " " + conjurosDivinos7[1] + "; ";}
                                                                                                                                                                                                      else if (conj >= 11 && conj <= 14) {respuesta = respuesta + " " + conjurosDivinos7[2] + "; ";}
                                                                                                                                                                                                      else if (conj >= 15 && conj <= 16) {respuesta = respuesta + " " + conjurosDivinos7[3] + "; ";}
                                                                                                                                                                                                      else if (conj >= 17 && conj <= 20) {respuesta = respuesta + " " + conjurosDivinos7[4] + "; ";}
                                                                                                                                                                                                      else if (conj >= 21 && conj <= 25) {respuesta = respuesta + " " + conjurosDivinos7[5] + "; ";}
                                                                                                                                                                                                      else if (conj >= 26 && conj <= 31) {respuesta = respuesta + " " + conjurosDivinos7[6] + "; ";}
                                                                                                                                                                                                      else if (conj >= 32 && conj <= 36) {respuesta = respuesta + " " + conjurosDivinos7[7] + "; ";}
                                                                                                                                                                                                      else if (conj >= 37 && conj <= 41) {respuesta = respuesta + " " + conjurosDivinos7[8] + "; ";}
                                                                                                                                                                                                      else if (conj >= 42 && conj <= 46) {respuesta = respuesta + " " + conjurosDivinos7[9] + "; ";}
                                                                                                                                                                                                      else if (conj >= 47 && conj <= 51) {respuesta = respuesta + " " + conjurosDivinos7[10] + "; ";}
                                                                                                                                                                                                      else if (conj >= 51 && conj <= 56) {respuesta = respuesta + " " + conjurosDivinos7[11] + "; ";}
                                                                                                                                                                                                      else if (conj >= 57 && conj <= 60) {respuesta = respuesta + " " + conjurosDivinos7[12] + "; ";}
                                                                                                                                                                                                      else if (conj >= 61 && conj <= 63) {respuesta = respuesta + " " + conjurosDivinos7[13] + "; ";}
                                                                                                                                                                                                      else if (conj >= 64 && conj <= 67) {respuesta = respuesta + " " + conjurosDivinos7[14] + "; ";}
                                                                                                                                                                                                      else if (conj >= 68 && conj <= 72) {respuesta = respuesta + " " + conjurosDivinos7[15] + "; ";}
                                                                                                                                                                                                      else if (conj >= 73 && conj <= 77) {respuesta = respuesta + " " + conjurosDivinos7[16] + "; ";}
                                                                                                                                                                                                      else if (conj >= 78 && conj <= 82) {respuesta = respuesta + " " + conjurosDivinos7[17] + "; ";}
                                                                                                                                                                                                      else if (conj >= 83 && conj <= 87) {respuesta = respuesta + " " + conjurosDivinos7[18] + "; ";}
                                                                                                                                                                                                      else if (conj >= 88 && conj <= 91) {respuesta = respuesta + " " + conjurosDivinos7[19] + "; ";}
                                                                                                                                                                                                      else if (conj >= 92 && conj <= 93) {respuesta = respuesta + " " + conjurosDivinos7[20] + "; ";}
                                                                                                                                                                                                      else if (conj == 94) {respuesta = respuesta + " " + conjurosDivinos7[21] + "; ";}
                                                                                                                                                                                                      else if (conj == 95) {respuesta = respuesta + " " + conjurosDivinos7[22] + "; ";}
                                                                                                                                                                                                      else if (conj >= 96 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos7[23] + "; ";}
                                                                                                                                                                                                      }
                                                                                                                                                  else if (nivelConjuro >= 86 && nivelConjuro <= 95)  { // nivel de conjuro divino 8
                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                      if (conj >= 1 && conj <= 4) {respuesta = respuesta + " " + conjurosDivinos8[0] + "; ";}
                                                                                                                                                                                                      else if (conj >= 5 && conj <= 7) {respuesta = respuesta + " " + conjurosDivinos8[1] + "; ";}
                                                                                                                                                                                                      else if (conj >= 8 && conj <= 10) {respuesta = respuesta + " " + conjurosDivinos8[2] + "; ";}
                                                                                                                                                                                                      else if (conj >= 11 && conj <= 16) {respuesta = respuesta + " " + conjurosDivinos8[3] + "; ";}
                                                                                                                                                                                                      else if (conj >= 17 && conj <= 19) {respuesta = respuesta + " " + conjurosDivinos8[4] + "; ";}
                                                                                                                                                                                                      else if (conj >= 20 && conj <= 24) {respuesta = respuesta + " " + conjurosDivinos8[5] + "; ";}
                                                                                                                                                                                                      else if (conj >= 25 && conj <= 28) {respuesta = respuesta + " " + conjurosDivinos8[6] + "; ";}
                                                                                                                                                                                                      else if (conj >= 29 && conj <= 32) {respuesta = respuesta + " " + conjurosDivinos8[7] + "; ";}
                                                                                                                                                                                                      else if (conj >= 33 && conj <= 36) {respuesta = respuesta + " " + conjurosDivinos8[8] + "; ";}
                                                                                                                                                                                                      else if (conj >= 37 && conj <= 39) {respuesta = respuesta + " " + conjurosDivinos8[9] + "; ";}
                                                                                                                                                                                                      else if (conj >= 40 && conj <= 46) {respuesta = respuesta + " " + conjurosDivinos8[10] + "; ";}
                                                                                                                                                                                                      else if (conj >= 47 && conj <= 51) {respuesta = respuesta + " " + conjurosDivinos8[11] + "; ";}
                                                                                                                                                                                                      else if (conj >= 52 && conj <= 55) {respuesta = respuesta + " " + conjurosDivinos8[12] + "; ";}
                                                                                                                                                                                                      else if (conj >= 56 && conj <= 59) {respuesta = respuesta + " " + conjurosDivinos8[13] + "; ";}
                                                                                                                                                                                                      else if (conj >= 60 && conj <= 62) {respuesta = respuesta + " " + conjurosDivinos8[14] + "; ";}
                                                                                                                                                                                                      else if (conj >= 63 && conj <= 66) {respuesta = respuesta + " " + conjurosDivinos8[15] + "; ";}
                                                                                                                                                                                                      else if (conj >= 67 && conj <= 70) {respuesta = respuesta + " " + conjurosDivinos8[16] + "; ";}
                                                                                                                                                                                                      else if (conj >= 71 && conj <= 74) {respuesta = respuesta + " " + conjurosDivinos8[17] + "; ";}
                                                                                                                                                                                                      else if (conj >= 75 && conj <= 78) {respuesta = respuesta + " " + conjurosDivinos8[18] + "; ";}
                                                                                                                                                                                                      else if (conj >= 79 && conj <= 83) {respuesta = respuesta + " " + conjurosDivinos8[19] + "; ";}
                                                                                                                                                                                                      else if (conj >= 84 && conj <= 85) {respuesta = respuesta + " " + conjurosDivinos8[20] + "; ";}
                                                                                                                                                                                                      else if (conj >= 86 && conj <= 87) {respuesta = respuesta + " " + conjurosDivinos8[21] + "; ";}
                                                                                                                                                                                                      else if (conj >= 88 && conj <= 92) {respuesta = respuesta + " " + conjurosDivinos8[22] + "; ";}
                                                                                                                                                                                                      else if (conj >= 93 && conj <= 96) {respuesta = respuesta + " " + conjurosDivinos8[23] + "; ";}
                                                                                                                                                                                                      else if (conj >= 97 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos8[24] + "; ";}
                                                                                                                                                                                                      }
                                                                                                                                                  else if (nivelConjuro >= 96 && nivelConjuro <= 100) { // nivel de conjuro divino 9
                                                                                                                                                                                                      let conj = tiroDeDados(1, 100);
                                                                                                                                                                                                      if (conj >= 1 && conj <= 4) {respuesta = respuesta + " " + conjurosDivinos9[0] + "; ";}
                                                                                                                                                                                                      else if (conj >= 5 && conj <= 9) {respuesta = respuesta + " " + conjurosDivinos9[1] + "; ";}
                                                                                                                                                                                                      else if (conj >= 10 && conj <= 15) {respuesta = respuesta + " " + conjurosDivinos9[2] + "; ";}
                                                                                                                                                                                                      else if (conj >= 16 && conj <= 21) {respuesta = respuesta + " " + conjurosDivinos9[3] + "; ";}
                                                                                                                                                                                                      else if (conj >= 22 && conj <= 27) {respuesta = respuesta + " " + conjurosDivinos9[4] + "; ";}
                                                                                                                                                                                                      else if (conj >= 28 && conj <= 33) {respuesta = respuesta + " " + conjurosDivinos9[5] + "; ";}
                                                                                                                                                                                                      else if (conj >= 34 && conj <= 39) {respuesta = respuesta + " " + conjurosDivinos9[6] + "; ";}
                                                                                                                                                                                                      else if (conj >= 40 && conj <= 45) {respuesta = respuesta + " " + conjurosDivinos9[7] + "; ";}
                                                                                                                                                                                                      else if (conj >= 46 && conj <= 52) {respuesta = respuesta + " " + conjurosDivinos9[8] + "; ";}
                                                                                                                                                                                                      else if (conj >= 53 && conj <= 57) {respuesta = respuesta + " " + conjurosDivinos9[9] + "; ";}
                                                                                                                                                                                                      else if (conj >= 58 && conj <= 59) {respuesta = respuesta + " " + conjurosDivinos9[10] + "; ";}
                                                                                                                                                                                                      else if (conj >= 60 && conj <= 65) {respuesta = respuesta + " " + conjurosDivinos9[11] + "; ";}
                                                                                                                                                                                                      else if (conj >= 66 && conj <= 68) {respuesta = respuesta + " " + conjurosDivinos9[12] + "; ";}
                                                                                                                                                                                                      else if (conj >= 69 && conj <= 74) {respuesta = respuesta + " " + conjurosDivinos9[13] + "; ";}
                                                                                                                                                                                                      else if (conj == 75) {respuesta = respuesta + " " + conjurosDivinos9[14] + "; ";}
                                                                                                                                                                                                      else if (conj >= 76 && conj <= 84) {respuesta = respuesta + " " + conjurosDivinos9[15] + "; ";}
                                                                                                                                                                                                      else if (conj >= 85 && conj <= 88) {respuesta = respuesta + " " + conjurosDivinos9[16] + "; ";}
                                                                                                                                                                                                      else if (conj >= 89 && conj <= 94) {respuesta = respuesta + " " + conjurosDivinos9[17] + "; ";}
                                                                                                                                                                                                      else if (conj >= 95 && conj <= 100) {respuesta = respuesta + " " + conjurosDivinos9[18] + "; ";}
                                                                                                                                                                                                      }
                                                                                                                                              bandera++;
                                                                                                                                              }//while                    
                                                                                                                                                  } //else if
                                                                                                      }
                                                            else if (segmento >= 56 && segmento <= 75){ //Bastones
                                                                                                      let randomBastones = tiroDeDados(1, 100);
                                                                                                      respuesta = respuesta +  " BASTÓN: ";
                                                                                                      if (randomBastones >= 1 && randomBastones <= 3) {respuesta = respuesta + " " + bastones[0] + "; ";}
                                                                                                      else if (randomBastones >= 4 && randomBastones <= 9) {respuesta = respuesta + " " + bastones[1] + "; ";}
                                                                                                      else if (randomBastones >= 10 && randomBastones <= 11) {respuesta = respuesta + " " + bastones[2] + "; ";}
                                                                                                      else if (randomBastones >= 12 && randomBastones <= 17) {respuesta = respuesta + " " + bastones[3] + "; ";}
                                                                                                      else if (randomBastones >= 18 && randomBastones <= 19) {respuesta = respuesta + " " + bastones[4] + "; ";}
                                                                                                      else if (randomBastones >= 20 && randomBastones <= 24) {respuesta = respuesta + " " + bastones[5] + "; ";}
                                                                                                      else if (randomBastones >= 25 && randomBastones <= 31) {respuesta = respuesta + " " + bastones[6] + "; ";}
                                                                                                      else if (randomBastones >= 32 && randomBastones <= 38) {respuesta = respuesta + " " + bastones[7] + "; ";}
                                                                                                      else if (randomBastones >= 39 && randomBastones <= 43) {respuesta = respuesta + " " + bastones[8] + "; ";}
                                                                                                      else if (randomBastones >= 44 && randomBastones <= 48) {respuesta = respuesta + " " + bastones[9] + "; ";}
                                                                                                      else if (randomBastones >= 49 && randomBastones <= 53) {respuesta = respuesta + " " + bastones[10] + "; ";}
                                                                                                      else if (randomBastones >= 54 && randomBastones <= 58) {respuesta = respuesta + " " + bastones[11] + "; ";}
                                                                                                      else if (randomBastones >= 59 && randomBastones <= 63) {respuesta = respuesta + " " + bastones[12] + "; ";}
                                                                                                      else if (randomBastones >= 64 && randomBastones <= 68) {respuesta = respuesta + " " + bastones[13] + "; ";}
                                                                                                      else if (randomBastones >= 69 && randomBastones <= 73) {respuesta = respuesta + " " + bastones[14] + "; ";}
                                                                                                      else if (randomBastones >= 74 && randomBastones <= 77) {respuesta = respuesta + " " + bastones[15] + "; ";}
                                                                                                      else if (randomBastones >= 78 && randomBastones <= 82) {respuesta = respuesta + " " + bastones[16] + "; ";}
                                                                                                      else if (randomBastones >= 83 && randomBastones <= 87) {respuesta = respuesta + " " + bastones[17] + "; ";}
                                                                                                      else if (randomBastones >= 88 && randomBastones <= 92) {respuesta = respuesta + " " + bastones[18] + "; ";}
                                                                                                      else if (randomBastones >= 93 && randomBastones <= 97) {respuesta = respuesta + " " + bastones[19] + "; ";}
                                                                                                      else if (randomBastones >= 98 && randomBastones <= 100) {respuesta = respuesta + " " + bastones[20] + "; ";}
                                                                                                      }
                                                            else if (segmento >= 76 && segmento <= 80){ //Varitas
                                                                                                      let segmVaritas = tiroDeDados(1, 100); //define el primer segmento de varitas
                                                                                                      respuesta = respuesta + " VARITA: ";
                                                                                                      if (segmVaritas >= 1 && segmVaritas <= 2) {respuesta = respuesta + " " + varitas[36] + "; ";} 
                                                                                                      else if (segmVaritas >= 3 && segmVaritas <= 5) {respuesta = respuesta + " " + varitas[37] + "; ";} 
                                                                                                      else if (segmVaritas >= 6 && segmVaritas <= 7) {respuesta = respuesta + " " + varitas[38] + "; ";} 
                                                                                                      else if (segmVaritas == 8)  {respuesta = respuesta + " " + varitas[39] + "; ";} 
                                                                                                      else if (segmVaritas >= 9 && segmVaritas <= 10) {respuesta = respuesta + " " + varitas[40] + "; ";} 
                                                                                                      else if (segmVaritas >= 11 && segmVaritas <= 13) {respuesta = respuesta + " " + varitas[41] + "; ";} 
                                                                                                      else if (segmVaritas >= 14 && segmVaritas <= 15) {respuesta = respuesta + " " + varitas[42] + "; ";} 
                                                                                                      else if (segmVaritas >= 16 && segmVaritas <= 17) {respuesta = respuesta + " " + varitas[43] + "; ";} 
                                                                                                      else if (segmVaritas >= 18 && segmVaritas <= 19) {respuesta = respuesta + " " + varitas[44] + "; ";} 
                                                                                                      else if (segmVaritas >= 20 && segmVaritas <= 21) {respuesta = respuesta + " " + varitas[45] + "; ";} 
                                                                                                      else if (segmVaritas >= 22 && segmVaritas <= 23) {respuesta = respuesta + " " + varitas[46] + "; ";} 
                                                                                                      else if (segmVaritas >= 24 && segmVaritas <= 25) {respuesta = respuesta + " " + varitas[47] + "; ";} 
                                                                                                      else if (segmVaritas >= 26 && segmVaritas <= 27) {respuesta = respuesta + " " + varitas[48] + "; ";} 
                                                                                                      else if (segmVaritas >= 28 && segmVaritas <= 29) {respuesta = respuesta + " " + varitas[49] + "; ";}
                                                                                                      else if (segmVaritas >= 30 && segmVaritas <= 31) {respuesta = respuesta + " " + varitas[50] + "; ";}
                                                                                                      else if (segmVaritas >= 32 && segmVaritas <= 33) {respuesta = respuesta + " " + varitas[51] + "; ";}
                                                                                                      else if (segmVaritas >= 34 && segmVaritas <= 35) {respuesta = respuesta + " " + varitas[52] + "; ";}
                                                                                                      else if (segmVaritas >= 36 && segmVaritas <= 37) {respuesta = respuesta + " " + varitas[53] + "; ";}
                                                                                                      else if (segmVaritas >= 38 && segmVaritas <= 39) {respuesta = respuesta + " " + varitas[54] + "; ";}
                                                                                                      else if (segmVaritas >= 40 && segmVaritas <= 41) {respuesta = respuesta + " " + varitas[55] + "; ";}
                                                                                                      else if (segmVaritas >= 42 && segmVaritas <= 45) {respuesta = respuesta + " " + varitas[56] + "; ";}
                                                                                                      else if (segmVaritas >= 46 && segmVaritas <= 50) {respuesta = respuesta + " " + varitas[57] + "; ";}
                                                                                                      else if (segmVaritas >= 51 && segmVaritas <= 52) {respuesta = respuesta + " " + varitas[58] + "; ";}
                                                                                                      else if (segmVaritas >= 53 && segmVaritas <= 55) {respuesta = respuesta + " " + varitas[59] + "; ";}
                                                                                                      else if (segmVaritas >= 56 && segmVaritas <= 59) {respuesta = respuesta + " " + varitas[60] + "; ";}
                                                                                                      else if (segmVaritas == 60) {respuesta = respuesta + " " + varitas[61] + "; ";}
                                                                                                      else if (segmVaritas >= 61 && segmVaritas <= 65) {respuesta = respuesta + " " + varitas[62] + "; ";}
                                                                                                      else if (segmVaritas >= 66 && segmVaritas <= 68) {respuesta = respuesta + " " + varitas[63] + "; ";}
                                                                                                      else if (segmVaritas >= 69 && segmVaritas <= 72) {respuesta = respuesta + " " + varitas[64] + "; ";}
                                                                                                      else if (segmVaritas >= 73 && segmVaritas <= 74) {respuesta = respuesta + " " + varitas[65] + "; ";}
                                                                                                      else if (segmVaritas >= 75 && segmVaritas <= 77) {respuesta = respuesta + " " + varitas[66] + "; ";}
                                                                                                      else if (segmVaritas == 78) {respuesta = respuesta + " " + varitas[67] + "; ";}
                                                                                                      else if (segmVaritas == 79) {respuesta = respuesta + " " + varitas[68] + "; ";}
                                                                                                      else if (segmVaritas >= 80 && segmVaritas <= 82) {respuesta = respuesta + " " + varitas[69] + "; ";}
                                                                                                      else if (segmVaritas >= 83 && segmVaritas <= 86) {respuesta = respuesta + " " + varitas[70] + "; ";}
                                                                                                      else if (segmVaritas >= 87 && segmVaritas <= 90) {respuesta = respuesta + " " + varitas[71] + "; ";}
                                                                                                      else if (segmVaritas == 91) {respuesta = respuesta + " " + varitas[72] + "; ";}
                                                                                                      else if (segmVaritas == 92) {respuesta = respuesta + " " + varitas[73] + "; ";}
                                                                                                      else if (segmVaritas == 93) {respuesta = respuesta + " " + varitas[74] + "; ";}
                                                                                                      else if (segmVaritas == 94) {respuesta = respuesta + " " + varitas[75] + "; ";}
                                                                                                      else if (segmVaritas == 95) {respuesta = respuesta + " " + varitas[76] + "; ";}
                                                                                                      else if (segmVaritas == 96) {respuesta = respuesta + " " + varitas[77] + "; ";}
                                                                                                      else if (segmVaritas == 97) {respuesta = respuesta + " " + varitas[78] + "; ";}
                                                                                                      else if (segmVaritas >= 98 && segmVaritas <= 99) {respuesta = respuesta + " " + varitas[79] + "; ";}
                                                                                                      else if (segmVaritas == 100) {respuesta = respuesta + " " + varitas[80] + "; ";}
                                                                                                      }
                                                            else if (segmento >= 81 && segmento <= 100) { //Objeto Maravilloso
                                                                                                        let objetoElegido = Math.floor((Math.random() * 100));
                                                                                                        respuesta = respuesta + " OBJ. MARAV. MAYOR: " + objMaraMayor[objetoElegido] + "; ";
                                                                                                        }
                                                            banderafunction++;
                                                            }
                                  return respuesta;
                            }