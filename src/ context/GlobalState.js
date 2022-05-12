import React,{createContext, useReducer,useState} from 'react';
import AppReducer from './AppReducer';

//we need an initialState here which will be a single object
const initialState={
    transactions:[]
    
}

//createContext
export const GlobalContext=createContext(initialState);

//provider component
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);


    //actions that will gonna call the reducer
    function deleteTransaction(id){
        dispatch({
            type:'Delete_Transaction',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'Add_Transaction',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction,addTransaction}}>
        {children}
    </GlobalContext.Provider>)

}