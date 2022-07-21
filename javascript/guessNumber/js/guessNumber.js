const numInput = document.getElementById("num-input");
const playBtn = document.getElementById("play");
const contResp = document.getElementById("container2");
const playAgain = document.getElementById("play-again");
const statusText = document.getElementById("status");
const tentativasText = document.getElementById("tentativas");

let numAtual = 0;
let numTentativas = 0;

// propriedades do jogo
let guess = {
  max: 10,
  tentativas: 0,
  geraNum: () => {
    return Math.floor(Math.random() * 10);
  },
};

// gera o numero
window.addEventListener("load", () => {
  numAtual = guess.geraNum();
  console.log(numAtual);
});

//botao para jogar
playBtn.addEventListener("click", () => {
  let num = parseInt(numInput.value);
  numTentativas += 1;
  tentativasText.innerHTML = `Tentativas: ${numTentativas}`;
  if (num === numAtual) {
    contResp.style.background = "#20ad4d";
    statusText.style.color = "#ffffff";
    tentativasText.style.color = "#ffffff";
    statusText.innerHTML = "<h3>Você acertou!</h3>";
    numTentativas = 0;
  } else {
    statusText.innerHTML = "<h3>Número incorreto. Tente novamente! :(</h3>";
    statusText.style.color = "#ae0000";
  }
  numInput.value = "";
});

playAgain.addEventListener("click", () => {
  // alert("!!");
  document.location.reload(true);
});
