import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllProducts, AddDataToCart } from "../../Actions/ProductAction";
import "./Product.css";
//4141

const AllProducts = (props) => {
  console.log(props, "props in products");
  const [productData, setProductData] = useState();
  const [search, setSearch] = useState(false);
  const { productlist, cartlist } = props;
  // finalArray = [];
  // updatedPosts = this.props.StoredProd;
  // console.log(updatedPosts);

  useEffect(() => {
    props.getAllProducts();
  }, []);

   const SearchData = (e) => {
    console.log(e.target.value, "on chnge value");
    if (!e.target.value) {
      setSearch(false);
    } else {
      const data = productlist.filter((item) => {
        if (item.name.toLowerCase().includes(e.target.value)) {
          return true;
        } else {
          return false;
        }
      });
      console.log(data, "gfytfytftftygu");
      setSearch(true);
      setProductData(data);
    }
  };

  const addToCart = (item) => {
    console.log(item, "item");
    let final;
    item.stock = 0;
    const data = [item];
    if (cartlist && cartlist.length) {
      final = [...cartlist, ...data];
    } else {
      final = data
    }  

    props.AddDataToCart(final);
  };

//   return (
//     <div>
//       <div>
//         <p>home page</p>
//       </div>
//       {productlist &&
//         productlist.length > 0 &&
//         productlist.map((item) => {
//           return (
//             <div className="card">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFReldDjXGycfaS7eXkohLz-tjbGyUBXfVKg&usqp=CAUg"
//                 alt="Avatar"
//                 width="100%"
//               />
//               <div class="container">
//                 <h4>
//                   <b>{item.name}</b>
//                 </h4>
//                 <p>Price: ₹ {item.price}</p>
//               </div>
//               {/* <button onClick={() => this.props.AddtoCartfn(item)}>Add to Cart</button> */}
//               <button onClick={() => addToCart(item)}>Add to Cart</button>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

return (
  <div>
    <div>
      <p>home page</p>
      <input
        type="text"
        onChange={SearchData}
        placeholder="search product by name"
      ></input>
    </div>
    {search
      ? productData &&
        productData.length > 0 &&
        productData.map((item) => {
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
                <p>Price: ₹ {item.price}</p>
              </div>
              {/* <button onClick={() => this.props.AddtoCartfn(item)}>Add to Cart</button> */}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          );
        })
      : productlist &&
        productlist.length &&
        productlist.map((item) => {
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
                <p>Price: ₹ {item.price}</p>
              </div>
              {/* <button onClick={() => this.props.AddtoCartfn(item)}>Add to Cart</button> */}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          );
        })}
  </div>
);
};


const mapStateToProps = (state) => {
  console.log(state, "state in ");
  return {
    productlist: state.products,
    cartlist: state.cartdata,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//       // onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
//       AddtoCartfn: (item) =>dispatch({type: actionTypes.Add_Cart, payload: item })
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
export default connect(mapStateToProps, { getAllProducts, AddDataToCart })(
  AllProducts
);
