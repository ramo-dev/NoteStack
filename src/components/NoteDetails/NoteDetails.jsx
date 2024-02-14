

import './NoteStyles.css';
import React, { useState, useEffect } from 'react';

const NoteDetails = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchNotesFromServer(); // Fetch notes when component mounts
  }, []);

  useEffect(() => {
    document.cookie = `notes=${JSON.stringify(notes)}`; // Store notes in cookies
  }, [notes]);

  const fetchNotesFromServer = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5001/api/notes');
      if (response.ok) {
        const data = await response.json();
        setNotes(data.notes.reverse());
      } else {
        console.error('Failed to fetch notes:', response.statusText);
        
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleViewClick = (note) => {
    setSelectedNote(note);
    setEditMode(true); // Set edit mode when a note is selected
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5001/api/notes/${selectedNote.id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setNotes(notes.filter((note) => note.id !== selectedNote.id));
        setSelectedNote(null);
        setEditMode(false);
        document.querySelector('input').innerText = ''
        document.querySelector('textarea').innerText = ''
        alert('Note added successfully')
      } else {
        alert('Failed to delete note');
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  
    return (
      <div className="container">
        <div className="notesbar">
          <h1>Your Notes</h1>
          {/* {notes === 0 && <h1>No present notes</h1>} */}
          {notes.map((note) => (
            <div key={note.id} className="note-preview">
              <div>
                <h1>{note.title}</h1>
                <p>{note.body}</p>
              </div>
              <div>
                <button className="view" onClick={() => handleViewClick(note)}>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleDeleteClick}>
          <div className="note-card">
            <small>Title:</small>
            <input className="noteTitle" placeholder="Select a note to view..." defaultValue={selectedNote?.title} onChange={(e) => setSelectedNote({ ...selectedNote, title: e.target.value })} disabled/>
            <small>Text:</small>
            <textarea className="noteText" defaultValue={selectedNote?.body} onChange={(e) => setSelectedNote({ ...selectedNote, body: e.target.value })} placeholder="Your note Text.." disabled></textarea>
          </div>
          <div className="actions">
            {/* <button type="submit" className={editMode ? "edit" : "add"}>
              {editMode ? "Edit Note" : "Add Note"}
            </button> */}
            {editMode && (
              <button type="button" className="del" onClick={handleDeleteClick}>
                Delete Note
              </button>
            )}
          </div>
        </form>
      </div>
    );
  };
  export default NoteDetails;