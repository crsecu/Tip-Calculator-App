import React from "react";
import "../styles/footer.css"

export default function Footer() {
  return (
    <div className="tip_calc__footer">
      Challenge by {" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="tip_calc__footer-link">
        Frontend Mentor. <br/>
      </a>
       {" "}Coded by <a href="https://www.linkedin.com/in/cristina-secu/" className="tip_calc__footer-link">Cristina Secu</a>.
    </div>
  );
}
