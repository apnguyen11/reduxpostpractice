import {FETCH_POSTS, NEW_POST} from '../actions/types'

const initialState = {
    items: [],
    item: {}
}
//items represent posts that come in from action
//item represent a single post that we add

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}