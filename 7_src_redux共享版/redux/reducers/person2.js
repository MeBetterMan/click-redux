import { ADD_PERSON } from "../constant"

const initialState = [{ id: '001', name: '田野', age: 22 }]
export default function person_reducer(preState = initialState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState;
    }
}