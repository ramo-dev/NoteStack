import { useEffect, useState } from "react";
import {handleDeleteButtonClick }from "../CreateData/CreateData";
const useFetch = (url) => {
  let notes = []
  async function getData(){
    const response = await fetch(url,{
        method: 'GET'
      })
      // const data = response.json()
      .then(response => {
        if(response.status == 200){
          return response.json()
        }
        else{
          document.querySelector('.error').textContent = 'Error fetching notes!'
          document.querySelector('.error').style.color = 'red'
      }
      })
      .then(data => {
          const newData = data
          notes = newData.reverse()
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
        <script>
        const deletebtn = document.querySelector('.delete')
        deletebtn.addEventListner('click', ${handleDeleteButtonClick})
        </script>
          `
          notesbar.innerHTML += card
      
      })
    })};
  getData()
};
export default useFetch;