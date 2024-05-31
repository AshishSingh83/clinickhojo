import React, { useEffect, useState } from "react";
import BarChartB from "../../component/Bar/BarChartB";
import BarChartC from "../../component/Bar/BarChartC";
import BarChartD from "../../component/Bar/BarChartD";
import Sidebar from "../../../AdminHome/Sidebar/Sidebar";
import ClipBgB from "../../../../components/ui/clipPath/ClipBgB";
import Spinner from "../../../../components/ui/clipPath/Spinner";
import instance from "../../../../axios";
import TotalServed from "../../component/Bar/TotalServed";
import BarChartE from "../../component/Bar/BarChartE";
function AllInOne() {
  const [requireData, setRequireData] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [sendData, setSendData] = useState([]);
  const [loading, setLoading] = useState(false);
  const obj = {
    A: "",
    B: "",
    C: "api/admin/analytics/userRanking",
    D: "",
    E: "api/admin/analytics/appointments/ageWise",
  };
  useEffect(() => {
    async function fetchData(a, b) {
      setLoading(false);
      try {
        const requireDataa = await instance.get(a);
        if (!sortOption) {
          setSendData(requireDataa.data[b]);
        }
        setRequireData(requireDataa.data[b]);
        setLoading(true);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    }
    if (sortOption == "A") {
      setLoading(true);
    } else if (sortOption == "B") {
      setLoading(true);
    } else if (sortOption == "C") {
      console.log(3);
      fetchData("api/admin/analytics/userRanking", "userAppointments");
    } else if (sortOption == "D") {
      setLoading(true);
    } else if (sortOption == "E") {
      console.log(5);
      fetchData(
        "api/admin/analytics/appointments/ageWise",
        "appointmentsByAge"
      );
    } else {
      console.log(6, sortOption);
      fetchData("api/admin/analytics/totalAppointments", "allAppointments");
    }
  }, [sortOption]);

  const filterChange = (e) => {
    setLoading(false);
    setSortOption(e.target.value);
  };
  const renderSelectedComponent = () => {
    switch (sortOption) {
      case "A":
        return (
          <BarChartE
            userData={sendData}
            ylabel="totalAppointments"
            xlabel="_id"
            xxlabel="rank"
            title="Doctor ranking on the basis of appointmemnts made"
          />
        );
      case "B":
        return <TotalServed userData={sendData} />;
      case "C":
        return (
          <BarChartB
            userData={requireData}
            ylabel="totalAppointments"
            xlabel="_id"
            xxlabel="rank"
            title="User's ranking "
          />
        );
      case "D":
        return <BarChartD userData={sendData} />;
      case "E":
        return <BarChartC userData={requireData} />;
      default:
        return (
          <BarChartE
            userData={requireData}
            ylabel="totalAppointments"
            xlabel="_id"
            xxlabel="rank"
            title="Doctor ranking on the basis of appointmemnts made"
          />
        );
    }
  };

  return (
    <div className="flex flex-row 2xl:justify-center  h-screen w-screen md:gap-48 bg-[#0529BB]">
      <div className=" bg-[#0529BB] flex flex-col justify-between">
        <div className="">
          <Sidebar someData={{ index: 4 }} />
        </div>
      </div>

      <div className=" flex flex-col ms-0 md:ms-16">
        <div className=" flex justify-center md:justify-normal mb-5 md:mb-0 ms-0 md:ms-20">
          <ClipBgB
            width="w-[320px]"
            height="h-[60px]"
            bardervar="35px"
            text="statistics & reports"
          />
        </div>

        <div className=" w-full  md:w-80 ms-0 md:ms-16 mt-4  ">
          <div
            style={{ position: "relative", display: "inline-block" }}
            className="p-3"
          >
            <select
              value={sortOption}
              onChange={(e) => filterChange(e)}
              className="p-3 md:w-[430px] bg-[#E7ECFF] text-[#0529BB] text-base md:text-lg rounded-lg "
            >
              <option value="A">
                Doctors Ranking based on appointments served
              </option>
              <option value="B">Total Appointments served</option>
              <option value="C">
                Users ranking based on no. of appointments made
              </option>
              <option value="D">No. of appointments based on Gender</option>
              <option value="E">No. of appointments based on Age</option>
            </select>
          </div>
        </div>
        <div className="bg-blue-600 md:w-[960px] md:h-[540px] mt-10 md:mt-5 md:ms-20 2xl:me-28 flex justify-center items-center">
          {loading ? (
            renderSelectedComponent()
          ) : (
            <div className="flex  items-center justify-center   bg-blue-600 opacity-70  ">
              <div className="">
                <Spinner
                  height="h-[80px]"
                  width="w-[80px]"
                  fontSize="text-[1rem]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default AllInOne;
