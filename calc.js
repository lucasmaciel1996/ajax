//Somar

function mult()
{
  var num1 = document.getElementById("n1");
  var num2 = document.getElementById("n2");
  var visor =document.getElementById("visor");
  var op =document.getElementById("btn-soma");
  
  var res = parseInt(num1.value) + parseInt(num2.value);
  
  visor.innerHTML=res; 
  

}

function calcular ()
{
  var num1 = document.getElementById("n1");
  var num2= document.getElementById("n2");
  var visor= document.getElementById("visor")
  var op = "2";
  var res=0;
   
  switch (parseInt(op)){
    case 1:
      console.log("Somar");
      var res = parseInt(num1.value) + parseInt(num2.value);
       visor.innerHTML=res; 
    break;
     case 2:
      console.log("div");
      var res = parseInt(num1.value) / parseInt(num2.value);
       visor.innerHTML=res; 
    break;
     case 3:
      console.log("mult");
      var res = parseInt(num1.value) * parseInt(num2.value);
       visor.innerHTML=res; 
    break;
     case 4:
      console.log("sub");
      var res = parseInt(num1.value) - parseInt(num2.value);
       visor.innerHTML=res; 
    break;
    
    default :
     console.log("erro");
  
  }
  
}  
 function visor()
 {
   
   
 }






