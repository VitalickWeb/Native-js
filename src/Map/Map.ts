
export type ManType = {
    name: string,
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 34},
    {name: 'Vit Ivov', age: 30},
    {name: 'Sasha Popov', age: 25},
]

const dimychTransformator = (man: ManType) => ({//возвращает стэк технологий имя и фамилию
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
})


const devs1 = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: 'Andrew', lastName: 'Ivanov',
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: 'Vit', lastName: 'Ivov',
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: 'Sasha', lastName: 'Popov',
    },
]

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(dimychTransformator)

const devs4 = people.map(man => ({//правильно записывать так
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))
//засовываем функцию трансформатор в мэп, где он вызовет ее для каждого человека
//которого засунет в эту функцию, которая вернет новый элемент и то что ретурнет,
//будет новым элементом в новом массиве.


//приветственные сообщения для юзеров
const messages = people.map(man => `Hello ${man.name.split(' ')[0]} welcome to  IT-Incubator`)