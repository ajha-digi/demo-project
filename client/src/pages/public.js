import React, { useEffect } from "react";
import { useAuth } from "../Hooks/AuthHook";
function Home() {
  const { data, home } = useAuth();
  console.log("data", data);
  useEffect(() => {
    home();
  }, []);

  if (data && data.length < 1) {
    return <h2>Loading !!</h2>;
  }
  const { title, imageDataUrl } = data[0];

  return (
    <div>
      <p>public page</p>
      <h1>{title}</h1>
      <img src={imageDataUrl} alt={title} />
    </div>
  );
}

export default Home;
