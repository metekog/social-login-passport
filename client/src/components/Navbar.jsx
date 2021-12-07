import { Link } from "react-router-dom";
import "../app.css";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Met App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://arannakliyat.com/trex/assets/img/yorumlar/2222821886.jpg"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">Mete</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
