import React from "react";
import './style.css';

function Header(props) {
  const { search, onInputChange ,onSearchClick} = props;
  return (
    <div className="jumbotron-fluid ">
      <h1 className="display-6">
        <i className="material-icons"></i> &#127828; Recipe Hub
      </h1>
      <div className="input-group ">
        <input
          type="text"
          className="form-control"
          placeholder=" Search you Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
