import React, { useState, useRef, useContext } from "react";
// components
import { BandList } from "components/BandList";
import { ChartComponent } from "components/ChartComponent";
// context
import { SocketContext } from "context/SocketContext";

export const HomePage = () => {
  const [bandList, setBandList] = useState([]);
  const { socket, online } = useContext(SocketContext);

  const newTopic = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("create-band", {
      name: newTopic.current.value,
    });
    newTopic.current.value = "";
  };

  return (
    <div style={{ backgroundColor: "#E4E9F5" }}>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={newTopic} />
        <button type="submit">Create Topic</button>
      </form>
      {online ? (
        <h1 style={{ color: "green" }}>Connected</h1>
      ) : (
        <h1 style={{ color: "red" }}>Disconnected</h1>
      )}
      <BandList bandList={bandList} setBandList={setBandList} socket={socket} />
      <ChartComponent />
    </div>
  );
};
