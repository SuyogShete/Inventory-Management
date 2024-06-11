import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Suyog Shete {year}</p>
    </footer>
  );
}

export default Footer;
