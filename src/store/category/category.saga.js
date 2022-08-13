import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesfetchfailed,  setCategoriesFetchSuccess } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";


export function* FetchCategoriesAsync (){
    try{
      const CategoryMap =  yield call(getCollectionAndDocuments)
      yield put(setCategoriesFetchSuccess(CategoryMap))
    }catch(e){
      yield put(setCategoriesfetchfailed(e))
    }
  }
export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FetchCategoriesStart,FetchCategoriesAsync)
}


export function* CategoriesSaga(){
    yield all([call(onFetchCategories)])
}

