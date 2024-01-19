let titulo = document.querySelector('h2');
let btn = document.querySelector('button');
let usuarioInput = document.querySelector('#login-usuario');
let senhaIN = document.querySelector('#login-senha')
let textErr = document.querySelector('.error-text')
const nomeDoUser ='CaioAquino'
// style 
titulo.style.fontSize='50px';

btn.style.backgroundColor='blue';

// classList

senhaIN.classList.remove('correct')
textErr.classList.toggle('visible')
function validar(text){
    if(text==='Caio'){
        usuarioInput.classList.toggle('correct')
        alert('Seu nome de usuario está correto!!')

    }else if(text===''){
        alert('digite seu nome de usuario' )
        usuarioInput.classList.remove('error')
        usuarioInput.classList.remove('correct')
    }
    else{
        usuarioInput.classList.toggle('error')
        textErr.classList.toggle('visible')
        
    }
   usuarioInput.value='';
   usuarioInput.focus();

}
usuarioInput.addEventListener('click', (e) => {
    e.preventDefault();
    
    
    usuarioInput.classList.remove('error')
    textErr.classList.remove('visible')
  

})

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    const valorDoInput = usuarioInput.value;
    validar(valorDoInput)
})










