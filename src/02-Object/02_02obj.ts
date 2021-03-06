export type StreetType = {
    id?: number
    title: string
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBuildingsType = {
    id?: number
    type: 'HOSPITAL' | 'FIRE_STATION'
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
}