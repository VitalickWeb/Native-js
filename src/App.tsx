import React, {useState} from 'react';
import './App.css';
import "./components/TodoHome";
import {TaskType, TodoHome} from "./components/TodoHome";
import {v1} from "uuid";

export type wordFiltered = 'All' | 'Active' |'Completed'

function App() {
    const [task1, setTask1] = useState<Array<TaskType>>([
        {id: v1(), title: 'html & css', isDone: true},
        {id: v1(), title: 'Type script', isDone: true},
        {id: v1(), title: 'React JS', isDone: false},
        {id: v1(), title: 'rest api', isDone: false},
        {id: v1(), title: 'graphQL', isDone: false},
    ])

    const [filter, setFilter] = useState<wordFiltered>('All')

    const removeTaskHandler = (taskId: string) => {
        let filteredTask = task1.filter(t => t.id !== taskId)
        setTask1(filteredTask)
    }

    const addTask = (title: string) => {
        let task = {
            id: v1(),
            title: title,
            isDone: false
        }
        let newTask = [task, ...task1]
        setTask1(newTask)
    }

    const changeFilter = (value: wordFiltered) => {
        setFilter(value)
    }

    let filterTask = task1

    if (filter === 'Active') {
        filterTask = task1.filter(t => !t.isDone)
    } else if (filter === 'Completed') {
        filterTask = task1.filter(t => t.isDone)
    }

    const changeStatus = (checkId: string, isDone: boolean) => {
        let newTask = task1.map(t => t.id === checkId ? {...t, isDone} : t)
        setTask1(newTask)
    }

    return (
        <div className={'app'}>
            <TodoHome
                title='wats to learn'
                tasks={filterTask}
                removeTask={removeTaskHandler}
                changeFilter={changeFilter}
                addTask={addTask}
                changeStatus={changeStatus}
                filter={filter}
            />

        </div>
    );
}

export default App;
