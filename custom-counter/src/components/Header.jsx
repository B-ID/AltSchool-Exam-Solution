import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="py-4 flex justify-between bg-black shadow-lg">
      <div>
        <Link to="/" className="nav__links">
          Custom Counter
        </Link>
      </div>
      <div>
        <Link to="/useReducerCounter" className="nav__links">
          UseReducer counter
        </Link>
      </div>
      <div>
        <Link to="/errorBoundary" className="nav__links">
          ErrorBoundary
        </Link>
      </div>
    </nav>
  );
}