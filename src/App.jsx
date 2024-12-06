import { useState } from "react";
import "./App.css";

const App = () => {
  // add placeholder text for the title
  // we'll use the form to update this state by the end of this lesson
  const [title, setTitle] = useState("The full name will appear here.");
  const [formData, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const handleFormChange = (event) => {
    setName({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTitle(`Your name is: ${formData.firstName} ${formData.lastName}`)
  };

  return (
    <>
      <h2>{title}</h2>
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleFormChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleFormChange}
        />
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default App;