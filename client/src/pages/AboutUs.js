import React, { useEffect } from "react";
import { useAuth } from "../Hooks/AuthHook";

function AboutUs() {
  const { authToken, data, dynamicPageData } = useAuth();
  useEffect(() => {
    dynamicPageData("about-us");
  }, []);

  if (data && data.length < 1) {
    return <h2>Loading !!</h2>;
  }
  const { title, html, imageDataUrl } = data[0];

  return (
    <>
      <h1>{title}</h1>
      <h4>This is Static data for About us page</h4>
      {authToken && <h5> Only Login user can see this on About us page </h5>}
      {authToken ?  <img src={imageDataUrl} alt={title} /> : <img src="https://static3.bigstockphoto.com/9/1/3/large2/31903202.jpg" alt="guest user" />}
      {
       html && (
        <div
          dangerouslySetInnerHTML={{__html: html}}
        />
       ) 
      }
    </>
  );
}

export default AboutUs;
