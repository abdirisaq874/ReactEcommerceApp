// import { createContext, useState, useEffect } from "react";
// import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// const Categoriescontext = createContext({
//     CategoriesMap: [],
// });

// const CategoriesProvider = ({ children }) => {
//   const [CategoriesMap,setCategoriesMap] = useState({});

//   useEffect(()=>{
//     const getCollectionAndDocument = async()=>{
//        const CategoryMap =  await getCollectionAndDocuments()
//        setCategoriesMap(CategoryMap)
//     }
//    getCollectionAndDocument()
//   },[])
  
//   const value = {CategoriesMap};
//   return (
//     <Categoriescontext.Provider value={value}>
//       {children}
//     </Categoriescontext.Provider>
//   );
// };

// export { Categoriescontext, CategoriesProvider };
