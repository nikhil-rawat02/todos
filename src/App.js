import React, { useState } from 'react'
import AddTask from './AddTask';
import './App.css'
import ShowTask from './ShowTask';
import { DragDropContext } from 'react-beautiful-dnd';
function App() {
  const [task, setTask] = useState([]);
  const handleDragDrop = (results) => {
    console.log(results)
  }
  return (
    <DragDropContext>
      <div className='container'>
        <AddTask task={task} setTask={setTask} />
        <DragDropContext onDragEnd={handleDragDrop}>
        <ShowTask task={task} setTask={setTask} />
        </DragDropContext>
      </div>
    </DragDropContext>

  )
}



export default App
