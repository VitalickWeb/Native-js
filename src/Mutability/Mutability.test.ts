
function icreaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}

test.skip('reference type test', () => {
    let user: UserType = {
        name: 'Vit',
        age: 41
    }
    icreaseAge(user)

    expect(user.age).toBe(42)

    const superman = user;
    superman.age = 1000;

    expect(superman.age).toBe(1000)

    let users = [
        {name: 'Vit', age: 41},
        {name: 'Dima', age: 30},
    ]

    let admins = users
    admins.push({name: 'Yaroslav', age: 9})//push это мутирующий метод который добавляет в массив новый объект

    expect(users[2]).toEqual({name: 'Yaroslav', age: 9})
})

test('value type test', () => {
    let users = 100
    let count = ++users
    expect(count).toBe(101)
})