import React from "react";
import { useNavigate } from "react-router-dom";

function PageNoteFound() {
  const navigate = useNavigate();

  return (
    <div style={{height:"300px"}}>
      <h3>Page Note Found</h3>
      <button onClick={()=>navigate('/')}>Back to Home</button>
    </div>
  );
}

export default PageNoteFound;
