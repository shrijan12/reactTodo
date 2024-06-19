import { useState } from "react";
import TodoInput from "./component/TodoInput"
import TodoList from "./component/TodoList"

function App() {
    //initializing the array initially
  const [todos, setTodos] = useState(['Go to gym',
      'Hey jude wassup',
      'my name is shrijan']);

  //we will create a function which will handle the adding of todos
  function handleAddTodos(newTodos){
    const newTodoList = [...todos,newTodos];
    setTodos(newTodoList);
  }

  return (
   <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
   </>
  )
}

export default App
