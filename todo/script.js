document.addEventListener( "DOMContentLoaded", function() {
    const todoForm = document.getElementById('todoForm');
    const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    if (name !== '') {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
        listItem.classList.toggle('completed');
        });
        const label = document.createElement('label');
        label.textContent = name;
        const deleteButton = document.createElement('button');
        const deleteImg = document.createElement('img');
        deleteImg.src = "cross.png";
        deleteImg.alt = "Delete";
        deleteButton.appendChild(deleteImg);
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
            });
            
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        nameInput.value = '';
        } 
    else {
            alert('Please enter todo list.');
        };
        });
    });        


// Function to update the UI with todos
const updateUIWithTodos = (todos) => {
    const todoList = document.getElementById('todo-list');
  
    // Clear existing todo list
    todoList.innerHTML = '';
  
    // Loop through todos and create <li> elements to display each todo
    todos.forEach(todo => {
      const listItem = document.createElement('li');
      listItem.textContent = todo.text;
      if (todo.completed) {
        listItem.classList.add('completed');
      }
      todoList.appendChild(listItem);
    });
  };
 