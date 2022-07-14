import {CityType} from "../02-Object/02_02obj";
import {
    addMoneyInBudget,
    addStaff,
    createMessage,
    deleteStaff,
    filterGovernment,
    filterHouse,
    repairHouse
} from "./03-function";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'Tokio',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 15,
                    street: {
                        id: 1,
                        title: 'Victory',
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 122,
                    street: {
                        id: 2,
                        title: 'Razor street',
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 88,
                    street: {
                        id: 3,
                        title: 'Razor street',
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                id: 1,
                type: 'HOSPITAL',
                budget: 280000,
                staffCount: 80,
                address: {
                    street: {
                        id: 1,
                        title: 'Central Street',
                    }
                }
            },
            {
                id: 2,
                type: 'FIRE_STATION',
                budget: 340000,
                staffCount: 100,
                address: {
                    street: {
                        id: 2,
                        title: 'North street',
                    }
                }
            },
        ],
        citizenNumber: 800000,
    }
})

//создать в файле 03-function.ts функцию, что бы тесты прошли
test.skip('budget should be changed for HOSPITAL', () => {
    addMoneyInBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(380000);

})

test.skip('budget should be changed for FIRE_STATION', () => {
    addMoneyInBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(240000);

})
//Дополнить тип HouseType (добавить порядковый id от 1 и по возрастанию)
//создать в том же файле еще одну функцию
test.skip('houses should be repaired', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBe(true)
})

test.skip('staff should be increased', () => {
    deleteStaff(city.governmentBuildings[1], 15)
    expect(city.governmentBuildings[1].staffCount).toBe(85)
})
test.skip('staff should be added', () => {
    addStaff(city.governmentBuildings[0], 30)
    addStaff(city.governmentBuildings[1], 38)

    expect(city.governmentBuildings[0].staffCount).toBe(110)
    expect(city.governmentBuildings[1].staffCount).toBe(138)
})

test.skip('greeting message should be correct for city', () => {
    const message = createMessage(city)
    expect(message).toBe('Hello, Tokio citizens, i wont you be happy, all 800000!')
})

test.skip('houses should be destroyed', () => {
    filterHouse(city, "Razor street")
    addStaff(city.governmentBuildings[1], 38)

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test('work > 100 humans on the fire station', () => {
    let buildings = filterGovernment(city.governmentBuildings, 90)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE_STATION')
})