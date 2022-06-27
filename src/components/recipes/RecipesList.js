import React , {useState} from "react";
import {useEffect} from "react";
import {initializeTitles} from "../Global/Titles";
import {Link} from "react-router-dom";
import {generateURL} from "../requests";
import * as $ from "jquery";

export default function RecipesList() {
    let [recipes, setRecipes] = useState([]);
    let [categories, setCategories] = useState([]);

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

    const onDeleteRecipe = (id, index) => {
        let axios = require('axios');
        let config_recipes = {
            method: 'delete',
            url: generateURL("/recipes/delete/") + id ,
        };
        axios(config_recipes)
            .then(function (response) {
                console.log(response.data);
                let array = [...recipes]
                array.splice(index, 1)
                setRecipes(array);;
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(function (){
        initializeTitles();

        let axios = require('axios');
        let config_recipes = {
            method: 'get',
            url: generateURL("/recipes/all") ,
        };
        axios(config_recipes)
            .then(function (response) {
                console.log(response.data)
                setRecipes(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        let config_categories = {
            method: 'get',
            url: generateURL("/categories/all") ,
        };
        axios(config_categories)
            .then(function (response) {
                console.log(response.data)
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });




    }, []);
    return(
        <div className={'container-fluid'}>
            <div className={"table-responsive"}>
                <table className={'table table-striped'}>
                    <thead>
                    <tr>
                        <th>نام دستورپخت</th>
                        <th>دسته بندی</th>
                        <th>مشاهده</th>
                        <th>ویرایش</th>
                        <th>حذف</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        recipes.map((item, index) => (
                            <tr>
                                <td>{item.description}</td>
                                <td>{findCategoryById(item.categories[0])}</td>
                                {/*<td></td>*/}
                                <td><Link className={'btn btn-outline-info text-info'} to={{
                                    pathname: '/sentRecipes/show',
                                    search: "id=" + item.id
                                }}><i className={"fas fa-eye"}></i></Link></td>
                                <td><Link className={'btn btn-outline-warning text-warning'} to={{
                                    pathname: '/recipes/edit',
                                    search: "id=" + item.id
                                }}><i className={"fas fa-edit"}></i></Link></td>
                                <td><button className={'btn btn-outline-danger text-danger'} onClick={()=>onDeleteRecipe(item.id, index)}><i className={"fas fa-trash-alt"}></i></button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}