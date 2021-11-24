import "./navbar.css";
import doctor from "../assets/doctor.png";
import stethoscope from "../assets/stethoscope.png";
import deadline from "../assets/deadline.png";
import chat from "../assets/chat.png";
import { useContext } from "react";

export default function Navbar() {
  //   const { user } = useContext(AuthContext);
  //   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <img className="image" src={doctor} alt="" height="80px" width="80px" />
      <p className="title">Doctor-e-clinics</p>

        <img
          className="image1"
          src={stethoscope}
          alt=""
          height="40px"
          width="40px"
        />
        <h5 class="caption1">Find a doctor</h5>
        <img
          className="image2"
          src={deadline}
          alt=""
          height="40px"
          width="40px"
        />
        <h5 class="caption2">Appointments</h5>
        <img className="image3" src={chat} alt="" height="40px" width="40px" />
        <h5 class="caption3">Chat with doctor</h5>
      </div>

  );
}
