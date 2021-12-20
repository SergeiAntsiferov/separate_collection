import Main from "../../Pages/Main/Main";
import Login from "../../Pages/Login/Login";
import Points from "../../Pages/Points/Points";
import CardPage from "../../Pages/CardPage/CardPage";
// import CreatePoints from "../../Pages/CreatePoints/CreatePoints";
import About from "../../Pages/About/About";




export const publicRoutes = [
    {path: '/', component: Main, exact: true},
    {path: '/login', component: Login, exact: true},
    {path: '/points', component: Points, exact: true},
    {path: '/card/:name', component: CardPage, exact: true},
    // {path: '/create', component: CreatePoints, exact: true},
    {path: '/about', component: About, exact:true}
]