import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function App() {

  const [{user},dispatch] = useStateValue();

  useEffect(()=>{
   const unsubscribe =  auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user logged in
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
    return ()=>{
      unsubscribe();
    }
  },[])

  console.log('user is >>>', user)

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
