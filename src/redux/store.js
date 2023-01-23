import {createStore} from 'redux';
import rootReducer from "./rootReducer"

const dummyState = () => {
    return 100
}

const store = createStore(dummyState)

export default store