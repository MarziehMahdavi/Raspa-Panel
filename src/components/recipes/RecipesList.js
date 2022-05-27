import React from "react";
import {useEffect} from "react";
import {initializeTitles} from "../Global/Titles";
import {Link} from "react-router-dom";

export default function RecipesList(){
    useEffect(function (){
        initializeTitles();
    }, [])
    return(
        <div className={'container-fluid'}>
            <div className={"table-responsive"}>
                <table className={'table table-striped'}>
                    <thead>
                    <tr>
                        <th>نام دستورپخت</th>
                        <th>دسته بندی</th>
                        <th>تاریخ ثبت</th>
                        <th>نویسنده</th>
                        <th>ویرایش</th>
                        <th>حذف</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                        <td>چاشنی و ادویه</td>
                        <td>1401/01/01 23:23</td>
                        <td>ادمین</td>
                        <td><Link className={'btn btn-outline-warning text-warning'} to={'/recipes/edit'}><i className={"fas fa-edit"}></i></Link></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-trash-alt"}></i></button></td>
                    </tr>
                    <tr>
                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                        <td>چاشنی و ادویه</td>
                        <td>1401/01/01 23:23</td>
                        <td>ادمین</td>
                        <td><Link className={'btn btn-outline-warning text-warning'} to={'/recipes/edit'}><i className={"fas fa-edit"}></i></Link></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-trash-alt"}></i></button></td>
                    </tr>
                    <tr>
                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                        <td>چاشنی و ادویه</td>
                        <td>1401/01/01 23:23</td>
                        <td>ادمین</td>
                        <td><Link className={'btn btn-outline-warning text-warning'} to={'/recipes/edit'}><i className={"fas fa-edit"}></i></Link></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-trash-alt"}></i></button></td>
                    </tr>
                    <tr>
                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                        <td>چاشنی و ادویه</td>
                        <td>1401/01/01 23:23</td>
                        <td>ادمین</td>
                        <td><Link className={'btn btn-outline-warning text-warning'} to={'/recipes/edit'}><i className={"fas fa-edit"}></i></Link></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-trash-alt"}></i></button></td>
                    </tr>
                    <tr>
                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                        <td>چاشنی و ادویه</td>
                        <td>1401/01/01 23:23</td>
                        <td>ادمین</td>
                        <td><Link className={'btn btn-outline-warning text-warning'} to={'/recipes/edit'}><i className={"fas fa-edit"}></i></Link></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-trash-alt"}></i></button></td>
                    </tr>
                    <tr>
                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                        <td>چاشنی و ادویه</td>
                        <td>1401/01/01 23:23</td>
                        <td>ادمین</td>
                        <td><Link className={'btn btn-outline-warning text-warning'} to={'/recipes/edit'}><i className={"fas fa-edit"}></i></Link></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-trash-alt"}></i></button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}