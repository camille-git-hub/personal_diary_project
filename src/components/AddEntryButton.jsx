
const AddEntryButton = () => {

     const openAddEntryModal = () => {
    setAddEntryModalOpen(true);
  };

    return (
        <button 
      onClick={openAddEntryModal}
      className="btn btn-soft btn-accent p-4 m-4 mt-10"   
    >
    + Add Entry
    </button>
  );
}

export default AddEntryButton;
