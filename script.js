let listToDo = document.getElementById('lista-tarefas');
let textToDo = document.getElementById('texto-tarefa');
let buttonSelector = document.getElementById('criar-tarefa');

//Button add the text in the list
function buttonAdd(){
    let list = document.createElement('li').appendChild(listToDo);
    list.innerText = textToDo.value;
    textToDo = remove(textToDo.value);
    console.log(list);
}
buttonSelector.addEventListener('click', buttonAdd);