import React, {useEffect, useState} from 'react';
import * as Style from "./sentRecipes.module.css";
import queryString from "query-string";
import FoodImage from "./imgs/sample.jpg";
import {Link} from "react-router-dom";
import {initializeTitlesWithValue} from "../Global/Titles";
import FoodImg from "./imgs/sample.jpg";
import {generateURL} from "../requests";
import HtmlComponent from "../EditorToHtml";

export default function SentRecipe() {
    const [description, setDescription] = useState();
    const [difficulty, setDifficulty] = useState();
    const [directions, setDirections] = useState();
    const [image, setImage] = useState();
    const [cookTime, setCookTime] = useState();
    const [prepTime, setPrepTime] = useState();
    const [servings, setServings] = useState();
    const [category, setCategory] = useState(0);
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    const findCategoryById = (id) => {
        let name ;

        categories.map((item) => {
            if (item.id === id ) {
                name = item.description;
                return;
            }
        })

        return name;
    }
    useEffect(function (){
        initializeTitlesWithValue("دستور پخت");

        const url = queryString.parse(window.location.search);
        let id = url.id;

        let axios = require('axios');
        let config_categories = {
            method: 'get',
            url: generateURL("/categories/all") ,
        };
        axios(config_categories)
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        let config = {
            method: 'get',
            url: generateURL("/recipes/get/") + id ,
        };
        axios(config)
            .then(function (response) {
                console.log(response)
                setDescription(response.data.description)
                setDifficulty(response.data.difficulty)
                setDirections(response.data.directions)
                setServings(response.data.servings)
                setCookTime(response.data.cookTime)
                setPrepTime(response.data.prepTime)
                setImage(response.data.image)
                setCategory(response.data.categories)
            })
            .catch(function (error) {
                console.log(error);
            });

        let ingredients_config = {
            method: 'get',
            url: generateURL("/ingredients/" + id + "/all") ,
        };
        axios(ingredients_config)
            .then(function (response) {
                console.log(response.data)
                setIngredients(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });



    }, []);
    return(
        <div className={'pb-4'}>
            <div className="container py-4">
                <h2 className={Style["food-title"]}>{description}</h2>
                <img src={image} className={"rounded  mt-4 " + Style["food-img"]}/>
                <div className={"d-flex  mt-3 " + Style["food-likes"]}>
                    <hr className="flex-grow-1"/>
                    <Link to={{
                        pathname: "/category",
                        hash:category!== null && "#" + category[0]
                    }} className={" pr-4 pl-5 " + Style["food-category"]}>
                        <span>{category!== null && findCategoryById(category[0])}</span>
                    </Link>
                    <div className="px-4">
                        <span>12k</span>
                        <span data-uk-icon="icon: heart"></span>
                    </div>
                    <div className="px-4">
                        <span>{difficulty}</span>
                        <span data-uk-icon="icon: happy"></span>
                    </div>
                    <div className="pr-5 pl-4">
                        <span> نفر{servings}</span>
                        <span data-uk-icon="icon: users"></span>
                    </div>
                    <hr className="flex-grow-1"/>
                </div>

                <h3 className={Style["ingredients-title"] + " mt-5"}>مواد لازم:</h3>
                <div className="table-responsive mt-3">
                    <table className={"table " + Style["ingredients-table"]}>

                        <tbody>
                        {
                            ingredients.map((item, index) => (
                                <tr>
                                    <td>{item.description}</td>
                                    <td>{item.amount} {item.unitOfMeasure}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>

                <h3 className={Style["ingredients-title"] + " mt-5"}>طرز تهیه:</h3>

                <HtmlComponent className={Style["instructions-para"]}
                               val={directions}/>
            </div>

            <div className={"col-12 d-flex justify-content-between mt-4"}>
                {/*<button className={" btn btn-success px-5 py-2"}>تایید</button>*/}
                {/*<Link to={'/sentRecipes/edit'} className={" btn btn-warning px-5 py-2 text-white"}>ویرایش دستور پخت</Link>*/}
                {/*<button className={" btn btn-danger px-5 py-2"}>رد کردن</button>*/}
            </div>
        </div>
    )
}