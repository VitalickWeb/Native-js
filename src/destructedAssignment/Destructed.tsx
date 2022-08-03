import React, {useState} from "react";

type LessonsType = {
    title: string
    hour?: number
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: {
        street: {
            title: string
        }
    }
}

type propsType = {
    title: string
    man: ManType
}

function useVitState(m: string) {//кастомный стэйт
    return [m, function(){}]
}

export const ManComponent: React.FC<propsType> = (props) => {
    const {title} = props
    const {name} = props.man

    const [message, setMessage] = useVitState('')//используем кастомный стэйт
    const [title2, setTitle2] = useState('')//useState нам возвращает массив

    return (
        <div>
            <h1>{title}</h1>
            <p>{name}</p>
        </div>
    )
}