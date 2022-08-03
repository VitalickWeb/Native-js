import React from "react";
import {A24Type, PavType, UsersType} from "./AssociativeArray";

let user: UsersType
let market: PavType | A24Type

beforeEach(() => {
    user = {
        name: 'Vit',
        age: 29,
        address: {
            city: {
                title: 'Molodechno'
            }
        }
    }

    market = {
        pav: ['A-24', 'A-25', 'A-26'],
        A24: {
            salesman: 'Vit',
            musicInstruments: {
                guitars: ['valencia', 'lavier', 'crusader'],
                strings: ['Ernie Ball', 'Dadario', 'Savares', 'Elexxir', 'Dunlop'],
            }
        }
    }
})

test('should be change age and name', () => {
    user.age = 41
    user.name = 'Vitaliy';

    expect(user.age).toBe(41)
    expect(user.name).toBe('Vitaliy')
})

// test('should be ', () => {
//     market.pav[0] =
// })