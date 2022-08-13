// import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

// export const setCategoriesMap = (categories) => ({
//   type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
//   payload: categories,
// });

export const setCategoriesFetchStart = () => ({
  type: CATEGORIES_ACTION_TYPES.FetchCategoriesStart,
});

export const setCategoriesFetchSuccess = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.FetchCategoriesSuccess,
  payload: categories,
});

export const setCategoriesfetchfailed = (error) => ({
  type: CATEGORIES_ACTION_TYPES.FetchCategoriesFailed,
  payload: error,
});

// export const FetchCategoriesAsync = ()=>async(dispatch)=>{
//   dispatch(setCategoriesFetchStart())
//   try{
//     const CategoryMap =  await getCollectionAndDocuments()
//     dispatch(setCategoriesFetchSuccess(CategoryMap))
//   }catch(e){
//     dispatch(setCategoriesfetchfailed(e))
//   }
// }
