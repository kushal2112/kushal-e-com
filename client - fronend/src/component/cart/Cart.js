import React from "react";
// import { connect } from "react-redux";
import { RemovefromCart, AddOrder, IncreaseCartItem, DecreaseCartItem} from "../../Actions/ProductAction";
import "./../Product1/Product.css";
import { connect } from "react-redux";
let CD;
let itemPrice;

const Cart = (props) => {
  const a1 = [...props.cartlist];
console.log("new a1",a1);
let a2 = a1;
// a2.map((item)=>{
//   item.stock =0;
//   // thing.total = (thing.count)*(thing.price);
// })
console.log("new a2", a2)
  // const addOrder = () => {};
  
  const addOrder = (item) => {
    console.log(item, "item");
    let final2;
    const data = [item];
    if (props.orderlist && props.orderlist.length) {
      final2 = [...props.orderlist, ...data];
    } else {
      final2 = data
    }  
    props.AddOrder(final2);
  };

  const IncreaseItem = (item) => {
    const index1 =a2.indexOf(item);
    
      // item.price = item.price + 5;
      item.stock = item.stock + 1;
      // item.price = item.price*item.stock
    
    console.log("plus",a2);
    props.IncreaseCartItem(a2)
  };
  const DecreaseItem = (item) => {
    const index2 =a2.indexOf(item);
    if(item.stock >1){
      item.stock = item.stock - 1;     
    }
    // item.price = item.price*item.stock
    // item.price = item.price-5;
    console.log("minus", a2);
    props.DecreaseCartItem(a2)
  };


console.log("new a2", a2)


  const removefromCart = (item) => {
    console.log(item, "item");
    let final1;
      CD = a2;
      const index =a2.indexOf(item);
      if(index>-1){
        a2.splice(index,1);
      }
      console.log("newAfterarray", a2)
      // props.RemovefromCart(CD);
    }

    // const IncreaseItem = (n) => {
    //   // console.log("n:",n)
    //   // if(n>=1){
    //   //   n = n+1;
    //   //   // item.count = n;
    //   // }
    //   //  console.log("n:",n);      
    // };

  return (
    <div>
      <div>
        <p>Shopping Cart</p>
      </div>
      {props &&
        a2 &&
        a2.length > 0 &&
        a2.map((item) => {
          // item.n = Number(1);
          return (
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFReldDjXGycfaS7eXkohLz-tjbGyUBXfVKg&usqp=CAUg"
                alt="Avatar"
                width="100%"
              />
              <div class="container">
                <h4>
                  <b>{item.name}</b>
                </h4>
                <p>   Total item Price: ₹ {item.price}</p>
                {/* <p>     qty:{item.count}</p> */}
                {/* <p>     Product price: ₹ {item.total}</p> */}

              </div>
              <div className="inlinedata">
               
              </div>
              <div className="inlinedata">
            
                <button onClick={() => IncreaseItem(item)}>+</button>
                <p>qty:{item.stock}</p>
                {'   '}{' '}
                <button onClick={() => DecreaseItem(item)}>-</button>
              </div>
              <div className="inlinedata">
            
                <button onClick={() => addOrder(item)}>Order</button>
                {/* <p>qty:1</p> */}
                {'   '}{' '}
                <button onClick={() => removefromCart(item)}>Remove</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};


const mapStateToProps = (state) => {
  console.log(state, "state in ");
  return {
    // productlist: state.products,
    cartlist: state.cartdata,
    orderlist: state.orderdata,
  };
};

// export default connect(mapStateToProps,{ RemovefromCart})(Cart);
export default connect(mapStateToProps,{ RemovefromCart, AddOrder,IncreaseCartItem, DecreaseCartItem})(  Cart);
