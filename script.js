// ==== reaching elements from html and declaring them as const variables ====
// reaching with #id
// #id is unique and used to avoid mistakes in future
const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUL = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem("todos"))

// ==== clearing input field ====
if (todos) {
    todos.forEach((todo) => {
        addTodo(todo)
    })
}

// ==== submiting todos with "enter" key ====
// when we press "enter" key, we submit new todo
form.addEventListener("submit", (e) => {
    // ==== blocking default action(refreshing) ====
    //when new todo is added, we prevent site from refreshing
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    // ==== todoText is text from input we typed ====
    let todoText = input.value

    // ==== if there is todo in local storage ====
    if (todo) {
        todoText = todo.text
    }
    // ==== if there is text in input ====
    if (todoText) {
        // ==== creating list with text from input field ====
        const todoEl = document.createElement("li")

        // ==== if there is todo in local storage and todo is completed then reload it as completed ====
        if (todo && todo.completed) {
            todoEl.classList.add("completed")
        }

        todoEl.innerText = todoText

        // ==== toggling completed todo with mouse left click ====
        // when we click left mouse button, we mark todo as completed
        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed")
            updateLocalStorage()
        })

        // ==== removing todo with mouse right click ====
        // when we click right mouse button, we delete todo
        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLocalStorage()
        })

        // ==== adding new todo in ul  ====
        todosUL.append(todoEl)

        // ==== clearing input field ====
        input.value = ""

        updateLocalStorage()
    }
}

// ==== pushing todos to local storage ====
function updateLocalStorage() {
    const todosEl = document.querySelectorAll("li")

    const todos = []

    // ==== iterating through every todo and create object array of it ====
    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        })
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}
