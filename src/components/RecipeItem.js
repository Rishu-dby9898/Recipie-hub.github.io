import React from "react";
import "./style.css"
function RecipeItem(props) {
  const { name, value, image, ingredientLines } = props;
  return (

    <div className="card-py" key={value}>
      <div className="card-pyy">
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
      </div>
      <div className="wrap">
        <ul className="flush">
          {ingredientLines.map((ing, index) => (
            <li key={index} className="list-group-item">{ing}</li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default RecipeItem;
