let display=document.querySelector('#display');
let btn=document.querySelector('.btn');
let contador=0;
let button=document.querySelector('div > .btn2');
let span=document.querySelector('div > span');
let section=document.querySelector('div > section');

btn.style.cssText+='width:100px; font-size:1.6em; ';
//O método addEventListener() é uma função que precisa de, no mínimo, dois argumentos para funcionar. O primeiro argumento é uma string que define o tipo de evento que acionará nossa função. No nosso exemplo, usaremos a string click. O segundo argumento deve ser uma função com o comportamento que queremos executar. No nosso exemplo, já declaramos nossa função na etapa anterior, portanto, basta escrever o seu nome sem os parênteses. Assim: botao.addEventListener("click", acrescentar);

button.addEventListener('mouseover',function(){
    //mostrar span 'mouseover' passar por cima o mause
    span.style.opacity='100'
});
button.addEventListener('mouseout',()=>{
    //ocultar span 'mouseout' mover fora com mouse
    span.style.opacity='0'
});

function fazerUmClick(){
    section.innerHTML='Fez <mark>um click </mark> simples!!'
    section.style.cssText+='font-size:1em; color:black;'
}
function fazerDoisClicks(){
    section.innerText='Fez um duplo click'
    section.style.cssText+='font-size:1.3em; color:blue;'
}

button.addEventListener('click',fazerUmClick);
button.addEventListener('dblclick',fazerDoisClicks);




btn.addEventListener('click',acrescentar)



function acrescentar(){
   contador++
   display.innerText=contador
   
   
}


