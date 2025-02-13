'use strict'

const categorias = [
    {nome:'celulares', icon: 'iphone.png', cor: 'red'},
    {nome: 'informatica', icon: 'pc.png', cor: 'white'},
    {nome: 'games', icon: 'controle.png', cor: 'purple'},
    {nome: 'moveis', icon: 'sofa.png', cor: 'purple'}
    
]

function criarmenu(categoria) {
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')
    
    
    novaImagem.src = `./img/${categoria.icon}`
    novoSpan.textContent = categoria.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${categoria.cor}`

    lista.appendChild(novoItem)

}
categorias.forEach(criarmenu)

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const chuteiras = [
        {
            nome: "Chuteira Nike Mercurial Superfly",
            descricao: "branca, adaptada pra campo botinha otima performace para atletas velozes ",
            imagem: "./img/chuteira__1_-removebg-preview.png"
        },
        {
            nome: "Chuteira Puma Future Z",
            descricao: "Branca, feita e adaptada para jogar no campo contraste otimo",
            imagem: "./img/Puma.png"
        },
        {
            nome: "Chuteira Penalty",
            descricao: "Preta clássica com detalhes laranjas adaptada para jogar futsal " ,
            imagem: "./img/Penalty.png"
        }
    ];

    function criarCard(chuteira) {
        const container = document.querySelector('.container');


        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = chuteira.imagem;
        img.alt = chuteira.nome;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const title = document.createElement('p');
        title.classList.add('price');
        title.textContent = chuteira.nome;

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = chuteira.descricao;

        const button = document.createElement('button');
        button.textContent = "COMPRAR";

        cardContent.appendChild(title);
        cardContent.appendChild(description);
        cardContent.appendChild(button);
        
        card.appendChild(img);
        card.appendChild(cardContent);
        
        container.appendChild(card);
    }
    chuteiras.forEach(criarCard);
});
