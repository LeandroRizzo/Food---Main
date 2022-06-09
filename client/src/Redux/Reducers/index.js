import { GET_RECIPES } from '../Actions/recipesActions';
// import { GET_DIETS, DIET_FILTER } from '../Actions/dietsActions';
// import { ORDER_DESC_NAME, ORDER_LOWER_SCORE, ORDER_ASC_NAME, ORDER_HIGHER_SCORE, RESET  } from '../Actions/orderActions';


const initialState = {
    recipes: [],
    diets : [],
    recipeById: {},
    createdRecipe: [],
    filteredRecipes: [],
    orderBy: "Select",
    filterBy: "All"
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
      //RECIPES
        case GET_RECIPES: 
          return {
            ...state,
            recipes: action.payload 
        }
          default:
            return state 
    }
}
export default rootReducer; 