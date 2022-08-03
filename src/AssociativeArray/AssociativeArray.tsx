import React from "react";

export type UsersType = {
    name: string
    age: number
    address: {
        city: {
            title: string
        }
    }
}

export type PavType = {
    pav: string[]
}

export type A24Type = {
    A24: {
        salesman: string
        musicInstruments: {
            guitars: string[]
            strings: string[]
        }
    }
}

let user = {
    name: 'Vit',
    age: 29,
    address: {
        city: {
            title: 'Molodechno'
        }
    }
}
console.log(user['address']['city']['title'])

let market = {
    pav: ['A-24', 'A-25', 'A-26'],
    A24: {
        salesman: 'Vit',
        musicInstruments: {
            guitars: ['valencia', 'lavier', 'crusader'],
            strings: ['Ernie Ball', 'Dadario', 'Savares', 'Elexxir', 'Dunlop'],
        }
    }
}

console.log(market.A24.musicInstruments.guitars[0] = 'Alice');

console.log(market)

let arr = ['Bob', 'Alex', 'Vit'];
console.log(arr['0'] = 'Elen', arr[1] = 'alexandra');