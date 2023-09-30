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

  todoList.forEach((todoObject, index) =>{
    const { name, date } = todoObject;
    // const html = `
    //   <div>${name}</div> 
    //   <div>${date}</div>
    //   <button onclick="
    //     todoList.splice(${index}, 1);
    //     renderTodoList();
    //   " class="delete-button js-delete-todo-button">
    //     Delete
    //   </button>
    // `
    const html = `
      <div>${name}</div> 
      <div>${date}</div>
      <button class="delete-button js-delete-todo-button">
        Delete
      </button>
    `
    todoListHTML += html;
  });

  /*
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
  */

  // console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  //ADD EVENT LISTENER TO DELETE BUTTON but is many of them so this is a bit different
  document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      //console.log(index) //will be 0 or whatever index aka CLOSURE
      todoList.splice(index, 1);
      renderTodoList();
    });

    //console.log(index) // will be undefined bc we delete it
  });
}
//ADD EVENT LISTERNER TO ADD BUTTON FOR ONCLICK
document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})


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