import React, { useState, useEffect } from 'react';
import SearchInput from './components/SearchInput';
import Dashboard from './components/Dashboard';
import Filters from './components/Filters';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [cuisine, setCuisine] = useState('');
  const [diet, setDiet] = useState('');
  const API_KEY = process.env.REACT_APP_FOOD_API_KEY;

  useEffect(() => {
    async function fetchRecipeData() {
      try {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=25&cuisine=${cuisine}&diet=${diet}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`An error occurred: ${response.statusText}`);
        const json = await response.json();
        setTotalResults(json.totalResults);
        setRecipes(json.results || []);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRecipeData();
  }, [cuisine, diet, API_KEY]);

  return (
    <div className="App">
      <h1>My Recipe List</h1>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Dashboard recipes={recipes} searchTerm={searchTerm} totalResults={totalResults} />
      <Filters setCuisine={setCuisine} setDiet={setDiet} />
      <RecipeList recipes={recipes} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
