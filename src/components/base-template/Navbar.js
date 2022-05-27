import {useEffect, useState} from 'react';
import Profile from "../../assets/images/profile.jpg";
import Logout from "../../assets/icons/logout.png";
import SideMenu from "./SideMenu";
import {generateURL} from "../Global/Requests";
import Cookies from "js-cookie";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


export default function Navbar() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [image, setImage] = useState(null);


    useEffect(function () {

    }, [])

    return(
        <div className=" navbar-bg">
            <div className="d-none d-lg-flex container justify-content-between">
                <div className=" py-3">
                    <div>
                        <button type="button" className="navbar-profile-btn">
                            <span className="mx-2">علی علوی</span>
                            <img className="navbar-profile-img rounded-circle" src={image !== null ? image : Profile}/>

                        </button>
                        <div data-uk-dropdown="mode: click; pos: bottom-justify">
                            <div className="d-flex justify-content-center">
                                <img className="dropdown-profile-img rounded-circle" src={image !== null ? image : Profile}/>
                            </div>
                            <h6 className="my-2 text-center">علی علوی</h6>
                            <div className="nav-dropdown-id text-center">@ali_alavi</div>
                            <ul className="uk-nav uk-dropdown-nav mt-4 text-right nav-drop-ul">
                                <li className="py-2">ویرایش پروفایل</li>
                                <li className="py-2">منو 2</li>
                            </ul>
                            <div className="d-flex justify-content-center mt-3">
                                <button  className="logout-btn">
                                    <img src={Logout}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 id="nav-title" className="my-auto py-0 text-right"></h4>
            </div>
            <div className="d-lg-none d-block container">
                <div className="w-100 py-3 d-flex justify-content-between">
                    <div>
                        <button type="button" className="navbar-profile-btn">
                            <img className="navbar-profile-img rounded-circle" src={image !== null ? image : Profile}/>

                        </button>
                        <div data-uk-dropdown="mode: click; pos: bottom-justify">
                            <div className="d-flex justify-content-center">
                                <img className="dropdown-profile-img rounded-circle" src={image !== null ? image : Profile}/>
                            </div>
                            <h6 className="my-2 text-center">علی علوی</h6>
                            <div className="nav-dropdown-id text-center">@ali_alavi</div>
                            {/*<div className="nav-dropdown-id text-center">{email}</div>*/}
                            <ul className="uk-nav uk-dropdown-nav mt-4 text-right nav-drop-ul">
                                <li className="py-2">ویرایش پروفایل</li>
                                <li className="py-2">منو 2</li>
                            </ul>
                            <div className="d-flex justify-content-center mt-3">
                                <button  className="logout-btn" >
                                    <img src={Logout}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <h5 id="nav-sm-title" className="my-auto"></h5>
                    <button className="uk-button uk-button-default offcanvas-toggler px-2" type="button"
                            data-uk-toggle="target: #offcanvas-flip">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div id="offcanvas-flip" data-uk-offcanvas="overlay: true">
                        <div className="uk-offcanvas-bar bg-white">

                            <button className="uk-offcanvas-close text-dark" type="button" data-uk-close>

                            </button>

                            <SideMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}