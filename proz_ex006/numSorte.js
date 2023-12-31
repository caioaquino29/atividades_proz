/*Acesse o site OneCompiler (Link em anexo), copie e cole o array 'numerosDaSorte', e logo em seguida escreva o código necessário para avaliar cada elemento do array e imprimir uma frase seguindo algum dos seguintes três modelos:
- X é par e menor que 50
- X é menor que 50
- X é maior que 50

numerosDaSorte = [37, 14, 26, 5, 94, 87] */ 


function avaliarNumSorte(numerosDaSorte){
    
    for(var i=0; i<numerosDaSorte.length;i++){
        /*loop com array numerosDaSorte */

      if(numerosDaSorte[i]%2==0 && numerosDaSorte[i]<50)/*se número for par e menor que 50*/{
        
                console.log(`Números da sorte que são **PAR e **MENOR que 50.......= ${numerosDaSorte[i]} `)
     }else if(numerosDaSorte[i]>50)/*menor que 50*/{
                console.log(`Números da sorte que são  **MAIOR que 50.....= ${numerosDaSorte[i]} `) 
     }else{
                console.log(`Números da sorte que são  **MENOR que 50....= ${numerosDaSorte[i]} `)
        }
    ;}
};

let numerosDaSorte = [37, 14, 26, 5, 94, 87]; /*um variavel conjunto de número da sorte  */
avaliarNumSorte(numerosDaSorte); /*chamndo a funcção  */

let  fatorial = x => x==0 ? 1 : x*fatorial(x-1)
console.log(fatorial(21))
