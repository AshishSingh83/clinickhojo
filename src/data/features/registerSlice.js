import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = {
  doctorRadioInputData:'',
  doctorRadioInputDataCC:'',
  doctorData:'',
  subAdminData:'',
  doctorEmail:'',
  uniqueClinicId:'',
  uniqueDoctorId:'',
  managementData:'',
  managementEmail:'',
  managementContactNumber:'',
  userData:'',
  doctorName:'',
  hospitalData:'',
  approvedHospitals:'',
  doctorSessions:'',
}

export const registerSlice = createSlice({
  name: 'register',
  initialState:initialStateValue,
  reducers: {
    updateDoctorRadioInputData: (state,action) => {
      state.doctorRadioInputData = action.payload
    },
    updateDoctorRadioInputDataCC: (state,action) => {
      state.doctorRadioInputDataCC = action.payload
    },
    updateDoctorData: (state,action) => {
      state.doctorData = action.payload
    },
    updateSubAdminData: (state,action) => {
      state.subAdminData = action.payload
    },
    updateDoctorEmail: (state,action) =>{
      state.doctorEmail = action.payload
    },
    updateUniqueClinicId: (state,action) =>{
      state.uniqueClinicId = action.payload
    },
    updateUniqueDoctorId: (state,action) =>{
      state.uniqueDoctorId = action.payload
    },
    updateManagementData: (state,action) => {
      state.managementData = action.payload
    },
    updateManagementEmail: (state,action) => {
      state.managementEmail = action.payload
    },
    updateManagementContactNumber: (state,action) => {
      state.managementContactNumber = action.payload
    },
    updateUserData: (state,action) => {
      state.userData = action.payload
    },
    updateDoctorName: (state,action) => {
      state.doctorName = action.payload
    },
    updateHospitalData: (state,action) => {
      state.hospitalData = action.payload
    },
    updateApprovedHospitals: (state,action) => {
      state.approvedHospitals = action.payload
    },
    updateDoctorSession: (state,action) => {
      state.doctorSessions = action.payload
    },
    
  },
})
export const { updateDoctorRadioInputData,updateDoctorRadioInputDataCC,updateDoctorData,
  updateSubAdminData,updateDoctorEmail,
  updateUniqueClinicId,updateUniqueDoctorId,
  updateManagementData,updateManagementEmail,updateManagementContactNumber,updateUserData,updateDoctorName,updateHospitalData,updateApprovedHospitals,updateDoctorSession,
} = registerSlice.actions
export default registerSlice.reducer ;