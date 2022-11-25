const addInput = document.querySelector('#todoInput')
const sortBtn = document.querySelector('.todo_sort_icon')
const addBtn = document.querySelector('#todo_addBtn')
const delTaskBtn = document.querySelector('#deleteBtn')
const todoList = document.querySelector('.todo_content_list')


delTaskBtn.addEventListener('click', () => {
    addInput.value = ''
})


addBtn.addEventListener('click', (e) => {
    let todo = addInput.value
    todo = todo.trim()
    if (todo == '') {
        alert('İnput boşdur!')
    } else {
        console.log(todo)
        addTodo(todo);
        addInput.value = ''
        deteleTodo()
    }
})


function addTodo(todo) {
    if (Array.isArray(todo)) {
        todoList.innerHTML = '';
        todo.map(element => {
            todoList.innerHTML += `
                <li class="todo_content_list_item">
                    <span class="todo_content_list_item_text" id="todo_content_list_item_text">
                        ${element.innerText}
                    </span>
                    <img class="todo_content_list_item_delete deleteListItem" src="assets/images/delete.svg" alt="delete icon">
                </li>`;
        })
    } 
    else {
        let todoListItem = ` 
        <li class="todo_content_list_item">
            <span class="todo_content_list_item_text" id="todo_content_list_item_text">
                ${todo}
            </span>
            <img class="todo_content_list_item_delete deleteListItem" src="assets/images/delete.svg" alt="delete icon">
        </li>
        `
        todoList.innerHTML += todoListItem
    }
}


function deteleTodo() {
    let todoListItem = document.querySelectorAll('.todo_content_list_item')
    todoListItem.forEach((li) => {
        console.log(li)
        li.addEventListener('click', e => {
            console.log(e.target);
            if (e.target.classList.contains('deleteListItem')) {
                li.remove()
            } else {
                alert("Silmek duymesine basin!")
            }
        })

    })
}


sortBtn.addEventListener('click', () => {
    let listItemText = [...document.getElementsByClassName('todo_content_list_item_text')];
    console.log(listItemText);
    let sorted = doSort(listItemText);
    addTodo(sorted);
    deteleTodo()
})


const doSort = (todoList) => {
    return todoList.sort((a, b) => {
        if (a.innerText > b.innerText) {
            return 1
        }
        if (a.innerText < b.innerText) {
            return -1
        }
        return 0
    })
}