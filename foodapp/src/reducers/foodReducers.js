export const getAllFoodsReducer = (state = {foods : []}, action) => {

    switch(action.type)
    {
        case "GET_FOOD_REQUEST": return{
            loading :  true,
           ...state, 
        }
        case "Get_Foods_SUCCESS": return{
            loading : false,
            foods: action.payload, 
         }
         case "GET_FOOD_FAILED": return{
            error: action.payload,
            loading : false,

        }
        default: return state
    }

}
