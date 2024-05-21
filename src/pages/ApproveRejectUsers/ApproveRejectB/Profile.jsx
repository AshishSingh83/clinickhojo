import React from "react";
function Profile({
  fullName,
  profileImage,
  uniqueDoctorId,
  accountAddedBy = null,
  bool,
}) {
  return (
    <div className={` flex flex-row gap-12 text-white `}>
      <div className=" w-20 h-20 bg-[#03229F] flex justify-center items-center ">
        <img
          src={profileImage}
          alt="Placeholder"
          className=" w-20 h-20 max-h-full rounded-full "
        />
      </div>

      <div className="text-white font-normal   ">
        <span className=" font-medium " style={{ fontSize: "25px" }}>
          Dr.{fullName}{" "}
        </span>
        <br />
        <span className=" opacity-80">UniqueId : </span>#{uniqueDoctorId} <br />
        {bool && (
          <div>
            <span className=" opacity-80">Account added by: </span>
            {accountAddedBy || "null"}
            <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
