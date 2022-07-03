import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {wordFiltered} from "../App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TaskPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todoId: string, taskId: string) => void
    changeFilter: (todoId: string, value: wordFiltered) => void
    addTask: (todoId: string, title: string) => void
    changeStatus: (todoId: string, checkId: string, isDone: boolean) => void
    filter: wordFiltered
    removeTodoList: (todoListId: string) => void
}

export const TodoHome = (props: TaskPropsType) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    let taskRender = props.tasks.length
        ? props.tasks.map(t => {
            const clickRemoveTaskHandler = (todoId: string, taskId: string) => {
                props.removeTask(todoId, taskId)
            }
            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                let newIsDonValue = e.currentTarget.checked;
                props.changeStatus(props.id, t.id, newIsDonValue)
            }
            return (
                <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                    <input
                        type={"checkbox"}
                        checked={t.isDone}
                        onChange={onChangeHandler}
                    />
                    <span>{t.title}</span>
                    <button onClick={ () =>  clickRemoveTaskHandler(props.id , t.id) }>x</button>
                </li>
            );
        })
        : <span>Тасок больше нет</span>

    const addTaskHandler = (todoId: string, title: string) => {
        if (title.trim() !== '') {
            props.addTask(todoId, title)
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
            addTaskHandler(props.id, title)
        }
    }

    const filterChangeHandler = (todoId: string, value: wordFiltered) => {
        props.changeFilter(todoId, value)
    }

    const removeTodoListHandler = () => {
        props.removeTodoList(props.id)
    }

    return (
        <div>
            <h3>
                {props.title}
                <button onClick={removeTodoListHandler}>X</button>
            </h3>
            <div>
                <input
                    className={error ? 'error' : ''}
                    value={title}
                    onChange={ onchangeTitleHandler }
                    onKeyDown={ KeyDownTitleHandler }
                />
                <button onClick={ () => addTaskHandler(props.id, title)}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <ul>
                {taskRender}
            </ul>
            <div>
                <button
                    className={props.filter === 'All' ? 'active-filter' : ''}
                    onClick={ () => filterChangeHandler(props.id, 'All')}>All
                </button>
                <button
                    className={props.filter === 'Active' ? 'active-filter' : ''}
                    onClick={ () => filterChangeHandler(props.id, 'Active')}>Active
                </button>
                <button
                    className={props.filter === 'Completed' ? 'active-filter' : ''}
                    onClick={ () => filterChangeHandler(props.id, 'Completed')}>Completed
                </button>
            </div>
        </div>
    );
}