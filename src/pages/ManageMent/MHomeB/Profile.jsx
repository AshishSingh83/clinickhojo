import React from "react";

function Profile({
  fullName,
  profileImage,
  uniqueDoctorId,
  accountAddedBy = null,
  bool,
}) {
  return (
    <div
      className={` flex   text-white w-auto md:w-[480px] md:gap-4 justify-center items-center `}
    >
      <div className=" md:w-20 md:h-20 bg-[#03229F] flex justify-center items-center ">
        <img
          src={profileImage}
          alt="Placeholder"
          className=" w-16 h-16 md:w-20 md:h-20 max-h-full rounded-full "
        />
      </div>

      <div className=" md:w-[330px] opacity-85">
        <div className=" font-medium  ">
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
        </div>
      </div>
    </div>
  );
}

export default Profile;
