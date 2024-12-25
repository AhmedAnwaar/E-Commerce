
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Notfound from './components/Notfound/Notfound'
import Products from './components/Products/Products'
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart'
import Catrgories from './components/Catrgories/Catrgories'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Brands from './components/Brands/Brands'
import Wishlist from './components/Wishlist/Wishlist'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { ToastContainer } from 'react-toastify'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import UserContext from './Context/UserContext'
import ResetPassword from './components/ResetPassword/ResetPassword'
import Payment from './components/Payment/Payment'
import AllOrders from './components/AllOrders/AllOrders'
import ResetCode from './components/ResetCode/ResetCode'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import CartContext from './Context/CartContext'

import WishListContext from './Context/WishListContext'
import Profile from './components/Profile/Profile'



let client = new QueryClient()



const router = createBrowserRouter([
  {
    path: "", element: <Layout />
    , children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgetpassword", element: <ForgetPassword /> },
      { path: "resetcode", element: <ResetCode /> },
      { path: "resetpassword", element: <ResetPassword /> },
      { path: "products", element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: "productDetails/:id/:category", element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
      { path: "Brands", element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: "categories", element: <ProtectedRoute><Catrgories /></ProtectedRoute> },
      { path: "Cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: "AllOrders", element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
      { path: "Payment", element: <ProtectedRoute><Payment /></ProtectedRoute> },
      { path: "profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
      { path: "Wishlist", element: <ProtectedRoute><Wishlist /></ProtectedRoute> },
    ]
  },
  { path: "*", element: <Notfound /> }
])

function App() {

  return <>
    <QueryClientProvider client={client}>
      <UserContext>
        <CartContext>
          <WishListContext>
            <RouterProvider router={router} />
            <ToastContainer />
          </WishListContext>
        </CartContext>
      </UserContext>
    </QueryClientProvider>
  </>
}

export default App
