import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const AdminProtection = ({ children }) => {
  const navigate = useNavigate();
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    if (isLoggedIn && role === "ROLE_ADMIN") {
      setAuthorized(true);
      return;
    }

    const savedAuth = JSON.parse(localStorage.getItem("auth"));

    if (savedAuth?.token && savedAuth?.role === "ROLE_ADMIN") {
      setAuthorized(true);
    } else {
      setAuthorized(false);
      toast.error("You are not authorized to access this page");
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, role, navigate]);


  if (authorized === null) return null;

  if (!authorized) return null;

  return children;
};

export default AdminProtection;
