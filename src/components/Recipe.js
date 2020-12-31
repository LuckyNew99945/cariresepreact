import React, {useState,useEffect} from 'react'
export default function Recipe({img,name,category,data}) {

  const [ingredients,setIngredient] = useState([]);

  useEffect(() => {
   makeIng()
  },[]);

  const makeIng = () => {
    // console.log(data);

    // const recipe = data.meals[0];
    let ings = []
    for (let i = 1; i <= 20; i++) {
      if (data[`strIngredient${i}`]) {
        ings.push(
          `${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`
        );
      } else {
        break;
      }

  } 

  setIngredient(ings);


  }

  return (
    <section className="recipe">
    <img src={img} alt="food1"/>
    <h1>{name}</h1>
    <h3>Category : {category}</h3>
    <article className="ing-mea">
    <ul>
    {ingredients.map(ingredient => 
      <li>{ingredient}</li>
      )}
      </ul>
    </article>
  </section>
  )
}
