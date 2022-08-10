import { createSelector } from "reselect";

const selectCategoryReducer = (state) =>{
  console.log("selector 1 fired")
  return state.categories;}

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) =>{
    console.log("selector 2 fired")
     return categoriesSlice.categories}
);

export const CategorySelector = createSelector(
  [selectCategories],
  (categories) =>{

  console.log("selector 3 fired")
    return categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})}
);
