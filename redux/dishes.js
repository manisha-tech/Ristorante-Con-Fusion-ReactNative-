import * as ActionTypes from './ActionTypes';

const dishes=(state={
    isLoading:true,
    errMess:null,
    dishes:[]  
},  action) => {
    switch (action.type){
        case ActionTypes.ADD_DISHES:
            return{ ...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
                return{ ...state, dishes: [], errMess:null,  isLoading: true};

        case ActionTypes.DISHES_FAILED:
            return{ ...state, isLoading: false, dishes: [], errMess: action.payload};

        default:
            return state;
    }
}