// ========================================
// PROJETO: PAUSA — SETEMBRO AMARELO
// ========================================

// Elementos da página
const breathingCircle = document.querySelector("#breathing-circle");
const breathingText = document.querySelector("#breathing-text");
const breathingButton = document.querySelector("#breathing-button");


// ========================================
// EXERCÍCIO DE RESPIRAÇÃO
// ========================================

let breathingActive = false;
let breathingTimeout;


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
    "Um momento difícil não define toda a sua história."
];


// ========================================
// FUTURAS FUNÇÕES
// ========================================

// A lógica das funcionalidades será adicionada
// conforme construirmos o HTML e o CSS.

