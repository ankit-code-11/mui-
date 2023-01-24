export const cartData = (data = [], action) => {
    console.log(action, 'reducers', data)

    switch (action.type) {
        case 'Add':
            return [ action.data,...data]
        case 'Remove':
            data.pop();
            console.log(data);
            return [...data]
        case 'Empty':
            return action.data;
        default: 
            return data
    }
}