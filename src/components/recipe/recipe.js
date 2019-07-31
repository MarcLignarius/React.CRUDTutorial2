import React from 'react';
import './recipe.css';

const Recipe = ({title, calories, image, ingredients}) => {
  calories=Math.round(parseInt(calories))
  return(
    <div className='recipe'>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories} Cal</p>
      <img className='image' src={image} alt={title}/>
    </div>
  )
}

export default Recipe;