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

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo(); 
    }
});

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

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    let subtitulo = document.getElementById('subtituloLista');

    lista.innerHTML = "";

    if (amigos.length > 0) {
        lista.style.display = 'block';
        subtitulo.style.display = 'block';
        
    } else {
        lista.style.display = 'none';
        subtitulo.style.display = 'none';
            
    }

    amigos.forEach((nome, index) => {
        let item = document.createElement("li");
        item.textContent = nome;

    let btnRemover = document.createElement('button');
    btnRemover.textContent = 'X';
    btnRemover.classList.add('remove-button');

    btnRemover.onclick = () => {
        removerAmigo(index);
    };

        item.appendChild(btnRemover);
        lista.appendChild(item);

    });

}

function removerAmigo(index) {
    amigos.splice(index, 1); 
    atualizarLista();

}

function limparCampo() {
    nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = ''; 
}

function limparLista() {
    amigos = [];
    atualizarLista();

}