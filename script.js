// ==== reaching elements from html and declaring them as const variables ====
// reaching with #id
// #id is unique and used to avoid mistakes in future
const form = document.getElementById("form")
const input = document.getElementById("input")
const todos = document.getElementById("todos")

// ==== submiting todos with "enter" key ====
// when we press "enter" key, we submit new todo
form.addEventListener("submit", (e) => {
    // ==== blocking default action(refreshing) ====
    //when new todo is added, we prevent site from refreshing
    e.preventDefault()

    // ==== todoText is text from input we typed ====
    const todoText = input.value

    // ==== if there is text in input ====
    if (todoText) {
        // ==== creating list with text from input field ====
        const todoEl = document.createElement("li")
        todoEl.innerText = todoText

        // ==== marking todo completed with mouse left click ====
        // when we click left mouse button, we mark todo as completed
        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed")
        })

        // ==== removing todo with mouse right click ====
        // when we click right mouse button, we delete todo
        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault()
            todoEl.remove()
        })

        // ==== adding new todo in ul  ====
        todos.append(todoEl)

        // ==== clearing input field ====
        input.value = ""
    }
})
