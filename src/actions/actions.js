export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const FETCH_USER_RECIPES = 'FETCH_USER_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const TOGGLE_SAVED_RECIPE = 'TOGGLE_SAVED_RECIPE';

export const addUser = (user) => ({
  type: ADD_USER,
  user,
})

const testUserId = 'eb81c150-8211-44e5-8913-2444e2bf71f5';

export const fetchUserRecipes = (userId) => (dispatch) => {
  console.log('fetching');
  fetch(`http://localhost:8000/api/recipes/user/${userId}`)
    .then((res) => res.json())
    .then((recipes) => dispatch({
      type: FETCH_USER_RECIPES,
      payload: recipes
    }));
}

