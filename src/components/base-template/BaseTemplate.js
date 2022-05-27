import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import Content from "./Content";
import Footer from "./Footer";
import {BrowserRouter, Router} from "react-router-dom";
import {createBrowserHistory} from "history";

export default function BaseTemplate() {

    return (
        <div className="w-100">
            <BrowserRouter>
                <Router history={createBrowserHistory()}>
                    <div className="w-100">
                        <div className="row mx-0">
                            <div className="col-12 col-lg-10 mx-0 px-0">
                                <Navbar/>
                                <div className="w-100">
                                    <Content/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-2 px-0 d-none d-lg-inline">
                                <SideMenu/>
                            </div>
                        </div>

                    </div>
                </Router>

            </BrowserRouter>

        </div>
    )
}