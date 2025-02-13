let amigos = [];

function adicionarAmigo() {

    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === "") {
        alert('Por favor insira um nome');
        return;   
    }
    
    amigos.push(nome);
    atualizarLista();
    limparCampo();
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
    alert('A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.');
    return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo sortedo foi ${amigoSorteado}</li>`;

}


function limparCampo() {
    nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = ''; 
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });

}
