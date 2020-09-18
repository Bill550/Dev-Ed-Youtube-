import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from "./Recipe"



const App = () => {


  const App_ID = 'fd2c356a';
  const App_KEY = 'b89e6768ec5c45b0c16f9b1c93dba510';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search); 
    setSearch('');
  };

  return(
    <div className='App'>
      <form className="search__form" onSubmit={getSearch} > 
        <input className="search__bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search__btn" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );

};

export default App;
