const entrada = document.getElementById("entrada_enviar");
const alerta = document.getElementById("alerta");
const teste = document.getElementById("teste");

teste.addEventListener("click", ()=>{
  window.location.assign("noticia.html?urlBanner=TESTE&tituloNoticia=TESTE&textoNoticia=TESTE&urlImagem=TESTE");
})

function criaNoticia() {
  const urlBanner = document.getElementById("entrada_banner").value;
  const tituloNoticia = document.getElementById("entrada_titulo").value;
  const textoNoticia = document.getElementById("entrada_texto").value;
  const urlImagem = document.getElementById("entrada_imagem").value;

  if (document.getElementById("entrada_banner").value != ""
    && document.getElementById("entrada_titulo").value != ""
     && document.getElementById("entrada_texto").value != ""
      && document.getElementById("entrada_imagem").value != "") {

    window.location.assign(`noticia.html?urlBanner=${urlBanner}&tituloNoticia=${tituloNoticia}&textoNoticia=${textoNoticia}&urlImagem=${urlImagem}`);

  } else {
    console.error("Todos os inputs devem ser preenchidos.");
    exibeErro(1500);
    desabilitaEntrada(1750);
  }
}

function exibeErro(duracao) {
  alerta.style.display = "flex";
  alerta.style.opacity = 1;

  setTimeout(() => {
    alerta.style.opacity = 0;

    setTimeout(() => {
      alerta.style.display = "none";
    }, 250);

  }, duracao);
}

function desabilitaEntrada(duracao) {
  entrada.disabled = true;
  setTimeout(() => {entrada.disabled = false}, duracao);
}