import Nav from "./components/Nav.jsx";
import React, { useState, useEffect } from 'react';
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx"
import Books from "./pages/Books";
import { books } from "./data";
import Bookinfo from "./pages/Bookinfo.jsx";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1 }])
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => 
        item.id === book.id
          ? {
            ...item,
            quantity: +quantity,
          }
        : item
      )
    )
  }
  function removeBook(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItem() {
    let counter = 0
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  useEffect (() => {
    console.log(cart)
  }, [cart])
  

  /*function addToCart (book) {
    const dupeItem = cart.find((item) => +item.id === +book.id)
    if  (dupeItem) {
      setCart(
        cart.map((item) => {
        if (item.id === dupeItem.id) {
          return {
            ...item, 
            quantity: item.quantity + 1,
          }
        } else {
          return item
        }
        })
      )
    } else{
      setCart ([...cart, { ...book, quantity: 1 }])
    }
  }
  useEffect (() => {
    console.log(cart)
  }, [cart]) */

  return (
    <Router>
      <div className="App">
          <Nav numberOfItem={numberOfItem()} />
            <Route path='/' exact component={Home} />
            <Route path='/books' exact render={() => <Books books={books} />} />
            <Route 
              path='/books/:id' 
              render={() => <Bookinfo books={books} addToCart={addToCart} cart={cart}/>} 
              />
            <Route path='/cart' render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook}/>} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;