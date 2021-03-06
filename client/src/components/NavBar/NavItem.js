import React from "react";
import "./navbar.css";

export default function ({ href, text }) {
  //a tag needs href for new page
  return (
    <>
      <li className="nav-item">
        <a className="nav-link navbar-text nav-lines" href={href}>
          {text}
        </a>
      </li>
    </>
  );
}
