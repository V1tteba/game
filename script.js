// Captura os elementos
const porta = document.getElementById("porta");
const cama = document.getElementById("cama");
const janela = document.getElementById("janela");
const espelho = document.getElementById("espelho");
const fan = document.getElementById("fan");
const trash = document.getElementById("trash");
const windo = document.getElementById("windo");
const chair = document.getElementById("chair");
// Verifica se a 'porta' existe na página atual antes de add o evento
if (porta) {
    porta.addEventListener("click", () => {
        window.location.href = "https://v1tteba.neocities.org"; 
    });
}

if (cama) {
    cama.addEventListener("click", () => {
        window.location.href = "bed.html"; 
    });
}

if (espelho) {
    espelho.addEventListener("click", () => {
        window.location.href = "itsme.html"; 
    });
}

if (janela) {
    janela.addEventListener("click", () => {
        window.location.href = "window.html"; 
    });
}

if (fan) {
    fan.addEventListener("click", () => {
        window.location.href = "fan.html"; 
    });
}

if (trash) {
    trash.addEventListener("click", () => {
        window.location.href = "trash.html"; 
    });
}
if (chair) {
    chair.addEventListener("click", () => {
        window.location.href = "chair.html"; 
    });
}

// O que você pediu: clicar no windo e aparecer um alerta

function showAlert(texto) {
    const alertDiv = document.getElementById("custom-alert");
    const messageP = document.getElementById("alert-message");
    
    messageP.innerText = texto; // Define o texto que você quiser
    alertDiv.style.display = "flex"; // Mostra o alerta
}

function closeAlert() {
    document.getElementById("custom-alert").style.display = "none";
}

// Como usar no seu hotspot:
if (windo) {
    windo.addEventListener("click", () => {
        showAlert("I cant leave, im too weak");
    });
}
