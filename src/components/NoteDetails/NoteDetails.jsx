import './NoteStyles.css'
import useFetch from '../Fetch/fetch'
import React, { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { overlayStyles, popupStyles, contentStyles, activePopupStyles, loaderContainerStyle , loaderStyle } from './styles';

const NoteDetails = () => {
//   const notesUrl = 'http://192.168.100.12:5000/api/notes';
//   const { id } = useParams();
//   const history = useHistory();
//   const [note, setNote] = useState(null); // State variable for note data

// const api = 'http://192.168.100.12:5000/api/blogs'
// const { isPending, data: notes, error } = useFetch(api, { timeout: 5000 });
  
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




  let notes = []
  async function getData(url){
      await fetch(url)
      .then(response => response.json())
      .then(data => {
          notes = data.notes
          notes.map((note)=>{ 
          const notesbar = document.querySelector('.notesList');
          let card = `
          <div class="note-preview">
          <div>
              <h1>${note.title}</h1>
              <p>${note.body}</p>
          </div>
          <div>
              <button class="delete">Delete</button>
          </div>
        </div>
          `
          notesbar.innerHTML += card
      
      })})};

  getData('http://127.0.0.1:5000/api/notes')



return (
  <div className="container">
    <div className="notesList">
      <h1>Notes</h1>
    </div>
    <form>
      <div className="note-card">
    <input className="noteTitle" placeholder="Your note"/>
        <textarea className="noteText" ></textarea>
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