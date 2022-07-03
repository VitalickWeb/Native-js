import React, {useState} from 'react';
import './App.css';
import "./components/TodoHome";
import {TodoHome} from "./components/TodoHome";
import {v1} from "uuid";

export type wordFiltered = 'All' | 'Active' | 'Completed'

type TodoListType = {
    id: string
    title: string
    filter: wordFiltered
}

function App() {
    const todoListID1 = v1()
    const todoListID2 = v1()

    const [todoList, setTodoList] = useState<Array<TodoListType>>([
        {id: todoListID1, title: 'What to learn', filter: 'Active'},
        {id: todoListID2, title: 'What to bye', filter: 'Completed'},
    ])

    const [tasks, setTask1] = useState({
        [todoListID1]: [
            {id: v1(), title: 'html & css', isDone: true},
            {id: v1(), title: 'Type script', isDone: true},
            {id: v1(), title: 'React JS', isDone: false},
            {id: v1(), title: 'rest api', isDone: false},
            {id: v1(), title: 'graphQL', isDone: false},
        ],
        [todoListID2]: [
            {id: v1(), title: 'guitar', isDone: true},
            {id: v1(), title: 'bike', isDone: true},
            {id: v1(), title: 'beer', isDone: true},
            {id: v1(), title: 'house', isDone: true},
        ]
    })

    const removeTaskHandler = (todoId: string, taskId: string) => {
        setTask1({...tasks, [todoId]: tasks[todoId].filter(t => t.id !== taskId)})
    }

    const addTask = (todoId: string, title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        setTask1({...tasks, [todoId]: [newTask, ...tasks[todoId]]})
    }

    const changeFilter = (todoId: string, value: wordFiltered) => {
        setTodoList(todoList.map(t => t.id === todoId ? {...t, filter: value} : t))
    }

    const changeStatus = (todoId: string, checkId: string, isDone: boolean) => {
        setTask1({...tasks, [todoId]: tasks[todoId].map((t) => t.id === checkId ? {...t, isDone} : t)})
    }

    const removeTodoList = (todoListId: string) => {
        setTodoList(todoList.filter(t => t.id !== todoListId))
        delete tasks[todoListId]
    }

    return (
        <div className={'app'}>
            {
                todoList.map((el) => {
                    let filterTask = tasks[el.id]
                    if (el.filter === 'Active') {
                        filterTask = filterTask.filter(t => !t.isDone)
                    } else if (el.filter === 'Completed') {
                        filterTask = filterTask.filter(t => t.isDone)
                    }

                    return (
                        <TodoHome
                            key={el.id}
                            id={el.id}
                            title={el.title}
                            tasks={filterTask}
                            removeTask={removeTaskHandler}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeStatus={changeStatus}
                            filter={el.filter}
                            removeTodoList={removeTodoList}
                        />
                    );
                })
            }
        </div>
    );
}

export default App;
