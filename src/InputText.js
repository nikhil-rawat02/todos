import React from 'react'

function InputText({state, setState, type, handleAddTaskButton}) {

  return (
    <div className='input' >

        <label htmlFor="task-name">Task {type}</label>
        <input type="text" name="task-name" value={state} 
        placeholder={`Task Name`}
        onChange={(e)=>setState(e.target.value)}/>
        <button onClick={handleAddTaskButton}
        style={addTaskbuttonStyle}
      >Add task</button>
    </div>
  )
}
const addTaskbuttonStyle = {
  border: '1px solid grey',
  borderRadius: '0.5rem',
  height: '2.6rem',
  width: '10rem',
  cursor: 'pointer',
}
export default InputText
