/*
- 

- 
- Os links da navegação (só os links, não os elementos de lista)
- Os 4 "Autor:" e "Data:" em negrito nos dois posts' */

/*Os links da navegação (só os links, não os elementos de lista */
var link=document.querySelectorAll('.elementos_nav > a')

for(var i =0;i<link.length;i++){
    var nomeLink=link[i].innerHTML
    console.log(nomeLink)
}

var titulo=document.getElementById('titulo3')
console.log(titulo)
/*O link dentro do texto do primeiro post */
var elementosPimeiroPost=document.querySelector(".primeiroPost")
console.log(elementosPimeiroPost)
/*A palavra em negrito dentro do texto do segundo post */
var negrito=document.querySelector('.post-texto > strong')
 console.log(negrito)
/*- O input de nome do formulário */
 var form=document.querySelector('#nome')
 console.log(form)

 /*Os links da lista de redes no final da página */
 var redes=document.querySelectorAll('footer > .lista_redes > li > a')
 console.log(redes)
 function imprimir(){
    for(var i=0; i<redes.length;i++)
    console.log(redes[i].innerHTML)
const cotatador= ()=> console.log(i)
cotatador()
 }
 imprimir();

 