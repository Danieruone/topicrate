export const useBandCrud = (band, setBandList, socket) => {
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

  return [increaseVotes, onChange, handleBlur, deleteBand];
};
