import useFetch from '../Fetch/fetch';
import './CreateStyles.css';
import React, { useState } from 'react';

const CreateData = () => {

    useFetch('http://127.0.0.1:3000/notes')

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title || !note) {
      alert('Please enter both title and note!');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:3000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, note }),
      })

      if (response.ok) {
        const data = await response.json();
        alert('Note added successfully:', data); // Assuming server returns the created note
        setTitle('');
        setNote('');
        useFetch('http://127.0.0.1:3000/notes')
      } else {
        alert('Failed to add note');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  }

  return (
    <div className="container">
      <div className="notesbar">
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <h1>Your Notes</h1>
          <i class="fa-solid fa-arrow-rotate-right" style={{fontSize : '25px'}} onClick={()=>{
        useFetch('http://127.0.0.1:3000/notes')
          }}></i>
          </div>
        {/* Display existing notes here */}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="note-create">
          <small>Title:</small>
          <input
            className="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title of note..."
          />
          <small>Note:</small>
          <textarea
            className="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter note..."
          />
          <div className="actions">
            <button type="submit" className="add" >Add Note</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateData;