import { useState, useEffect } from "react";
import axios from "axios";
import Card from '../Card/Card';
import { Link } from "react-router-dom";
import { getCategories } from "../../redux/reducer";

const CategoryComponent = ({limit, category}) => {
    const [data, setdata] = useState([]);
    useEffect(() =>{
        setdata([]) 
        axios(
            limit
            ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${category}`
        ).then(({data}) => setdata(data))
    }, [category, limit])
        return (
        <div className="conteiner">
            <h1> <link to={`category${category}`}{category} link/> </h1>
            <div className="row">
            {
                data.map(item => {
                    return <Card item={item} key={item.id}/>
                })
            }
            </div>

        </div>
    );
}

export default CategoryComponent;
