import CardPage from "../../Pages/CardPage/CardPage";
import EditRecievePoints from "../../Pages/EditRecievePoints/EditRecievePoints";
import LoginForm from "../../Pages/LoginForm/LoginForm";
import Main from "../../Pages/Main/Main";
import RecievePoints from "../../Pages/RecievePoints/RecievePoints";




export const publicRoutes = [
    {path: '/', component: Main, exact: true},
    {path: '/login', component: LoginForm, exact: true},
    {path: '/points', component: RecievePoints, exact: true},
    {path: '/card/:name', component: CardPage, exact: true},
    {path: '/edit', component: EditRecievePoints, exact: true},
]