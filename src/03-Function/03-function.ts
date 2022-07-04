import {StudentType} from '../02-Object/02object'

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