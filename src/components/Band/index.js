import React from "react";
import { useBandCrud } from "hooks/useBandCrud.js";
import { Container, UpVote, NameInput, Votes, Delete } from "./styles.js";

export const Band = ({ band, setBandList, socket }) => {
  const [increaseVotes, onChange, handleBlur, deleteBand] = useBandCrud(
    band,
    setBandList,
    socket
  );

  return (
    <Container>
      <UpVote onClick={() => increaseVotes()}>+1</UpVote>
      <NameInput value={band.name} onBlur={handleBlur} onChange={onChange} />
      <Votes>{band.votes}</Votes>
      <Delete onClick={() => deleteBand()}>Delete</Delete>
    </Container>
  );
};
