import { GET_NOTES, ADD_NOTE_SUCCESS, DELETE_NOTE_SUCCESS, UPDATE_NOTE_SUCCESS, GET_NOTE_SUCCESS } from "../constants/types";

const initialState = {
    notes: [],
    signin: ''
};

export default function (state = [], action) {
    debugger
    switch (action.type) {
        case ADD_NOTE_SUCCESS:
            let currentState = state.notes ? state.notes.slice() : []
            currentState.splice(0, 0, action.note)
            return Object.assign({}, state, { notes: currentState });
        case DELETE_NOTE_SUCCESS:
            let data = state.notes.slice()
            let index = data.findIndex(p => p._id == action.noteId)
            data.splice(index, 1)
            return Object.assign({}, state, { notes: data });
        case UPDATE_NOTE_SUCCESS:
            let updatedData = state.notes.slice()
            let uindex = updatedData.findIndex(p => p._id == action.updatedNote._id)
            updatedData[uindex] = action.updatedNote
            return Object.assign({}, state, { notes: updatedData });
        case GET_NOTES:
            return Object.assign({}, state, { notes: action.notes });
        case GET_NOTE_SUCCESS:
            return Object.assign({}, state, { note: action.note });
        default:
            return initialState;
    }
}