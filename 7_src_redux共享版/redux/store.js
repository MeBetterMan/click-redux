import { createStore, applyMiddleware, combineReducers } from 'redux'
import count_reducer from './reducers/count'
import person_reducer from './reducers/person2'
import thunk from 'redux-thunk'

const allReducers = combineReducers(
    {
        count: count_reducer,
        person: person_reducer
    }
)

export default createStore(allReducers, applyMiddleware(thunk))