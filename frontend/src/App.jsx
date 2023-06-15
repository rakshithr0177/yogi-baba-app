import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Cart from './components/Cart/Cart'
import Contact from './components/Contact/contact'
import Shipping from './components/Cart/Shipping'
import ConfirmOrder from './components/Cart/ConfirmOrder'
import PaymentSuccess from './components/Cart/PaymentSuccess'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import MyOrders from './components/MyOrders/MyOrders'
import OrderDetails from './components/MyOrders/OrderDetails'
import Dashboard from './components/Admin/Dashboard'
import Users from './components/Admin/Users'
import Orders from './components/Admin/Orders'
import About from './components/About/About'

import './styles/app.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/founder.scss'
import './styles/menu.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/cart.scss'
import './styles/shipping.scss'
import './styles/confirmOrder.scss'
import './styles/paymentSuccess.scss'
import './styles/login.scss'
import './styles/profile.scss'
import './styles/table.scss'
import './styles/orderDetails.scss'
import './styles/dashboard.scss'
import './styles/about.scss'
import NotFound from './components/Layout/Notfound'
import { useEffect } from 'react'
import axios from 'axios'
// import { useDispatch } from 'react-redux'
// import { loadUser } from './redux/reducers/actions/user'


function App() {

  //const dispatch = useDispatch()
  
  useEffect(() => {
    // dispatch(loadUser())
    const fun = async() => {
      const { data } = await axios.get('http://localhost:4000/')
      console.log(data)
    }
    fun()
  },[])

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cart' element={ <Cart/>} />
          <Route path='/shipping' element={ <Shipping/>} />
          <Route path='/confirmorder' element={ <ConfirmOrder/>} />
          <Route path='/paymentSuccess' element={ <PaymentSuccess/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/me' element={<Profile/>} />
          <Route path='/myorders' element={<MyOrders/>} />
          <Route path='/order/:id' element={<OrderDetails/>} />
          <Route path='/admin/dashboard' element={<Dashboard/>} />
          <Route path='/admin/users' element={<Users/>} />
          <Route path='/admin/orders' element={<Orders/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
