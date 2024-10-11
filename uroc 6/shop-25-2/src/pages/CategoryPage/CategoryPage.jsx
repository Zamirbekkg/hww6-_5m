import { useParams } from "react-router-dom";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";

const CategoryPage = () => {
    const params = useParams();
    return (
        <div>
           <CategoryComponent Limit={null} category={params.category} />

        </div>
    );
}

export default CategoryPage;