var number = "0"
var sumArray=[]
var answer = ""

$('.number').on('click', function(evt){
  clickNumber(evt.target.value);
});
$('.operator').on('click', function(evt){
  clickOperator(evt.target.value);
});
$('#equals').on('click', function(evt){
  clickEquals();
});
$('.clear').on('click', function(evt){
  if(evt.target.value=="CE"){
    number="0"
    display(number)
    preview(sumArray.join(""))
  }else if(evt.target.value=="AC"){
    number="0";
    sumArray.length = 0;
    answer=""
    display(number)
    preview("")
  }
});

function clickNumber(n){
  number = number==="0" ? n : number+n;
  display(number)
  preview(sumArray.join("")+number)  
}

function clickOperator(o){
  if(number!=="0") sumArray = sumArray.concat([number])
  if(number==="0" && answer!=="") sumArray = [answer.toString()];

  if( sumArray.length>0 && 
     typeof sumArray[sumArray.length-1] === 'string' &&
     !sumArray[sumArray.length-1].match(/[0-9]/g) ) 
    sumArray.length = sumArray.length-1;
  
  if(sumArray.length>0 || o==="-"){
    sumArray = sumArray.concat([o])
    display(o)
  }
  
  number="0";
  preview(sumArray.join(""))
}

function clickEquals(){
  sumArray = sumArray.concat([number])
  try{
    answer = eval(sumArray.join("")); 
    if(typeof answer!=="number") answer="ERROR"
    preview(sumArray.join("") + "=" + answer)
  }catch(e){
    answer="ERROR"
    preview("")
  }
  display(answer)
  sumArray.length=0
  number="0";
}


function display(str){
   $('#display').val(str);
}
function preview(str){
   $('#preview').val(str);
}


$('.solar').on('mousedown', function(e){
  $('.screen').fadeTo(1000, 0.001)
})
$('.solarstrip').on('mouseout', function(e){
  $('.screen').fadeTo('fast', 1)
})
$(document).mouseup(function(event) {
   $('.screen').fadeTo('fast', 1)
});