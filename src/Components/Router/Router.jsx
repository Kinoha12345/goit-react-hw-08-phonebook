import { Switch,Redirect } from "react-router-dom";
import ContactList from "../ContactList/ContactList";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import SignUp from "../SignUp/SignUp";

const Router = () => {
    return (
        <Switch>
            <PrivateRoute path="/contacts" >
              <ContactList />
            </PrivateRoute>
            <PublicRoute path="/login" isRestricted={true}>
              <Login />
            </PublicRoute>
            <PublicRoute path="/reg" isRestricted={false}>
              <SignUp />
            </PublicRoute>
            <Redirect to="/login"/>
        </Switch>
    );
}

export default Router;