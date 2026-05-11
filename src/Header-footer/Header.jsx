import 'bootstrap/dist/css/bootstrap.min.css'; 

// bootstrap

import {Link} from "react-router-dom";

import {useState} from "react";

const Header = ({ setSearchTerm }) => {
  const [SearchData, SetSearchData] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
   return setSearchTerm(SearchData);
  };

  return (
    <div>
      <header className="container">
        <nav className="navbar bg-info">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src="https://file.notion.so/f/f/328c658f-5919-40c2-9e33-855623c60774/02dbc16a-1127-48a5-8e0f-28027152e8a2/image.png?table=block&id=35beefa4-ee96-80bc-a02f-c6277c016fa4&spaceId=328c658f-5919-40c2-9e33-855623c60774&expirationTimestamp=1778371200000&signature=cA5s6G-uZh1zOJ3jKouWyj2xtNnLEqtZttTqMPSRcI8&downloadName=image.png"
                alt="Logo"
                style={{ height: 60 }}
              />
            </Link>
            <form onSubmit={handleSubmit} className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                value={SearchData}
                onChange={(event) => SetSearchData(event.target.value)}
                placeholder="Search using Title or Tag"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;