import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {wordFiltered} from "../App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TaskPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: wordFiltered) => void
    addTask: (title: string) => void
}

export const TodoHome = (props: TaskPropsType) => {
    const [title, setTitle] = useState('')

    let taskRender = props.tasks.map(t => {

        const clickRemoveTaskHandler = (taskId: string) => {
            props.removeTask(taskId)
        }

        return (
            <li key={t.id}>
                <input type={"checkbox"} checked={t.isDone} />
                <span>{t.title}</span>
                <button onClick={ () =>  clickRemoveTaskHandler(t.id) }>x</button>
            </li>
        );
    })

    const addTaskHandler = (title: string) => {
        props.addTask(title)
        setTitle('')
    }

    const onchangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const KeyDownTitleHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler(title)
        }
    }

    const filterChangeHandler = (value: wordFiltered) => {
        props.changeFilter(value)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={ onchangeTitleHandler }
                    onKeyDown={ KeyDownTitleHandler }
                />
                <button onClick={ () => addTaskHandler(title)}>+</button>
            </div>
            <ul>
                {taskRender}
            </ul>
            <div>
                <button onClick={ () => filterChangeHandler('All')}>All</button>
                <button onClick={ () => filterChangeHandler('Active')}>Active</button>
                <button onClick={ () => filterChangeHandler('Completed')}>Completed</button>
            </div>
        </div>
    );
}