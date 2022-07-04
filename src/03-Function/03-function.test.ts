import {StudentType} from '../02-Object/02object'
import {addTechnologies, doesStudentLivesIn, makeStudentStatusActive} from "./03-function";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Vit',
        age: 41,
        status: true,
        address: {
            streetTitle: 'Bogdanovicha',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus',
            },
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            },
            {
                id: 4,
                title: 'REACT'
            },
        ]
    }
})
test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(4)

    addTechnologies(student, 'REDUX')

    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe("REDUX")
    expect(student.technologies[4].id).toBeDefined()//определяем существование id
})

test('student status should be active', () => {
    expect(student.status).toBe(true)

    makeStudentStatusActive(student)
    expect(student.status).toBe(false)

})

test('does student lives in the city Minsk?', () => {
    expect(student.address.city.title).toBe('Minsk')

    let res1 = doesStudentLivesIn(student, 'Minsk')
    let res2 = doesStudentLivesIn(student, 'Boston')

    expect(res1).toBe(true)
    expect(res2).toBe(false)
})