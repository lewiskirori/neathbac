import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Psingle from "./pages/psingle/Psingle"
import Orders from "./pages/order/Orders"
import Ordsingle from "./pages/ordsingle/Ordsingle"
import Login from "./pages/auth/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Blogs from "./pages/blog/Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs, orderInputs, settingsInputs, accountInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Account } from "./pages/account/Account";
import Settings from "./pages/account/Settings";

function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className = { darkMode ? "app dark" : 'app' }>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="auth/login" element={<Login />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userID" element={<Single />} />
              <Route path="new" element={<New inputs = {userInputs} title="Add a New User" />} 
              />
            </Route>
            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":productID" element={<Psingle />} />
              <Route path="new" element={<New inputs = {productInputs} title="Add a New Product" />} 
              />
            </Route>
            <Route path="orders">
              <Route index element={<Orders />} />
              <Route path=":orderID" element={<Ordsingle />} />
              <Route path="new" element={<New inputs = {orderInputs} title="Add a New Order" />} 
              />
            </Route>
            <Route path="blogs" element={<Blogs />} />
            <Route path="account">
              <Route index element={<Account />} />
              <Route path="settings" element={<Settings inputs = {settingsInputs} title="Account Settings" />} />
              <Route path="new" element={<New inputs = {accountInputs} title="Create a New Account" />} 
              />
            </Route>
            <Route path="auth/SignOut/" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
