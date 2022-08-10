import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategoriesMap = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categories,
});

