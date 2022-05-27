import React, {useEffect, useState} from "react";
import {initializeTitles, initializeTitlesWithValue} from "../Global/Titles";
import * as $ from 'jquery';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FoodImg from './imgs/sample.jpg';


export default function EditRecipe() {

    const [file, setFile] = useState();


    const handleChange = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    const onAddIngredientsClick = () => {
        let tbody = $("#ingredients_tbody");
        console.log(tbody)

        let tr = "<tr>\n" +
            "                                <td><input class='form-control' type={\"text\"}/></td>\n" +
            "                                <td><input class='form-control' type={\"number\"}/></td>\n" +
            "                                <td>\n" +
            "                                    <select class='form-control'>\n" +
            "                                        <option>انتخاب کنید...</option>\n" +
            "                                        <option>قاشق غذاخوری</option>\n" +
            "                                        <option>پیمانه</option>\n" +
            "                                        <option>قاشق چای خوری</option>\n" +
            "                                    </select>\n" +
            "                                </td>\n" +
            "                                <td><button class='btn btn-outline-danger text-danger'><i class='fas fa-times'></i></button></td>\n" +
            "                            </tr>";
        $(tbody).prepend(tr);
    }

    useEffect(function (){
        initializeTitlesWithValue("ویرایش دستور پخت");
        setFile(FoodImg)
    }, []);

    return(
        <div className={'container-fluid'}>
            <div className={"row"}>
                <div className={"col-12 mt-4"}>
                    <label>نام غذا:</label>
                    <input className={'form-control'} type={"text"} defaultValue={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'}/>
                </div>
                <div className={"col-12 col-xl-6 mt-4"}>
                    <label>زمان آماده سازی(دقیقه):</label>
                    <input className={'form-control'} type={"number"} defaultValue={60}/>
                </div>
                <div className={"col-12 col-xl-6 mt-4"}>
                    <label>زمان پختن(دقیقه):</label>
                    <input className={'form-control'} type={"number"} defaultValue={60}/>
                </div>
                <div className={"col-12 col-xl-6 mt-4"}>
                    <label>تعداد افراد:</label>
                    <input className={'form-control'} type={"number"} defaultValue={4}/>
                </div>
                <div className={"col-12 col-xl-6 mt-4"}>
                    <label>درجه سختی غذا:</label>
                    <select className={'form-control'}>
                        <option selected={true}>آسان</option>
                        <option>متوسط</option>
                        <option>سخت</option>
                    </select>
                </div>
                <div className={"col-12 mt-4"}>
                    <label>عکس غذا:</label>
                    <input onChange={handleChange} id={"image_input"} className={"d-none"} type={"file"} accept="image/png, image/jpeg, image/jpg"/>
                    <button className={" btn btn-info px-4 py-2 mx-3"} onClick={() => {$("#image_input").click()}}>آپلود عکس</button>
                    { file && <img className={"w-100 rounded mt-4 "} src={file}/>}

                </div>
                <div className={"col-12 mt-4"}>
                    <label>مواد اولیه:</label>
                    <div className="table-responsive mt-3">
                        <table className={"table text-right "}>

                            <thead>
                            <tr>
                                <th>نام ماده</th>
                                <th>مقدار لازم</th>
                                <th>واحد</th>
                                <th>حذف</th>
                            </tr>
                            </thead>
                            <tbody id={"ingredients_tbody"}>
                            <tr>
                                <td><input className={'form-control'} type={"text"} defaultValue={'لورم ایپسوم متن'}/></td>
                                <td><input className={'form-control'} type={"number"} defaultValue={3}/></td>
                                <td>
                                    <select className={'form-control'}>
                                        <option>انتخاب کنید...</option>
                                        <option>قاشق غذاخوری</option>
                                        <option selected={true}>پیمانه</option>
                                        <option>قاشق چای خوری</option>
                                    </select>
                                </td>
                                <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-times"}></i></button></td>
                            </tr>
                            <tr>
                                <td><input className={'form-control'} type={"text"} defaultValue={'لورم ایپسوم متن'}/></td>
                                <td><input className={'form-control'} type={"number"} defaultValue={3}/></td>
                                <td>
                                    <select className={'form-control'}>
                                        <option>انتخاب کنید...</option>
                                        <option>قاشق غذاخوری</option>
                                        <option selected={true}>پیمانه</option>
                                        <option>قاشق چای خوری</option>
                                    </select>
                                </td>
                                <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-times"}></i></button></td>
                            </tr>
                            <tr>
                                <td><input className={'form-control'} type={"text"} defaultValue={'لورم ایپسوم متن'}/></td>
                                <td><input className={'form-control'} type={"number"} defaultValue={3}/></td>
                                <td>
                                    <select className={'form-control'}>
                                        <option>انتخاب کنید...</option>
                                        <option>قاشق غذاخوری</option>
                                        <option selected={true}>پیمانه</option>
                                        <option>قاشق چای خوری</option>
                                    </select>
                                </td>
                                <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-times"}></i></button></td>
                            </tr>
                            <tr>
                                <td><input className={'form-control'} type={"text"} defaultValue={'لورم ایپسوم متن'}/></td>
                                <td><input className={'form-control'} type={"number"} defaultValue={3}/></td>
                                <td>
                                    <select className={'form-control'}>
                                        <option>انتخاب کنید...</option>
                                        <option>قاشق غذاخوری</option>
                                        <option selected={true}>پیمانه</option>
                                        <option>قاشق چای خوری</option>
                                    </select>
                                </td>
                                <td><button className={'btn btn-outline-danger text-danger'}><i className={"fas fa-times"}></i></button></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className={"btn-info rounded-circle btn"} onClick={onAddIngredientsClick}><i className={'fas fa-plus'}></i></button>
                </div>
                <div className={"col-12 mt-5"}>
                    <label>دستور پخت:</label>
                    <CKEditor
                        config={ {
                            language:'ar'
                        } }
                        editor={ ClassicEditor }
                        data="
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        "
                    />


                </div>
                <div className={"col-12 d-flex justify-content-center mt-4 mb-5"}>
                    <button className={" btn btn-success px-5 py-2"}>ویرایش دستور پخت</button>
                </div>
            </div>
        </div>
    )
}