import React, { useEffect, useState } from "react";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RadioButtonsC from "../../../../components/ui/RadioButtonC";

function FormGroup({ label, placeholder, type = "text", value, onChange }) {
  return (
    <div className="flex flex-row mt-2 p-2 opacity-80 ">
      <label
        className="block  text-xl font-medium mt-1  ms-6"
        htmlFor={placeholder}
      >
        {label} :
      </label>
      <div className="w-96  me-14 ms-auto rounded-md ">
        {type === "date" ? (
          <input
            placeholder={placeholder}
            type="date"
            value={value}
            onChange={onChange}
            className="rounded-md appearance-none bg-[#F2EFEF] relative block w-full px-3 py-2 border border-blue-600 placeholder-black  focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm text-black "
          />
        ) : (
          <Input
            placeholder={placeholder}
            type={type}
            value={value}
            handleChange={onChange}
            bg1="bg-[#F2EFEF]"
          />
        )}
      </div>
    </div>
  );
}

function CreateSubAdminFormA({ formDataa }) {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [assignedUserId, setAssignedUserId] = useState("");
  const [assignedUserPassword, setAssignedUserPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    if (formDataa) {
      setFullName(formDataa.fullName || "");
      setContactNumber(formDataa.contactNumber || "");
      setEmail(formDataa.email || "");
      setSelectedOption(formDataa.gender || "");
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
      gender: selectedOption,
      dateOfBirth,
      address,
      assignedUserId,
      assignedUserPassword,
    };
    if (formDataa.length != 0) {
      console.log(formData);
      try {
        const response = await axios.put("api/admin/editSubAdmin", formData);
        navigate("../SubAdminMainProfile");
      } catch (error) {
        console.error("Error editing sub-admin:", error.message);
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
    <div className="bg-[#03229F] w-[750px] h-[610px] rounded-sm flex justify-center items-center text-white">
      <div>
        <div className="p-1">
          <h1 className="text-lg ms-5 m-1   font-medium underline shadow-sm">
            Create SubAdmin Profile :
          </h1>
        </div>

        <div className="w-[750px]">
          <div className=" rounded">
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
            <div
              label="Gender "
              className="  flex flex-row gap-48 m-3"
            >
              <div className="  text-xl font-medium   ms-3">
                <p className=" opacity-75 ms-2">Gender :</p>
              </div>
              <div className=" ms-1">
                <RadioButtonsC
                  handleChange={handleChange}
                  selectedOption={selectedOption}
                />
              </div>
            </div>
            <FormGroup
              label="DOB"
              placeholder="DOB"
              type="date"
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

            <div className="w-44 mt-6 ms-auto me-28 mb-2 ]">
              <Button 
              text="Save Profile" 
              handleSubmit={createAdminButton}
              bg="bg-[#229649]"
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSubAdminFormA;
