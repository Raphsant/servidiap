import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div className="page-header">
      <nav className="page-header__nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link>Nuestras Especialidades</Link>
          </li>
          <li>
            <Link to="/citas">Solicitar Cita</Link>
          </li>
          <li>
            <Link>Promociones</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
