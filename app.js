// URL para onde o usuário será redirecionado
const redirectURL = "https://pousoalegre.mg.leg.br";

// Elemento do timer
const timerElement = document.getElementById("timer");

// Tempo inicial em segundos
let secondsLeft = 10;

// Variável para armazenar o intervalo
let countdownInterval;

// Função para atualizar o contador e redirecionar quando chegar a zero
function updateCountdown() {
    // Atualiza o texto do contador
    timerElement.textContent = secondsLeft;

    // Reduz o tempo restante
    secondsLeft--;

    // Se o tempo acabou, redireciona para a nova URL
    if (secondsLeft < 0) {
        clearInterval(countdownInterval);
        window.location.href = redirectURL;
    }
}

// Inicia o contador assim que a página carrega
document.addEventListener("DOMContentLoaded", function() {
    updateCountdown(); // mostra 10 segundos imediatamente
    countdownInterval = setInterval(updateCountdown, 1000);

    // Opcional: se o botão for clicado antes do tempo
    const redirectButton = document.querySelector(".redirect-button");
    redirectButton.addEventListener("click", function() {
        clearInterval(countdownInterval);
        window.location.href = redirectURL;
    });
});

