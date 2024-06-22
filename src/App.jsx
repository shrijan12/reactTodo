import { useState, useEffect } from "react";
import TodoInput from "./component/TodoInput"
import TodoList from "./component/TodoList"

function App() {
    //initializing the array initially
  const [todos, setTodos] = useState([]);
  const [todoValue,setTodoValue] = useState('');

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  //we will create a function which will handle the adding of todos
  function handleAddTodos(newTodos){
    const newTodoList = [...todos,newTodos];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  //function for handling delete todo
  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todos,todoIndex)=>{
      return todoIndex !== index
    })
    persistData(newTodoList);
    setTodos(newTodoList)
  }

  //handling the edit section
  function handleEditTodo(index){
    const valueEdit = todos[index]
    setTodoValue(valueEdit);
    handleDeleteTodo(index);
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos');
    if(!localTodos){
      return
      }
      localTodos=JSON.parse(localTodos).todos
      setTodos(localTodos)
  },[])

  return (
   <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos} />
   </>
  )
}

export default App
