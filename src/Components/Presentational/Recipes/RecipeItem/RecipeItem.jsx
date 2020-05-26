import React from 'react'

export default function RecipeItem(props) {
  const { recipe } = props
  const {recipe_id, 
    user_id, 
    name, 
    saved_timestamp, 
    id,
    ingredients,
    instructions,
    nutrition,
    summary
  } = recipe;
  return (
    <li className="recipe-item" key={id}>
      <h4 className="recipe-item-name">{name}</h4>
      <p className="recipe-item-saved-at">Favorited on {saved_timestamp}</p>
      <p className="recipe-item-summary">{summary}</p>
      <p className="recipe-item-ingredients">{ingredients}</p>
      <p className="recipe-item-instructions">{instructions}</p>
      <p className="recipe-item-summary">{summary}</p>
      <p className="recipe-item-nutrition">{nutrition}</p>
    </li>
  )
}
