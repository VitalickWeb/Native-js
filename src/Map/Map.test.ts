import {ManType} from "./Map";


let people: Array<ManType> = []

beforeEach( () => {
    people = [
        {name: 'Andrew Ivanov', age: 34},
        {name: 'Vit Ivov', age: 30},
        {name: 'Sasha Popov', age: 25},
    ]
})

test("should get array of greeting messages", () => {
    const messages = people.map(man => `Hello ${man.name.split(' ')[0]} welcome to  IT-Incubator`)

   expect(messages.length).toBe(3)
   expect(messages[0]).toBe('Hello Andrew welcome to  IT-Incubator')
   expect(messages[1]).toBe('Hello Vit welcome to  IT-Incubator')
   expect(messages[2]).toBe('Hello Sasha welcome to  IT-Incubator')
})