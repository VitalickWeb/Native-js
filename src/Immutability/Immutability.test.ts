import {
    addBooksForUser,
    BooksUserType,
    getHaircut,
    moveUser, SkillsUserType,
    updateBookForUser, updateSkillForUser,
    upgradeToMacbook,
    UserType
} from "./Immutability";

test.skip('reference type test', () => {
    let user: UserType = {
        name: 'Vit',
        hair: 32,
        address: {
            title: 'Taiwan'
        },
        laptop: {
            manufacturer: 'MedIon'
        }
    }

    const handsomeUser = getHaircut(user, 2)

    expect(user.hair).toBe(32)
    expect(handsomeUser.hair).toBe(16)
    expect(handsomeUser.address.title).toBe('Taiwan')
})

test.skip('change address', () => {
    let user: UserType = {
        name: 'Vit',
        hair: 32,
        address: {
            title: 'Taiwan'
        },
        laptop: {
            manufacturer: 'MedIon'
        }
    }

    const transferUser = moveUser(user, 'Kiev')

    expect(transferUser.address.title).toBe('Kiev')
    expect(user.address).not.toBe(transferUser.address)
    expect(user.laptop).toBe(transferUser.laptop)
})
test.skip('upgrade laptop to macbook', () => {
    let user: UserType = {
        name: 'Vit',
        hair: 32,
        address: {
            title: 'Taiwan'
        },
        laptop: {
            manufacturer: 'MedIon'
        }
    }

    const upgradeLaptop = upgradeToMacbook(user, 'macbook')

    expect(upgradeLaptop.laptop.manufacturer).toBe('macbook')
    expect(user.address).toBe(upgradeLaptop.address)
    expect(user.laptop).not.toBe(upgradeLaptop.laptop)
})

test.skip('add books for user', () => {
    let user: BooksUserType = {
        name: 'Vit',
        hair: 32,
        address: {
            title: 'Taiwan',
            house: 15
        },
        laptop: {
            manufacturer: 'MedIon'
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const addBooks = addBooksForUser(user, 'ts')

    expect(user.books).not.toBe(addBooks.books)
    expect(addBooks.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})


test.skip('update js to ts books for user', () => {
    let user: BooksUserType = {
        name: 'Vit',
        hair: 32,
        address: {
            title: 'Taiwan',
            house: 15
        },
        laptop: {
            manufacturer: 'MedIon'
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const addBooks = updateBookForUser(user, 'js', 'ts')

    expect(user.books).not.toBe(addBooks.books)
    expect(addBooks.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)
})


test.skip('skills for user levels', () => {
    let user: SkillsUserType = {
        name: 'Vit',
        hair: 32,
        address: {
            title: 'Taiwan',
            house: 15
        },
        laptop: {
            manufacturer: 'MedIon'
        },
        skills: [15, 25, 30, 35, 50],
    }

    const updateSkill = updateSkillForUser(user, 15, 80)

    expect(user.skills).not.toBe(updateSkill.skills)
    expect(updateSkill.skills[0]).toBe(80)
    expect(user.skills.length).toBe(5)
})


test('remove book by js', () => {
    let user: SkillsUserType = {
        name: 'Vit',
        hair: 32,
        address: {
            title: 'Taiwan',
            house: 15
        },
        laptop: {
            manufacturer: 'MedIon'
        },
        skills: [15, 25, 30, 35, 50],
    }

    const updateSkill = updateSkillForUser(user, 15, 80)

    expect(user.skills).not.toBe(updateSkill.skills)
    expect(updateSkill.skills[0]).toBe(80)
    expect(user.skills.length).toBe(5)
})