import CategoryItem from "../../components/category-item/category-item.component";
import { Outlet } from "react-router-dom"

const Home = () => {
  

  return (
    <div>
      <CategoryItem/>
      <Outlet />
    </div>
  );
};

export default Home;
