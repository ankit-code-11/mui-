import { ADD_TO_CART } from "./constant"
export const cartData = (data = [], action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TO_CART: 
        return data
        default: 
            return data
    } 

}