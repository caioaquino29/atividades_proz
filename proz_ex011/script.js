// Na sequência, realize a conexão entre o arquivo HTML e o arquivo JavaScript.No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista ordenada. 

let tituloH1=document.querySelector('.titulo')
let listaUl=document.querySelector('.lista')
let linkA=document.querySelector('#link')
let listaOl=document.querySelector('#lista-ordenada')



tituloH1.innerText='Revisão'
tituloH1.style.color='#F28D9F'
tituloH1.style.textAlign='center'
tituloH1.style.backgroundColor='#9BE2F2'
tituloH1.style.fontFamily='Arial'
tituloH1.style.width='200px'

listaUl.innerHTML=`
<li>Sobre que assuntos a <strong>Bíblia</strong> dá conselhos?</li><br>
<li>Quais são algumas perguntas que a <strong>Bíblia</strong>  responde?</li><br>
<li>O que você gostarai de aprender da <strong>Bíblia</strong> ?</li>`
listaUl.style.backgroundColor='#5FB6D9'
listaUl.style.width='400px'
listaUl.style.borderRadius='15px'
listaUl.style.padding='20px 30px'

linkA.innerText='Proz educação'
linkA.style.textDecoration='none'
linkA.style.backgroundColor='#D92555'


listaOl.innerHTML=`
<h2>Lições...</h2>
<li> Como a Bíblia pode ajudar você?</li> <br>
<li> A Bíblia nos dá esperança.</li><br>
<li> Será que você pode acreditar na Bíblia?</li>
`
listaOl.style.backgroundColor='#5FB6D9'
listaOl.style.width='400px'
listaOl.style.borderRadius='15px'
listaOl.style.padding='20px 30px'
listaOl.style.fontFamily='Arial'
listaOl.style.color='#D92555'
listaOl.style.fontWeight='bold'

