// ---------- VALIDAÇÃO USERNAME ---------- //

let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");




// -------------funções gerais -----------//

function togglePopup(input, label){
    // Motrar popup de campo obrigatorio.....
    input.addEventListener('focus', ()=> {
      label.classList.add('required-popup')
    
    })
//    ocultar popup de campo obrigatorio......
     input.addEventListener('blur', ()=>{
       label.classList.remove('required-popup');
     
    })
};

togglePopup(usernameInput, usernameLabel);

function etilizarInputCorreto(input, helper){
    helper.classList.remove('visible');
    input.classList.remove('error');
    input.classList.add('correct')

};
function etilizarInputIncoorreto(input,helper){
    helper.classList.add('visible');
    input.classList.add('error');
    input.classList.remove('correct')
};



// Validar valor do input


usernameInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor.length < 3){
        usernameHelper.innerText = 'Seu username presisar ter 3 ou mais caracteres';
    etilizarInputIncoorreto(usernameInput,usernameHelper) 
    formularioPrenchido.username = false;   
}else{
    etilizarInputCorreto(usernameInput,usernameHelper)
    formularioPrenchido.username = true;
}

});


// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.querySelector('#email');
let emailLabel = document.querySelector("label[for='email']");
let emailHelper =document.querySelector('#email-helper');


togglePopup(emailInput,emailLabel);


emailInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor.includes('@') && valor.includes('.com')){
        
        etilizarInputCorreto(emailInput,emailHelper)
        formularioPrenchido.email = true;
      
}else{
    emailHelper.innerText = 'Seu email presisar ter [ @ ]  e terminar [ .com ]';
    etilizarInputIncoorreto(emailInput,emailHelper)  
    formularioPrenchido.email = false;
   
}

});

// ---------- VALIDAÇÃO IDADE ---------- //
let idadeInput = document.querySelector('#idade');
let idadeLabel = document.querySelector("label[for='idade']");
let idadeHelper =document.querySelector('#idade-helper');

togglePopup(idadeInput,idadeLabel);

idadeInput.addEventListener('change',(e) => {
   
    let valor = parseInt(e.target.value);

    if(valor > 16){
        etilizarInputCorreto(idadeInput,idadeHelper)
        formularioPrenchido.idade = true;
    }else{
        idadeHelper.innerText = 'Só maior ou igual 16 anos '
        etilizarInputIncoorreto(idadeInput,idadeHelper)
        formularioPrenchido.idade = false;
    }
});
// ---------- VALIDAÇÃO SENHA ---------- //

let senhaInput = document.querySelector('#senha');
let senhaLabel = document.querySelector("label[for='senha']");
let senhaHelper =document.querySelector('#senha-helper');

togglePopup(senhaInput,senhaLabel);
senhaInput.addEventListener('blur',(e) => {
   
    let valor = e.target.value;

    if( valor.length == "" || valor.length < 6){
        senhaHelper.innerText = 'Crie uma senha forte tem que ter pelo menos 6 caracteres'
        etilizarInputIncoorreto(senhaInput,senhaHelper)
        formularioPrenchido.senha = false;
    }else{
        etilizarInputCorreto(senhaInput,senhaHelper)
        formularioPrenchido.senha =  true;
        
    }

});


// ---------- VALIDAÇÃO COMFIRMAÇÃO DE SENHA ---------- //

let confirmaSenhaInput = document.querySelector('#confirma-senha');
let confirmaSenhaLabel = document.querySelector("label[for='confirma-senha']");
let confirmaSenhaHelper =document.querySelector('#confirma-senha-helper');

togglePopup(confirmaSenhaInput,confirmaSenhaLabel);

confirmaSenhaInput.addEventListener('blur',(e) => {
    
    let valor = e.target.value;

    if( valor === senhaInput.value ){
        etilizarInputCorreto(confirmaSenhaInput,confirmaSenhaHelper)
        formularioPrenchido.confirmaSenha = true;
        
    }else{
        senhaHelper.innerText = 'Crie uma senha forte tem que ter pelo menos 6 caracteres'
        etilizarInputIncoorreto(confirmaSenhaInput,confirmaSenhaHelper);
        formularioPrenchido.confirmaSenha = false;
       
        
    }
    
});

// -----------BOTÃO SUBMIT-------------//

let btnSubmit = document.querySelector('button[type="submit"]');
let formularioPrenchido = {
 username: false,
 email: false,
 idade: false,
 senha: false,
 confirmaSenha: false
}

btnSubmit.addEventListener('click',(e) =>{
    if(formularioPrenchido.username == false || formularioPrenchido.email == false || formularioPrenchido.idade == false || formularioPrenchido.senha == false || formularioPrenchido.confirmaSenha == false ){
        e.preventDefault()
    }else{
        alert("Formulario enviado com sucesso!!!")
    }
})