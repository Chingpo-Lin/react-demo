import { ADD_PERSON } from "../constant";

// create add people action object
export const addPerson = personObj => ({type:ADD_PERSON,data:personObj})