import React from 'react'

function TodoCard(props) {
  const {children} = props
  console.log(children)
  return (
    <li className='todoItem'>
      <p>{children}</p>
        <div className='actionsContainer'>
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash"></i>
        </div>
    </li>
  )
}


export default TodoCard
