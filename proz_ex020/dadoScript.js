const retornoIndex = document.querySelector('#voltar-link')
console.log(retornoIndex)

document.addEventListener('keyup',(e) =>{

    console.log(e.key)
  console.log(e.code)
    if(e.code=='Backspace'){
        retornoIndex.click()
    }
})