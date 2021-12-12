import {Redirect, Route, Switch} from "react-router-dom";
// import Main from "../../Pages/Main/Main";
import {publicRoutes} from "../Router/router";




const AppRouter = () => {

    return (
        <>            
            <Switch>
                {publicRoutes.map(route =>
                        <Route
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                            />
                            )}
                <Redirect to='/'/>
            </Switch>

        </>

);
};

export default AppRouter;
