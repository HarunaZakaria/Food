import axios from 'axios';
export const getAllFoods= () =>async dispatch =>{

    dispatch({type: "GET_FOODS_REQUEST"})

    try {
        const respose = await axios.get('/api/foods/getallfoods')
        console.log(respose);
        dispatch({type: "GET_FOODS_SUCCESS", payload: respose.data});
    } catch (error) {
        dispatch({type: "GET_FOODS_FAILED", payload: error});
    }


}
