import React from "react";
import { Container, UpVote, NameInput, Votes, Delete } from "./styles.js";

export const Band = ({ id, name, votes }) => {
  return (
    <Container>
      <UpVote>+1</UpVote>
      <NameInput defaultValue={name} />
      <Votes>{votes}</Votes>
      <Delete>Delete</Delete>
    </Container>
  );
};
