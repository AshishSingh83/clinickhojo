
import React, { useEffect, useState } from 'react';
import instance from '../../axios';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/ui/clipPath/Spinner';

function Protected(props) {
    const Component = props.Component; 
    const [val,setVal] = useState('') ;
    const getDataFromLocalStorage = (key) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      };
      const deleteDataFromLocalStorage = (key) => {
        localStorage.removeItem(key);
      };
    const navigate = useNavigate();
    const [value, setValue] = useState(false);

    useEffect(() => {
        let savedData = getDataFromLocalStorage('AdminToken');
        if (savedData === null){
            setVal('sub') ;
            savedData = getDataFromLocalStorage('SubAdminToken');
        }
        if (savedData) {
            const verifyToken = async () => {
                try {
                    const response = await instance.post(
                        "api/admin/profile/subAdmin",
                        {},
                        {
                            headers: {
                                Authorization: `Bearer ${savedData}`,
                            },
                        }
                    );
                    if (response.data.authData.userData.user_role) {
                        setValue(true);
                    }
                } catch (error){
                    if(val === 'sub'){
                        deleteDataFromLocalStorage('SubAdminToken');
                    }else{
                        deleteDataFromLocalStorage('AdminToken');
                    }
                    navigate('/');
                    console.log("Error:", error.message);
                }
            };
            verifyToken();
        } else {
            navigate('/');
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

export default Protected;
