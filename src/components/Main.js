import React, {useState} from 'react'

import axios from 'axios';
import Recipe from './Recipe';
export default function Main({meals,setMeal,input,setInput}) {

  const [recipe,setRecipe] = useState([]);


  const dataHandler = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
   

  }

  const mealsHandler = (e) => {
    e.preventDefault();


    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
  .then(function (response) {
    const dataMeals = response.data.meals;
    console.log(dataMeals);
    setMeal(dataMeals);
  })
  .catch(function (error) {
    // handle error
    // console.log(error);
  })
  }

  

  

  const recipeHandler = (e) => {
    const id = e.target.getAttribute('data-id');
    
    setRecipe(meals.filter(meal => meal.idMeal === id));
  }
 
  return (
    <main>

<section className="search-form">
      <form>
        <input type="text"placeholder="Search Recipe Here..." id="input" onChange={dataHandler}/>
        <button type="submit" onClick={mealsHandler}>
          OK
        </button>
      </form>
    </section>
    <section className="result-recipes">
      <h3>Search Result For : Food 1</h3>
      <article className="recipes">
        
      {meals.map(meal => (
              <img src={meal.strMealThumb} alt={meal.strMeal} onClick={recipeHandler} key={meal.idMeal} data-id={meal.idMeal} />   ))}
      </article>
    </section>
    {
    
    

    recipe.map(
      data => 

      <Recipe 
      data={data}
      img={data.strMealThumb} 
      name={data.strMeal} 
      category={data.strCategory} 
      key={data.idMeal}/>
      
      
      
      
      )}
    </main>
  
    
  )
}
