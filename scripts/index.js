function criaNoticia() {
  const urlBanner = document.getElementById("entrada_banner").value;
  const tituloNoticia = document.getElementById("entrada_titulo").value;
  const textoNoticia = document.getElementById("entrada_texto").value;
  const urlImagem = document.getElementById("entrada_imagem").value;
  const submit = document.getElementById("entrada_enviar");

  window.location.assign(`noticia.html?urlBanner=${urlBanner}&tituloNoticia=${tituloNoticia}&textoNoticia=${textoNoticia}&urlImagem=${urlImagem}`);
}