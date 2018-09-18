function mudar()
{
  var painel = document.getElementById("painel");
  var letra = painel.innerHTML.charAt(0);
  var resto = painel.innerHTML.slice(1);
  
  painel.innerHTML =resto+letra;
}

function ligar ()
{
 setInterval(mudar,300);
}

function ligar2 ()
{
 setInterval(function(){
  var painel = document.getElementById("painel");
  var letra = painel.innerHTML.charAt(0);
  var resto = painel.innerHTML.slice(1);
  
  painel.innerHTML =resto+letra;
 },300);
}
