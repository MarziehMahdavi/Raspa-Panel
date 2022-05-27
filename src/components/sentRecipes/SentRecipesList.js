import React from "react";
import {useEffect} from "react";
import {initializeTitles} from "../Global/Titles";
import {Link} from "react-router-dom";

export default function SentRecipesList(){
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
                        <th>تاریخ ارسال</th>
                        <th>مشاهده</th>
                        <th>نایید</th>
                        <th>رد کردن</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                        <td>چاشنی و ادویه</td>
                        <td>1401/01/01 23:23</td>
                        <td><Link className={'btn btn-outline-info text-info'} to={'/sentRecipes/show'}><i className={"fas fa-eye"}></i></Link></td>
                        <td><button className={'btn btn-outline-success text-success'}><i className={"fas fa-check"}></i></button></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-times"}></i></button></td>
                    </tr>
                    <tr>
                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                        <td>چاشنی و ادویه</td>
                        <td>1401/01/01 23:23</td>
                        <td><Link className={'btn btn-outline-info text-info'} to={'/sentRecipes/show'}><i className={"fas fa-eye"}></i></Link></td>
                        <td><button className={'btn btn-outline-success text-success'}><i className={"fas fa-check"}></i></button></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-times"}></i></button></td>
                    </tr>
                    <tr>
                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                        <td>چاشنی و ادویه</td>
                        <td>1401/01/01 23:23</td>
                        <td><Link className={'btn btn-outline-info text-info'} to={'/sentRecipes/show'}><i className={"fas fa-eye"}></i></Link></td>
                        <td><button className={'btn btn-outline-success text-success'}><i className={"fas fa-check"}></i></button></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-times"}></i></button></td>
                    </tr>
                    <tr>
                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                        <td>چاشنی و ادویه</td>
                        <td>1401/01/01 23:23</td>
                        <td><Link className={'btn btn-outline-info text-info'} to={'/sentRecipes/show'}><i className={"fas fa-eye"}></i></Link></td>
                        <td><button className={'btn btn-outline-success text-success'}><i className={"fas fa-check"}></i></button></td>
                        <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-times"}></i></button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}