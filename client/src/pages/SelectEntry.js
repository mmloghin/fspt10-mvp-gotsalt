import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function SelectEntry() {
    let { id } = useParams();
    const [selectedEntry, setSelectedEntry] = useState({});
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
      axios.get(`http://localhost:3002/savedfoods/byId/${id}`).then((response) => {
        setSelectedEntry(response.data);
      });

      axios.get(`http://localhost:3002/notes/${id}`).then((response) => {
        setNotes(response.data);
    });
    }, []);

    const addNote = () => {
      axios.post("http://localhost:3002/notes", { noteText: newNote , SaltDatumId:id }).then((response) => {
      const noteToAdd = {noteText:newNote}
      setNotes([...notes,noteToAdd]);
      setNewNote("");
    });
   };

   const deleteNote = (id) => {
     axios.delete(`http://localhost:3002/notes/${id}`).then(() => {
       setNotes(
         notes.filter((val) => {
           return val.id !== id;
         })
       );
     }); 
   };

   const deleteEntry = (id) => {
    axios.delete(`http://localhost:3002/savedfoods/${id}`).then(() => {
      navigate("/gotsalt");
    })
   }

  
  return <div className="entryPage">
    <div className="leftSide">
      <div className="newEntry" id="single">
        <div className="name">{selectedEntry.name}</div>
        <div className="saltLevel">{selectedEntry.saltLevel}</div>
        <div className="comments">{selectedEntry.comments} <button onClick = {() => {deleteEntry(selectedEntry.id)}}>Delete Entry</button></div>
      </div>
    </div>
    <div className="rightSide">
      <div className="addNoteBox">
        <input type="text" placeholder="Add Note" value={newNote} onChange={(event) => {setNewNote(event.target.value)}}/>
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="listOfNotes">
        {notes.map((note, key) => {
          return <div key={key} className ="noteInput">{note.noteText} <button onClick= { () => {deleteNote(note.id)}}>Delete</button></div>
        } )}
      </div>
    </div>
    </div>
  
}
