import React from "react";
import micIcon from "../assets/mic.svg";
import sendIcon from "../assets/send.svg";
import link from "../assets/link.png";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "./context/AuthContext";

export default function ChatInput({ message, setMessage, pushMessage }) {
  function handleKeyDown(e) {
    if (e.key === "Enter" && message) {
      pushMessage();
    }
    
  }
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
      e.preventDefault();
      if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name", fileName);
        data.append("file", file);
        try {
          await axios.post("/upload", data);
        } catch (err) {}
      }

    };
  return (
    <div className="chat-input-box">
      <div className="icon emoji-selector">
      <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            
          <label htmlFor="file" className="shareOption">
         <img src={link} height="20px" width="20px" />
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            accept=".png,.jpeg,.jpg"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        </div>
            </form>
       
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        
      </div>

      <div className="icon send" onClick={pushMessage}>
        <img src={message ? sendIcon : micIcon} alt="" />
      </div>
    </div>
  );
}
