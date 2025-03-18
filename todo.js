const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(NewTodo){
   const li = document.createElement('li');
   li.id = NewTodo.id;
   const span = document.createElement('span');
   const button = document.createElement('button');
   button.addEventListener('click', deleteToDo);
   span.innerText = NewTodo.text;
   button.innerText = "❌";
   li.appendChild(span);
   li.appendChild(button);
   toDoList.appendChild(li);
}

function deleteToDo(event) {
   const li = event.target.parentElement;
   li.remove();
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   saveToDos();
}

function handleToDoSubmit(event) {
   event.preventDefault();
   const NewTodo = toDoInput.value;
   toDoInput.value = "";
   const NewTodoObj = {
      id : Date.now(),
      text : NewTodo,
   };
   toDos.push(NewTodoObj);
   paintToDo(NewTodoObj);
   saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
   const parsedToDos = JSON.parse(savedToDos);
   toDos = parsedToDos;
   parsedToDos.forEach(paintToDo);
 }