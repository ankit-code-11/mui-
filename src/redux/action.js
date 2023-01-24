import { ADD_TO_CART } from "./constant";
export const addToCart = (data) => {
    console.log(data, 'action called');
    return {
        type: ADD_TO_CART,
        data
    }
}