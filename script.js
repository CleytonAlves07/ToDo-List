const listToDo = document.getElementById('lista-tarefas');
const textToDo = document.getElementById('texto-tarefa');
const buttonSelector = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo');
const buttonRemove = document.getElementById('remover-finalizados');
const buttonSave = document.getElementById('salvar-tarefas')

//Button add the text in the list
let list = '';
function buttonAdd(){
    list = document.createElement('li');
    list.innerText = textToDo.value;
    listToDo.appendChild(list);
    textToDo.value = '';
}
buttonSelector.addEventListener('click', buttonAdd);
//Change item colour when selected
let gray = 'rgb(128, 128, 128)';
function selectedItem(e){
    let itemChildren = listToDo.children
    for(let i = 0;i < itemChildren.length; i += 1){
        if(itemChildren[i] === e.target){
            itemChildren[i].style.backgroundColor = gray;
        }else{
            itemChildren[i].style.backgroundColor = 'white';
        }
    }
}
listToDo.addEventListener('click', selectedItem);
//Add class completed with double click
let listChildren = listToDo.children;
function doubleClick(e){
    for(let i = 0;i < listChildren.length; i += 1){
        if(listChildren[i] === e.target){
            listChildren[i].classList.toggle('completed');
        }
    }
}
listToDo.addEventListener('dblclick', doubleClick);
//Clear all to do list
function clearAll(){
    listToDo.remove();
}
buttonClear.addEventListener('click', clearAll);
//Remove item selected of the list
//É uma lista dinâmica. Quando removo um li essa lista altera.Colocando o loop invertido funciona!
function removeItemSelected(){
    for(let i = listChildren.length -1;i >= 0 ; i -= 1){
        if(listChildren[i].classList.contains('completed')){
            listChildren[i].remove();
        }
    }
}
buttonRemove.addEventListener('click', removeItemSelected);
//Save button
const listSave = localStorage.getItem('todoList')
listToDo.innerHTML = listSave
function saveButton(){
    for(let i = listChildren.length -1;i >= 0 ; i -= 1){
        if(listChildren[i].classList.contains('completed')){
            const itensInList = listToDo.innerHTML
            localStorage.setItem('todoList', itensInList)
        }
    }
    const itensInList = listToDo.innerHTML
    localStorage.setItem('todoList', itensInList)
}
buttonSave.addEventListener('click', saveButton);
// function saveButton(){
//     let listAgain = document.getElementById('lista-tarefas').innerHTML;
//     console.log(listAgain);
//     localStorage.setItem('info', JSON.stringify(listAgain)); 
// }
// window.onload = function(){
//     buttonSave.addEventListener('click', saveButton);
//     function getLocalStorage(){
//         const getDivOl = document.getElementById('lolist');
//         let localget = JSON.parse(localStorage.info);
//         const newOl = createElement('ol');
//         newOl.id = 'lista-tarefas';
//         newOl.innerHTML = localget;
//         getDivOl.appendChild(newOl);
//     }
// }


