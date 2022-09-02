import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./cartreducer";
import ProductListReducer from "./productlistReducer";



const initialState = {
  productList: { products: [] },
  cartList: { cartItems: [] }
};

const reducer = combineReducers({
  productList: ProductListReducer,
  cartList: CartReducer,
 
});

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

console.log("initial state: ", store.getState());

export default store;
