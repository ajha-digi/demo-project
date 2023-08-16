import React, { useEffect } from "react";
import { useAuth } from "../Hooks/AuthHook";
function Home() {
  const { authToken, data, dynamicPageData } = useAuth();

  useEffect(() => {
    dynamicPageData("home");
  }, []);

  if (data && data.length < 1) {
    return <h2>Loading !!</h2>;
  }

  const { title, imageDataUrl } = data[0];

  return (
    <>
      <h1>{title}</h1>
      <h4>This is Static data for Home page</h4>
      {
        authToken && (
          <h5> Only Login user can see this Home page</h5>
        )
      }
      <img src={imageDataUrl} alt={title} />
    </>
  );
}

export default Home;
