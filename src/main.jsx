import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import EnterPhone from "./pages/ForgetPassword/EnterPhone.jsx";
import EnterOtp from "./pages/ForgetPassword/EnterOtp.jsx";
import EnterPassword from "./pages/ForgetPassword/EnterPassword.jsx";
import AdminHome from "./pages/AdminHome/AdminHome.jsx";
import ApproveReject from "./pages/ApproveRejectUsers/ApproveRejectA/ApproveReject.jsx";
import Buttons from "./pages/ApproveRejectUsers/ButtonRow/Buttons.jsx";
import ApproveRejectB from "./pages/ApproveRejectUsers/ApproveRejectB/ApproveRejectB.jsx";
import ApproveRejectC from "./pages/ApproveRejectUsers/ApproveRejectC/ApproveRejectC.jsx";
import ApproveRejectD from "./pages/ApproveRejectUsers/ApproveRejectD/ApproveRejectD.jsx";
import SubAdminMainProfile from "./pages/SubAdmin/SubAdminMainProfile.jsx";
import CreateSubAdmin from "./pages/SubAdmin/Components/CreateSubAdmin.jsx";
import SubAdminEdit from "./pages/SubAdmin/SubAdminEdit.jsx";
import BroadCastMessage from "./pages/BroadCast/BroadCastMessage.jsx";
import AllInOne from "./pages/chartjs/DoctorRanking/AppoitmentBased/AllInOne.jsx";
import { store } from "./app/store.js";
import persistStore from "redux-persist/es/persistStore";
import ViewProfileMain from "./pages/DoctorProfile/ViewProfileMain.jsx";
import ManagementHome from "./pages/ManageMent/MHome/ManagementHome.jsx";
import MHomeB from "./pages/ManageMent/MHomeB/MHomeB.jsx";
import BarChartD from "./pages/chartjs/component/Bar/BarChartD.jsx";
import MHomeC from "./pages/ManageMent/MHomeC.jsx/MHomeC.jsx";
import UserProfile from "./pages/DoctorProfile/UserProfile.jsx";
import VerifiedClinic from "./pages/NormalProfiles/clinicProfile/VerifiedClinic.jsx";
import VerifiedDoctorProfile from "./pages/NormalProfiles/Doctor/VerifiedDoctorProfile.jsx";
import MainAdminLogin from "./pages/AdminLogin/MainAdminLogin.jsx";
import SubAdminLogin from "./pages/AdminLogin/SubAdminLogin.jsx";
import ClipBg from "./components/ui/clipPath/ClipBg.jsx";
import Skeletonn from "./components/ui/SkeletonPage.jsx/Skeletonn.jsx";
import { PersistGate } from "redux-persist/integration/react";
import ApproveRejectHospital from "./pages/ApproveRejectUsers/ApproveRejectC/ApproverRejectHospital.jsx";
import VerifiedHospital from "./pages/NormalProfiles/clinicProfile/verifiedHospital.jsx";




let persistor = persistStore(store);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<MainAdminLogin />} />
      <Route path="EnterPhone" element={<EnterPhone />} />
      <Route path="EnterOtp" element={<EnterOtp />} />
      <Route path="EnterPassword" element={<EnterPassword />} />
      <Route path="AdminHome" element={<AdminHome />} />
      <Route path="ApproveReject" element={<ApproveReject />} />
      <Route path="ApproveRejectB" element={<ApproveRejectB />} />
      <Route path="ApproveRejectC" element={<ApproveRejectC />} />
      <Route path="ApproveRejectD" element={<ApproveRejectD />} />
      <Route path="Buttons" element={<Buttons />} />
      <Route path="UserProfile" element={<UserProfile />} />
      <Route path="BroadCastMessage" element={<BroadCastMessage />} />
      <Route path="ViewProfileMain" element={<ViewProfileMain />} />
      <Route path="VerifiedClinic" element={<VerifiedClinic />} />
      <Route path="VerifiedDoctorProfile" element={<VerifiedDoctorProfile />} />
      <Route path="ApproveRejectHospital" element={<ApproveRejectHospital />} />
  

      <Route path="AllInOne" element={<AllInOne />} />
      <Route path="MHomeC" element={<MHomeC />} />
      <Route path="UserProfile" element={<UserProfile />} />
      <Route path="SubAdminLogin" element={<SubAdminLogin />} />
     

      <Route path="SubAdminMainProfile" element={<SubAdminMainProfile />} />
      <Route path="SubAdminEdit" element={<SubAdminEdit />} />
      <Route path="CreateSubAdmin" element={<CreateSubAdmin />} />
      <Route path="ManagementHome" element={<ManagementHome />} />
      <Route path="MHomeB" element={<MHomeB />} />
      <Route path="BarChartD" element={<BarChartD />} />


      <Route path="VerifiedHospital" element={<VerifiedHospital/>}/>

    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <PersistGate persistor={persistor}>
  <RouterProvider router={router} />
  </PersistGate>
  </Provider>
);
