import {GET_CONTACT, CONTACT_LOADING} from '../actions/types';

const initialState={
    contact:null,
    loading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case CONTACT_LOADING:
            return {
                ...state,
                loading:true
        };
        case GET_CONTACT:
            return {
                ...state,
                loading:false,
                contact: action.payload
        };
        default:
            return state
    }
}