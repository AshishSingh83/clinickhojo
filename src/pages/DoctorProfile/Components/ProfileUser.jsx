import React from "react";

function ProfileUser({
  fullName,
  profileImage,
  uniqueDoctorId,
  email
}) {
  return (
    <div className={` flex flex-row gap-6 bg-[#D9D9D9]  h-28 text-center `}>
      <div className=" w-20 h-20 bg-[#D9D9D9] flex justify-center items-center mt-3">
        <img
          src={profileImage}
          alt="Placeholder"
          className=" w-20 h-20 max-h-full rounded-full "
        />
      </div>
      <p className="text-black mt-2   ">
      <span>Name : </span>
        {uniqueDoctorId} <br />
        <span>Mobile No. : </span>
        {uniqueDoctorId} <br />
        <span>Email : </span>
        {email} <br />
      </p>
    </div>
  );
}

export default ProfileUser;
