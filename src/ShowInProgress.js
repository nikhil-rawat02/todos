import React from 'react'
import Task from './Task'

function ShowInProgress({task, setTask}) {
  let seq = 0;
  return (
    <div>
      <div className="heading">
      <p>In Progress</p>
      </div>
      {task.map((item, index) => (
        (item.status === "In Progress") && 
        <Task task={task} setTask={setTask} key={item.id} seq={seq} id={item.id} name={item.name} status={item.status} />
          ))}
    </div>
  )
}

export default ShowInProgress
