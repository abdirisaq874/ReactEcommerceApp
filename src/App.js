// import Home from "./routes/Home/Home.router";
import { Routes, Route} from "react-router-dom";
import Home from "./routes/Home/Home.router";
import Navigation from "./routes/naviagtion/navigation.router";
import Shop from './routes/shop/shop.router'
import CheckOut from "./routes/checkOut/CheckOut.router";
import Authentication from "./routes/Authentication/Authentication.router";
import { useEffect } from "react";
import { authenticationstatechanged, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import {useDispatch} from 'react-redux'


const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsubscribe = authenticationstatechanged((user) => {
      if(user){
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  },[dispatch])


  

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
          <Route index element={<Home />}/>
          <Route path="shop/*" element={<Shop/>}/>
          <Route path="Auth" element={<Authentication/>}/>
          <Route path="CheckOut" element={<CheckOut/>}/>
      </Route>
    </Routes>
  );
};

export default App;
