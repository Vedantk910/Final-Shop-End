import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/Login';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Aboutus from './components/Aboutus';
import Ourservices from './components/Ourservices';
import Ourmission from './components/Ourmission';
import Whyus from './components/Whyus';
import Dashboard from './components/Dashboard/Dashboard';
import Customer from './components/Customer';
import CustomerID from './components/Customer/[id]';

import Inventory from './components/Dashboard/inventory/Inventory';
import DashHome from './components/Dashboard/dashhome/DashHome';
import SalesInsights from './components/Dashboard/salesInsights/SalesInsights';
import CustomerInsights from './components/Dashboard/customerinsights/CustomerInsights';
import Profile from './components/Dashboard/profile/Profile';
import Settings from './components/Dashboard/settings/Settings';

import Chat from './components/Chat';
import Signup from './Signup';
import Welcome from './components/Welcome';
import ShopForm from './components/ShopForm';
import Home from './components/Home';
import ShopInventroy from './components/ShopInventroy';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LoadUser } from './Actions/Register';
import Usersecurity from './components/Dashboard/settings/security/Usersecurity';
import Viewitem from './components/Dashboard/inventory/Viewitem';
import Edititem from './components/Dashboard/inventory/Edititem';
import AddItem from './components/Dashboard/inventory/AddItem';
import { showAllLocalShops } from './Actions/Shop';
import Cart from './components/Cart';
import Geolocation from './components/Maproute';
import MapContainers from './components/Mapcontainer';
import Payment from './components/Payment/Payment';

export let location = {
  latitude: "",
  longitude: ""
}

function App() {

  const dispatch = useDispatch()
  const [sidebarOpen, setSidebarOpen] = useState(true);
  // const [newLatitude, setLatitude] = useState(null)
  // const [newLongitude, setLongitude] = useState(null)

  useEffect(() => {
    console.log("Loading user details")
    dispatch(LoadUser())

    //gettign user's current location
    navigator.geolocation.watchPosition(position => {
      const { latitude, longitude } = position.coords;
      //console.log(latitude, longitude, "here");
      dispatch(showAllLocalShops({ latitude: latitude, longitude: longitude }, -1))
      location.latitude = latitude
      location.longitude = longitude
      // setLatitude(latitude)
      // setLongitude(longitude)
    });

  }, [])

  return (
    <div>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/list-shop" element={<ShopForm />}></Route>
          <Route path="/about-us" element={<Aboutus />}></Route>
          <Route path="/our-services" element={<Ourservices />}></Route>
          <Route path="/our-mission" element={<Ourmission />}></Route>
          <Route path="/why-us" element={<Whyus />}></Route>
          <Route path="/geolocation" element={<Geolocation />}></Route>
          <Route path="/mapcontainer" element={<MapContainers />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/dashboard" element={<Dashboard sidebarOpen={sidebarOpen} />}>
            <Route path='' element={<DashHome />} />
            <Route path='inventory' element={<Inventory />} >

            </Route>
            <Route path='customer-insights' element={<CustomerInsights />} />
            <Route path='sales-insights' element={<SalesInsights />} />
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} />

          </Route>
          <Route path='/dashboard/inventory/view/:id' element={<Viewitem />} />
          <Route path='/dashboard/inventory/update/:id' element={<Edititem />} />
          <Route path='/dashboard/inventory/add/:id' element={<AddItem />} />
          <Route path="/customer" element={<Customer />}></Route>
          <Route exact path="/customer/:id" element={<CustomerID />}></Route>
          <Route path="/user/changepassword" element={<Usersecurity />}></Route>
          <Route exact path="/shop/products/:id" element={<ShopInventroy />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />

      <Chat />
      <ToastContainer />
    </div>
  );
}

export default App;
