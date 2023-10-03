import React, {useState}from 'react'
export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=()=>{
    console.log("Lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    console.log("OnChange");
    setText(event.target.value);
  }
  const [text,setText]=useState('Enter text here');

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="11"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-secondary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.length} characteras</p>
      <h2>Preview</h2>
      <p>
        {text}
      </p>
    </div>
    </>
  )
}

