import "./navbar.css";
import doctor from "../assets/doctor.png";
import stethoscope from "../assets/stethoscope.png";
import deadline from "../assets/deadline.png";
import chat from "../assets/chat.png";
import { useContext } from "react";

export default function Navbar() {
  return (
    <div className="topbarContainer">
      <img className="image" href="" src={doctor} alt="" height="80px" width="80px" />
      <p className="title">Doctor-e-clinics</p>

        <img
          className="image1"
          src={stethoscope}
          alt=""
          height="40px"
          width="40px"
        />
        <p class="caption1">Find a doctor</p>
        <img
          className="image2"
          src={deadline}
          alt=""
          height="35px"
          width="35px"
        />
        <p class="caption2">Appointments</p>
        <img className="image3" src={chat} alt="" height="35px" width="35px" />
        <p class="caption3">Chat with doctor</p>
      </div>

  );
}
