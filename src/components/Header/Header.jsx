import "./header.css";

const Header = () => {
  return (
    <header className="app-header">
      {/* Left */}
      <div className="header-left">
        <img src="/SDL_INDEX.png" alt="Logo" className="header-logo" />
      </div>

      {/* Center */}
      <div className="header-center">
        <h6>Welcome, Admin</h6>
      </div>

      {/* Right */}
      <div className="header-right dropdown">
        
        <button
            className="avatar-btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            <img src="/avatar.png" alt="Profile" className="avatar" />
        </button>

        <ul className="dropdown-menu dropdown-menu-end profile-dropdown">
          <li>
            <a className="dropdown-item" href="#">My Account</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">My Cart</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">My Orders</a>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item logout" href="/login">Logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
