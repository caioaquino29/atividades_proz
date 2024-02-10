let elementoClicado = document.getElementById('elemento-clicado');
let botaoTempo = document.getElementById('botao-tempo')
let tempo = document.getElementById('tempo');
let inputBox = document.querySelector('#inp'); 
let keyText = document.querySelector('#key-text');
let codeText = document.querySelector('#code-text');
let quadrado = document.querySelector('#quadrado');
let distanciaDaEsquerda = 0

// eventos.....
// timeStamp represeta quantidade de milissegundos desde a renderização da pagina até o momento em que fizemos click no botão 
botaoTempo.addEventListener('click',(evento) => {
    console.log(evento.timeStamp);
    botaoTempo.innerText = evento.timeStamp/1000


});
 
// em situação reais no lucgar de Document é recomendavel usar um unico elemento ou apenas um pai com os elementos filhos que queremos capturar
document.addEventListener('click',function(e){
    console.log(e.target)
    elementoClicado.innerText = e.target.id
});


inputBox.addEventListener('click', (event) =>{
    console.log(event.target)
    console.log(event.target.value)
    event.target.style.color ='red'
})
// keypress Tipo de evento que só reconhece teclas de letras, números ou pontuação, ou seja, desconsidera teclas como Shift, Alt, setas 

// keyup após acinar ou precinar e soltar será disparado evento
document.addEventListener('keyup',(e =>{
    console.log(e)
    keyText.innerText = e.key
    codeText.innerText = e.code
}));
// keydown quando é precinada 
document.addEventListener('keydown', (e) =>{
    
    if(e.code==='ArrowRight'){
        console.log('Apertou a seta á direita')
        distanciaDaEsquerda = distanciaDaEsquerda + 10;
        quadrado.style.left = distanciaDaEsquerda +'px'
        console.log(distanciaDaEsquerda)
    } 
    if(e.code=='ArrowLeft'){
        
         if(distanciaDaEsquerda>0&&distanciaDaEsquerda!=0){
            distanciaDaEsquerda = distanciaDaEsquerda -10;
            quadrado.style.left = distanciaDaEsquerda +'px'
            console.log(distanciaDaEsquerda)
    }}
        
})