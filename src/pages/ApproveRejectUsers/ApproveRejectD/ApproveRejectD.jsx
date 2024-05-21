import React, { useState } from "react";
import Address from "./Address.jsx";
import WrongInfo from "./WrongInfo.jsx";
import Buttons from "../ButtonRow/Buttons.jsx";
import AppoitmentFee from "./AppoitmentFee.jsx";
import SessionTimings from "./SessionTimings.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import instance from "../../../axios.js";
function ApproveRejectD() {
  const location = useLocation();
  const { data } = location.state;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    remark: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (doctorsUniqueId, isApproved) => {
    try {
      const response = await instance.put("api/admin/approveDoctors", {
        doctorsUniqueId,
        approvedBy: "Rahul123",
        isApproved,
        addRemark: formData.remark,
      });
      navigate("../ApproveReject");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="flex flex-row justify-between h-screen w-screen "
      style={{ backgroundColor: "white" }}
    >
      <div className="flex flex-row gap-64 ms-40 ">
        <div className="flex flex-col mt-3 gap-1">
          <Address addData={data} />
          <AppoitmentFee />
          <WrongInfo />
        </div>

        <div className=" me-24 flex flex-col  mt-5 gap-6">
          <SessionTimings />
          <div className=" bg-[#a9a9ab] w-[425px] h-[130px] mb-4 rounded-sm">
            <div className="h-[130px] ">
              <textarea
                id="inputTextArea"
                name="remark"
                className=" placeholder-black w-full h-full p-2 resize-none bg-[#a9a9ab]"
                placeholder="Add Remark..."
                style={{ color: "black" }}
                value={formData.remark}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className=" mt-10 ">
            <Buttons
              bg="bg-white"
              handleSubmita={() => handleSubmit("237491", true)}
              handleSubmitb={() => handleSubmit("237491", false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApproveRejectD;
