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
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 2800000,
                staffCount: 80,
                address: {
                    street: {
                        title: 'Central Street',}}
            },
            {
                type: 'FIRE_STATION',
                budget: 880000,
                staffCount: 100,
                address: {
                    street: {
                        title: 'North street',
                    }
                }
            },
        ],
        citizenNumber: 800000,
    }
})

test.skip('test city should contains 3 houses', () => {
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
test.skip('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(2800000)
    expect(city.governmentBuildings[0].staffCount).toBe(80)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Street')

    expect(city.governmentBuildings[1].type).toBe('FIRE_STATION')
    expect(city.governmentBuildings[1].budget).toBe(880000)
    expect(city.governmentBuildings[1].staffCount).toBe(100)
    expect(city.governmentBuildings[1].address.street.title).toBe('North street')
})