let elementoH1= document.querySelector('h1');
console.log(elementoH1)
console.log(elementoH1.innerText)/* note que estou usando notação de ponto "." [ou dot notation]para acessar as propidade da variavel atraves innerText{ essa propiedade acessar somente o texto do elemento em questão} */
let elementoMain = document.querySelector('main')
console.log(elementoMain)
console.log(elementoMain.innerText)
console.log(elementoMain.innerHTML)
elementoH1.innerText='Novo título com Javascript'
elementoMain.innerHTML=`
<h2>Novo Subtítulo</h2>
<ul>
  <li>Elememto de lista javascript 01</li>
  <li>Elememto de lista javascript 02</li>
  <li>Elememto de lista javascript 03</li>
</ul>
`/* Como orientação geral, é recomendado usar a propriedade innerText quando queremos mudar apenas o texto de um elemento HTML que não possui elementos filhos, pois, caso existam, eles serão substituídos pelo novo texto. */
