type LocalCityType = {
    title: string
    countryTitle: string
}
type TechType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    status: boolean
    address: AddressType
    technologies: Array<TechType>
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}

export const student: StudentType = {
    id: 1,
    name: 'Vit',
    age: 41,
    status: true,
    address: {
        streetTitle: 'Bogdanovicha',
        city: {
            title: 'Molodechno',
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