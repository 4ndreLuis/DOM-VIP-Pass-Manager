const displayVagas = document.querySelector(
  "#vagasContador",
) as HTMLSpanElement;

const displayStatus = document.querySelector(
  "#statusEvento",
) as HTMLHeadingElement;

const displayRodape = document.querySelector("#mensagemRodape") as HTMLElement;

const inputNome = document.querySelector("#inputNome") as HTMLInputElement;

const btnEntrar = document.querySelector("#btnEntrar") as HTMLButtonElement;

const btnReset = document.querySelector("#btnReset");

let vagasRestantes = 5;
let ultimoNomeVip: string = "";

const atualizarInterface = () => {
  if (displayVagas && displayStatus) {
    displayVagas.textContent = vagasRestantes.toString();

    if (vagasRestantes === 0) {
      displayStatus.textContent = "EVENTO LOTADO!";
      displayStatus.style.color = "RED";
      btnEntrar.disabled = true;
    } else {
      displayStatus.style.color = "";
    }
  }
};

const registrarEntrada = () => {
  const nome = inputNome.value.trim();

  if (!nome) {
    alert(`Por favor, digite um nome válido no campo!`);
    inputNome.focus();
    return;
  }

  if (vagasRestantes > 0) {
    vagasRestantes--;
    ultimoNomeVip = nome;
    displayStatus.textContent = `Bem-vindo(a), ${ultimoNomeVip}! 🎫`;
    displayRodape.textContent = `Último registro: ${ultimoNomeVip}`;
    inputNome.value = "";
    inputNome.focus();
    atualizarInterface();
  }
};

const resetarEvento = () => {
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
btnReset?.addEventListener("click", resetarEvento);

atualizarInterface();
