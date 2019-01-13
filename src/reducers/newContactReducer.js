import {DELETE_CONTACT,ADD_CONTACT,GET_NEW_CONTACTS} from '../actions/types';

const initialState={
    newContact:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case DELETE_CONTACT:
            return {
                ...state,
                newContact: state.newContact.filter((newContact) => newContact.id !== action.payload)
            }
        case ADD_CONTACT:
            return {
                ...state,
                newContact: [...state.newContact, action.payload]
            };
        case GET_NEW_CONTACTS:
            return {
                ...state
        };
        default:
            return state
    }
}