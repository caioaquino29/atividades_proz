let linkProz = document.querySelector('#link-proz');
let btnSubmit = document.querySelector('button[type=submit]');
let paraSpan = document.querySelector('span');
let paraP = document.querySelector('p');

// A função preventDefault() pode ser traduzida como "impedir o padrão". Ela serve para desativar o comportamento padrão de algum elemento HTML.




linkProz.addEventListener('click',(e)=>{
   e.preventDefault()
   alert('não foi possível  acessar link')
   
});

btnSubmit.addEventListener('click', (e) =>{
    e.preventDefault();
    alert('não foi possível  enviar: \n o formulário');
    comfirmação();
    pergunta();
})

function comfirmação(){
    var x;
    var resposta = confirm('Escolha um valor!!..');
    if(resposta==true){
        x='você precinou OK....'
        paraSpan.style.color = 'green'
        paraSpan.innerHTML = x
    }else{
        x= 'você precinou o cancelar...'
        paraSpan.style.color = 'red'
        paraSpan.innerHTML = x

    }
   
}
 function pergunta(){
    let y;
    let nome = prompt('Digite seu nome:')
    if(nome=='Caio'){
        y = `acesso permitido senhor ${nome}.....`
        paraP.style.backgroundColor = 'green'
        paraP.style.color = 'white'
        paraP.innerHTML = y
        
    }else{
        y = `acesso negado senhor ${nome}.....`
        paraP.style.backgroundColor = 'red'
        paraP.style.color = 'white'
        paraP.innerHTML = y
        
 }}