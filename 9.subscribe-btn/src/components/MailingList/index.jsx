import React, { useState } from "react";
import "./index.css";

function MailingList() {
  const [subscribed, setSubscribed] = useState(false);

  const toggle = () => {
    setSubscribed(prev => !prev);
  };

  return (
    <div className="container">
      <h1 className="heading">Subscribe to the Mailing List</h1>
      <p className="thanks">Thank you!</p>

      <button
        className="subscribe-btn"
        onClick={toggle}
      >
        {subscribed ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
}

export default MailingList;
