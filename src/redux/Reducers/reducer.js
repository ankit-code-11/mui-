export const cartData = (data = [], action) => {
    console.log(action, 'reducers')

    switch (action.type) {
        case 'Add':
            return [ action.data,...data]
        default: 
            return data
    }
}