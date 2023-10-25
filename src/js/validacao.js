const form = document.getElementById("form");
const campos = document.querySelectorAll(".requerido");
const spans = document.querySelectorAll(".span-requerido");
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validacaoNome();
  validacaoEmail();
  validacaoNumeroTelefone();
  validacaoMensagem();
});

function mensagemErro(index) {
  campos[index].style.border = "2px solid #F52E2E";
  spans[index].style.display = "block";
}

function removerErro(index) {
  campos[index].style.border = "2px solid #00C22B";
  spans[index].style.display = "none";
}

function validacaoNome() {
  if (campos[0].value.length < 3) {
    mensagemErro(0);
  } else {
    removerErro(0);
  }
}

function validacaoEmail() {
  if (!emailRegex.test(campos[1].value)) {
    mensagemErro(1);
  } else {
    removerErro(1);
  }
}

function validacaoNumeroTelefone() {
  if (campos[2].value.length < 9) {
    mensagemErro(2);
  } else {
    removerErro(2);
  }
}

function validacaoMensagem() {
  if (campos[3].value.length < 3) {
    mensagemErro(3);
  } else {
    removerErro(3);
  }
}
