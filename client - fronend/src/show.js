import React from "react";
// import { connect } from "react-redux";
// import { RemovefromCart, AddOrder} from "../../Actions/ProductAction";
import "./order.css";
import { connect } from "react-redux";


const Show = (props) => {
  

// const a1 = [...props.orderlist];
// console.log("a1",a1,"a1.1",a1[1]);
// let a2 = a1;
// a1[1].count = 0;
// console.log(a1[1].count);
// a2.map((thing)=>{
//   thing.count = 1;
//   thing.total = (thing.count)*(thing.price);
// })
// console.log("new a2", a2)
let total = 0;
props.orderlist.map((item)=>{
total = total + (item.price*item.stock)
})
let finaltotal = total;
console.log(finaltotal);

console.log(props.orderlist);

  return (
    <div>
      <div>
      <h2>Thanks for your order!</h2>
        <h2>Your Final order Price : ₹ {finaltotal} </h2>
      </div>
      {props &&
        props.orderlist &&
        props.orderlist.length > 0 &&
        props.orderlist.map((item) => {
          
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
                <p>Price: ₹ {item.price} </p>  
                <p>qty: {item.stock} </p>              
              </div>            
            </div>
          );
        })}
        <div>
          <br/>
          <br/>
        </div>
        <h3>Do visit here again!</h3>
    </div>
  );
};


const mapStateToProps = (state) => {
  console.log(state, "state in ");
  return {    
    orderlist: state.orderdata,
  };
};

// export default connect(mapStateToProps,{ RemovefromCart})(Cart);
export default connect(mapStateToProps)(  Show);
