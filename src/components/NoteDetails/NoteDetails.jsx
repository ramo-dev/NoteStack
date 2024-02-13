import './NoteStyles.css';
import useFetch from '../Fetch/fetch';
import React, { useState, useEffect } from 'react';

const NoteDetails = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/notes');
        const data = await response.json();
        setNotes(data.notes);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const handleViewClick = (note) => {
    setSelectedNote(note);
  };

  const handleEditClick = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/notes/${selectedNote.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: e.target.noteTitle.value,
          body: e.target.noteText.value,
        }),
      });

      if (response.ok) {
        const updatedNotes = notes.map((note) =>
          note.id === selectedNote.id ? { ...note, title: e.target.noteTitle.value, body: e.target.noteText.value } : note
        );
        setNotes(updatedNotes);
        setSelectedNote(null); // Clear selected note after update
      } else {
        throw new Error('Failed to update note');
      }
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/notes/${selectedNote.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setNotes(notes.filter((note) => note.id !== selectedNote.id));
        setSelectedNote(null); // Clear selected note after deletion
      } else {
        throw new Error('Failed to delete note');
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="container">
      <div className="notesbar">
        <h1>Notes</h1>
        {!notes && <h1>No present notes</h1>}
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
      <form onSubmit={handleEditClick}>
        <div className="note-card">
          <input className="noteTitle" placeholder="Your note" value={selectedNote?.title || ''} />
          <textarea className="noteText" value={selectedNote?.body || ''}></textarea>
        </div>
        <div className="actions">
          <button type="submit" className="add">
            Edit Note
          </button>
          <button className="del" onClick={handleDeleteClick}>
            Delete Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteDetails;