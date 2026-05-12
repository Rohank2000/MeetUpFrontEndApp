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
                src="https://i.ibb.co/CpbPkSCZ/4e9e880f-b27a-4190-b170-6f8a2c4fd265.jpg"
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