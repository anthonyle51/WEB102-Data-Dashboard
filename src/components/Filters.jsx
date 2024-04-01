function Filters({ setCuisine, setDiet }) {
    return (
      <div className="filters">
        <div>Filter API Call</div>
        <div className="filter">
          <div>Cuisine</div>
          <button onClick={() => setCuisine('Italian')}>Italian</button>
          <button onClick={() => setCuisine('Mediterranean')}>Mediterranean</button>
          <button onClick={() => setCuisine('American')}>American</button>
          <button onClick={() => setCuisine('')}>Reset</button>
        </div>
        <div className="filter">
          <div>Diet</div>
          <button onClick={() => setDiet('Vegetarian')}>Vegetarian</button>
          <button onClick={() => setDiet('Vegan')}>Vegan</button>
          <button onClick={() => setDiet('')}>Reset</button>
        </div>
      </div>
    );
  }
  
  export default Filters;
  