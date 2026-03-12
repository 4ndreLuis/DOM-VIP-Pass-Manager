var displayVagas = document.querySelector("#vagasContador");
var displayStatus = document.querySelector("#statusEvento");
var displayRodape = document.querySelector("#mensagemRodape");
var inputNome = document.querySelector("#inputNome");
var btnEntrar = document.querySelector("#btnEntrar");
var btnReset = document.querySelector("#btnReset");
var vagasRestantes = 5;
var ultimoNomeVip = "";
var atualizarInterface = function () {
    if (displayVagas && displayStatus) {
        displayVagas.textContent = vagasRestantes.toString();
        if (vagasRestantes === 0) {
            displayStatus.textContent = "EVENTO LOTADO!";
            displayStatus.style.color = "RED";
            btnEntrar.disabled = true;
        }
        else {
            displayStatus.style.color = "";
        }
    }
};
var registrarEntrada = function () {
    var nome = inputNome.value.trim();
    if (!nome) {
        alert("Por favor, digite um nome v\u00E1lido no campo!");
        inputNome.focus();
        return;
    }
    if (vagasRestantes > 0) {
        vagasRestantes--;
        ultimoNomeVip = nome;
        displayStatus.textContent = "Bem-vindo(a), ".concat(ultimoNomeVip, "! \uD83C\uDFAB");
        displayRodape.textContent = "\u00DAltimo registro: ".concat(ultimoNomeVip);
        inputNome.value = "";
        inputNome.focus();
        atualizarInterface();
    }
};
var resetarEvento = function () {
    vagasRestantes = 5;
    ultimoNomeVip = "";
    displayStatus.textContent = "Controle de Acesso VIP";
    displayRodape.textContent = "Aguardando registros...";
    btnEntrar.disabled = false;
    inputNome.value = "";
    inputNome.focus();
    atualizarInterface();
};
btnEntrar.addEventListener("click", registrarEntrada);
btnReset === null || btnReset === void 0 ? void 0 : btnReset.addEventListener("click", resetarEvento);
atualizarInterface();
