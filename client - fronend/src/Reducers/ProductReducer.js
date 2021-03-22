import { ALL_PRODUCTS, CART_PRODUCTS, ADD_ORDER, REMOVE_ORDER, REMOVE_PRODUCTS, INCREASE_ITEM, DECREASE_ITEM } from "../types";
// import axios from "axios";

const initialState = {
  products: [],
  data: [],
  cartdata: [],
  orderdata: [],
  totalPrice: 0,
};

export const productReducer = (state = initialState, action) => {
  console.log("in reducer", state);
  console.log("in reducer", action);

  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        products: action.payload,
      };
    case CART_PRODUCTS:
      return {
        ...state,
        cartdata: action.payload,
      };
    case ADD_ORDER:
      return {
        ...state,
        orderdata: action.payload,
      };

    case REMOVE_PRODUCTS:
    
      return {
        ...state,        
        cartdata: action.payload,
      };
      case INCREASE_ITEM:
    
      return {
        // ...state,
        // cartdata: state.cartdata.map((item,id)=>{
        //   if(id === action.payload2){
        //     // let x2 = item.count;
        //     return{
        //       ...item,
        //       price: action.payload1 
        //     }
        //   }
        //   else{item} 
        //   // console.log(item, id)
        // }) 
        ...state,        
        cartdata: action.payload,
      };
      case DECREASE_ITEM:
    
        return {         
          ...state,        
        cartdata: action.payload,
        };

    default:
      return state;
  }
};
