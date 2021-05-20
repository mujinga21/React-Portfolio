import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
        <span className="py-2 text-center"> Mujinga Williams &nbsp; { new Date().getFullYear() }</span>
    </footer>
  );
}

export default Footer;