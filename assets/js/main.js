;(function () {

    //Seleção de elementos
    const todoForm = document.getElementById('todo-form')
    const todoInput = document.getElementById('todo-input')
    const todoList = document.getElementById('todo-list')
    const editForm = document.getElementById('edit-form')
    const editInput = document.getElementById('edit-input')
    const cancelEditBtn = document.getElementById('cancel-edit-btn')
   
    //Funções
    const saveTodo = (text) => {

        const todo = document.createElement('div')
        todo.classList.add('todo')

        const todoTitle = document.createElement('h3')
        todoTitle.innerText = text

        todo.appendChild(todoTitle)

        const doneBtn = document.createElement('button')
        doneBtn.classList.add('finish-todo')
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        todo.appendChild(doneBtn)

        const editBtn = document.createElement('button')
        editBtn.classList.add('edit-todo')
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
        todo.appendChild(editBtn)

        const removeBtn = document.createElement('button')
        removeBtn.classList.add('remove-todo')
        removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        todo.appendChild (removeBtn)
        
        todoList.appendChild(todo)

        todoInput.value = ''
        todoInput.focus()
    }

    //Eventos
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const inputValue = todoInput.value

        if(inputValue) {
            saveTodo(inputValue)
        }
    })
})();