import {createStore} from 'redux';

const dummyState = () => {
    return 100
}

const store = createStore(dummyState)

export default store