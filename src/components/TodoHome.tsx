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
    changeStatus: (checkId: string, isDone: boolean) => void
    filter: wordFiltered
}

export const TodoHome = (props: TaskPropsType) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    let taskRender = props.tasks.length
        ? props.tasks.map(t => {
        const clickRemoveTaskHandler = (taskId: string) => {
            props.removeTask(taskId)
        }
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDonValue = e.currentTarget.checked;
            props.changeStatus(t.id, newIsDonValue)
        }
        return (
            <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                <input
                    type={"checkbox"}
                    checked={t.isDone}
                    onChange={onChangeHandler}
                />
                <span>{t.title}</span>
                <button onClick={ () =>  clickRemoveTaskHandler(t.id) }>x</button>
            </li>
        );
    }) : <span>Тасок больше нет</span>

    const addTaskHandler = (title: string) => {
        if (title.trim() !== '') {
            props.addTask(title)
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onchangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const KeyDownTitleHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
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
                    className={error ? 'error' : ''}
                    value={title}
                    onChange={ onchangeTitleHandler }
                    onKeyDown={ KeyDownTitleHandler }
                />
                <button onClick={ () => addTaskHandler(title)}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <ul>
                {taskRender}
            </ul>
            <div>
                <button
                    className={props.filter === 'All' ? 'active-filter' : ''}
                    onClick={ () => filterChangeHandler('All')}>All
                </button>
                <button
                    className={props.filter === 'Active' ? 'active-filter' : ''}
                    onClick={ () => filterChangeHandler('Active')}>Active
                </button>
                <button
                    className={props.filter === 'Completed' ? 'active-filter' : ''}
                    onClick={ () => filterChangeHandler('Completed')}>Completed
                </button>
            </div>
        </div>
    );
}