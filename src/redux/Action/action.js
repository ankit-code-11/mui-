export const addToCart = (data) => {
    console.log('action', data)
    return {
        type: 'Add',
        data
    }
}

export const removeToCart = (data) => {
    return {
        type: 'Remove',
        data
    }
}

