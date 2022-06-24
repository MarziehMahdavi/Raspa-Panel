import React, {useEffect, useState} from "react";
import {initializeTitles} from "../Global/Titles";
import * as $ from "jquery";

export default function AddCategory() {
    const [file, setFile] = useState();

    const handleChange = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    useEffect(function (){
        initializeTitles();
    }, []);
    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 col-xl-6 offset-xl-6'}>
                    <label>نام دسته‌بندی: </label>
                    <input type={'text'} className={'form-control'}/>
                </div>
                {/*<></>*/}
                <div className={'col-12  mt-5'}>
                    <label>آیکون دسته‌بندی: </label>
                    <input onChange={handleChange} id={"image_input"} className={"d-none"} type={"file"} accept="image/png"/>
                    <div className={'row'}>
                        <div><button className={" btn btn-info px-4 py-2 mx-3 mt-5"} onClick={() => {$("#image_input").click()}}>آپلود آیکون</button></div>
                        <div className={'col-2'}>
                            { file && <img className={"w-100 rounded mt-4 border"} src={file}/>}
                        </div>
                    </div>

                </div>
                <div className={'col-12 d-flex justify-content-center mt-5'}>
                    <button className={'btn btn-success py-2 px-5'}>ثبت دسته‌بندی</button>
                </div>
            </div>
        </div>
    )


}