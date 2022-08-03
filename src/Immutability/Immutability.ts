export type UserType = {
    name: string
    hair: number
    address: { title: string }
    laptop: { manufacturer: string }
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