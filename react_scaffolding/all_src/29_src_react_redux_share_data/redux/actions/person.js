import { ADD_PERSON } from "../constant";

// create add people action object
export const createAddPersonAction = personObj => ({type:ADD_PERSON,data:personObj})