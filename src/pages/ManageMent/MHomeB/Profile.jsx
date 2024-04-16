import React from "react";

function Profile({
  fullName,
  profileImage,
  uniqueDoctorId,
  accountAddedBy = null,
  bool,
}) {
  return (
    <div className={` flex flex-row gap-6`}>
      <div className=" w-20 h-20 bg-white flex justify-center items-center ">
        <img
          src={profileImage}
          alt="Placeholder"
          className=" w-20 h-20 max-h-full rounded-full "
        />
      </div>

      <p className="text-black font-medium  ">
        <span className=" font-medium " style={{ fontSize: "20px" }}>
          {fullName}{" "}
        </span>
        <br />
        <span>UniqueId : </span>
        {uniqueDoctorId} <br />
        {bool && (
          <div>
            <span>Account added by: </span>
            {accountAddedBy || "null"}
            <br />
          </div>
        )}
      </p>
    </div>
  );
}

export default Profile;
