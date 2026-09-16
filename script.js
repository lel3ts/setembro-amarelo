// ========================================
// PROJETO: PAUSA — SETEMBRO AMARELO
// JAVASCRIPT PRINCIPAL
// ========================================


// ========================================
// ELEMENTOS DA PÁGINA
// ========================================

const breathingCircle = document.querySelector("#breathing-circle");
const breathingText = document.querySelector("#breathing-text");
const breathingInstruction = document.querySelector("#breathing-instruction");
const breathingTimer = document.querySelector("#breathing-timer");

const breathingButton = document.querySelector("#breathing-button");
const pauseButton = document.querySelector("#pause-button");
const resetButton = document.querySelector("#reset-button");

const messageText = document.querySelector("#message-text");
const messageButton = document.querySelector("#message-button");


// ========================================
// EXERCÍCIO DE RESPIRAÇÃO
// ========================================

let breathingActive = false;
let currentStep = 0;

let breathingTimeout = null;
let timerInterval = null;

let elapsedSeconds = 0;


// Etapas do exercício
const breathingSteps = [
    {
        text: "Inspire",
        duration: 4000,
        action: "inspire"
    },
    {
        text: "Segure",
        duration: 4000,
        action: "hold"
    },
    {
        text: "Expire",
        duration: 6000,
        action: "expire"
    }
];


// ========================================
// MENSAGENS DE APOIO
// ========================================

const messages = [
    "Você não precisa resolver tudo hoje.",
    "Pedir ajuda também é uma forma de cuidado.",
    "Se permita fazer uma pausa.",
    "Você não precisa passar por isso sozinho.",
    "Um momento difícil não define toda a sua história.",
    "Tudo bem desacelerar por um momento.",
    "Cuidar de si também é uma forma de coragem.",
    "Você merece ser ouvido e acolhido.",
    "Respire. Um passo de cada vez."
];


// ========================================
// INICIAR RESPIRAÇÃO
// ========================================

function startBreathing() {

    if (breathingActive) {
        return;
    }

    breathingActive = true;

    breathingButton.disabled = true;
    pauseButton.disabled = false;

    startTimer();
    runBreathingStep();
}


// ========================================
// EXECUTAR ETAPA DA RESPIRAÇÃO
// ========================================

function runBreathingStep() {

    if (!breathingActive) {
        return;
    }

    const step = breathingSteps[currentStep];

    breathingText.textContent = step.text;

    breathingInstruction.textContent =
        getInstruction(step.action);


    // Remove animações anteriores
    breathingCircle.classList.remove(
        "breathing-in",
        "breathing-hold",
        "breathing-out"
    );


    // Reinicia a animação
    void breathingCircle.offsetWidth;


    // Aplica a animação correspondente
    if (step.action === "inspire") {
        breathingCircle.classList.add("breathing-in");
    }

    if (step.action === "hold") {
        breathingCircle.classList.add("breathing-hold");
    }

    if (step.action === "expire") {
        breathingCircle.classList.add("breathing-out");
    }


    // Aguarda a duração da etapa
    breathingTimeout = setTimeout(() => {

        currentStep++;

        // Volta para a primeira etapa
        // depois de completar o ciclo
        if (currentStep >= breathingSteps.length) {
            currentStep = 0;
        }

        runBreathingStep();

    }, step.duration);
}


// ========================================
// INSTRUÇÕES DE CADA ETAPA
// ========================================

function getInstruction(action) {

    if (action === "inspire") {
        return "Inspire lentamente pelo nariz.";
    }

    if (action === "hold") {
        return "Segure o ar por alguns segundos.";
    }

    if (action === "expire") {
        return "Expire devagar e solte a tensão.";
    }

    return "Acompanhe o ritmo do círculo.";
}


// ========================================
// PAUSAR RESPIRAÇÃO
// ========================================

function pauseBreathing() {

    breathingActive = false;

    clearTimeout(breathingTimeout);
    clearInterval(timerInterval);

    breathingButton.disabled = false;
    pauseButton.disabled = true;

    breathingText.textContent = "Pausado";

    breathingInstruction.textContent =
        "Quando quiser continuar, clique em iniciar.";
}


// ========================================
// REINICIAR RESPIRAÇÃO
// ========================================

function resetBreathing() {

    breathingActive = false;

    clearTimeout(breathingTimeout);
    clearInterval(timerInterval);

    currentStep = 0;
    elapsedSeconds = 0;


    breathingCircle.classList.remove(
        "breathing-in",
        "breathing-hold",
        "breathing-out"
    );


    breathingText.textContent = "Pronto?";

    breathingInstruction.textContent =
        "Quando estiver pronto, comece.";


    breathingTimer.textContent = "00:00";


    breathingButton.disabled = false;
    pauseButton.disabled = true;
}


// ========================================
// TIMER
// ========================================

function startTimer() {

    // Evita criar mais de um timer
    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(() => {

        elapsedSeconds++;

        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;

        breathingTimer.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    }, 1000);
}


// ========================================
// GERADOR DE MENSAGENS
// ========================================

function showRandomMessage() {

    const randomIndex =
        Math.floor(Math.random() * messages.length);

    const selectedMessage = messages[randomIndex];

    messageText.textContent = selectedMessage;
}


// ========================================
// EVENTOS DOS BOTÕES
// ========================================

breathingButton.addEventListener(
    "click",
    startBreathing
);


pauseButton.addEventListener(
    "click",
    pauseBreathing
);


resetButton.addEventListener(
    "click",
    resetBreathing
);


messageButton.addEventListener(
    "click",
    showRandomMessage
);
