import { useState, useEffect } from "react";
import { BandList } from "components/BandList";
import { io } from "socket.io-client";

const connectSocketServer = () => {
  const socket = io("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};

function App() {
  const [socket, setSocket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);
  const [bandList, setBandList] = useState([]);

  useEffect(() => {
    socket.on("connect", (data) => {
      console.log("client connected");
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", (data) => {
      setOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBandList(bands);
      console.log(bands);
    });
  }, [socket]);

  return (
    <div>
      {online ? (
        <h1 style={{ color: "green" }}>Connected</h1>
      ) : (
        <h1 style={{ color: "red" }}>Disconnected</h1>
      )}
      <BandList bandList={bandList} />
    </div>
  );
}

export default App;
