const botoes = document.querySelectorAll(".btn")
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))


// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront())

function filtrarLivros() {

  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  console.log(categoria)
  let livrosFiltrados = categoria == "disponivel"
    ? filtrarPorQuantidade()
    : filtrarPorCategoria(categoria)
  exibirLivrosNaTela(livrosFiltrados)
  if (categoria == 'disponivel') {
    const valorTotal = calcularValorTotal(livrosFiltrados)
    exibirValorTotalDosLivrosNaTela(valorTotal)
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorQuantidade() {
  return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosNaTela(valorTotal) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div >
  `
}