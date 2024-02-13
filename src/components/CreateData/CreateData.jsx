import './CreateStyles.css'
import React, { useState, useEffect } from "react";
import useFetch from '../Fetch/fetch'
const CreateData = () => {
    // const [title, setTitle] = useState('');
    // const [text, setText] = useState('');
    // const [isPending, setIsPending] = useState(false);

    //make a fetch request from the server
   

    // Fetch the last id from the server
    // useEffect(() => {
    //     fetchLastId();
    // }, []);
  
    // const fetchLastId = () => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             const maxId = Math.max(...data.notes.map(note => note.id));
    //             setLastId(maxId);
                
    //         })
    //         .catch(error => {
    //             console.error('Error fetching last id:', error);
    //         });
    // };


    //handle submit
    // const handleSubmit = (e) => {
    //     setIsPending(true);
    //     e.preventDefault();
    //     const newId = lastId + 1; // Increment the last fetched id
    //     const note = { id: newId, title, text };
    //     fetch('https://my-json-server.typicode.com/ramo-dev/json-db/blogs', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         text: JSON.stringify(note)
    //     }).then(() => {
    //         setIsPending(false);
    //         console.log("Note created successfully. showModal set to true.");
    //         // setShowModal(true); // Show the modal after creating the Note
    //     }).catch(error => {
    //         console.error('Error adding new Note:', error);
    //     });
    // };
    


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
      useFetch('http://127.0.0.1:5000/api/notes')
      return (
        <div className="container">
          <div className="notesbar">
            <h1>Notes</h1>
          </div>
          <form onSubmit={addToNoteSection}>
            <div className="note-create">
              <small>Title:</small>
              <input className="title" placeholder="Enter Title of note..." />
              <small>Note:</small>
              <textarea className="note" placeholder="Enter note..."></textarea>
              <div className="actions">
                <button type="submit" className="add">
                  Add Note
                </button>
              </div>
            </div>
          </form>
        </div>
      );
}
export default CreateData;