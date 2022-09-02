
import axios from "axios";
import { ADD_TO_CART, CHANGE_QUANTITY, REMOVE_FROM_CART } from "./cartconstant";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "./constants";

const onGetProducts = () => (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });

  var config = {
    method: "get",
    url: "https://api4286.s3.ap-south-1.amazonaws.com/products.json",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      dispatch({type: PRODUCT_LIST_SUCCESS, payload: response.data});
    })
    .catch(function (error) {
      dispatch({type: PRODUCT_LIST_FAIL, payload: error});
    });
};

const onAddToCart = (item) => (dispatch) => {
  dispatch({type: ADD_TO_CART, payload: item})
}

const onRemoveFromCart = (id) => (dispatch) => {
  dispatch({type: REMOVE_FROM_CART, payload: id})
}

const onChangeQty = (id,qty) => (dispatch) => {
  dispatch({type: CHANGE_QUANTITY, payload: {id,qty}})
}



export {onGetProducts,onAddToCart,onRemoveFromCart,onChangeQty}