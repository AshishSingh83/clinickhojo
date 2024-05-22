import instance from "../../axios";
const checkAdmin = async () => {
    const getDataFromLocalStorage = (key) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      };
  let savedData = getDataFromLocalStorage("AdminToken");
  if (savedData) {
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
      if (response.data.authData.userData.user_role === "admin") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

export default checkAdmin;
