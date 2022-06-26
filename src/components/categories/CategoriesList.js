import React from "react";
import {useEffect, useState} from "react";
import {initializeTitles} from "../Global/Titles";
import {Link} from "react-router-dom";
import Style from './categories.module.css'

import Spices from './imgs/spice.png'
import {generateURL} from "../requests";
import * as $ from "jquery";

export default function CategoriesList(){

    const [categories, setCategories] = useState([]);


    const onRemoveCategory = (id, index) => {
        let axios = require('axios');
        let config_recipes = {
            method: 'delete',
            url: generateURL("/categories/delete/") + id ,
        };
        axios(config_recipes)
            .then(function (response) {
                console.log(response.data);
                let array = [...categories]
                array.splice(index, 1)
                setCategories(array);;
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(function (){
        initializeTitles();

        let axios = require('axios');
        let config_categories = {
            method: 'get',
            url: generateURL("/categories/all") ,
        };
        axios(config_categories)
            .then(function (response) {
                let category_array = [];
                $(response.data).each(function (index, item) {
                    category_array.push(item);
                });
                setCategories(category_array);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])
    return(
        <div className={'container-fluid'}>
            <div className={"table-responsive"}>
                <table className={'table table-striped'}>
                    <thead>
                    <tr>
                        <th>نام دسته بندی</th>
                        {/*<th>آیکون</th>*/}
                        <th>ویرایش</th>
                        <th>حذف</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        categories.map((item, index) => (
                            <tr>
                                <td>{item.description}</td>
                                {/*<td><img src={Spices} className={Style.tableIcon}/></td>*/}
                                <td><Link className={'btn btn-outline-warning text-warning'} to={{
                                    pathname:'/categories/edit',
                                    search:"id=" + item.id
                                }}><i className={"fas fa-edit"}></i></Link></td>
                                <td><button className={'btn btn-outline-danger text-danger'} onClick={() => onRemoveCategory(item.id, index)}
                                ><i className={"fas fa-trash-alt"}></i></button></td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>
        </div>
    );
}