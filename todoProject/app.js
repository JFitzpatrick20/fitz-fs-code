let allTodo = [
    {
        id: 1103,
        title: 'Home work',
        dueDate: '03-25-2021',
        description: 'Home work for coding',
        isComplete: false,
    },
    {
        id: 1105,
        title: 'Go to class',
        dueDate: '03-12-2021',
        description: 'Attend zoom',
        isComplete: false,
    },
    {
        id: 1107,
        title: 'Work on project',
        dueDate: '02-18-2021',
        description: 'Work to compleat project',
        isComplete: true,
    },
    {
        id: 1109,
        title: 'Submit Project',
        dueDate: '02-21-2021',
        description: 'Use netlify to submit project',
        isComplete: false,
    },
    {
        id: 1193,
        title: 'Take car to shop',
        dueDate: '02-22-2021',
        description: 'Car needs service',
        isComplete: true,
    },
    {
        id: 1175,
        title: 'Go to work',
        dueDate: '02-20-2021',
        description: 'Work saturday night',
        isComplete: true,
    }
]


const past = new Date(); 
past.setDate(past.getDate() - 1)
const future = new Date()
future.setDate(future.getDate() + 1)


const defultTodo = [
    {
        id: 1167,
        title: 'click ➕',
        dueDate: future,
        description: 'click ➕ to add a todo',
        isComplete: false,
    },
    {
        id: 1177,
        title: 'click ✅',
        dueDate: future,
        description: 'click ✅ to remove all compleated todos',
        isComplete: true,
    },
    {
        id: 1120,
        title: 'click 🗑',
        dueDate: past,
        description: 'click 🗑 to remove all expired todos',
        isComplete: false,
    },
    {
        id: 1134,
        title: 'click complete',
        dueDate: future,
        description: 'click complete to move a finished task to compleated todos coloumn',
        isComplete: false,
    },
    {
        id: 1141,
        title: 'click delete',
        dueDate: past,
        description: 'click delete to remove selected todo',
        isComplete: true,
    },
]


let pendingTodos, completedTodos, expiredTodos;


function isCurrent(todo) {
    const todoDueDate = new Date(todo.dueDate);
    const now = new Date();  
    return now < todoDueDate;
}


function splitTodos() {
  pendingTodos = allTodo.filter(function(todo) {
      return todo.isComplete === false && isCurrent(todo)      
  })
completedTodos = allTodo.filter(function(todo){
    return todo.isComplete === true   
})


  expiredTodos = allTodo.filter(function(todo){
      return todo.isComplete === false && isCurrent(todo) === false
  })

}


function updateTodo(){
    
    storeData()
    splitTodos()
    renderTodos()
    retrieveData()
}


function createElementFromTodo(todo) {
    return $(`<div class="todo">
  <h3><span class="title">${todo.title}</span><span class="due-date">${todo.dueDate}</span></h3>
  <pre>${todo.description}

When you're done, click complete on this todo.</pre>
  <footer class="actions">
    <button class="action complete">Complete</button>
    <button class="action delete">Delete</button>
  </footer>
</div>`).data("todo", todo);
}

$('main').on('click', '.action.complete', function () {
    const todoElement = $(this).closest('.todo')
    const data = todoElement.data('todo')
    data.isComplete = true
     
    
    

    todoElement.slideUp(function () {
        storeData()
        splitTodos()
        renderTodos()
      });
});


$('main').on('click', '.action.delete', function () {
    const todoDelete = $(this).closest('.todo')
    const data =todoDelete.data('todo')
    allTodo = allTodo.filter(function(todo){
        return todo.id !== data.id
    })
    todoDelete.remove()

    storeData()
  })
  

  function renderTodos() {
    $('main .content').empty();
      pendingTodos.forEach(function(todo){
      let renderTodos = createElementFromTodo(todo)
      $('.pending-todos').append(renderTodos)
    })
    completedTodos.forEach(function(todo){
        let renderTodos = createElementFromTodo(todo)
        $('.completed-todos').append(renderTodos)
      })
      expiredTodos.forEach(function(todo){
        let renderTodos = createElementFromTodo(todo)
        $('.expired-todos').append(renderTodos)
      }) 
  }


  splitTodos()
  renderTodos()
    $('.add-todo').click(function(event){
    $('.modal').addClass('open')
  })

  function createTodoFromForm(){
    const form = $('.todo-form')
    const title = $('#todo-title').val()
    let dueDateVal = $('#todo-due-date').val()
    dueDateVal += 'T23:59:59'
    const dueDate = new Date(dueDateVal)
    const description = $('#todo-description').val()
    const id = Date.now()
    console.log(dueDate)
  
    return {id: id, title: title, dueDate: dueDate, description: description, isComplete: false} 

  }


  $('.create-todo').click(function(event){
      event.preventDefault()
      $('.modal').removeClass('open')
      let newForm=createTodoFromForm()
      allTodo.unshift(newForm)
      $('.todo-form').trigger('reset')
      updateTodo()
  })


  $('.remove-completed').click(function(event){
      event.preventDefault()
      allTodo = allTodo.filter(function(todo){
          return !todo.isComplete
      })
    storeData()

        $('.completed-todos .todo').remove()
  })

//LOOK AT THIS WHAT A RETURN FOR A CORRECT FILTER
  $('.remove-expired').click(function(event){
      event.preventDefault()
      allTodo = pendingTodos.concat(completedTodos)
      expiredTodos = []

      storeData()
      renderTodos()
  })


  $('.cancel-create-todo').click(function(){
      $('.modal').removeClass('open')
  })


  $('.left-drawer').click(function(event){
      const isDrawer = $(event.target).hasClass('left-drawer')
      if (isDrawer === true){
        $('#app').toggleClass('drawer-open')
      }

  })


  function storeData(){
      allTodo.length > 0
      ? localStorage.setItem('allTodo', JSON.stringify(allTodo))
      :null;

  }


  function retrieveData(){
      allTodo = JSON.parse(localStorage.getItem('allTodo')) || fetchDefaultTodos();
    }


  function fetchDefaultTodos(){
      return defultTodo
  }


    



  retrieveData()
  splitTodos()
  renderTodos()