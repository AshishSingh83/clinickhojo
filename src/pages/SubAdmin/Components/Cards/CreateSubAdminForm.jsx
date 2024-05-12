import React, { useEffect, useState } from "react";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormGroup({ label, placeholder, type = "text", value, onChange }) {
  return (
    <div className="flex flex-row mt-2">
      <label
        className="block text-black text-xl font-medium mb-2  ms-6"
        htmlFor={placeholder}
      >
        {label} :
      </label>
      <div className="w-96  me-28 rounded-md mb-2">
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          className="rounded-md appearance-none relative block w-full px-3 py-2 border border-blue-600 placeholder-black text-black focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm bg-[#D9D9D9]"
        />
      </div>
    </div>
  );
}

function CreateSubAdminForm({ formDataa }) {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [assignedUserId, setAssignedUserId] = useState("");
  const [assignedUserPassword, setAssignedUserPassword] = useState("");
  useEffect(() => {
    if (formDataa) {
      setFullName(formDataa.fullName || "");
      setContactNumber(formDataa.contactNumber || "");
      setEmail(formDataa.email || "");
      setGender(formDataa.gender || "");
      setDateOfBirth(formDataa.dateOfBirth || "");
      setAddress(formDataa.address || "");
      setAssignedUserId(formDataa.assignedUserId || "");
      setAssignedUserPassword(formDataa.assignedUserPassword || "");
    }
  }, [formDataa]); 

  const createAdminButton = async () => {
    const formData = {
      fullName,
      contactNumber,
      email,
      gender,
      dateOfBirth,
      address,
      assignedUserId,
      assignedUserPassword,
    };
    if (formDataa.length != 0) {
      try {
        const response = await axios.put("api/admin/editSubAdmin", formData);
        navigate("../SubAdminMainProfile");
      } catch (error) {
        console.error("Error creating sub-admin:", error);
      }
    } else {
      try {
        const response = await axios.post("api/admin/createSubAdmin", formData);
        navigate("../SubAdminMainProfile");
      } catch (error) {
        console.error("Error creating sub-admin:", error);
      }
    }
  };

  return (
    <div className="bg-[#D9D9D9] w-[750px] h-[500px] rounded-sm">
      <div className="p-1">
        <h1 className="text-lg ms-5 m-1  text-black font-medium underline shadow-sm">
          Create SubAdmin Profile :
        </h1>
      </div>

      <div className="w-[750px]">
        <div className="bg-[#D9D9D9] rounded">
          <FormGroup
            label="Full Name"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <FormGroup
            label="Contact Number"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <FormGroup
            label="Email Id"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormGroup
            label="Gender"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <FormGroup
            label="DOB"
            placeholder="DOB"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <FormGroup
            label="Address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <FormGroup
            label="Assigned User Id"
            placeholder="Assigned User Id"
            value={assignedUserId}
            onChange={(e) => setAssignedUserId(e.target.value)}
          />
          <FormGroup
            label="Assigned User Password"
            placeholder="Assigned User Password"
            type="password"
            value={assignedUserPassword}
            onChange={(e) => setAssignedUserPassword(e.target.value)}
          />

          <div className="w-44 mt-9 ms-auto me-28 mb-">
            <Button 
            text="Save Profile"
            handleSubmit={createAdminButton}
            bgColor="bg-[#229649]"
             />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSubAdminForm;
