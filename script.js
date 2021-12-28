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
//Change item colour when selected
let gray = 'rgb(128, 128, 128)';
function selectedItem(e){
    let itemChildren = listToDo.children
    for(let i = 0;i<itemChildren.length; i +=1){
        if(itemChildren[i] === e.target){
            itemChildren[i].style.backgroundColor = gray;
        }else{
            itemChildren[i].style.backgroundColor = 'white';
        }
    }
}
listToDo.addEventListener('click', selectedItem);
//Add class completed with double click
let listChildren = listToDo.children
function doubleClick(e){
    for(let i = 0;i< listChildren.length; i += 1){
        if(listChildren[i] === e.target){
            listChildren[i].classList.toggle('completed');
        }
    }
}
listToDo.addEventListener('dblclick', doubleClick);
