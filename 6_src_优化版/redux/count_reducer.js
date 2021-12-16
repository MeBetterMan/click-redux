import { INCREMENT, DECREMENT } from "./constant"

const initalState = 0
export default function count_reducer(prevState = initalState, action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return prevState + data * 1
        case DECREMENT:
            return prevState - data * 1
        default:
            return initalState
    }

}