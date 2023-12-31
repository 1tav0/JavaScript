const todoList = [{
  name: 'wash',
  dueDate: '2022-12-12'
}, {
  name: 'clean',
  dueDate: '2022-12-12'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const date = todoObject.date;
    const { name, date } = todoObject;
    const html = `
      <div>${name}</div> 
      <div>${date}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-button">
        Delete
      </button>
    `
    todoListHTML += html;
  }

  // console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  
  const name = inputElement.value;
  // console.log(name);

  const dateInputElement = document.querySelector('.js-date-input');

  const date = dateInputElement.value;

  // todoList.push(name);
  todoList.push({
    // name: name,
    // date: date
    name, 
    date
  })
  // console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}