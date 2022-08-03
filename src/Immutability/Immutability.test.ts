import {getHaircut, moveUser, upgradeToMacbook, UserType} from "./Immutability";

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
test('upgrade laptop to macbook', () => {
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