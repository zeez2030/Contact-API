import React, {
    useReducer
} from 'react';
import uuid from 'uuid';
import AlertContext from './alertCotnext';
import AlertReducer from './alertReducer';

import {
   SET_ALERT,REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initialState = [

    ];
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //  Set Alert
    const setAlert = (msg,type,timeout=5000)=>{
        const id = uuid.v4();
        dispatch({type:SET_ALERT , payload:{
            msg,type,id
        }})
   
        setTimeout(()=>{
            return dispatch({type:REMOVE_ALERT ,payload:id })
        }, timeout);
     }
    return ( <AlertContext.Provider
        value = {{
            alerts:state,
            setAlert
        }} 
        > 
        {props.children}
     </AlertContext.Provider>)
};
export default AlertState;