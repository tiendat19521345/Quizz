import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivaterPage = () => {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("login");
    }
  }, [token]);
  return <Outlet />;
};

export default PrivaterPage;
