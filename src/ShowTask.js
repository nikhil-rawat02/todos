import React from 'react';
import ShowToDo from './ShowToDo';
import ShowInProgress from './ShowInProgress'
import ShowInReview from './ShowInReview'
import ShowCompleted from './ShowCompleted'
import ExportExcel from './ExportExcel';
function ShowTask({ task, setTask }) {

  return (
    <div style={{background:"whitesmoke"}}>
    {task.length > 0 && <ExportExcel task={task}/> }
      {task.length > 0 ?
        <div className='show-task-container'>
          <ShowToDo task={task} setTask={setTask} />
          <ShowInProgress task={task} setTask={setTask} />
          <ShowInReview task={task} setTask={setTask} />
          <ShowCompleted task={task} setTask={setTask} />
        </div>
        :
        <div className="no-data" style={{ marginTop: "2rem", textAlign: 'center' }}>
          No Task Available
        </div>}
    </div>


  )
}

export default ShowTask
