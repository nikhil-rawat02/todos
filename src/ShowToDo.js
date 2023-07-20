import React from 'react'
import Task from './Task'

function ShowToDo({task, setTask}) {
  let seq = 0;
  return (
    <div>
      <div className="heading">
        <p>To Do</p>
      </div>
      {task.map((item) => (
        (item.status === "to do") && 
          <Task task={task} setTask={setTask} key={item.id} seq={seq} id={item.id} name={item.name} status={item.status} />
          ))}
    </div>
  )
}

export default ShowToDo
