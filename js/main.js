
// *Botão do card
const btn = document.querySelector('.botao-confirmar');
const textoBtn = document.getElementById('texto-botao');

// *Seta do card
const setaVoltar = document.querySelector('.seta-voltar');

// *Textos do card
const produtoTitulo = document.querySelector('.produto-titulo');
const produtoTexto = document.querySelector('.produto-texto');

// *Área de avaliação
const reviewProduto = document.querySelector('.produto-review');

btn.addEventListener('click', () => {
    textoBtn.textContent = 'Enviar';
    setaVoltar.classList.remove('hidden');
    produtoTitulo.innerHTML = 'Deixe um comentário';
    produtoTexto.innerHTML = 'Conte sobre o motivo da sua avaliação';
    reviewProduto.classList.add('hidden');
})
