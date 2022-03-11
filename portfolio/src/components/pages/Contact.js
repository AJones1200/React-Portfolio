import React from 'react';

export default function Contact() {
  const handleChange = (event) => {
    if (!event.target.value.length) {
      alert ("All fields required")
    }
  } 
  return (
    <div>
      <h1>Contact Me</h1>
  <form>
    <input onBlur={handleChange} placeholder='Name:'/>
    <input onBlur={handleChange} placeholder='Email:'/>
    <label>Message: </label>
    <textarea onBlur={handleChange}></textarea>
    <button>Submit</button>
  </form>
     
    </div>
  );
}
