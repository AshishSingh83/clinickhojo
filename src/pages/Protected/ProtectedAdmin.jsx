
import React, { useEffect, useState } from 'react';
import instance from '../../axios';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/ui/clipPath/Spinner';

function ProtectedAdmin(props) {
    const Component = props.Component; 
    const getDataFromLocalStorage = (key) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      };
    const navigate = useNavigate();
    const [value, setValue] = useState(false);
    useEffect(() => {
        let savedData = getDataFromLocalStorage('AdminToken');
        if (savedData === null) {
            navigate('/AdminHome');
        }
        if (savedData){
            const verifyToken = async () =>{
                try{
                    const response = await instance.post(
                        "api/admin/profile/subAdmin",
                        {},
                        {
                            headers: {
                                Authorization: `Bearer ${savedData}`,
                            },
                        }
                    );
                    if (response.data.authData.userData.user_role == "admin") {
                        setValue(true);
                    }
                } catch (error){
                    navigate('/AdminHome');
                    console.log("Error:", error.message);
                }
            };
            verifyToken();
        } else {
            navigate('/AdminHome');
        }
    }, []);

    return (
        <>
            {value ? (
                <Component/>
            ) : (
                <div className='flex justify-center items-center h-screen w-screen'>
                    <Spinner
                        height="h-[100px]"
                        width="w-[100px]"
                        fontSize="text-[2rem]"
                    />
                </div>
            )}
        </>
    );
}

export default ProtectedAdmin;
