
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY} from "./cartconstant";

export default function CartReducer(state={cartItems: []},action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {cartItems: [...state.cartItems,action.payload]};
        case REMOVE_FROM_CART:
            return {cartItems: state.cartItems.filter((item) => {if(item.id !== action.payload) return item })};
        case CHANGE_QUANTITY:
           return {
               cartItems: state.cartItems.map((item) => {
                   if(item.id === action.payload.id) {
                       return {...item,qty: action.payload.qty}
                   }else {
                       return item;
                   }
               })
           }
        default:
            return state
    }

}