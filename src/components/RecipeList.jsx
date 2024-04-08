import './recipelist.css';
import React from 'react';
import { Link } from 'react-router-dom'; 

function RecipeList({ recipes, searchTerm }) {
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? filteredRecipes.map(({ id, title, image }) => (
          <div key={id} className="recipe">
            <img src={image} alt={title} className="recipe-image" />
            <Link to={`recipeInfo/${id}`} key={id}>{title}</Link>
            <div className="recipe-title">{title}</div>
            <div className="recipe-id">ID: {id}</div>
          </div>
        )) : <div>No recipes found matching your search criteria.</div>}
      </div>
    );
  }
  
  
  export default RecipeList;
  
  