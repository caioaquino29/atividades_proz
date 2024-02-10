let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");


let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};


quantidadeSubtotal.innerText = subtotalInfo.quantidade
valorSubtotal.innerText = subtotalInfo.valor;

// variaveis 

let btnAdicionar = document.querySelector('#btn-adicionar-produto-01')
let btnSubtrair = document.querySelector("#btn-subtrair-produto-01")
let quantidadeDeProduto = document.querySelector('#quantidade-produto-01')
quantidadeDeProduto.value='1'



// função
function acrescentarUm(){


  quantidadeDeProduto.value = Number(quantidadeDeProduto.value)+1;
  
  


}

function subtrairUm(){

  if(quantidadeDeProduto.value>0){

  quantidadeDeProduto.value = Number(quantidadeDeProduto.value)-1
}
}
//  evento

btnAdicionar.addEventListener("click", () => {

  subtotalInfo.quantidade+=1
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  acrescentarUm()} ) ;


btnSubtrair.addEventListener('click', () => {

  if(subtotalInfo.quantidade>1){
  subtotalInfo.quantidade-=1
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";subtrairUm()  }});





