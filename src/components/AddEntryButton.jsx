const AddEntryButton = ({onClick}) => {
  // "/opens the Add Entry Modal using useState()/"
  return (
    <button onClick={onClick}
      className="btn btn-primary"
    >
    + Add Entry
    </button>
  );
}

export default AddEntryButton;
