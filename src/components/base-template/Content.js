import {BrowserRouter} from "react-router-dom";
import React, {Suspense} from 'react';
import Routes from "../Routes";
import Footer from "./Footer";
import $ from 'jquery'


export default function Content() {

    let contentHeight = $("body").height() - $(".navbar-bg").outerHeight(true);
    let contentChildHeight = $("body").height() - ($(".footer-bg").outerHeight(true) + $(".navbar-bg").outerHeight(true));
    //
    $(".content").attr("style", "height: " + contentHeight + "px !important;");
    $(".content-child").attr("style", "min-height: " + contentChildHeight + "px !important;");

    return (
        <div className="content w-100 ">
            <div className="px-lg-5 pt-lg-5 px-3 pt-3 mx-auto content-child">
                <Suspense fallback="loading">
                    <Routes/>
                </Suspense>
            </div>
            <Footer/>

        </div>
    )
}