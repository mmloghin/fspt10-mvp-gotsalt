import React from 'react'
import '../App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

export default function SavedFoods() {

    const [listOfSaltData, setListOfSaltData] = useState([]);
    let navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3002/savedfoods").then((response) => {
      setListOfSaltData(response.data);
    });
  }, []);

  return (
    <div className="App">{listOfSaltData.map((value,key) =>{
        return (
        <div key= {key} className="newEntry" onClick={() => {navigate(`/selectentry/${value.id}`)}}>
          <div className="name"> {value.name}</div>
          <div className="saltLevel"> {value.saltLevel}</div>
          <div className="comments"> {value.comments}</div>
       </div>
        );
      })}</div>
  )
}
