let seconds = 0;
let timer;

function relogio(segundo) {
    var data = new Date(segundo * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' // UTC
    })
}

function iniciaTimer() {
    timer = setInterval(function () {
        seconds++
        document.getElementById('timer').innerHTML = relogio(seconds);
    }, 1000)
}

function iniciar() {
    clearInterval(timer);
    iniciaTimer();
}

function pausar() {
    clearInterval(timer);
}

function zerar() {
    clearInterval(timer);
    document.getElementById('timer').innerHTML = '00:00:00'
    seconds = 0;
}