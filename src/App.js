import React, { useEffect } from "react"
import './App.css';
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import Checkout from "./Checkout";  
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import {Elements,} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51M0kORDnvXNXPMgmjzQTDzESm4rfy7SAeui51kG1tSx8eFCfi1txSZmvPicLYldKG3RfEnybJnSdKVyGLYbNcs32006Z5lTg6N"
)
function App() { 

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
   
<div className="app">
<Router>
  <Routes>
  <Route path="/Orders" element={<><Header/><Orders/></> } />
      <Route path="/Login" element={<Login />}/>
      <Route path="/Payment" 
      element={
        <>
        <Header />
        <Elements stripe={promise}>
          <Payment />
        </Elements>
        
        </>
      }
     />
     <Route path="/" element={<><Header /><Home /></> } />
     <Route path="/Checkout" element={<><Header/><Checkout/></> } />

    </Routes>
    </Router>
</div>

  );
}

export default App;
