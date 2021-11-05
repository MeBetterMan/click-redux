
const initalState = 0
export default function count_reducer(prevState = initalState, action) {
    const { type, data } = action
    switch (type) {
        case 'add':
            return prevState + data * 1
        case 'sub':
            return prevState - data * 1
        default:
            return initalState
    }

}