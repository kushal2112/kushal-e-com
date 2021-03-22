import React, { Component } from 'react';
// import axios from "../../../node_modules/axios";
import axios from "../../../node_modules/axios";
import './NewProduct1.css';
let name1;
let description1;
let price1;;
let category1;
let photo1;
let data;


class NewProduct1 extends Component{
state={
    
    name: '',
    // photo: '',
    price: '',
    category: '',
    description:''

  
}

componentDidMount () {
    console.log(this.props);
}

changed1 = (e) =>{
    this.setState({ name : e.target.value});
}

changed2 = (e) =>{
    this.setState({ description : e.target.value});
}
// changed3 = (e) =>{
//     this.setState({ photo : e.target.value});
// }
changed4 = (e) =>{
    this.setState({ price : e.target.value});
}

changed5 = (e) =>{
    this.setState({ category : e.target.value});
}
postDataHandler = () => {
     data = {
        name: this.state.name,
        description: this.state.description,
        // photo: this.state.photo,
        price: this.state.price,
        category: this.state.category
    };
    console.log(data);
    const token = localStorage.getItem('token')
    fetch(`http://localhost:8000/api/product/create/603dd7a650dbb026bc7e8419`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: data,
      })
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          console.log(err);
        });
    // axios.post('http://localhost:8000/api/product/create/603dd7a650dbb026bc7e8419', {data}, {
    //     headers: {
    //         'Authorization': `Bearer ${token}` 
    //     }
    // })
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error=>{
    //             console.log(error);
    //         });
    // this.setstate({NewProducts: NewData})
    }    

    render(){
        return(
            <div className="NewPost">
                 <label>name</label>
                <input type="text" value={this.state.name} onChange={this.changed1} />
                <label>description</label>
                <input type="text" value={this.state.description} onChange={this.changed2} />
                {/* <label>ID</label>
                <input type="text" value={id1} onChange={this.changed1} /> */}
                {/* <label>photo</label>
                <input type="file" value={this.state.photo} onChange={this.changed3} /> */}
                <label>Price</label>
                <input type="text" value={this.state.price} onChange= {this.changed4} />
                <label>Category</label>
                <input type="text" value={this.state.category} onChange={this.changed5} />
                <button onClick={this.postDataHandler}>Submit</button>
                <p>Price: {this.state.price}</p>                
            </div>       
        );
    }
}

export default NewProduct1;
// export {NewData};