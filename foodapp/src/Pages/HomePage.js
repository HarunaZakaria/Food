import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

 import Food from "../components/Food"
import { getAllFoods } from '../actions/foodActions';
import { getAllFoodsReducer } from '../reducers/foodReducers';



function HomePage() {

    const dispatch = useDispatch();

    const foodsstate = useSelector(state => getAllFoodsReducer)
    const {foods, error, loading} = foodsstate

    useEffect(() => {
        dispatch(getAllFoods())
    }, [])


  return (
    <div>
        <div className='row'>



            {loading ? (<h1>Loading...</h1>) : error ? (<h1>something went wrong</h1>) : (


            foods.map(food =>{

                return <div className='col-md-4'> 
                    <div>
                        <Food foods={food} />
                    </div>   
                </div>  
            })
                
            )};   



        </div>
       
    </div>
  )
}

export default HomePage
