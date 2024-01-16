let elementoJavascript=document.createElement('li'); //Os métodos createElement() e appendChild() nos permitem criar elementos HTML no DOM e inseri-los no nosso site de forma dinâmica

elementoJavascript.innerText='JavaScript'
elementoJavascript.id='ling-js'
let jsDiv= document.createElement('div')
jsDiv.innerHTML=`
<h2 class='post-titulo'>JavaScript</h2>
<p class='post-texto'>JavaScript é linguagem de prgramação</p>`
//Os métodos createElement() e appendChild() nos permitem criar elementos HTML no DOM e inseri-los no nosso site de forma dinâmica

jsDiv.className='post-JavaScript'

console.log(jsDiv);
let listaLinguagens=document.querySelector('.lista-linguagens');
listaLinguagens.appendChild(elementoJavascript)
let postagemSec=document.querySelector('.postagens')
postagemSec.appendChild(jsDiv)


