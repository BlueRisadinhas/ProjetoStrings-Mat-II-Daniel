const BotaoPalavras = document.querySelector('#botao-palavra');

BotaoPalavras.addEventListener('click', mostraPalavras); 

function mostraPalavras() {
    const texto = document.querySelector('#entrada-texto').value;

    const CampoResult = document.querySelector('#resultado-palavra');
    
    const palavras = texto.split(" "); 

     CampoResult.textContent = palavras.join(", ");
}