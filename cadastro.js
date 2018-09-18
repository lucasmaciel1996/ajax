//Cadastro
//$(document).ready(function(){
 $(document).ready(function()
  {
    $("#btn-add").click(function()
    {
      var nome = $("#nome").val();
      var cidade =$("#cidade").val();
      //console.log(nome);
       var li = "<li>"+nome +"-"+cidade+"</li>";
       
       $("#lista").append(li);
      
  
     });
  });    
 
 
  
