import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import URI from "../../URI";

const EmailVerify = () => {
  const [flag, setFlag] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const rolefor = searchParams.get("role");
  useEffect(() => {
    const updateVerify = async () => {
      try {
        if (rolefor === "teacher") {
          const res = await axios.put(`${URI}/api/auth/teacher/verify/${id}`);
          if (res?.status === 200) {
            setFlag(true);
          }
        } else {
          const res = await axios.put(`${URI}/api/auth/student/verify/${id}`);
          if (res?.status === 200) {
            setFlag(true);
          }
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    };
    updateVerify(); // Call the updateVerify function
  }, [id, rolefor]); // Add 'id' to the dependency array

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      {flag ? (
        <div className="house absolute">
          <div className="congrats">
            <h1>Congratulations!</h1>
            <br />
            <button onClick={() => navigate("/login")}>Go to login</button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center relative">
          <h2 className="mr-2">Verifying...</h2>
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default EmailVerify;
