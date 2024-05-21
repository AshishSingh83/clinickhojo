
import React from "react";
import Profile from "../../ManageMent/MHomeB/Profile";

function ManagementProfile() {
    const uniqueDoctorId = '345435';
    const fullName = 'Ashish Singh';
    const ProfilImg = 'myLogo.jpeg';
    const email = 'ashishsingh822003@gmail.com';
    const gender = 'male';
    const dob = '01-01-2004';

    return (
      <div className=" flex flex-col bg-[#03229F] w-[435px] min-h-[250px]">
       <div className="flex flex-row gap-20">
        <h1 className="text-lg font-medium ms-6 text-white">ManageMent Details:</h1>
       </div>
       <div className=" flex flex-col justify-center items-center w-[435px] min-h-[250px] rounded-sm">
            <div className="flex mb-4 justify-center items-center ms-20">
                <Profile
                    fullName={fullName}
                    profileImage={ProfilImg}
                    uniqueDoctorId={uniqueDoctorId}
                    accountAddedBy={null}
                    bool={false}
                />
            </div>
            <div className="flex flex-col text-xl opacity-75 w-full px-4">
                <div className="mt-1 flex flex-row items-center">
                    <label className="font-sm w-24">Email:</label>
                    <input 
                        type="text" 
                        value={email} 
                        readOnly 
                        className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center  text-opacity-100 w-72 "
                    />
                </div>
                <div className="mt-1 flex flex-row items-center">
                    <label className="font-sm w-24">Gender:</label>
                    <input 
                        type="text" 
                        value={gender} 
                        readOnly 
                        className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center  text-opacity-100 "
                    />
                </div>
                <div className="mt-1 flex flex-row items-center">
                    <label className="font-sm w-24">Dob:</label>
                    <input 
                        type="text" 
                        value={dob} 
                        readOnly 
                        className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center  text-opacity-100  "
                    />
                </div>
            </div>
        </div>
      </div>
        
    );
}

export default ManagementProfile;
