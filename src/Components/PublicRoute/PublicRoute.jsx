import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const PublicRoute = ({children, path, isRestricted}) => {
    const isLogedIn = useSelector((state) => state.auth.user.isLogedIn);

    return isLogedIn && isRestricted ? (<Redirect to="/contacts"/>) : (
        <Route path={path}>{children}</Route>
    );
}

export default PublicRoute;