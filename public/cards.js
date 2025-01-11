const words = [
  ["english", "spanish", "portuguese"],
  ["be", "ser/estar", "ser/estar"],
  ["have", "tener", "ter"],
  ["do", "hacer", "fazer"],
  ["say", "decir", "dizer"],
  ["go", "ir", "ir"],
  ["can", "poder", "poder"],
  ["get", "obtener", "obter"],
  ["make", "hacer", "fazer"],
  ["know", "saber", "saber"],
  ["think", "pensar", "pensar"],
  ["take", "tomar", "tomar"],
  ["see", "ver", "ver"],
  ["come", "venir", "vir"],
  ["want", "querer", "querer"],
  ["look", "mirar", "olhar"],
  ["use", "usar", "usar"],
  ["find", "encontrar", "encontrar"],
  ["give", "dar", "dar"],
  ["tell", "decir", "dizer"],
  ["work", "trabajar", "trabalhar"],
  ["call", "llamar", "chamar"],
  ["try", "intentar", "tentar"],
  ["ask", "preguntar", "perguntar"],
  ["need", "necesitar", "precisar"],
  ["feel", "sentir", "sentir"],
  ["become", "convertirse", "tornar-se"],
  ["leave", "dejar", "deixar"],
  ["put", "poner", "pôr"],
  ["mean", "significar", "significar"],
  ["keep", "mantener", "manter"],
  ["let", "dejar", "deixar"],
  ["begin", "empezar", "começar"],
  ["seem", "parecer", "parecer"],
  ["help", "ayudar", "ajudar"],
  ["talk", "hablar", "falar"],
  ["turn", "girar", "virar"],
  ["start", "comenzar", "começar"],
  ["show", "mostrar", "mostrar"],
  ["hear", "oír", "ouvir"],
  ["play", "jugar", "jogar"],
  ["run", "correr", "correr"],
  ["move", "mover", "mover"],
  ["like", "gustar", "gostar"],
  ["live", "vivir", "viver"],
  ["believe", "creer", "acreditar"],
  ["hold", "sostener", "segurar"],
  ["bring", "traer", "trazer"],
  ["happen", "suceder", "acontecer"],
  ["write", "escribir", "escrever"],
  ["provide", "proveer", "fornecer"],
  ["sit", "sentarse", "sentar-se"],
  ["stand", "estar de pie", "ficar de pé"],
  ["lose", "perder", "perder"],
  ["pay", "pagar", "pagar"],
  ["meet", "conocer", "encontrar"],
  ["include", "incluir", "incluir"],
  ["continue", "continuar", "continuar"],
  ["set", "establecer", "estabelecer"],
  ["learn", "aprender", "aprender"],
  ["change", "cambiar", "mudar"],
  ["lead", "liderar", "liderar"],
  ["understand", "entender", "entender"],
  ["watch", "ver", "assistir"],
  ["follow", "seguir", "seguir"],
  ["stop", "parar", "parar"],
  ["create", "crear", "criar"],
  ["speak", "hablar", "falar"],
  ["read", "leer", "ler"],
  ["allow", "permitir", "permitir"],
  ["add", "añadir", "adicionar"],
  ["spend", "gastar", "gastar"],
  ["grow", "crecer", "crescer"],
  ["open", "abrir", "abrir"],
  ["walk", "caminar", "andar"],
  ["win", "ganar", "ganhar"],
  ["offer", "ofrecer", "oferecer"],
  ["remember", "recordar", "lembrar"],
  ["love", "amar", "amar"],
  ["consider", "considerar", "considerar"],
  ["appear", "aparecer", "aparecer"],
  ["buy", "comprar", "comprar"],
  ["wait", "esperar", "esperar"],
  ["serve", "servir", "servir"],
  ["die", "morir", "morrer"],
  ["send", "enviar", "enviar"],
  ["expect", "esperar", "esperar"],
  ["build", "construir", "construir"],
  ["stay", "quedarse", "ficar"],
  ["fall", "caer", "cair"],
  ["cut", "cortar", "cortar"],
  ["reach", "alcanzar", "alcançar"],
  ["kill", "matar", "matar"],
  ["remain", "permanecer", "permanecer"],
  ["suggest", "sugerir", "sugerir"],
  ["raise", "levantar", "levantar"],
  ["pass", "pasar", "passar"],
  ["sell", "vender", "vender"],
  ["require", "requerir", "requerer"],
  ["report", "informar", "informar"],
  ["decide", "decidir", "decidir"],
  ["pull", "tirar", "puxar"]
];

let currentWordIndex = 1; // Start from the first word set
let currentFaceIndex = 0;

const prism = document.querySelector(".prism");
const faces = {
  english: document.getElementById("english-face"),
  spanish: document.getElementById("spanish-face"),
  portuguese: document.getElementById("portuguese-face")
};

// TODO CLEAN THIS UP.
function updateFaces() {
  faces.english.innerHTML = `<div class='face-wrapper'><span class='lang-label'>(en)</span><span>${words[currentWordIndex][0]}</span></div>`;
  faces.spanish.innerHTML = `<div class='face-wrapper'><span class='lang-label'>(sp)</span><span>${words[currentWordIndex][1]}</span></div>`;
  faces.portuguese.innerHTML = `<div class='face-wrapper'><span class='lang-label'>(pr)</span><span>${words[currentWordIndex][2]}</span></div>`;
}

function rotatePrism() {
  const angle = currentFaceIndex * -120;
  prism.style.transform = `rotateY(${angle}deg)`;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    currentWordIndex =
      currentWordIndex > 1 ? currentWordIndex - 1 : words.length - 1;
    updateFaces();
  } else if (event.key === "ArrowDown") {
    currentWordIndex =
      currentWordIndex < words.length - 1 ? currentWordIndex + 1 : 1;
    updateFaces();
  } else if (event.key === "ArrowRight") {
    currentFaceIndex = currentFaceIndex + 1;
    rotatePrism();
  } else if (event.key === "ArrowLeft") {
    currentFaceIndex = currentFaceIndex - 1;
    rotatePrism();
  }
});

updateFaces();
