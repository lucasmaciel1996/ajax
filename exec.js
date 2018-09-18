 function leremail()
 {

   var  input = document.getElementById("email");
   var resposta =document.getElementById("resposta");
    
   var email = input.value.split('@');
  
   resposta.innertHTML="Conta:"+email[0]+"Email"+email[1];
  
 }
 
 function lerpalavra()
 { 
    var input =document.getElementById('palavras');
    var resposta =document.getElementById('resposta');
       
    var space = input.value.split(" ");
    console.log(space);
    
    var ini=0;
    var fim =space.length -1;
    
    for(ini=0; ini<=fim; ini++)
    {
     resposta.innerHTML += mudarpalavra(space[ini]) +" ";
    } 
 
 }
 function mudarpalavra(palavra)
 {
  var letra = palavra.charAt(0);
  var resto = palavra.slice(1);
  
  return letra.toUpperCase()+resto.toLowerCase();
 
 }
