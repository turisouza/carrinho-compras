// Quando clicar no botão adicioar, o código vai pegar o produto selecionado e adicionar aos produtos no carrinhos
//Automaticamente o carrinho vai exibir o produto, sua quantidade e somar o total.
//Esta função precisará receber um parâmetro, que é o id ou classe, do produto.

let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar os valores do produto escolhido, quantidade e valor.
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidadeProduto = document.getElementById("quantidade").value;

    //calcular o subtotal do pedido
    let subtotal = parseInt(valorUnitario * quantidadeProduto);
    let carrinho = document.getElementById("lista-produtos");

    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
  </section>`;

    //atualizar o valor total
    totalGeral = totalGeral + subtotal;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$${totalGeral}`;

    document.getElementById("quantidade").value = "1";

    




    
    
    
    /*
    let listaDeProdutos = document.getElementById("produto");
    let produtoEscolhido = listaDeProdutos.options[listaDeProdutos.selectedIndex].value;

    let quantidadeDoProduto = document.getElementById("quantidade").textContent;
    let quantidadeEscolhida = listaDeProdutos.options[listaDeProdutos.selectedIndex].value


    //var valor = produtoEscolhido.replace(/[^0-9]/g,'');
    //return parseInt(valor);

    */

  
}


//Quando clicar no botão limpar, é para esvaziar o carrinho e zerar o total

function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
    document.getElementById("quantidade").value = "1";
}

