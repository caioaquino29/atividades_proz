let inputEmail = document.getElementById('email');
let inputIdade = document.getElementById('idade');
let formulario = document.querySelector('form');

// Evento Descrição
// focus -- O elemento é focado pelo usuário.
// blur -- O elemento perde o foco do usuário.
// change -- O elemento teve seu valor alterado depois de perder o foco.

inputEmail.addEventListener('focus',() =>{
    inputEmail.style.background = 'lightgreen'
})
inputEmail.addEventListener('blur', (e) =>{
    e.target.style.background = ''
})
inputIdade.addEventListener('change',() =>{
    alert("Certeza que quer alterar seus dados?");
})
formulario.addEventListener('submit', () =>{
    
    alert('Dados enviado com sucesso!!!  ')

})

/*
Existe uma infinidade de eventos definidos para uso em JavaScript, abaixo podemos ver alguns dos principais e mais utilizados:

onBlur.......remove o foco do elemento
onChange........muda o valor do elemento
onClicko ........elemento é clicado pelo usuário
onFocuso......... elemento é focado
onKeyPresso ........usuário pressiona uma tecla sobre o elemento
onLoadcarrega........ o elemento por completo
onMouseOver..........define ação quando o usuário passa o mouse sobre o elemento
onMouseOut..............define ação quando o usuário retira o mouse sobre o elemento
onSubmit.................define ação ao enviar um formulário */