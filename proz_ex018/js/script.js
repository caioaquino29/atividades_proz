// Seleção de elementos
const pendenciaForm = document.querySelector('#pendencia-form');
const pendenciaInput = document.querySelector('#pendencia-input');
const pendenciaLista = document.querySelector('#pendencia-lista');
const editarForm = document.querySelector('#editar-form');
const editarInput = document.querySelector('#editar-input');
const cancelarEditBtn = document.querySelector('#cancelar-editar-btn');
let valorAntigoInput;

 


//Funções 
const salvePendencia = (text) =>{
    //fazendo parte do HTML dinamico atraves do javaScript...
    const pendencia = document.createElement('div');
    pendencia.classList.add('pendencia');

    const pendenciaTitulo1 = document.createElement('h3');
    pendenciaTitulo1.innerText = text;
    pendencia.appendChild(pendenciaTitulo1)
    
    const feitoBtn = document.createElement('button');
    feitoBtn.classList.add('finalizar-pendencia');
    feitoBtn.innerHTML = `<i class="fa fa-check"></i>`;
    pendencia.appendChild(feitoBtn);

    const editarBtn = document.createElement('button');
    editarBtn.classList.add('editar-pendencia');
    editarBtn.innerHTML = `<i class="fa fa-pen"></i>`;
    pendencia.appendChild(editarBtn);

    const removerBtn = document.createElement('button');
    removerBtn.classList.add('remover-pendencia');
    removerBtn.innerHTML = `<i class="fa fa-trash"></i>`;
    pendencia.appendChild(removerBtn);

    pendenciaLista.appendChild(pendencia)

    pendenciaInput.value = ''
    // estou deixado input fazio para ficar mais facio digitar algo novo....
    pendenciaInput.focus();
    //para focar....
}
const alternaFormulario = () => {
    editarForm.classList.toggle('esconder');
    pendenciaForm.classList.toggle('esconder')
    pendenciaLista.classList.toggle('esconder')

}
const atualizarPendencia = (text) => {
    const pendencia = document.querySelectorAll('.pendencia');

    pendencia.forEach((pendencia) => {
        let pendenciaTitulo = pendencia.querySelector('h3');
        if(pendencia.innerText===valorAntigoInput){

            pendenciaTitulo.innerText = text
        }
    })
}

//Eventos
pendenciaForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    // O preventDefault() é um método que pertence ao objeto Event,  Esse método permite cancelar o comportamento padrão de um evento, ou seja, impedir que a ação normalmente associada ao evento aconteça. Isso é útil para ter mais controle sobre o fluxo de eventos e evitar ações indesejadas ou conflitantes.

    
    const inputValue = pendenciaInput.value;
    // estou pegando o texto digitado em adicinar tarefas e salvando na variavel inputValue(valor do input)...

    if(inputValue){
        salvePendencia(inputValue)
        // O saveTodo() é uma função que pode ser usada para salvar uma tarefa (todo) em um sistema de gerenciamento de tarefas
    }

})
document.addEventListener('click', (e) =>{

    const targetElement = e.target;
    //  Essa propriedade permite acessar o elemento que disparou o evento, ou seja, o elemento que recebeu a interação do usuário. Isso é útil para saber qual elemento foi afetado pelo evento e realizar alguma ação sobre ele.

    const parenteProximoEl =  targetElement.closest("div");
    // O método closest() é uma função que retorna o elemento ancestral mais próximo que corresponde a um seletor. 
    let pendenciaTitulo;
    // Vou salavar texto do h3 da div (.pendencia)  em minha variavel pendenciaTitulo

    if(parenteProximoEl && parenteProximoEl.querySelector('h3')){
        pendenciaTitulo = parenteProximoEl.querySelector('h3').innerText;
        // errro acima

    } if(targetElement.classList.contains('finalizar-pendencia')){
        parenteProximoEl.classList.toggle('feito')
        // aqui to adicinando ou removendo o seletor css nome .feito que dá risco por cima da frase 

    } if(targetElement.classList.contains('remover-pendencia')){
        parenteProximoEl.remove()
        //aqui simplimente removendo tag criada com tudo...

    } if(targetElement.classList.contains('editar-pendencia')){

      alternaFormulario(); 

      editarInput.value = pendenciaTitulo;

      valorAntigoInput = pendenciaTitulo;

    }
})
cancelarEditBtn.addEventListener('click', (e) =>{

    e.preventDefault();

    alternaFormulario();
    
})
editarForm.addEventListener('submit', (e) => {
    
    e.preventDefault()
    const valorEditadoInput = editarInput.value
    if(valorEditadoInput){
        atualizarPendencia(valorEditadoInput);
    }
    alternaFormulario();
    
})