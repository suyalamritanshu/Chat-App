import React, { useRef, useEffect, useState } from "react";
import Message from "./Message";

export default function MessagesBox({ messages }) {
  const endDiv = useRef(null);
  useEffect(() => {
    endDiv.current.scrollIntoView();
    setDatatoStorage();
    getDataFromStorage();
  }, [messages]);
  const [Data, setData] = useState([]);
  const setDatatoStorage = async () => {
    try {
      const d = await messages;
      localStorage.setItem("data", JSON.stringify(d));
    } catch (error) {
      console.log(error);
    }
  };
  const getDataFromStorage = () => {
    try {
      const arrayOfData = localStorage.getItem("data");
      const d = arrayOfData !== null ? JSON.parse(arrayOfData) : [];
      setData(d);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chats">
      {messages
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map((m) => (
          <Message message={m} key={m.id} />
        ))}
      <div style={{ float: "right", clear: "both" }} ref={endDiv}></div>
    </div>
  );
}
