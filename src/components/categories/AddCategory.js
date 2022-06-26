import React, {useEffect, useState} from "react";
import {initializeTitles} from "../Global/Titles";
import * as $ from "jquery";
import {useHistory} from "react-router-dom";
import {generateURL} from "../requests";
import Spices from "./imgs/spice.png";
import queryString from "query-string";

export default function AddCategory() {
    const history = useHistory();
    const [file, setFile] = useState();
    const [desc, setDesc] = useState();
    const [catId, setId] = useState();

    const handleChange = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    const onsubmitCategory = () => {
        let axios = require('axios');
        let data = {
            // id: parseInt(catId),
            description: $("#description_input").val()
        }
        let config_categories = {
            method: 'post',
            url: generateURL("/categories/save") ,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        };
        axios(config_categories)
            .then(function (response) {
                console.log(response)
                history.push("/categories/list")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(function (){
        initializeTitles();
        setFile(Spices)

        const url = queryString.parse(window.location.search);
        // let id = url.id;
        // setId(id)

    }, []);
    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 col-xl-6 offset-xl-6'}>
                    <label>نام دسته‌بندی: </label>
                    <input type={'text'} id={"description_input"} className={'form-control'} defaultValue={desc}/>
                </div>
                {/*<></>*/}
                {/*<div className={'col-12  mt-5'}>*/}
                {/*    <label>آیکون دسته‌بندی: </label>*/}
                {/*    <input onChange={handleChange} id={"image_input"} className={"d-none"} type={"file"} accept="image/png"/>*/}
                {/*    <div className={'row'}>*/}
                {/*        <div><button className={" btn btn-info px-4 py-2 mx-3 mt-5"} onClick={() => {$("#image_input").click()}}>آپلود آیکون</button></div>*/}
                {/*        <div className={'col-2'}>*/}
                {/*            { file && <img className={"w-100 rounded mt-4 border"} src={file}/>}*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}
                <div className={'col-12 d-flex justify-content-center mt-5'}>
                    <button className={'btn btn-success py-2 px-5'} onClick={onsubmitCategory}>ویرایش دسته‌بندی</button>
                </div>
            </div>
        </div>
    )
}