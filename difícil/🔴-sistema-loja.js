class Produto {

    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

}

class Loja {

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(nome, preco) {

        let produto = new Produto(
            nome,
            preco
        );

        this.produtos.push(produto);

        console.log(`${nome} adicionado à loja`);
    }

    listarProdutos() {

        console.log("Produtos da loja:");

        for (let produto of this.produtos) {

            console.log(
                `${produto.nome} - R$${produto.preco}`
            );

        }

    }

    calcularTotal() {

        let total = 0;

        for (let produto of this.produtos) {
            total += produto.preco;
        }

        console.log(`Total dos produtos: R$${total}`);
    }

}

let loja = new Loja();

loja.adicionarProduto("Teclado", 120);
loja.adicionarProduto("Mouse", 80);
loja.adicionarProduto("Monitor", 900);

loja.listarProdutos();

loja.calcularTotal();
