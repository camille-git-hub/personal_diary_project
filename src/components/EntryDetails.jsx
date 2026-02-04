const EntryDetails = () => {

    return (
    <div>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
            Date:
            <input type="date" name="date" />   
        </label>
        <label>
            Picture:
            <input type="file" name="picture" />
        </label>
        <label>
          Content:
          <textarea name="content"></textarea>
        </label>
    </div>
    );

};

export default EntryDetails;