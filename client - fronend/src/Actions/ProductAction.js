import { ALL_PRODUCTS, CART_PRODUCTS, ADD_ORDER, REMOVE_ORDER,REMOVE_PRODUCTS, INCREASE_ITEM,DECREASE_ITEM} from "../types";
import axios from "axios";


export const getAllProducts = () => (dispatch) => {
  // Api call
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        dispatch({
          type: ALL_PRODUCTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

  console.log("in get all");
  // dispatch({
  //   type: ALL_PRODUCTS,
  //   payload: productlist,
  // });
  //   return {};
};

export const AddDataToCart = (item) => (dispatch) => {
  console.log("in get all", item);

  dispatch({
    type: CART_PRODUCTS,
    payload: item,
  });
  //   return {};
};

export const RemovefromCart = (item) => (dispatch) => {
  console.log("remove", item);

  dispatch({
    type: REMOVE_PRODUCTS,
    payload: item,
  });
  //   return {};
};

export const AddOrder = (data) => (dispatch) => {
  console.log("add", data);

  dispatch({
    type: ADD_ORDER,
    payload: data,
  });
  //   return {};
};
export const IncreaseCartItem= (data) => (dispatch) => {
  console.log("add", data);

  dispatch({
    type: INCREASE_ITEM,
    payload: data,
    // payload2: index,
  });
  //   return {};
};
export const DecreaseCartItem = (data) => (dispatch) => {
  console.log("add", data);

  dispatch({
    type: DECREASE_ITEM,
    payload: data,
    // payload2: index,
  });
  //   return {};
};

// export const addOrder = (data) => {
//   return {
//     type: ADD_ORDER,
//     payload: data,
//   };
// };

export const removeOrder = (data) => {
  return {
    type: REMOVE_ORDER,

    payload: data,
  };
};
