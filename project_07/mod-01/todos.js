const TODOS_URL = `https://jsonplace-univclone.herokuapp.com/todos`

function fetchTodos() {
    return fetch(TODOS_URL)
        .then(function (response) {
    // This converts the response body to an object, returning is crucial here
             return response.json();
        })
        // .then(function (data) {
        //     // do something with the data
        //     console.log(data)
        //     /*
        //     0: {userId: 1, id: 1, title: "delectus aut autem", completed: false}
        //     1: {userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false}
        //     2: {userId: 1, id: 3, title: "fugiat veniam minus", completed: false}
        //     3: {userId: 1, id: 4, title: "et porro tempora", completed: true}
        //     */
        // })
        .catch(function (error) {
            // do something with the error
            console.log("FT")
        });
}

function renderAllTodos(todos) {
    $('.todo-list').empty()
    todos
.filter(function(todo){
    return todo.completed;
})
.forEach(todo => {
    const todoElement = renderTodo(todo) 
    $(todoElement).appendTo('.todo-list.complete')   
    // $('.todo-list.complete').append(todoElement)  
});
todos
.filter(function(todo){
    return !todo.completed;
})
.forEach(todo => {
    const todoElement = renderTodo(todo)  
    $(todoElement).appendTo('.todo-list.incomplete')  
    // $('.todo-list.incomplete').append(todoElement)  
});

    






    

}

function renderTodo(todo) {
    return $(`<div class="todo">
  <h3>TITLE TITLE TITLE</h3>
  <footer>
    ${todo.compleated ? '<button>UNDO</button>' : '<button>DONE</button>'}
  </footer>
</div>`)
}

function bootstrap() {
    fetchTodos().then(renderAllTodos)
    // .then(function (data) {
    //     renderAllTodos(data)
    //     // do something with the data
    //     console.log(data)
    // })
    .catch(function(err){
        console.log("BS")

    })
}

bootstrap();

