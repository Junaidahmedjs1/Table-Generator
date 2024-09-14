var value_show = document.querySelector("#value-show");
var table_input = document.querySelector("#Userinput-1");

function Table_gen(){
    value_show.innerHTML = '';

    for(var i=1; i<=10; i++){
    var tablevalue= table_input.value;
    value_show.innerHTML +=`<div> ${tablevalue} *  ${i}  = ${tablevalue *  i} <div/>`;
    }
  
}
