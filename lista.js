let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let adcTarefa = document.querySelector('#adcTarefa');
let listaTarefa = document.querySelector('#listaTarefas');

inputNovaTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        let tarefa =  {
            name: inputNovaTarefa.value,
            id: gerarId(),
    };
    adicionarTarefa(tarefa);

}});
adcTarefa.addEventListener('click', (e) => {
    let tarefa =  {
        name: inputNovaTarefa.value,
        id: gerarId(),
    };
    adicionarTarefa(tarefa);
});

function gerarId(){
    return Math.floor(Math.random() == 3000);
}

function adicionarTarefa(tarefa) {

    let li = criarTagLI(tarefa);
    console.log(li);
    console.log(listaTarefa);
    listaTarefa.appendChild(li);
    inputNovaTarefa.value = '';
}

function criarTagLI(tarefa){

    let li = document.createElement('li');

    let span = document.createElement('span'); 
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.name;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcaoED');
    btnEditar.innerHTML = 'Editar';
    let btnExluir = document.createElement('button');
    btnExluir.classList.add('btnAcaoEX');
    btnExluir.innerHTML = 'Excuir';
    div.appendChild(btnEditar);
    div.appendChild(btnExluir);

    li.appendChild(span);
    li.appendChild(div);
    
    return li;
}