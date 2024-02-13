import { useEffect, useState } from "react";

const useFetch = (url) => {
  let notes = []
  async function getData(){
      await fetch(url)
      .then(response => response.json())
      .then(data => {
          notes = data.notes
          notes.map((note)=>{ 
          const notesbar = document.querySelector('.notesbar');
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
  getData()
};

export default useFetch;