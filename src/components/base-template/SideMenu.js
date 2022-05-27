import Logo from "../../assets/images/logo.png"
import RaspaLogo from './raspa-logo.png'
import {getMenuItems} from "../pages/pages";
import {useHistory, Link} from 'react-router-dom';
import Style from './../logo.module.css'

export default function SideMenu() {
    const history = useHistory();
    const items = getMenuItems();

    const pathname = window.location.pathname;

    return (
        <div className="side-menu-container pt-4 d-flex flex-column">
            <div className="sidebar-logo d-flex flex-row-reverse px-4">
                <img className={Style["logo-img"]} src={RaspaLogo} alt={"Logo"}/>
                <div className="pr-3">
                    <h3 className={Style["logo-title"]}>رسپا</h3>
                    <p className={Style["logo-description"] + " mt-3"}>آشپزی&nbsp;&nbsp;&nbsp;برای&nbsp;&nbsp;&nbsp;روح</p>
                </div>
            </div>
            <div className="flex-grow-1 side-menu pt-4">
                <ul className="w-100 px-0 text-right" data-uk-accordion>
                    {
                        items.map((item, i) => (
                            item.children.length > 0 ?
                                <li className="mt-0">
                                    <a className="uk-accordion-title pr-5 pl-3 py-3">
                                        <span className="pr-2">{item.title}</span>
                                        <i className={item.iconClass}></i>
                                    </a>
                                    <div className="uk-accordion-content pt-0">
                                        <ul className="w-100 px-0 text-right mt-0">
                                            {
                                                item.children.map((child , j) =>
                                                    <li className="px-0 w-100">
                                                        <Link to={child.pathname}>
                                                            <a className={pathname === child.pathname ? "pr-5 d-block py-2 active-menu":"pr-5 d-block py-2"} onClick={() => {history.push(child.pathname);}}>
                                                                <span className="pr-3">{child.title}</span>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </li>
                            :   <li className="mt-0">
                                    <Link to={item.pathname}>
                                        <a className={pathname === item.pathname ? "pr-5 pl-3 py-3 mt-0 d-block active-menu":"pr-5 pl-3 py-3 mt-0 d-block"} onClick={() => {history.push(item.pathname)}}>
                                            <span className="pr-2">{item.title}</span>
                                            <i className={item.iconClass}></i>
                                        </a>
                                    </Link>
                                </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}