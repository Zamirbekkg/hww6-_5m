import { useSelector } from "react-redux";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";

const Home = () => {
    const categories=useSelector(s => s.reducer.categories)
    return (
        <div>
            {
                categories.map(item=>{
                    return<CategoryComponent kay={item} category={item} limit={4}/>

                })
            }

        </div>
    );
}

export default Home;
