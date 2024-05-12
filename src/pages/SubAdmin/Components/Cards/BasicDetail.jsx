import React, { useState } from "react";
import Buttons from "../../../ApproveRejectUsers/ButtonRow/Buttons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dialog from "../../../../components/ui/Diloge/Dialog";
const DetailItem = ({ label, value }) => (
  <div className="mt-1">
    <span className="font-sm">{label} :</span> {value}
    <br />
  </div>
);
const BasicDetail = ({ data }) => {
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });
  const navigate = useNavigate();
  const handleSubmitaa = () => {
    navigate("../CreateSubAdmin", { state: { data } });
  };
  const handleSubmitbb = async () => {
    try {
      const response = await axios.post(`api/admin/delete/subAdmin`, {
        subAdminId: `${data.assignedUserId}`,
      });
      navigate("../SubAdminMainProfile");
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };
  const handleDelete = () => {
    handleDialog("Are you sure you want to delete?", true, "ashish");
  };
  const areUSureDelete = async (choose) => {
    if (choose) {
      try {
        const response = await axios.post(`api/admin/delete/subAdmin`, {
          subAdminId: `${data.assignedUserId}`,
        });
        navigate("../SubAdminMainProfile");
      } catch (e) {
        console.log(e.message);
      }
    } else {
      handleDialog("", false);
    }
  };
  return (
    <>
      <div className="bg-[#03229F] w-[500px] h-[430px] mb-4 rounded-sm text-white">
        <div className="p-1">
          <h1 className="text-lg ms-5 m-1   font-semibold">
            Basic Details :
          </h1>
        </div>
        <div className=" font-medium  ms-2 mb-5 opacity-75">
          <DetailItem label="Full Name" value={data.fullName} />
          <DetailItem label="Contact Number" value={data.contactNumber} />
          <DetailItem label="Email Id" value={data.email} />
          <DetailItem label="Gender" value={data.gender} />
          <DetailItem label="DOB" value={data.dateOfBirth} />
          <DetailItem label="Address" value={data.address} />
          <DetailItem label="Date Added" value={data.dateAdded} />
          <DetailItem label="Assigned User Id" value={data.assignedUserId} />
          <DetailItem
            label="Assigned User Password"
            value={data.assignedUserPassword}
          />
        </div>
        <div className="mt-6 ms-14 bg-[#03229F]">
          <Buttons
            bg="bg-[#03229F]"
            texta="Edit Profile"
            textb="Delete Profile"
            handleSubmita={handleSubmitaa}
            handleSubmitb={handleDelete}
          />
        </div>
      </div>
      {dialog.isLoading && (
        <Dialog
          nameProduct={dialog.nameProduct}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    </>
  );
};

export default BasicDetail;
