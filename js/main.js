// *Botão do card
const btn = document.querySelector('.botao-confirmar');
const textoBtn = document.getElementById('texto-botao');

// *Seta do card
const seta = document.querySelector('.seta-voltar');

// *Textos do card
const produtoTitulo = document.querySelector('.produto-titulo');
const produtoTexto = document.querySelector('.produto-texto');

// *Área de avaliação
const reviewProduto = document.querySelector('.review-rating');
const reviewEstrelas = document.querySelectorAll('.remove');
const textArea = document.querySelector('.review-texto');
const estrelas = document.querySelectorAll('.review-rating i');

// *Textos originais
let tituloOld = produtoTitulo.innerHTML;
let textoOld = produtoTexto.innerHTML;
let btnOld = textoBtn.innerHTML;

// Funções usadas no event listener

// *Trocar os textos da descrição do produto e do botão
function trocarTextos () {
    textoBtn.textContent = 'Enviar';
    produtoTitulo.innerHTML = 'Deixe um comentário';
    produtoTexto.innerHTML = 'Conte sobre o motivo da sua avaliação';
}

// *Remover estrelas e adicionar área para texto
function removerEstrela() {
    for (let el of reviewEstrelas) {
        el.classList.add('hidden');
    }
    textArea.classList.remove('hidden');
}

// *Esconder textarea e mostrar avaliação
function setaVoltar() {
    seta.classList.add('hidden');
    textArea.classList.add('hidden');
    for (let el of reviewEstrelas) {
        el.classList.remove('hidden')
    }
}

// *Voltar os textos para o original
function textosOriginais() {
    textoBtn.innerHTML = btnOld;
    produtoTitulo.innerHTML = tituloOld;
    produtoTexto.innerHTML = textoOld;
}

// *Percorrer a lista de estrelas
estrelas.forEach((estrela, indice) => {
    estrela.addEventListener('click', () => {
        estrelas.forEach((estrela, indice2) => {
            indice >= indice2 ? estrela.classList.add('active') : estrela.classList.remove('active');
        })
    })
})

// Event listeners

// *Eventos para acontecer ao clicar no botão
btn.addEventListener('click', () => {
    seta.classList.remove('hidden');
    trocarTextos();
    removerEstrela();
})

// *Eventos quando clicar na seta de voltar
seta.addEventListener('click', () => {
    setaVoltar();
    textosOriginais();
})
