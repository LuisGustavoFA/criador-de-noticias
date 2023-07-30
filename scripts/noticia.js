const urlParams = new URLSearchParams(window.location.search);

document.querySelector(".conteudo_titulo").innerHTML = urlParams.get("tituloNoticia");
document.querySelector(".conteudo_texto").innerHTML = urlParams.get("textoNoticia");

if (urlParams.get("urlImagem").length > 9 || urlParams.get("urlBanner").length > 9 ) {
  document.querySelector("header").style.backgroundImage = `url(${urlParams.get("urlBanner")})`;
  document.querySelector(".conteudo_imagem").src = urlParams.get("urlImagem");
}