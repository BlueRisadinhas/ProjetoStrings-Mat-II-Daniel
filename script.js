const BotaoPalavras = document.querySelector('#botao-palavra');

BotaoPalavras.addEventListener('click', mostraPalavras); 

function mostraPalavras() {

    const texto = document.querySelector('#entrada-texto').value;

    const CampoResult = document.querySelector('#resultado-palavra');
    
    const palavraChave = processa(texto);

     CampoResult.textContent = palavraChave.join(", ");
}

    function processa(texto) {
    let palavras = texto.split(/\P{L}+/u);

    return palavras;
} 