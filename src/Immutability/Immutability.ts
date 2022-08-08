import {isNumberObject} from "util/types";

export type UserType = {
    name: string
    hair: number
    address: {
        title: string
    }
    laptop: { manufacturer: string }
}
export type BooksUserType = {
    name: string
    hair: number
    address: {
        title: string
        house: number
    }
    laptop: { manufacturer: string }
    books: Array<string>
}
export type SkillsUserType = {
    name: string
    hair: number
    address: {
        title: string
        house: number
    }
    laptop: { manufacturer: string }
    skills: Array<number>
}
export type RemoveBooksUserType = {
    name: string
    hair: number
    address: {
        title: string
    }
    laptop: { manufacturer: string }
    books: Array<string>
}

export type UserCompaniesType = {
    name: string
    hair: number
    address: {
        title: string
        house: number
    }
    laptop: { manufacturer: string }
    companies: Array<{ id: number, title: string }>
}

export type UpdateCompaniesType = {
    [key: string]: Array<{ id: number, title: string }>
}


export function getHaircut(u: UserType, power: number) {
    const copyUser = {...u, hair: u.hair / power}
    //copyUser.hair /= power

    return copyUser
}

export function moveUser(u: UserType, move: string) {
    let copyUser2 = {...u, address: {...u.address}}
    copyUser2.address.title = move

    return copyUser2
}

export function upgradeToMacbook(u: UserType, laptop: string) {
    let copyNote3 = {...u, laptop: {...u.laptop}}
    copyNote3.laptop.manufacturer = laptop

    return copyNote3
}

export function addBooksForUser(u: BooksUserType, books: string) {
    return {...u, books: [...u.books, books]}
}

export function updateBookForUser(u: BooksUserType, bookJS: string, bookTS: string) {
    let copyBook = {...u, books: u.books.map(b => b === bookJS ? bookTS : b)}

    return copyBook
}

export function updateSkillForUser(u: SkillsUserType, oldSkills: number, newSkill: number) {
    let copySkill = {...u, skills: u.skills.map(b => b === oldSkills ? newSkill : b)}

    return copySkill
}

export const deleteBook = (u: RemoveBooksUserType, delBook: string) => {
    let copyBook = {...u, books: u.books.filter(b => b !== delBook)}
    return copyBook
}
export const errorCompany = (u: UserCompaniesType, companyID: number, companyTitle: string) => {
    let copyCompany = {...u, companies: u.companies.map(com => ({...com}))}
    copyCompany.companies[0].title = companyTitle
    return copyCompany
}

export const updateCompanyTitle = (u: UpdateCompaniesType,
                              userName: string,
                              companyID: number,
                              newTitle: string
                        ) => {
    let companyCopy = {...u}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID ? {...c, title: newTitle} : c)
    return companyCopy
}