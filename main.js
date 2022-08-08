const questions1 = [
  {
    letter: "Con la A",
    answer: "abducir",
    status: 0,
    question:
      "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "Con la B",
    answer: "bingo",
    status: 0,
    question:
      "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "Con la C",
    answer: "churumbel",
    status: 0,
    question: "Niño, crío, bebé",
  },
  {
    letter: "Con la D",
    answer: "diarrea",
    status: 0,
    question:
      "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "Con la E",
    answer: "ectoplasma",
    status: 0,
    question:
      "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "Con la F",
    answer: "facil",
    status: 0,
    question: "Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "Con la G",
    answer: "galaxia",
    status: 0,
    question:
      "Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "Con la H",
    answer: "harakiri",
    status: 0,
    question: "Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "Con la I",
    answer: "iglesia",
    status: 0,
    question: "Templo cristiano",
  },
  {
    letter: "Con la J",
    answer: "jabali",
    status: 0,
    question:
      "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "Con la K",
    answer: "kamikaze",
    status: 0,
    question: "Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "Con la L",
    answer: "licantropo",
    status: 0,
    question: "Hombre lobo",
  },
  {
    letter: "Con la M",
    answer: "misantropo",
    status: 0,
    question:
      "Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "Con la N",
    answer: "necedad",
    status: 0,
    question: "Demostración de poca inteligencia",
  },
  {
    letter: "Contiene la Ñ",
    answer: "señal",
    status: 0,
    question:
      "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "Con la O",
    answer: "orco",
    status: 0,
    question:
      "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "Con la P",
    answer: "protoss",
    status: 0,
    question:
      "Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "Con la Q",
    answer: "queso",
    status: 0,
    question: "Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "Con la R", answer: "raton", status: 0, question: "Roedor" },
  {
    letter: "Con la S",
    answer: "stackoverflow",
    status: 0,
    question: "Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "Con la T",
    answer: "terminator",
    status: 0,
    question:
      "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "Con la U",
    answer: "unamuno",
    status: 0,
    question:
      "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "Con la V",
    answer: "vikingos",
    status: 0,
    question:
      "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "Contiene la W",
    answer: "sandwich",
    status: 0,
    question:
      "Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "Contiene la X",
    answer: "botox",
    status: 0,
    question: "Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "Contiene la Y",
    answer: "peyote",
    status: 0,
    question:
      "Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "Con la Z",
    answer: "zen",
    status: 0,
    question:
      "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

const questions2 = [
  {
    letter: "Con la A",
    question:
      "Instrumento utilizado en el siglo XIII para contar y realizar operaciones aritméticas.",
    answer: "abaco",
    status: 0,
  },
  {
    letter: "Con la B",
    question: "Entrar en el agua para lavarse, para nadar o jugar.",
    answer: "bañarse",
    status: 0,
  },
  {
    letter: "Con la C",
    question: "Ropa de abrigo que cubre desde los hombros a la cintura.",
    answer: "cazadora",
    status: 0,
  },
  {
    letter: "Con la D",
    question: "Que tiene poca fuerza, poco vigor o poca resistencia.",
    answer: "debil",
    status: 0,
  },
  {
    letter: "Con la E",
    question: "Lugar que se usa para viviendas, oficinas, colegios, etc.",
    answer: "edificio",
    status: 0,
  },
  {
    letter: "Con la F",
    question: "Tiempo que viene después.",
    answer: "futuro",
    status: 0,
  },
  {
    letter: "Con la G",
    question:
      "Máquina para levantar objetos pesados y moverlos de un lugar a otro.",
    answer: "grúa",
    status: 0,
  },
  {
    letter: "Con la H",
    question: "Irse abajo dentro del agua.",
    answer: "hundirse",
    status: 0,
  },
  {
    letter: "Con la I",
    question: "Territorio que está rodeado de agua por todas partes.",
    answer: "isla",
    status: 0,
  },
  {
    letter: "Con la J",
    question: "Persona que juega.",
    answer: "jugador",
    status: 0,
  },
  {
    letter: "Con la K",
    question: "Medida para pesar (equivale a mil gramos).",
    answer: "kilo",
    status: 0,
  },
  {
    letter: "Con la L",
    question: "Envase de metal.",
    answer: "lata",
    status: 0,
  },
  {
    letter: "Con la M",
    question:
      "Fruta de piel fina, amarilla, verde o roja, de carne blanca y dura.",
    answer: "manzana",
    status: 0,
  },
  {
    letter: "Con la N",
    question: "Ningún día o en ningún tiempo.",
    answer: "nunca",
    status: 0,
  },
  {
    letter: "Contiene la Ñ",
    question:
      "Tiempo que tarda la Tierra en dar una vuelta completa alrededor del Sol.",
    answer: "año",
    status: 0,
  },
  {
    letter: "Con la O",
    question: "Animal doméstico que tiene el cuerpo cubierto de lana.",
    answer: "oveja",
    status: 0,
  },
  {
    letter: "Con la P",
    question: "Andar por placer o para hacer ejercicio.",
    answer: "pasear",
    status: 0,
  },
  {
    letter: "Con la Q",
    question: "Alimento sólido preparado con leche.",
    answer: "queso",
    status: 0,
  },
  {
    letter: "Con la R",
    question: "Pocas palabras que  cuentan una historia más larga.",
    answer: "resumen",
    status: 0,
  },
  {
    letter: "Con la S",
    question: "Calzado que no tapa todo el pie.",
    answer: "sandalia",
    status: 0,
  },
  {
    letter: "Con la T",
    question: "Parte de una habitación que está arriba.",
    answer: "techo",
    status: 0,
  },
  {
    letter: "Con la U",
    question: "Que no puede esperar.",
    answer: "urgente",
    status: 0,
  },
  {
    letter: "Con la V",
    question: "Que es muy rápido.",
    answer: "veloz",
    status: 0,
  },
  {
    letter: "Con la W",
    question: "Apellido de Naomi.",
    answer: "watts",
    status: 0,
  },
  {
    letter: "Con la X",
    question: "Cuarenta en números romanos.",
    answer: "xl",
    status: 0,
  },
  {
    letter: "Con la Y",
    question: "Hembra del caballo",
    answer: "yegua",
    status: 0,
  },
  {
    letter: "Con la Z",
    question: "Empezar a navegar",
    answer: "zarpar",
    status: 0,
  },
];

const questions3 = [
  {
    letter: "Con la A",
    answer: "anecdota",
    status: 0,
    question:
      "Relato breve de un acontecimiento extraño, curioso o divertido, generalmente ocurrido a la persona que lo cuenta.",
  },
  {
    letter: "Con la B",
    answer: "bollo",
    status: 0,
    question:
      "Pasta dulce y esponjosa, hecha con harina, huevos, levadura y otros ingredientes, que puede tener distintas formas",
  },
  {
    letter: "Con la C",
    answer: "cascada",
    status: 0,
    question:
      "Corriente de agua que cae desde cierta altura a causa de un brusco desnivel en su cauce, especialmente en un rio",
  },
  {
    letter: "Con la D",
    answer: "daga",
    status: 0,
    question:
      "Arma blanca de hoja corta, ancha y puntiaguda, parecida a la espada pero de menor tamaño",
  },
  {
    letter: "Con la E",
    answer: "espiral",
    status: 0,
    question:
      "Línea curva que describe varias vueltas alrededor de un punto, alejándose cada vez más de él",
  },
  {
    letter: "Contiene la F",
    answer: "putrefacto",
    status: 0,
    question:
      "Que está descompuesto o podrido por la acción de diversos factores y determinados microorganismos",
  },
  {
    letter: "Con la G",
    answer: "garrulo",
    status: 0,
    question: "Que se comporta de manera ruda, tosca o grosera",
  },
  {
    letter: "Contiene la H",
    answer: "rechoncho",
    status: 0,
    question: "Persona o animal que es grueso y de poca altura",
  },
  {
    letter: "Con la I",
    answer: "interestelar",
    status: 0,
    question:
      "Que está en el espacio existente entre dos astros, o que tiene relación con él",
  },
  {
    letter: "Con la J",
    answer: "jalapeño",
    status: 0,
    question:
      "Chile picante de unos 5 cm de largo, carnoso y de punta redonda, que se usa para condimentar ciertos guisos",
  },
  {
    letter: "Con la K",
    answer: "kilowatio",
    status: 0,
    question: "Unidad de medida de la electricidad",
  },
  {
    letter: "Contiene la L",
    answer: "homunculo",
    status: 0,
    question: "Hombre pequeño y débil",
  },
  {
    letter: "Con la M",
    answer: "martir",
    status: 0,
    question:
      "Persona que sufre o muere por defender su religión o sus ideales",
  },
  {
    letter: "Con la N",
    answer: "neon",
    status: 0,
    question: "Tubo fluorescente que produce una luz brillante",
  },
  {
    letter: "Contiene la Ñ",
    answer: "teñir",
    status: 0,
    question: "Dar a una cosa un color distinto del que tiene",
  },
  {
    letter: "Con la O",
    answer: "omnisciente",
    status: 0,
    question: "Que conoce todas las cosas reales y posibles",
  },
  {
    letter: "Contiene la P",
    answer: "alpargata",
    status: 0,
    question:
      "Calzado de lona, con suela de esparto, cáñamo o goma, que se sujeta al pie por presión o con unas cintas que se atan al tobillo",
  },
  {
    letter: "Con la Q",
    answer: "quebradizo",
    status: 0,
    question: "Que se puede romper fácilmente",
  },
  {
    letter: "Con la R",
    answer: "rinoplastia",
    status: 0,
    question: "Operación quirúrgica para restaurar la nariz",
  },
  {
    letter: "Contiene la S",
    answer: "desaliño",
    status: 0,
    question: "Falta de cuidado en la forma de vestir y en el aseo personal",
  },
  {
    letter: "Con la T",
    answer: "tabardillo",
    status: 0,
    question: "Persona alocada, bulliciosa y molesta",
  },
  {
    letter: "Contiene la U",
    answer: "Huraño",
    status: 0,
    question:
      "Persona que rehúye el trato de otras personas y rechaza las atenciones y muestras de cariño",
  },
  {
    letter: "Con la V",
    answer: "vasallaje",
    status: 0,
    question:
      "Tributo que el vasallo pagaba a su señor o servicio que le prestaba según este vínculo",
  },
  {
    letter: "Con la W",
    answer: "windows",
    status: 0,
    question: "Sistema operativo desarrolado por Microsoft",
  },
  {
    letter: "Contiene la X",
    answer: "climax",
    status: 0,
    question:
      "Punto culminante o de mayor satisfacción de la excitación sexual en las zonas erógenas o sexuales",
  },
  {
    letter: "Contiene la Y",
    answer: "buey",
    status: 0,
    question:
      "Toro castrado, que se utiliza como animal de tiro y del cual se aprovecha su carne",
  },
  {
    letter: "Contiene la Z",
    answer: "Pazguato",
    status: 0,
    question: "Que es tonto o tiene poca rapidez mental",
  },
];

// Status 0 - unanswered
// Status 1 - answered correct
// Status 2 - answered incorrect
// Status 3 - skipped

//DOM elements

const startGameButton = document.getElementById("play-button");
const mensaje = document.getElementById("mensaje");
const questionConsole = document.getElementById("question-console");
const playAgain = document.getElementById("play-again");
const hint = document.getElementById("hint");
const definition = document.getElementById("definition");
const aciertos = document.getElementById("aciertos");
const score = document.getElementById("score");

//DOM buttons
const sendButton = document.getElementById("send-button");
const pasaButton = document.getElementById("pasa-button");
const stopButton = document.getElementById("stop-button");
const replayButton = document.getElementById("replay");

let correct = 0;
let errors = 0;
let index = 0;
let questions;
let seconds = 180;
let isPlaying = true;

const questionSelector = () => {
  // Aqui es decideix quin dels 3 set s'agafa
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      return (questions = questions1);
    case 2:
      return (questions = questions2);
    case 3:
      return (questions = questions3);
    default:
      return (questions = questions1);
  }
};

//Funció de botó jugar
const startGame = () => {
  mensaje.classList.add("hidden");
  questionConsole.classList.remove("hidden");
  questionSelector();
  showQuestions();
};

const showQuestions = () => {
  //Funció per mostrar la pregunta
  if (index < questions.length) {
    if (questions[index].status === 0) {
      hint.innerHTML = questions[index].letter;
      definition.innerHTML = questions[index].question;
      let x = document.getElementsByClassName("item");
      x[index].style.backgroundImage = "radial-gradient(circle, grey, black)";
    } else if (questions[index].status === 1) {
      index += 1;
      showQuestions();
    } else if (questions[index].status === 2) {
      index += 1;
      showQuestions();
    } else if (questions[index].status === 3) {
      hint.innerHTML = questions[index].letter;
      definition.innerHTML = questions[index].question;
    }
  } else {
    //Un cop dona la volta torna a començar per la primera lletra sense resposta
    index = 0;
    showQuestions();
  }
};

function checkUserAnswer() {
  //Funció per comprobar la resposta i/o decidir quan acabar el joc
  let answers = document.getElementById("respuesta").value;

  if (answers.toLowerCase() === questions[index].answer) {
    let x = document.getElementsByClassName("item");
    x[index].style.backgroundImage = "radial-gradient(circle, green, black)";
    questions[index].status = 1;
    correct += 1;
  } else if (answers.toLowerCase() !== questions[index].answer) {
    let x = document.getElementsByClassName("item");
    x[index].style.backgroundImage = "radial-gradient(circle, red, black)";
    questions[index].status = 2;
    errors += 1;
  } else {
    showQuestions();
  }

  hint.innerHTML = "";
  definition.innerHTML = "";
  aciertos.innerHTML = correct;
  answers.value = "";
  document.getElementById("respuesta").value = "";

  if (correct + errors === questions.length) {
    return endGame();
  } else {
    return showQuestions();
  }
}

const pasaPalabra = () => {
  let x = document.getElementsByClassName("item");
  x[index].style.backgroundImage = "radial-gradient(circle, #6844bc, #301934)";
  document.getElementById("respuesta").value = "";
  questions[index].status = 3;
  index += 1;
  showQuestions();
};

// Compte enrere
const timer = () => {
  let s = document.getElementById("timer");

  let countDown = setInterval(function () {
    seconds--;
    s.innerHTML = seconds;

    if (seconds === 0 || isPlaying === false) {
      timeup();
      clearInterval(countDown);
    }
  }, 1000);
};

// Funció quan s'acaba el temps
const timeup = () => {
  // Salta quan s'acaba el temps
  questionConsole.classList.add("hidden");
  playAgain.classList.remove("hidden");
  score.innerHTML =
    "¡Gracias por jugar! Has acertado un total de: " + correct + " preguntas.";
};

// Funció del botó STOP
const endGame = () => {
  isPlaying = false;
  questionConsole.classList.add("hidden");
  playAgain.classList.remove("hidden");
  score.innerHTML =
    "¡Gracias por jugar! Has acertado un total de: " + correct + " preguntas.";
};

// Jugar de nuevo, location reload
const gameAgain = () => {
  location.reload();
};

//Event listeners

startGameButton.addEventListener("click", (event) => {
  startGame();
});

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "Enter":
      if (
        questionConsole.classList.contains("hidden") &&
        playAgain.classList.contains("hidden")
      ) {
        startGame();
        timer();
      } else if (
        mensaje.classList.contains("hidden") &&
        playAgain.classList.contains("hidden")
      ) {
        checkUserAnswer();
      } else {
        gameAgain();
      }
      break;
    case "Tab":
      event.preventDefault();
      pasaPalabra();
      break;
    default:
      break;
  }
});

const CheckSpace = (event) => {
  if (event.which == 32) {
    event.preventDefault();
    return false;
  }
};
