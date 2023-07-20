import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid';
import InputText from './InputText';

function AddTask({ task, setTask }) {
  const [taskId, setTaskId] = useState('');
  const [taskName, setTaskName] = useState('');

  useEffect(()=>{
    setTaskId(uuid());
  },[task])
  
  const handleAddTaskButton = () => {
    
    if (taskName.trim() === '') {
      alert("Task Name Required");
      return;
    }
    const newTask = {
      id: taskId,
      name: taskName,
      status: "to do"
    }
    setTask([...task, newTask]);
    setTaskName('');
  }

  return (
    <div style={{
      width: '100vw',
      background: 'lightblue',
    }}>
      <h1>To Do</h1>
      <InputText state={taskName} setState={setTaskName} type="Name" handleAddTaskButton={handleAddTaskButton}/>
      
    </div>
  )
}


export default AddTask

