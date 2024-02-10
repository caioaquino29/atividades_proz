const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const perfilDados = document.querySelector('#link-perfil-dados'); 
console.log(perfilDados)




linkPerfil.addEventListener("click", ()=> {
  navPerfil.style.display = "block"
})

document.addEventListener("keyup",(e) => {
  console.log(e.key)
  console.log(e.code)
  


  if(navPerfil.style.display=='block'){
    if(e.code=='Numpad1'){
      perfilDados.click()
  }else if(e.code=='Backspace'){
    navPerfil.style.display = "none"

  }

  }else if(e.code=='Numpad1'){
     console.log('ok')
     navPerfil.style.display = "block"
     
    }

})