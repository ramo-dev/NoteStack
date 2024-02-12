import './NoteStyles.css'
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
// import { overlayStyles, popupStyles, contentStyles, activePopupStyles, loaderContainerStyle , loaderStyle } from './styles';

const NoteDetails = () => {
//   const notesUrl = 'http://192.168.100.12:5000/api/notes';
//   const { id } = useParams();
//   const history = useHistory();
//   const [showModal, setShowModal] = useState(false); // State variable for modal visibility
//   const [note, setNote] = useState(null); // State variable for note data

  
  
//   useEffect(() => {

//     const fetchNote = async () => {
//       try {
//         const response = await fetch(`${notesUrl}/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch note');
//         }
//         const data = await response.json();
//         setNote(data);
//       } catch (error) {
//         console.error('Error fetching note:', error);
//       }
//     };

//     fetchNote();
//   }, [id, notesUrl]);

//   const handleClick = () => {
//     // Show modal confirmation dialog
//     setShowModal(true);
//   };

function addToNoteSection(event) {
  event.preventDefault();

  const title = document.querySelector('.title').value;
  const note = document.querySelector('.note').value;
  const notesbar = document.querySelector('.notesbar');

  if (!title || !note) {
    alert("Please enter both title and note!");
    return;
  }

  // Create the new card with the delete button
  const newCard = `
    <div class="note-preview">
      <div>
          <h1>${title}</h1>
          <p>${note}</p>
      </div>
      <div>
          <button class="delete">Delete</button>
      </div>
    </div>
  `;

  // Append the card to the notesbar
  notesbar.innerHTML += newCard;

  // Delegate event listener to handle clicks on dynamically added buttons
  notesbar.addEventListener('click', (event) => {
    const clickedDeleteButton = event.target.closest('.delete');
    if (clickedDeleteButton) {
      deleteNote(event);
    }
  });

  // Clear the input fields after adding the note
  document.querySelector('.title').value = "";
  document.querySelector('.note').value = "";
}

function deleteNote(event) {
  const notePreview = event.target.closest('.note-preview');

  if (notePreview) {
    notePreview.remove();
  }
}

return (
  <div className="container">
    <div className="notesbar">
      <h1>Notes</h1>
    </div>
    <form onSubmit={addToNoteSection}>
      <div className="note-card">
    <input className="noteTitle" placeholder="Enter Title of note..."/>
        <textarea className="noteText" placeholder="Enter note..." ></textarea>
      </div>
      <div className="actions">
        <button type="submit" className="add">
            Edit Note
          </button>
          <button className='del'>Delete note</button>
        </div>
    </form>
  </div>
);
}
export default NoteDetails;