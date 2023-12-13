import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import { ToastContainer } from 'react-toastify';
import Allproducts from "./pages/allproducts/AllProducts";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={
                    <ProtectedRoute>
                        <Order />
                    </ProtectedRoute>
                } />
                <Route path="/cart" element={<Cart />} />
                <Route path="/dashboard" element={
                    <ProtectedRoutesForAdmin>
                        <Dashboard />
                    </ProtectedRoutesForAdmin>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/productInfo/:id" element={<ProductInfo />} />
                <Route path="/allproducts" element={<Allproducts />} />
                <Route path="/addproduct/" element={
                    <ProtectedRoutesForAdmin>
                        <AddProduct />
                    </ProtectedRoutesForAdmin>
                } />
                <Route path="/updateproduct/" element={
                    <ProtectedRoutesForAdmin>
                        <UpdateProduct />
                    </ProtectedRoutesForAdmin>
                } />
                <Route path="/*" element={<NoPage />} />
            </Routes>
            <ToastContainer />
        </Router>
    )
}
export default App;

//user
const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem('user')
    if (user) {
        return children
    } else {
        return <Navigate to='/login' />
    }
}

//admin
export const ProtectedRoutesForAdmin = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem('user'))
    console.log(admin.user.email)
    if (admin.user.email === 'admin@gmail.com') {
        return children
    }
    else {
        return <Navigate to='/login' />
    }
}