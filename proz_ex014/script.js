// Atividade: Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico.

// Variaveis usadas nesse script.js
const elementoPai = document.querySelector('body');
let createImg = document.createElement('img');
let createDiv=document.
createElement('div');





// criei uma tag div para comportar meus aquivo HTML via JavaScript
createDiv.id='container'
// adicione um título simples ao site com o id 'titulo', e um elemento que represente um produto à venda.
createDiv.innerHTML=`
    <h1 id='titulo'>
      Samsung apresenta a linha Galaxy Book4, série de notebooks mais inteligente
    </h1>
    <small class='pequeno1'>16/01/2024</small>
    <h3 class='sub-titulo'>
      A linha Galaxy Book4 combina design ultra portátil, desempenho aprimorado e conectividade ilimitada para redefinir a experiência do PC e capacitar os usuários
    </h3> 
    <p class='texto'>
       A linha Galaxy Book4 está equipada com um processador inteligente projetado para oferecer um desempenho poderoso que maximiza a produtividade. <br> A mais recente linha incorpora o novo processador <strong> Intel® Core™ Ultra 9</strong> que integra uma unidade de processamento central (CPU) mais rápida, uma unidade de processamento gráfico (GPU) de alto desempenho e uma <strong> unidade de processamento neural (NPU) recentemente adicionada </strong>, tudo em um único pacote2. Junto com o programa de aceleração de IA para PC da Intel, que envolve mais de 100 fornecedores independentes de software (ISV), o novo processador está introduzindo novos recursos de IA e contribuindo para o aumento da produtividade na linha Galaxy Book4. <br> Além disso, a <strong> GPU para laptop NVIDIA® GeForce RTX™ 40703 </strong> eleva a experiência do usuário a um patamar superior.
    </p>
    <div id='img-container'></div>
    <div id='sub-container'></div>
    `;

//Coloque minha div dentro do elemento pai que no caso é Body que capiturei na variavel elementoPai
elementoPai.appendChild(createDiv)

// essas dua variaveis 'não pode está antes de estabelecer a div criada(let createDiv) dentro do elementoPia o body' pois as duas div que capiturei aqui só exite no createDiv.innerHTML...
let elementoImgPai=document.querySelector('#img-container');
let elementoSubPai=document.querySelector('#sub-container');


// Crie uma tag img e especifiquei src alt e id do meu elemento criado e coloque dentro da div(#img-container) que fiz atravez innerHTML no elemento criado createDiv

createImg.src ='imagem/Galaxy-Book4-Series_main1.jpg'
createImg.alt ='Notbook Galaxy Book 4 pro'
createImg.id ='imagem'
elementoImgPai.appendChild(createImg)
elementoImgPai.appendChild(createImg)

// Já aqui só manipulei a outra tag  div(#sub-container) que fiz atravez innerHTML no elemento criado createDi
elementoSubPai.innerHTML=`
   <p class='img-texto'>
       Imagem meramente ilustrativa  
   </p>
   <button onclick="abrirPopup()" class="btn-compra" '>Buy</button>
   <span class='span-p'> 
       <small class='pequeno2'>Galaxy Book4 pro</small> valor: R$ 7400,00
   </span>
   <table>
     <thead class="haeT">
        <tr>
            <th class="ath">Especificações de produtos</th>
            <td class="atd">	Galaxy Book4 Pro (16 polegadas)</td>
        </tr>
     </thead class='bodT'>
        <tbody>
            <tr>
                <th >Dimensões </th>
                <td>12,3 x 223,8 x 11,6mm 355,4 x 250,4 x 12,5mm</td>
            </tr>
            <tr>
                <th>Tela</th>
                <td>Tela touch AMOLED de 16 polegadas 16:10, WQXGA+ (2880×1800),
                    400nits, VRR de 48~120Hz, gama de cores 120% DCI-P3</td>
            </tr>
            <tr>
                <th>Gráfico</th>
                <td>GPU para laptop NVIDIA® GeForce RTX™ 4070 com 8 GB GDDR6
                    GPU para laptop NVIDIA® GeForce RTX™ 4050 com 6GB GDDR6</td>
            </tr>
            <tr>
                <th>Processador</th>
                <td>Intel® Core™ Ultra 9 / Core™ Ultra 7 (Edição Intel® Evo™)</td>
            </tr>
            <tr>
                <th>Memoria/th>
                <td>16GB/32GB/64GB (LPDDR5X)</td>
            </tr>
            <tr>
                <th>Armazenamento</th>
                <td>SSD (PCle) de 512GB/1TB/2TB, Slot de expansão</td>
            </tr>
            <tr>
                <th>Porta</th>
                <td>Thunderbolt™ 4 (2), USB tipo A, porta HDMI 2.1 (suporta 8K@60, 5K@120), Micro SD, fone de ouvido/microfone</td>
            </tr>
            <tr>
                <th>Bateria</th>
                <td>63Wh (Típico)	76Wh (Típico)</td>
            </tr>
        </tbody>
       
       
     </table>`
//crie function para abrir janela popup...
function abrirPopup() { 
         elementoPai.classList.toggle('opacity'); 
         window.open('http://127.0.0.1:5500/proz_ex014/imagem/popup.html', 'popup', 'width=700, height=370, top=250, left=250, scrollbars=yes');
    };
    
       
       

