import useFetch from '../Fetch/fetch';
import './CreateStyles.css';
import React, { useState } from 'react';

export async function handleDeleteButtonClick(noteId) {
    handleDeleteNote(noteId);
  }
const CreateData = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title || !body) {  
      alert('Please enter both title and body!');

      return;
    }

    try {
        const response = await fetch('http://127.0.0.1:5002/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body }),
      })

      if (response.ok) {
        console.log(data)
        const data = await response.json();
        alert('Note added successfully'); 
        setTitle('');
        setBody('');
        
      } else {
       
        alert('Failed to add note');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to Add note, try again later')
    }
  }

  async function handleDeleteNote(noteId) {
    try {
      const response = await fetch(`http://127.0.0.1:5002/api/notes/${noteId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        const data = await response.json();
        const updatedNotes = notes.filter(note => note.id !== noteId);
        setNotes(updatedNotes);
        alert('Note deleted successfully:', data);
      } else {
        if (response.status === 404) {
          console.log('Note not found');
        } else {
          alert('Failed to delete note');
        }
      }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to delete note, try again later')
    }
  }



  useFetch('http://127.0.0.1:5002/api/notes', handleDeleteButtonClick); 

  return (
    <div className="container">
      <div className="notesbar">
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}} className='top-menu'>
          <h1>Your Notes</h1>
          <button className='reload-button' ><i className="fa-solid fa-arrow-rotate-right arrow" ></i></button>
          </div>
          <h3 className='error'></h3>
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
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter note..."
          />
          <div className="actions">
            <button type="submit" className="add" onClick={()=>{
                            useFetch('http://127.0.0.1:5002/api/notes')
                            window.location.reload()

          }}>Add Note</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateData;