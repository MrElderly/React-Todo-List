import React, {useEffect} from "react";
import TodoList from "./Todo/TodoList.js"
import Context from "./contest.js";
import Loader from "./Loader.js";
import Modal from "./Modal/Modal.js";

const AddTodo = React.lazy(() => import("./Todo/AddTodo.js"));

function App() {
  const [todos, setTodos] = React.useState([ ]);
  const [loading, setLoading] = React.useState(true);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => response.json())
    .then(todos => {
      setTimeout(() => {
        setTodos(todos)
        setLoading(false)
      }
      , 2000)
      
    })
    }, [])

  function toggleTodo(id){
    setTodos(todos.map(todo => {
     if (todo.id === id) {
      todo.completed = !todo.completed; 
     }
     return todo
   })
   )
  }

function removeTodo(id){
  setTodos(todos.filter(todo => todo.id !== id))
}

  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
    <div className="wrapper">
   <h1> Todo List </h1>
<Modal>

</Modal>

   <React.Suspense fallback={<Loader />}>
   <AddTodo onCreate={addTodo}></AddTodo>
    </React.Suspense>
   {loading && <Loader /> }
   {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} />
    : loading ? null : <h2>No todos</h2>}
    
    </div>
    </Context.Provider>
  );
}


export default App;
