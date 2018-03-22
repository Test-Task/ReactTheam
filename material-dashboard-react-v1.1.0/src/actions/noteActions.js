import * as types from '../constants/types';
import * as api from '../tools/apiConfig';
import axios from 'axios';
import history from '../history';

export function addNote(data) {
     
    return function (dispatch, getState) {
        axios.post(api.ADD_NOTE, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(function (response) {
                 
                if (response.data.status == 200) {
                    return dispatch({ type: types.ADD_NOTE_SUCCESS, message:response.data.message, note: response.data.data })
                } else {
                    return dispatch({ type: types.ADD_NOTE_SUCCESS, message:response.data.message });
                    // toastr.error(response.data.message);
                }
            })
            .catch(function (error) {
            });
    }
}

export function getNotes(userId) {
     
    return function (dispatch, getState) {
        axios.get(api.GET_NOTES + userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(function (response) {
                 
                if (response.data.status == 200) {
                    return dispatch({ type: types.GET_NOTES, notes: response.data.notes })
                } else {
                    return dispatch({ type: types.GET_NOTES, message:response.data.message });                    
                }
            })
            .catch(function (error) {
            });
    }
}

export function deleteNote(userId) {
     
    return function (dispatch, getState) {
        axios.get(api.DELETE_NOTE + userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(function (response) {
                 
                if (response.data.status == 200) {
                    return dispatch({ type: types.DELETE_NOTE_SUCCESS, noteId: userId })
                }else {
                    return dispatch({ type: types.DELETE_NOTE_SUCCESS, message:response.data.message });                                        
                    // toastr.error(response.data.message);
                }
            })
            .catch(function (error) {
            });
    }
}

export function updateNote(data) {
     
    return function (dispatch, getState) {
        axios.post(api.UPDATE_NOTE, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(function (response) {
                 
                if (response.data.status == 200) {
                    return dispatch({ type: types.UPDATE_NOTE_SUCCESS, updatedNote: response.data.updatedNote })
                }else {
                    return dispatch({ type: types.UPDATE_NOTE_SUCCESS, message:response.data.message });                                        
                    // toastr.error(response.data.message);
                }
            })
            .catch(function (error) {
            });
    }
}

export function getNote(userId) {
    return function (dispatch, getState) {
        axios.get(api.GET_NOTE_DETAIL + userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(function (response) {
                if (response.data.status == 200) {
                    return dispatch({ type: types.GET_NOTE_SUCCESS, note: response.data.data })
                }else {
                    return dispatch({ type: types.GET_NOTE_SUCCESS, message:response.data.message });                                        
                    // toastr.error(response.data.message);
                }
            })
            .catch(function (error) {
            });
    }
}