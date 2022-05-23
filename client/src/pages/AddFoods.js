import React from 'react'
import axios from "axios";
import '../App.css';
import { Formik,Form, Field } from "formik";
import {useNavigate} from "react-router-dom";

export default function AddFoods() {

  let navigate = useNavigate();

  const initialValues = {
    name: "",
    saltLevel:"",
    comments:"",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3002/savedfoods",data).then((response) => {
      navigate("/gotsalt");
    });
  };

  return (
    <div className="addFoodsPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="formContainer">
      <h2>Add New Entry:</h2>
        <label>
          Name of Food:
          <Field id="addFoods" name="name" placeholder="Add type of food..."/>
        </label>
        <label>
          Salt Level in mg:
          <Field  id="addFoods" name="saltLevel" placeholder="Add salt level in mg..."/>
        </label>
        <label>
          Comments:
          <Field id="addFoods" name="comments" placeholder="Notes..." />
        </label>
        <button type="submit">Add</button>
      </Form>
      </Formik>
    </div>
  )
}
