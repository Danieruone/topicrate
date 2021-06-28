import { useState, useEffect, useRef } from "react";
import { BandList } from "components/BandList";
import { io } from "socket.io-client";

const connectSocketServer = () => {
  const socket = io("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};

function App() {
  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);
  const [bandList, setBandList] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("client connected");
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBandList(bands);
    });
  }, [socket]);

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
    </div>
  );
}

export default App;
