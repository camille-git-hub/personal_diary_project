const EntryForm = () => {

    return (
    <div>
       <h2>Add New Diary Entry</h2>
      <form>
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
        
        <button type="submit">Save Entry</button>
        <button type="button">Cancel</button>
      </form>
    </div>

    );

};

export default EntryForm;