import React from 'react';
import  './Product1.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Product1 =(props) =>(
<div className = 'Post'>
<img src= {props.src} className="img-fluid w-100"/> 
<p>Price: {props.value1}</p>
<p>Category: {props.category}</p>
<div><br/></div>
                     <div class="text-center mb-2 mt-2"/>
                    <div className="btn btn-primary w-20">Add</div> 
</div>
);

export default Product1;