
function alerta(mensagem){
   for(var i =0; i<mensagem.length+1;i++){
        if(i<=2){
            console.log(mensagem[i])
        }else{
           return console.log('fim...')
        }
    }
}
let mensagem1=['1º Conexão feita com sucesso! ','2º Conexão feita com sucesso!','3º Conexão feita com sucesso!']
alerta(mensagem1)
