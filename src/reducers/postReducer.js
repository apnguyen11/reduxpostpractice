import {FETCH_POSTS, NEW_POSTS} from '../actions/types'

const initialState = {
    items: [],
    item: {}
}
//items represent posts that come in from action
//item represent a single post that we add

export default function(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}