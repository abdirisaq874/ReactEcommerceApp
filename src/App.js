// import Home from "./routes/Home/Home.router";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.router";
import Navigation from "./routes/naviagtion/navigation.router";
import Shop from "./routes/shop/shop.router";
import CheckOut from "./routes/checkOut/CheckOut.router";
import Authentication from "./routes/Authentication/Authentication.router";
import { useEffect } from "react";
import { CHECKUSERSESSION } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CHECKUSERSESSION());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="Auth" element={<Authentication />} />
        <Route path="CheckOut" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
