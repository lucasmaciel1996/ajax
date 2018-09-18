
       var nome ='Lucas';//String
       var peso = 45.9;//Floaat 
       var idade = 23; //inteiro
       var acordado = true; //Boolean
       var click= true;
            
      //alert("Ola turma "+nome+":)!");
      console.log(nome.toUpperCase());
      
     // location.href="https://www.google.com";
     
     
     function mudar()
     {
        var texto = document.getElementById("texto");
       //console.log(texto);
     
        texto.innerHTML="<h1>Oi galera</h1>";
     }
       function getinput()
     {
         var input = document.getElementById("valor");
         var texto = document.getElementById("texto");
       //console.log(texto);
     
        texto.innerHTML=input.value;
     }
     function uppercase()
     {
         var input = document.getElementById("valor");
         var texto = document.getElementById("texto");
       //console.log(texto);
       
         var letra = input.value.charAt(0);
         var resto = input.value.slice(1);
         
         texto.innerHTML=letra.toUpperCase()+resto.toLowerCase();
     
     }
     
     function limpar()
     {   
         var input = document.getElementById("valor");
         var texto = document.getElementById("texto");
       //console.log(texto);
         
        texto.innerHTML=" ";
        input.innerHTML=" ";
     }
