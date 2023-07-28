import React, { useState } from 'react'
import Button from './Button';
import { AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";

function Task({ task, setTask, seq, id, name, status }) {

    const [editTask, setEditTask] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [taskStatus, setTaskStatus] = useState('');

    const handleEditTask = (e) => {
        setEditTask(true);
        setTaskName(name);
        setTaskStatus(status);
    }

    const handleRemoveTask = (e) => {
        const updatedTask = task.filter(item => {
            if (item.id != e.target.dataset.id) {
                return item;
            }
        })
        setTask(updatedTask);
    }

    const handleSaveTask = (e) => {
        const updateTask = task.map((item) => {
            if (item.id == e.target.dataset.id) {
                return {
                    id: item.id,
                    name: taskName,
                    status: taskStatus
                }
            } else {
                return item;
            }
        })
        setTask(updateTask);
        setEditTask(false);
    }

    return (
        <div className='task'>
            <textarea
                className={editTask ? 'active' : ''}
                type="text"
                disabled={editTask ? false : true}
                value={editTask ? taskName : name}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <div className="task-actions">

                <select
                    style={editTask ? { visibility: "visible" } : { visibility: "hidden" }}
                    value={editTask ? taskStatus : status}
                    disabled={editTask ? false : true}
                    onChange={(e) => setTaskStatus(e.target.value)}
                >
                    <option value="To do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="In review">In review</option>
                    <option value="Completed">Completed</option>
                </select>

                <div className="action-buttons">
                    {
                        editTask ?
                            < FcCheckmark
                                onClick={handleSaveTask}
                                data-id={id}
                                size="1.5rem"
                                style={{ cursor: 'pointer'}}
                            />
                            :
                            <AiTwotoneEdit
                                onClick={handleEditTask}
                                data-id={id}
                                size="1.5rem"
                                style={{ cursor: 'pointer' }}
                            />
                    }
                    < AiOutlineDelete
                        size="1.5rem"
                        style={{ color: "red", cursor: 'pointer', marginLeft:'5px' }}
                        onClick={handleRemoveTask}
                        data-id={id} />
                </div>
            </div>
        </div>
    )
}

export default Task



