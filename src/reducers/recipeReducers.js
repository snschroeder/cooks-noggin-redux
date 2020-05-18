import { FETCH_USER_RECIPES } from '../actions/actions';

export function userRecipesReducer(state = {}, action) {
  switch(action.type) {
    case FETCH_USER_RECIPES:
      return {
        ...state,
        userSavedRecipes: action.payload
      }
    default:
      return state;
  }
}
