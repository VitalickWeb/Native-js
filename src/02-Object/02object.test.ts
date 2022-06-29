import {CityType} from './02_02obj'

let city: CityType;

beforeEach(() => {
    city = {
        title: 'Tokio',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {number: 15,
                    street: {
                        title: 'Victory',}}
            },
            {
                buildedAt: 2008,
                repaired: true,
                address: {number: 122,
                    street: {
                        title: 'Worker street',}}
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {number: 88,
                    street: {
                        title: 'Razor street',}}
            },
        ],
        governmentBuildings: [],
        citizenNumber: 1000000,
    }
})

test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(15)
    expect(city.houses[0].address.street.title).toBe('Victory')

    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(true)
    expect(city.houses[1].address.number).toBe(122)
    expect(city.houses[1].address.street.title).toBe('Worker street')

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(88)
    expect(city.houses[2].address.street.title).toBe('Razor street')
})