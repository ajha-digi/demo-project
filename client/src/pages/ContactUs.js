import React, { useEffect } from "react";
import { useAuth } from "../Hooks/AuthHook";

function ContactUs() {
  const { authToken, data, dynamicPageData } = useAuth();
  useEffect(() => {
    dynamicPageData("contact-us");
  }, []);

  if (data && data.length < 1) {
    return <h2>Loading !!</h2>;
  }
  const { title, imageDataUrl } = data[0];

  return (
    <>
      <h1>{title}</h1>
      <h4>This is Static data for Contact us page</h4>
      {
        authToken && (
          <h5> Only Login user can see this on Contact us page </h5>
        )
      }
      <img src={imageDataUrl} alt={title} />
    </>
  );
}

export default ContactUs;
