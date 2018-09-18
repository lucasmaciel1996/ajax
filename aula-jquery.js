
$("h1").mouseenter(function()
{
   var cor=$("#cor").val();
        
  $(this).css("color",cor);
});

$("h1").mouseleave(function()
{
  $(this).css("color","black");
});

$("#aparece").click(function()
{
  $("h2").slideUp();
});

$("#aparece").dblclick(function()
{
  $("h2").slideDown();
});

var selcor =function()
{
  var cor =$(this).css('background-color');
  $("#cor-sel").css('background-color',cor);
  
}

//$("#gera-tbl").click( function()
$("#seletor").change (function()
{
   var table =$("#table-cores");
   var cor="";
   var r=$(this).val();
   
   table.empty();

  for (var b=0; b<=255; b+=10)
  {
    var tr=$("<tr></tr>");
    // console.log(tr);
    
    for(var g=0; g<=255; g+=10)
     {
          var cor="rgb("+r+","+b+","+g+")";
         // console.log(cor);
          
          var td = $('<td title="'+cor+'">'+cor+'</td>').css('background-color',cor);
          //console.log(td);
          
          td.click(selcor); 
          
          tr.append(td);
         
     }
        table.append(tr);
   
          
  }
 
}); 

$("td").click(function()
{
  alert('teste');

});

