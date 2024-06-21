import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NotPages() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        navigate("/");
      }
    }, 1000);}, [timer]);
 

  return <h2 className="notpages"><span>404:Not found! </span><div>Redirect to home in <span style={{ color: "red" }}>{timer}</span>  seconds</div> </h2>;
}

export default NotPages;
