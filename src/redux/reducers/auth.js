import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    error : null ,
    
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.SignUpUserError :
            return({
                ...state,
                error : action.payload,
            });
        default :
            return state ;
    }
}