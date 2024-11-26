import React, { forwardRef } from "react";
import "./Menu.css";

const Menu = forwardRef((props, ref) => {
  return (
    <div className="menu" ref={ref}>
      <div className="menu-wrapper">
        <a className="page">Architecture</a>
        <a className="page">Politic</a>
        <a className="page">Publication</a>
        <a className="page">Personal Testament</a>
      </div>
    </div>
  );
});

export default Menu;
