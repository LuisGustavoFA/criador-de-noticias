const alerta = document.getElementById("alerta");

function criaNoticia() {
  const urlBanner = document.getElementById("entrada_banner").value;
  const tituloNoticia = document.getElementById("entrada_titulo").value;
  const textoNoticia = document.getElementById("entrada_texto").value;
  const urlImagem = document.getElementById("entrada_imagem").value;
  const entrada = document.getElementById("entrada_enviar");

  if (document.getElementById("entrada_banner").value != ""
    && document.getElementById("entrada_titulo").value != ""
     && document.getElementById("entrada_texto").value != ""
      && document.getElementById("entrada_imagem").value != "") {

    window.location.assign(`noticia.html?urlBanner=${urlBanner}&tituloNoticia=${tituloNoticia}&textoNoticia=${textoNoticia}&urlImagem=${urlImagem}`);

  } else {
    console.error("Todos os inputs devem ser preenchidos.");
    exibeErro(1200);
  }

  function exibeErro(duracao) {
    alerta.style.display = "flex";
    alerta.style.opacity = 1;
    desabilitaEntrada(duracao + 250);

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
}