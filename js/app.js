// Quando clicar no botão adicioar, o código vai pegar o produto selecionado e adicionar aos produtos no carrinhos
//Automaticamente o carrinho vai exibir o produto, sua quantidade e somar o total.
//Esta função precisará receber um parâmetro, que é o id ou classe, do produto.

//declação da variável totalGeral para poder zerar o carrinho sempre que a página for carregada
let totalGeral = 0;
//chamada da função limpar, criada para limpar todos os dados do carrinho sempre que o programa dor recarregado
limpar();

//Criação da função adicionar
function adicionar() {
    //recuperar os valores do produto escolhido, quantidade e valor.
    //recuperar pelo id qual foi o produto escolhido
    let produto = document.getElementById("produto").value;
    //Uso da função split para dividir um string em uma lista baseado em um caractere infomado, declarando a posição que irá ser escolhoda para se manter.
    let nomeProduto = produto.split("-")[0];
    //uso da função split para separar o valor do texto da string, e conseguir posteriormente fazer cálculos com este valor/
    let valorUnitario = produto.split("R$")[1];
    //recuperar a quantidade escolhida do produto
    let quantidadeProduto = document.getElementById("quantidade").value;

    //calcular o subtotal do pedido, multiplicando o valor unitário do produto pela quantidade escolhida
    let subtotal = parseInt(valorUnitario * quantidadeProduto);
    //criando uma variável para chamar o campo do carrinho
    let carrinho = document.getElementById("lista-produtos");

    //adicionamdo um produto no carrinho com innerHTML - Neste caso está sendo incluído um código completo de HTML para inserir uma section
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
    </section>`;

    //atualizar o valor total do carrinho
    totalGeral = totalGeral + subtotal;
    //acessando o campo do valor total
    let campoTotal = document.getElementById("valor-total");
    //incluindo o valor total no campo correspondente
    campoTotal.textContent = `R$${totalGeral}`;

    //voltando para 1 a quantidade de produtos a ser escolhida após todo o processo da função que adicionou produtos
    document.getElementById("quantidade").value = "1";
  
}


//Quando clicar no botão limpar, é para esvaziar o carrinho e zerar o total
//Criação da função limpar
function limpar() {
    //zerando a lista de produtos escolhidos através do .innerHTML
    document.getElementById("lista-produtos").innerHTML = "";
    //zerando o valor total final através do .textContent
    document.getElementById("valor-total").textContent = "R$ 0";
    //voltando para 1 a quantidade escolhida utilizando o .value
    document.getElementById("quantidade").value = "1";
}

