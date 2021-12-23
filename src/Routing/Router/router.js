import Maps from "../../Pages/Maps/Maps";
import Main from "../../Pages/Main/Main";
import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";
import Points from "../../Pages/Points/Points";
import CardPage from "../../Pages/CardPage/CardPage";




export const routes = [
    {path: '/', component: Main, exact: true},
    {path: '/maps', component: Maps, exact: true},
    {path: '/about', component: About, exact:true},
    {path: '/login', component: Login, exact: true},
    {path: '/points', component: Points, exact: true},
    {path: '/card/:name', component: CardPage, exact: true}
]