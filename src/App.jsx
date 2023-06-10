import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Psingle from "./pages/psingle/Psingle";
import Orders from "./pages/order/Orders";
import Ordsingle from "./pages/ordsingle/Ordsingle";
import Login from "./pages/auth/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Blogs from "./pages/blog/Blogs";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  productInputs,
  userInputs,
  orderInputs,
  settingsInputs,
  accountInputs,
} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Account } from "./pages/account/Account";
import Settings from "./pages/account/Settings";
import { AuthContext } from "./context/AuthContext";
import { ProductContext } from "./context/ProductContext";
import { useUsers } from "./context/UserContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { register } = useContext(AuthContext);
  const { createProduct } = useContext(ProductContext);
  const { createUser} = useUsers();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "dashboard",
      element: <Home />,
    },
    {
      path: "users",
      element: <List />,
    },
    {
      path: "users/:userID",
      element: <Single />,
    },
    {
      path: "users/new",
      element: <New inputs={userInputs} title="Add a New User" action={createUser}/>,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/account/settings",
      element: <Settings inputs={settingsInputs} title="Account Settings" />,
    },
    {
      path: "/account/new",
      element: (
        <New
          inputs={accountInputs}
          title="Create a New Account"
          action={register}
        />
      ),
    },
    {
      path: "products",
      element: <Products />,
    },
    {
      path: "products/:productID",
      element: <Psingle />,
    },
    {
      path: "products/new",
      element: (
        <New
          inputs={productInputs}
          title="Add a New Product"
          action={createProduct}
        />
      ),
    },
  ]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        
            
            <Route path="orders">
              <Route index element={<Orders />} />
              <Route path=":orderID" element={<Ordsingle />} />
              <Route
                path="new"
                element={<New inputs={orderInputs} title="Add a New Order" />}
              />
            </Route>
            <Route path="blogs" element={<Blogs />} />
            <Route path="account">
              <Route index element={<Account />} />
              <Route
                path="settings"
                element={
                  <Settings inputs={settingsInputs} title="Account Settings" />
                }
              />
              <Route
                path="new"
                element={
                  <New
                    inputs={accountInputs}
                    title="Create a New Account"
                    action={register}
                  />
                }
              />
            </Route>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
