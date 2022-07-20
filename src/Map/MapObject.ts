import {GovernmentBuildingsType, HousesType} from "../02-Object/02_02obj";

export const getStreetTitlesHouses = (houses: Array<HousesType>) => {
    return houses.map(st => st.address.street.title)
}

export const getStreetTitlesGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(st => st.address.street.title)
}

export const createStreetTitlesHouses = (messages: Array<HousesType>) => {
    return messages.map(st => `Congratulations citizens street ${st.address.street.title}!`)
}