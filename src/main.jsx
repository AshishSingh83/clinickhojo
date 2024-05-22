// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { Provider } from "react-redux";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import ResetPassword from "./pages/ForgetPassword/ResetPassword.jsx";
// import AdminHome from "./pages/AdminHome/AdminHome.jsx";
// import ApproveReject from "./pages/ApproveRejectUsers/ApproveRejectA/ApproveReject.jsx";
// import ApproveRejectB from "./pages/ApproveRejectUsers/ApproveRejectB/ApproveRejectB.jsx";
// import SubAdminMainProfile from "./pages/SubAdmin/SubAdminMainProfile.jsx";
// import CreateSubAdmin from "./pages/SubAdmin/Components/CreateSubAdmin.jsx";
// import SubAdminEdit from "./pages/SubAdmin/SubAdminEdit.jsx";
// import BroadCastMessage from "./pages/BroadCast/BroadCastMessage.jsx";
// import AllInOne from "./pages/chartjs/DoctorRanking/AppoitmentBased/AllInOne.jsx";
// import { store } from "./app/store.js";
// import persistStore from "redux-persist/es/persistStore";
// import ViewProfileMain from "./pages/DoctorProfile/ViewProfileMain.jsx";
// import UserProfile from "./pages/DoctorProfile/UserProfile.jsx";
// import VerifiedDoctorProfile from "./pages/NormalProfiles/Doctor/VerifiedDoctorProfile.jsx";
// import MainAdminLogin from "./pages/AdminLogin/MainAdminLogin.jsx";
// import SubAdminLogin from "./pages/AdminLogin/SubAdminLogin.jsx";
// import { PersistGate } from "redux-persist/integration/react";
// import ApproveRejectHospital from "./pages/ApproveRejectUsers/ApproveRejectC/ApproverRejectHospital.jsx";
// import VerifiedHospital from "./pages/NormalProfiles/clinicProfile/verifiedHospital.jsx";
// import Protected from "./pages/Protected/Protected.jsx";
// import ProtectedAdmin from "./pages/Protected/ProtectedAdmin.jsx";
// let persistor = persistStore(store);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="" element={<MainAdminLogin />} />
//       <Route path="ResetPassword/:token" element={<ResetPassword />} />
//       <Route path="AdminHome" element={<Protected Component={AdminHome} />} />
//       <Route path="ApproveReject" element={<Protected Component={ApproveReject} />} />
//       <Route path="ApproveRejectB" element={<Protected Component={ApproveRejectB} />}/>
//       <Route path="BroadCastMessage" element={<Protected Component={BroadCastMessage} />}  />
//       <Route path="ViewProfileMain" element={<Protected Component={ViewProfileMain} />} />
//       <Route path="VerifiedDoctorProfile" element={<Protected Component={VerifiedDoctorProfile} />} />
//       <Route path="ApproveRejectHospital" element={<Protected Component={ApproveRejectHospital} />} />
//       <Route path="AllInOne" element={<Protected Component={AllInOne} />} />
//       <Route path="UserProfile" element={<Protected Component={UserProfile}/>}/>
//       <Route path="SubAdminLogin" element={<SubAdminLogin />} />
//       <Route path="SubAdminMainProfile" element={<ProtectedAdmin Component={SubAdminMainProfile}/>} />
//       <Route path="SubAdminEdit" element={<ProtectedAdmin Component={SubAdminEdit}/>} />
//       <Route path="CreateSubAdmin" element={<ProtectedAdmin Component={CreateSubAdmin}/>} />
//       <Route path="VerifiedHospital" element={<Protected Component={VerifiedHospital} />}  />
//     </Route>
//   )
// );
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <PersistGate persistor={persistor}>
//       <RouterProvider router={router} />
//     </PersistGate>
//   </Provider>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ResetPassword from './pages/ForgetPassword/ResetPassword.jsx';
import AdminHome from './pages/AdminHome/AdminHome.jsx';
import ApproveReject from './pages/ApproveRejectUsers/ApproveRejectA/ApproveReject.jsx';
import ApproveRejectB from './pages/ApproveRejectUsers/ApproveRejectB/ApproveRejectB.jsx';
import SubAdminMainProfile from './pages/SubAdmin/SubAdminMainProfile.jsx';
import CreateSubAdmin from './pages/SubAdmin/Components/CreateSubAdmin.jsx';
import SubAdminEdit from './pages/SubAdmin/SubAdminEdit.jsx';
import BroadCastMessage from './pages/BroadCast/BroadCastMessage.jsx';
import AllInOne from './pages/chartjs/DoctorRanking/AppoitmentBased/AllInOne.jsx';
import { store } from './app/store.js';
import { persistStore } from 'redux-persist'; // Ensure correct import here
import ViewProfileMain from './pages/DoctorProfile/ViewProfileMain.jsx';
import UserProfile from './pages/DoctorProfile/UserProfile.jsx';
import VerifiedDoctorProfile from './pages/NormalProfiles/Doctor/VerifiedDoctorProfile.jsx';
import MainAdminLogin from './pages/AdminLogin/MainAdminLogin.jsx';
import SubAdminLogin from './pages/AdminLogin/SubAdminLogin.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import ApproveRejectHospital from './pages/ApproveRejectUsers/ApproveRejectC/ApproverRejectHospital.jsx';
import VerifiedHospital from './pages/NormalProfiles/clinicProfile/verifiedHospital.jsx';
import Protected from './pages/Protected/Protected.jsx';
import ProtectedAdmin from './pages/Protected/ProtectedAdmin.jsx';

let persistor = persistStore(store); // Initialize persistor

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<MainAdminLogin />} />
      <Route path="ResetPassword/:token" element={<ResetPassword />} />
      <Route path="AdminHome" element={<Protected Component={AdminHome} />} />
      <Route path="ApproveReject" element={<Protected Component={ApproveReject} />} />
      <Route path="ApproveRejectB" element={<Protected Component={ApproveRejectB} />} />
      <Route path="BroadCastMessage" element={<Protected Component={BroadCastMessage} />} />
      <Route path="ViewProfileMain" element={<Protected Component={ViewProfileMain} />} />
      <Route path="VerifiedDoctorProfile" element={<Protected Component={VerifiedDoctorProfile} />} />
      <Route path="ApproveRejectHospital" element={<Protected Component={ApproveRejectHospital} />} />
      <Route path="AllInOne" element={<Protected Component={AllInOne} />} />
      <Route path="UserProfile" element={<Protected Component={UserProfile} />} />
      <Route path="SubAdminLogin" element={<SubAdminLogin />} />
      <Route path="SubAdminMainProfile" element={<ProtectedAdmin Component={SubAdminMainProfile} />} />
      <Route path="SubAdminEdit" element={<ProtectedAdmin Component={SubAdminEdit} />} />
      <Route path="CreateSubAdmin" element={<ProtectedAdmin Component={CreateSubAdmin} />} />
      <Route path="VerifiedHospital" element={<Protected Component={VerifiedHospital} />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
