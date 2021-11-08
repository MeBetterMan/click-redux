import { INCREMENT } from "./constant"

export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: '', data })

export const createIncrementAyncAction = (data, time) => {
    console.log(data);
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, 0)
    }
}