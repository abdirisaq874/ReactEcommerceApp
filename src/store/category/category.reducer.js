import { CATEGORIES_ACTION_TYPES } from "./category.types"

const InitialState= {
    categories : []
}

export const CategoriesReducer =(state=InitialState,action={})=>{
    // console.log("inside category reducer")
    const {type,payload} = action
    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {...state,categories : payload}
        default : return state
    }
}

