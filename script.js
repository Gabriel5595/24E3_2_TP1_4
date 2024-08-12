//TP 1.4
//Crie uma função chamada filtrarAcimaPreco que receba um array de objetos representando produtos, onde cada produto tem uma propriedade preco. A função deve retornar um novo array contendo apenas os produtos com preço maior que um valor especificado.

function filtrarAcimaPreco(produtos, valor) {
    var resultado = [];

    for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].preco > valor) {
            resultado.push(produtos[i]);
        }
    }

    return resultado;
}

const produtos = [ 
    { nome: "Laptop", preco: 1000 }, 
    { nome: "Tablet", preco: 400 }, 
    { nome: "Smartphone", preco: 1500 } 
];

console.log(filtrarAcimaPreco(produtos, 600));
