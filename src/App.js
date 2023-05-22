import {React} from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";

import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { NGOEmployeeSignUp } from "./components/NGOEmployeeSignUp";
import { RestaurantEmployeeSignUp } from "./components/RestaurantEmployeeSignUp";
import { NGOManagementSignUp } from "./components/NGOManagementSignUp";
import { RestaurantManagementSignUp } from "./components/RestaurantManagementSignUp";
import { AboutUs } from "./components/AboutUs";
import { Blog } from "./components/Blog";
import { Donate } from "./components/Donate";
import { Causes } from "./components/Causes";
import Modal from "./components/Modal";
import { RestaurantDashboardAdmin } from "./components/RestaurantDashboardAdmin";



import HomeScreen from "./components/HomeScreen";


import { Admin } from "./components/AdminDashboard/Admin";
import { Restaurant } from "./components/AdminDashboard/Restaurant";
import { NGO } from "./components/AdminDashboard/Ngo";
import Home from "./components/RestaurantAdmin/Home";
import { Accounts } from "./components/RestaurantAdmin/Accounts";
import { ApproveEmployee } from "./components/RestaurantAdmin/ApproveEmployee";
import { DonationHistory } from "./components/RestaurantAdmin/DonationHistory";
import { Active } from "./components/RestaurantAdmin/Active";
import { ToBePicked } from "./components/RestaurantAdmin/ToBePicked";
import NgoHome from "./components/NgoAdmin/Home";
import History from "./components/NgoAdmin/History";
import NgoApproveEmployee from "./components/NgoAdmin/ApproveEmployee";
import ActivePost from "./components/NgoAdmin/ActivePost";
import Accepted from "./components/NgoAdmin/Accepted";
import HomeNgoEmp from "./components/NgoEmp/HomeNgoEmp";
import HistoryNgoEmp from "./components/NgoEmp/HistoryNgoEmp";
import ActivePostNgoEmp from "./components/NgoEmp/ActivePostNgoEmp";
import AcceptedNgoEmp from "./components/NgoEmp/AcceptedNgoEmp";
import AccountsResEmp from "./components/RestaurantEmp/AccountsResEmp";

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up/ngo-employee-sign-up" element={<NGOEmployeeSignUp/>} />
        <Route path="/sign-up/restaurant-employee-sign-up" element={<RestaurantEmployeeSignUp/>} />
        <Route path="/sign-up/restaurant-management-sign-up" element={<RestaurantManagementSignUp/>} />
        <Route path="/sign-up/ngo-management-sign-up" element={<NGOManagementSignUp/>} />
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/blogs" element={<Blog/>}></Route>
      <Route path="/donate-now" element={<Donate/>}></Route>
      <Route path="/causes" element={<Causes/>}></Route>
      <Route path="/modal" element={<Modal/>}></Route>
      <Route path ="/restaurant-dashboard-admin" element={<RestaurantDashboardAdmin/>}></Route>
      
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/sign-up/ngo-employee-sign-up"
          element={<NGOEmployeeSignUp />}
        />
        <Route
          path="/sign-up/restaurant-employee-sign-up"
          element={<RestaurantEmployeeSignUp />}
        />
        <Route
          path="/sign-up/restaurant-management-sign-up"
          element={<RestaurantManagementSignUp />}
        />
        <Route
          path="/sign-up/ngo-management-sign-up"
          element={<NGOManagementSignUp />}
        />
        <Route path="/admin-dashboard/admin" element={<Admin />} />
        <Route path="/admin-dashboard/restaurant" element={<Restaurant />} />
        <Route path="/admin-dashboard/ngo" element={<NGO />} />
        <Route path="/restaurant-admin/homee" element={<Home />} />
        <Route path="/restaurant-admin/accounts" element={<Accounts />} />
        <Route
          path="/restaurant-admin/approve-employee"
          element={<ApproveEmployee />}
        />
        <Route
          path="/restaurant-admin/donation-history"
          element={<DonationHistory />}
        />
        <Route path="/restaurant-admin/active" element={<Active />} />
        <Route path="/restaurant-admin/to-be-picked" element={<ToBePicked />} />
        <Route path="/ngo-admin/home" element={<NgoHome />} />
        <Route path="/ngo-admin/history" element={<History />} />
        <Route
          path="/ngo-admin/approve-employee"
          element={<NgoApproveEmployee />}
        />
        <Route path="/ngo-admin/active-post" element={<ActivePost />} />
        <Route path="/ngo-admin/accepted" element={<Accepted />} />
        <Route path="/ngo-emp/home" element={<HomeNgoEmp />} />
        <Route path="/ngo-emp/history" element={<HistoryNgoEmp />} />
        <Route path="/ngo-emp/active-post" element={<ActivePostNgoEmp />} />
        <Route path="/ngo-emp/accepted" element={<AcceptedNgoEmp />} />
        <Route path="/restaurant-emp/" element={<AccountsResEmp />} />
      
     
      </Routes>
      <Footer/>
    </>
  );
};

export { App };
