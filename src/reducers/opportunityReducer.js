import { FETCH_OPPORTUNITY, NEW_OPPORTUNITY } from '../actions/types';

const initialState = {
    items: [],
    item: []
};


export default function (state= initialState, action) {

    switch(action.type){
        case FETCH_OPPORTUNITY:
            return {
                ...state,
                items: action.payload
            }
        case NEW_OPPORTUNITY:
            return {
                ...state,
                item: action.payload
            };

        default:
            return state;    
    }
}
