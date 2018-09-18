//vetor

 var cidades = ["Curitiba","Pinhais","Colombo"];
 cidades.push("Araucaria");
 exibe();

 
 function exibe()
 {
  cidades.sort();
  
  var input = document.getElementById("lista");
   
  input.innerHTML= " "; 
  
    
  for (var i=0; i<=cidades.length -1; i++)
  {
    input.innerHTML +="<li>"+cidades[i]+ "</li>";
  }
 
  }
 
 function addcidade()
 {
   var texto = document.getElementById("cidade");
     
    var existe =false; 
    for (var i=0; i<=cidades.length -1; i++)
    { 
       if(cidades[i] == texto.value)
       {
        existe=true;
       }
      
    }
     if(existe== false)
     {
       cidades.push(texto.value);
       exibe();
     }else
     {
        alert("Cidade já Cadastrada");
     }
   
 }
