import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
function App() {
  // this.state = {} // we fill in later w/ class components
  const [mexfood, setMexfood] = useState(null);
  // ^^
    // this.state = { mexfood: null };
  // setMexfood gives us functionality equal to this.setState({ mexfood: value });
  async function getMexicanDishes() {
    try {
      const res = await axios.get('http://localhost:8080/assassin');
      console.log(res.data); // 3 obj
      setMexfood(res.data);
      // equivalent to this.setState({ mexfood: res.data });
    } catch(e) {
      console.error(e, e.message);
    }
  }
  // acts the same as a component did mount
    // notice the square brackets
  useEffect(() => {
    getMexicanDishes();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        { mexfood && mexfood.map(dish => {
          return (
            <div>
              <h2>{ dish.dishName }</h2>
              <h4>{ dish.spicy ? "it is spicy" : "it is not spicy" }</h4>
            </div>
          );
        })}
      </header>
    </div>
  );
}
export default App;