import React, { useMemo } from 'react';

function Dashboard({ recipes, searchTerm, totalResults }) {
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [recipes, searchTerm]);

  const averageId = useMemo(() => {
    return filteredRecipes.reduce((acc, recipe) => acc + recipe.id, 0) / filteredRecipes.length || 0;
  }, [filteredRecipes]);

  return (
    <div className="dashboard">
      <div className="card">
        <h5>Number of recipes displayed</h5>
        <div>{filteredRecipes.length}</div>
      </div>
      <div className="card">
        <h5>Total number of recipes retrieved</h5>
        <div>{totalResults}</div>
      </div>
      <div className="card">
        <h5>Average Recipe ID</h5>
        <div>{averageId.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default Dashboard;
