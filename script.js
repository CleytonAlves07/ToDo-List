let listToDo = document.getElementById('lista-tarefas');
let textToDo = document.getElementById('texto-tarefa');
let buttonSelector = document.getElementById('criar-tarefa');

//Button add the text in the list
let list = '';
function buttonAdd(){
    list = document.createElement('li');
    list.innerText = textToDo.value;
    listToDo.appendChild(list);
    textToDo.value = '';
}
buttonSelector.addEventListener('click', buttonAdd);