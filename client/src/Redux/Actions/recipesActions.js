export const GET_RECIPES = 'GET_RECIPES';
// export const GET_RECIPES_DETAIL = 'GET_RECIPES_DETAIL';
// export const SEARCH_RECIPES = 'SEARCH_RECIPES'; 
// export const CREATE_RECIPE = 'CREATE_RECIPE'; 


export function getRecipes() {
  return (dispatch) =>
    fetch('http://localhost:3001/recipes')
      .then((response) => response.json())
      .then((json) => {
      console.log(json)
        dispatch({
          type: GET_RECIPES,
          payload: json
        })
      })
} 