import { CATEGORIES_ACTION_TYPES } from "./category.types";

const InitialState = {
  categories: [],
  isLoading: false,
};

export const CategoriesReducer = (state = InitialState, action = {}) => {
  // console.log("inside category reducer")
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FetchCategoriesStart:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FetchCategoriesSuccess:
      return { ...state, categories:payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FetchCategoriesFailed:
      return { ...state, error:payload, isLoading: false };
    default:
      return state;
  }
};
