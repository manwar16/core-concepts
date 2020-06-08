import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Alamgir', 'Jasim', 'Salman', 'Bappi'];
  const products=[
    {name:'Photoshop', price:'$56'},
    {name:'Illustrator', price:'$49'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am a react person
        </p>
        <Counter></Counter>
        <Users></Users>


        <ul>
          {nayoks.map(nayok =><li>{nayok}</li> )}

          {
            products.map(product => <li>{products.name}</li> )
          }
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        
      
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10)
  const handlencrease =() => setCount(count + 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick ={() => setCount(count - 1)}>Decrease</button>
      <button onClick ={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }
  )
  return(
    <div>
      <h3>Dynamic users:{users.length}</h3>
      {
       users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}
function Product(props) {
  const productStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price}=props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  var personStyle={
    border:'2px solid green',
    margin:'10px',
    width:'400px'
  }
  return(
    <div style={personStyle}>
      <h1>Name:{props.name}</h1>
      <h3>job:{props.job}</h3>
    </div>
  )
}


export default App;
