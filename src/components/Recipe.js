import React from "react";
import RecipeItem from "./RecipeItem";
import "./style.css";
function Recipe(props) {
  const { recipes } = props;
  console.log(recipes);
  return (
    <div className="card-columns">
      {recipes.map((recipe, index) => (
        <RecipeItem
          value={index}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
}

export default Recipe;
