import React, { useState } from "react";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../AdminHome/Sidebar/Sidebar";
function BroadCastMessage() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    remark: "",
  });
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChangeTextArea = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const options = [
    { value: "Doctors", label: "Doctors" },
    { value: "Users", label: "Users" },
    { value: "All", label: "All" },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const sendMessage = async () => {
    console.log("hiiii");
    if (!file) {
      alert("Please select a file.");
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("fileName", file);
    const messageData = {
      message: formData.remark,
      subAdminId: "Rahul123",
      sendTo: selectedOption,
      fileName: formDataToSend,
    };
    try {
      const response = await axios.post(
        "api/admin/createBroadcastMessage",
        messageData
      );
      navigate("../AdminHome");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-row justify-between h-screen w-screen bg-[#0529BB]">
      <div className="flex flex-col justify-between bg-[#c2c0bc]">
        <div className="me-7">
          <Sidebar someData={{'index':3}}/>
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>
      <div className=" mt-40 me-96 bg-[#03229F] h-[450px]">
        <div>
          <div className="flex  bg-[#03229F] text-black">
            <div className="flex flex-row text-xl   bg-[#D9D9D9] p-3 mb-10">
              <div className="">
                <span>Send Broadcast Message to :</span>
              </div>
              {options.map((option) => (
                <div className="flex items-center" key={option.value}>
                  <input
                    type="radio"
                    id={option.value}
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="h-[250px] w-[750px]">
            <textarea
              id="inputTextArea"
              name="remark"
              className=" placeholder-white w-full h-full p-2 resize-none bg-[#03229F] "
              placeholder="Draft Your Message"
              style={{ color: "white", borderColor:'white' }}
              value={formData.remark}
              onChange={handleChangeTextArea}
            />
          </div>
        </div>
        <div>
          <div></div>
          <div className=" w-[720px] flex flex-row justify-between ">
            <div>
              <input
                className=" bg-[#D9D9D9] text-black mt-6 p-4 "
                placeholder="Attach Document or Photo"
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <div className=" mt-5">
              <Button
                text="Send Message"
                bgColor="bg-[#24C70A]"
                hoverColor="hover:bg-[#39bd41]"
                handleSubmit={sendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BroadCastMessage;
