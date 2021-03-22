import * as actionTypes from './Action';
import axios from '../../../node_modules/axios'
let NewProductData;

axios.get( 'http://localhost:8000/api/products' )
.then( response => {
    NewProductData = response.data;
     NewProductData.map((p)=>{
         return(
        console.log(p)
         );
     })        
} )
.catch(error => {
    console.log(error);    
});

const initialState = {
    productArray : NewProductData,
    // productArray = []
    cartArray: []
};
let finalArray1 = [];

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
      
        // case actionTypes.Store_Product:
        //     return {
        //         ...state,
        //         productArray: NewProductData
        //     }

        case actionTypes.Add_Cart:
            finalArray1.push(action.item);
            return {
                ...state,              
                productArray: finalArray1
            }
        }
        return state;
    };

    export default reducer;
