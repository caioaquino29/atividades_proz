let maniH1= document.querySelector('#titulo');
let maniDiv= document.querySelector('div');
let maniP= document.querySelector('p');

//Agora, vamos usar o método contains(). Ele verifica se um elemento possui ou não uma determinada classe e retorna um valor booleano.
let inputNewClass= maniP.
classList.contains('frase-bisque')
console.log(inputNewClass)

//Para adicionar uma classe ao nosso elemento, vamos usar o método add(). Ele recebe como argumento uma string com o nome da classe que queremos adicionar.
maniP.classList.add('frase-overline');

//Para remover classes de um elemento, basta seguir os exemplos anteriores, mas aplicando o método remove().

//Além disso, a primeira execução do método toggle() verifica se o elemento possui a classe frase-bisque. Após confirmar essa ausência, o método a adiciona.
maniP.classList.remove('frase-bisque')

//Considere o método toggle() como um interruptor que nos permite alternar facilmente entre add() e remove()
maniP.classList.toggle('frase-bisque')

// A segunda execução do método toggle() faz a mesma verificação, mas dessa vez o elemento possui a classe, então o método a remove.
maniP.classList.toggle('frase-bisque')

// alterando uma  propiedade por vez...i
maniH1.style.color='blue';
//alterando varias propiedades de uma só vez...

//outra forma de atribuir CSS... 
maniH1.setAttribute('style','font-family:Arial;text-align:center');

function clique(){
    maniDiv.classList.toggle('content-light');
    maniP.classList.toggle('frase-bisque');
    
    maniH1.style.cssText='color:red;'+'background-color:yellow;'+'border:3px solid magenta;'+'width:500px;'+'margin:50px auto;'


};


//css(maniDiv, {background: 'yellow', border: 'solid 1px red', width:'300px',hiethg:'300px'});








/*
 CSS 
background
background-attachment
background-color
background-image
background-position
background-repeat
border
border-bottom
border-bottom-color
border-bottom-style
border-bottom-width
border-color
border-left
border-left-color
border-left-style
border-left-width
border-right
border-right-color
border-right-style
border-right-width
border-style
border-top
border-top-color
border-top-style
border-top-width
border-width
clear
clip
color
cursor
display
filter
float
font
font-family
font-size
font-variant
font-weight
height
left
letter-spacing
line-height
list-style
list-style-image
list-style-position
list-style-type
margin
margin-bottom
margin-left
margin-right
margin-top
overflow
padding
padding-bottom
padding-left
padding-right
padding-top
page-break-after
page-break-before
position
stroke-dasharray
stroke-dashoffset
stroke-width
text-align
text-decoration
text-indent
text-transform
top
vertical-align
visibility
width
z-index
 */