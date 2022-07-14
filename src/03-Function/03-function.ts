import {StudentType} from '../02-Object/02object'
import {CityType, GovernmentBuildingsType, HousesType} from "../02-Object/02_02obj";


export const addTechnologies = (student: StudentType, tech: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: tech,
    })
}

export const makeStudentStatusActive = (st: StudentType) => {
    st.status = false;
}
export const doesStudentLivesIn = (st: StudentType, city: string) => {
   return st.address.city.title === city;
}

export const addMoneyInBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true
}

export const deleteStaff = (building: GovernmentBuildingsType, stuff: number) => {
    building.staffCount -= stuff
}

export const addStaff = (building: GovernmentBuildingsType, stuff: number) => {
    building.staffCount += stuff
}

export const createMessage = (props: CityType) => {
    return `Hello, ${props.title} citizens, i wont you be happy, all ${props.citizenNumber}!`;
}


export const filterHouse = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const filterGovernment = (building: Array<GovernmentBuildingsType>, stuff: number) => {
    return building.filter(b => b.staffCount > stuff)
}