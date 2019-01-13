import axios from 'axios';
import {GET_CONTACT, CONTACT_LOADING, GET_ERRORS, ADD_CONTACT, GET_NEW_CONTACTS, DELETE_CONTACT} from './types';

//GET CONTACTS
export const getContacts = () => dispatch => {
    dispatch(setContactLoading());
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>
            dispatch({
                type: GET_CONTACT,
                payload:res.data
            }))
        .catch(err=>
            dispatch({
                type: GET_ERRORS,
                payload: 'API IS NOT AVAILABLE'
            })
    );
}

//GET NEW CONTACTS
export const getNewContacts = () => dispatch => {
    dispatch(setContactLoading());
    return{
        type: GET_NEW_CONTACTS
    }
}

//ADD NEW CONTACT
export const addContact = (contact) => dispatch => {
    dispatch(setContactLoading());
    dispatch({
        type: ADD_CONTACT,
        payload:contact
    })
}

//DELETE CONTACT
export const deleteContact = (id) => dispatch => {
    dispatch(setContactLoading());
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    }) 
}

//CONTACTS LOADING
export const setContactLoading = () => {
    return {
        type: CONTACT_LOADING
    }
}
