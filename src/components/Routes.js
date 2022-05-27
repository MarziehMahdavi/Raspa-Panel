import {Route, Switch} from "react-router-dom";
import App from "../App";

import RecipesList from "./recipes/RecipesList";
import AddRecipe from "./recipes/AddRecipe";
import EditRecipe from "./recipes/EditRecipe";

import CategoriesList from "./categories/CategoriesList";
import AddCategory from "./categories/AddCategory";
import EditCategory from "./categories/EditCategory";

import SentRecipesList from "./sentRecipes/SentRecipesList";
import SentRecipe from "./sentRecipes/SentRecipe";
import EditSentRecipe from "./sentRecipes/EditSentRecipe";


export default function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={App}/>

            {/************ Recipes ***********/}
            <Route path="/recipes/list" exact component={RecipesList}/>
            <Route path="/recipes/add" exact component={AddRecipe}/>
            <Route path="/recipes/edit" exact component={EditRecipe}/>

            {/************ Categories ***********/}
            <Route path="/categories/list" exact component={CategoriesList}/>
            <Route path="/categories/add" exact component={AddCategory}/>
            <Route path="/categories/edit" exact component={EditCategory}/>

            {/************ Sent Recipes ***********/}
            <Route path="/sentRecipes/list" exact component={SentRecipesList}/>
            <Route path="/sentRecipes/edit" exact component={EditSentRecipe}/>
            <Route path="/sentRecipes/show" exact component={SentRecipe}/>

        </Switch>

    );
}