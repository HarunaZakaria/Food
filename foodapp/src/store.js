import {combineReducers} from 'redux'
import {getAllFoodsReducer} from './reducers/foodReducers'

import {createStore, applyMiddleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import  thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';




const finalReducer= combineReducers({
    getAllFoodsReducer:getAllFoodsReducer
    
});

const initialState = {}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store 






