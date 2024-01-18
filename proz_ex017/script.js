let titulo = document.querySelector('h2');
let btn = document.querySelector('button');
let usuarioIN = document.querySelector('#login-usuario');
let senhaIN = document.querySelector('#login-senha')
let textErr = document.querySelector('.error-text')
const nomeDoUser ='CaioAquino'
// style 
titulo.style.fontSize='50px';

btn.style.backgroundColor='blue';

// classList
usuarioIN.classList.remove('error')
senhaIN.classList.remove('correct')
textErr.classList.toggle('visible')


usuarioIN.addEventListener('click',valid)


function valid(){
if(usuarioIN){
    usuarioIN.classList.add('correct')
}else{
    usuarioIN.classList.add('error')
}
}








