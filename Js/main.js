document.addEventListener('DOMContentLoaded', () => {
    const iconeCarrinhoDesktop = document.getElementById('icone-carrinho-desktop');
    const iconeCarrinhoMobile = document.getElementById('icone-carrinho-mobile');
    const iconeFecharCarrinho = document.getElementById('icone-fechar-carrinho');
    const carrinho = document.getElementById('carrinho');
    const btnConcluirCompra = document.getElementById('btn-concluir-compra');
    const listaProdutos = document.querySelector('.produtos');
    const msgCarrinhoVazio = document.getElementById('msg-carrinho-vazio');

    let quantidadeAtual = 1;

    iconeCarrinhoDesktop.addEventListener('click', () => {
        carrinho.style.display = 'block';
    });

    iconeCarrinhoMobile.addEventListener('click', () => {
        carrinho.style.display = 'block';
    });

    iconeFecharCarrinho.addEventListener('click', () => {
        carrinho.style.display = 'none';
    });

    btnConcluirCompra.addEventListener('click', () => {
        // Lógica para concluir a compra (a ser implementada)
        alert('Compra concluída!'); // Exemplo simples de mensagem de alerta
    });

    const btnQuantidadeMenos = document.getElementById('quantidade-menos');
    const btnQuantidadeMais = document.getElementById('quantidade-mais');
    const spanQuantidade = document.getElementById('quantidade');
    const btnAdicionarCarrinho = document.getElementById('botaoAdicionarCarrinho');

    btnQuantidadeMais.addEventListener('click', () => {
        quantidadeAtual++;
        spanQuantidade.innerText = quantidadeAtual;
    });

    btnQuantidadeMenos.addEventListener('click', () => {
        if (quantidadeAtual > 1) {
            quantidadeAtual--;
            spanQuantidade.innerText = quantidadeAtual;
        }
    });

    btnAdicionarCarrinho.addEventListener('click', () => {
        const tituloProduto = document.getElementById('titulo').innerText;
        const precoProduto = parseFloat(document.getElementById('preco').innerText);

        const itemCarrinho = document.createElement('li');
        itemCarrinho.classList.add('produto-carrinho');
        itemCarrinho.innerHTML = `
            <img src="images/image-product-1-thumbnail.jpg" alt="Product Thumbnail">
            <div class="info-produto">
                <span>${tituloProduto}</span>
                <span>$${precoProduto.toFixed(2)} x ${quantidadeAtual} <span class="preco-total">$${(precoProduto * quantidadeAtual).toFixed(2)}</span></span>
            </div>
            <img class="remover-produto" src="images-cart/icon-delete.svg" alt="Remover produto">
        `;

        listaProdutos.appendChild(itemCarrinho);
        msgCarrinhoVazio.style.display = 'none';

        const btnRemoverProduto = itemCarrinho.querySelector('.remover-produto');
        btnRemoverProduto.addEventListener('click', () => {
            listaProdutos.removeChild(itemCarrinho);
            if (listaProdutos.children.length === 0) {
                msgCarrinhoVazio.style.display = 'block';
            }
        });

        quantidadeAtual = 1;
        spanQuantidade.innerText = quantidadeAtual;
    });
});
