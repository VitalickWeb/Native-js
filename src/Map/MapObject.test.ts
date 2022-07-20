import {CityType} from "../02-Object/02_02obj";
import {createStreetTitlesHouses, getStreetTitlesGovernmentBuildings, getStreetTitlesHouses} from "./MapObject";

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

test('test city should contains 3 houses', () => {
    let streetNames = getStreetTitlesHouses(city.houses)

    expect(streetNames.length).toBe(3)
    expect(streetNames[0]).toBe('Victory')
    expect(streetNames[1]).toBe('Worker street')
    expect(streetNames[2]).toBe('Razor street')

})

test('test city should contains 3 governmentBuildings', () => {
    let streetNames = getStreetTitlesGovernmentBuildings(city.governmentBuildings)

    expect(streetNames.length).toBe(2)
    expect(streetNames[0]).toBe('Central Street')
    expect(streetNames[1]).toBe('North street')

})

test('create greeting messages for streets', () => {
    let messages = createStreetTitlesHouses(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Congratulations citizens street Victory!')
    expect(messages[1]).toBe('Congratulations citizens street Worker street!')
    expect(messages[2]).toBe('Congratulations citizens street Razor street!')

})