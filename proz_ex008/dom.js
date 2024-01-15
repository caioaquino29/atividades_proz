console.log('Olá, mundo!!')

const texto= window.document.getElementsByClassName('texto-simples')
console.log(texto)
const paragrafos = document.querySelectorAll("p")
console.log(paragrafos)
const segundoTitulo= document.querySelector('div h2')
console.log(segundoTitulo)
const listaItens= document.querySelectorAll('.lista-item')
function motraLista(lista){
    for(var i=0;i<lista.length; i++){

      console.log(lista[i])
}}
motraLista(listaItens)


