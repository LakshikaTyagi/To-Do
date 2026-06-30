import React from 'react'
import { useState } from 'react';
import { TaskContext } from "../TaskContext/TaskContext";

function TaskProvider({ children }) {
    const [task, setTask] = useState({
        id: "",
        title: "",
        date: "",
        isImportant: false,
        isCompleted: false,
        today : true
    });

    const [allTasks, setAllTasks] = useState([]);

    const handleTaskInput = (e) => {
        setTask({
            ...task,
            title: e.target.value
        })
    }

    const handleTaskInputImportant = (e) => {
        setTask({
            ...task,
            title : e.target.value,
            isImportant : true
        })
    }

    const handleAddTask = () => {
        setAllTasks([
            ...allTasks,
            task
        ])

        setTask({
            title: "",
            id: "",
            date: "",
            isImportant: false,
            isCompleted: false
        })

        console.log(allTasks)
        console.log(task)
    }

    const handleMarkImportant = (index) => {
        setAllTasks((tasks) => {
            return tasks.map((task, i) => {
                if (i === index) {
                    return {
                        ...task,
                        isImportant: !task?.isImportant
                    }
                }
                else return task
            })
        })
    }

    const handleMarkComplete = (index) => {
        setAllTasks((tasks) => {
            return tasks.map((task, i) => {
                if (i === index) {
                    return {
                        ...task,
                        isCompleted: !task?.isCompleted
                    }
                }
                else return task
            })
        })
    }
    return (
        <TaskContext value={{
            task,
            setTask,
            allTasks,
            setAllTasks,
            handleAddTask,
            handleTaskInputImportant,
            handleMarkComplete,
            handleMarkImportant,
            handleTaskInput
        }}>
            {children}
        </TaskContext>
    )
}


export default TaskProvider
