import {getMenuItems} from "../pages/pages";

export function initializeTitles() {
    const path = window.location.pathname;

    let title = "";

    let items = getMenuItems();

    items.forEach(function (item) {
        if (item.children.length > 0){
            item.children.forEach(function (child) {
                if (path === child.pathname){
                    title = child.title;
                }
            });
        }
        else {
            if (item.pathname === path){
                title = item.title;
            }
        }
    });

    if (title !== ""){
        document.title ="رسپا | " + title;
        document.getElementById("nav-title").innerText = title;
        document.getElementById("nav-sm-title").innerText = title;
    }
    else {
        document.title = "رسپا";
        document.getElementById("nav-title").innerText = "";
        document.getElementById("nav-sm-title").innerText = "";
    }


}

export function initializeTitlesWithValue(title) {
        document.title ="رسپا | " + title;
        document.getElementById("nav-title").innerText = title;
        document.getElementById("nav-sm-title").innerText = title;

}