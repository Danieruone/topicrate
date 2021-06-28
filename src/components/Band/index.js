import React from "react";
import { Container, UpVote, NameInput, Votes, Delete } from "./styles.js";

export const Band = ({ band, socket, setBandList }) => {
  const increaseVotes = () => {
    socket.emit("vote-band", {
      id: band.id,
    });
  };

  const onChange = (e) => {
    const newName = e.target.value;
    setBandList((bands) =>
      bands.map((currentBand) => {
        if (currentBand.id === band.id) {
          currentBand.name = newName;
        }
        return currentBand;
      })
    );
  };

  const handleBlur = (e) => {
    const newName = e.target.value;
    socket.emit("change-band-name", {
      id: band.id,
      newName,
    });
  };

  const deleteBand = () => {
    socket.emit("delete-band", {
      id: band.id,
    });
  };

  return (
    <Container>
      <UpVote onClick={() => increaseVotes()}>+1</UpVote>
      <NameInput value={band.name} onBlur={handleBlur} onChange={onChange} />
      <Votes>{band.votes}</Votes>
      <Delete onClick={() => deleteBand()}>Delete</Delete>
    </Container>
  );
};
