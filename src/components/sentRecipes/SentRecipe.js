import React, {useEffect} from 'react';
import * as Style from "./sentRecipes.module.css";

import FoodImage from "./imgs/sample.jpg";
import {Link} from "react-router-dom";
import {initializeTitlesWithValue} from "../Global/Titles";
import FoodImg from "./imgs/sample.jpg";

export default function SentRecipe() {
    useEffect(function (){
        initializeTitlesWithValue("دستور پخت");
    }, []);
    return(
        <div className={'pb-4'}>
            <div className="container py-4">
                <h2 className={Style["food-title"]}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ا </h2>
                <img src={FoodImage} className={"rounded  mt-4 " + Style["food-img"]}/>
                <div className={"d-flex flex-row-reverse  mt-3 dir-rtl " + Style["food-likes"]}>
                    <hr className="flex-grow-1 my-3"/>
                    <div className={" pr-4 pl-5 " + Style["food-category"]}>
                        <span>فست فود</span>
                    </div>
                    <div className="px-4">
                        <span>12k</span>
                        <span data-uk-icon="icon: heart"></span>
                    </div>
                    <div className="px-4">
                        <span>متوسط</span>
                        <span data-uk-icon="icon: happy"></span>
                    </div>
                    <div className="pr-5 pl-4">
                        <span>3 نفر</span>
                        <span data-uk-icon="icon: users"></span>
                    </div>
                    <hr className="flex-grow-1 my-3"/>
                </div>

                <h3 className={Style["ingredients-title"] + " mt-5"}>مواد لازم:</h3>
                <div className="table-responsive mt-3">
                    <table className={"table " + Style["ingredients-table"]}>

                        <tbody>
                        <tr>
                            <td>پیاز</td>
                            <td>1 عدد</td>
                        </tr>
                        <tr>
                            <td>سرکه</td>
                            <td>2 قاشق غداخوری</td>
                        </tr>
                        <tr>
                            <td>نمک و فلفل</td>
                            <td>به مقدار لازم</td>
                        </tr>
                        <tr>
                            <td>سرکه</td>
                            <td>2 قاشق غداخوری</td>
                        </tr>

                        </tbody>
                    </table>
                </div>

                <h3 className={Style["ingredients-title"] + " mt-5"}>طرز تهیه:</h3>
                <p className={Style["instructions-para"]}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                    مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                    درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                    را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                    اساسا مورد استفاده قرار گیرد.

                    <br/>
                    <br/>

                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                    مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                    درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                    را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                    اساسا مورد استفاده قرار گیرد.

                    <br/>
                    <br/>

                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                    مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                    درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                    را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                    اساسا مورد استفاده قرار گیرد.
                </p>
            </div>

            <div className={"col-12 d-flex justify-content-between mt-4"}>
                <button className={" btn btn-success px-5 py-2"}>تایید</button>
                <Link to={'/sentRecipes/edit'} className={" btn btn-warning px-5 py-2 text-white"}>ویرایش دستور پخت</Link>
                <button className={" btn btn-danger px-5 py-2"}>رد کردن</button>
            </div>
        </div>
    )
}