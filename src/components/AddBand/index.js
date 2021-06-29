import React, { useRef, useContext } from "react";
// context
import { SocketContext } from "context/SocketContext";
// styles
import { Container } from "./styles";

export const AddBand = () => {
  const { socket } = useContext(SocketContext);

  const newTopic = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("create-band", {
      name: newTopic.current.value,
    });
    newTopic.current.value = "";
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h1>Add your topic</h1>
      <div>
        <input type="text" placeholder="Add your band here..." ref={newTopic} />
        <button type="submit">Create Topic</button>
      </div>
    </Container>
  );
};
