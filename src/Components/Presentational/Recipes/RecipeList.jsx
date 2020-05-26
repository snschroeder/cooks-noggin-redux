import React from 'react'
import RecipeItem from './RecipeItem/RecipeItem';

export default function RecipeList(props) {
  const { recipes } = props;
  return (
    <ul>
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} />
      ))}
    </ul>
  )
}
