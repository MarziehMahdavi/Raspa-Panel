import React from "react";
import {useEffect} from "react";
import {initializeTitles} from "../Global/Titles";
import {Link} from "react-router-dom";
import Style from './categories.module.css'

import Spices from './imgs/spice.png'

export default function CategoriesList(){
    useEffect(function (){
        initializeTitles();
    }, [])
    return(
        <div className={'container-fluid'}>
            <div className={"table-responsive"}>
                <table className={'table table-striped'}>
                    <thead>
                    <tr>
                        <th>نام دسته بندی</th>
                        <th>آیکون</th>
                        <th>ویرایش</th>
                        <th>حذف</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>چاشنی و ادویه</td>
                        <td><img src={Spices} className={Style.tableIcon}/></td>
                        <td><Link className={'btn btn-outline-warning text-warning'} to={'/categories/edit'}><i className={"fas fa-edit"}></i></Link></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-trash-alt"}></i></button></td>
                    </tr>
                    <tr>
                        <td>چاشنی و ادویه</td>
                        <td><img src={Spices} className={Style.tableIcon}/></td>
                        <td><Link className={'btn btn-outline-warning text-warning'} to={'/categories/edit'}><i className={"fas fa-edit"}></i></Link></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-trash-alt"}></i></button></td>
                    </tr>
                    <tr>
                        <td>چاشنی و ادویه</td>
                        <td><img src={Spices} className={Style.tableIcon}/></td>
                        <td><Link className={'btn btn-outline-warning text-warning'} to={'/categories/edit'}><i className={"fas fa-edit"}></i></Link></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-trash-alt"}></i></button></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}