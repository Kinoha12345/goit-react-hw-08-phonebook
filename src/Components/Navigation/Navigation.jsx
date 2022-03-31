import { useSelector } from "react-redux";
import { NavLink,  } from "react-router-dom";
const Navigation = () => {
  const isLogedIn = useSelector((state) => state.auth.user.isLogedIn);
  return (
    <>
      <nav>
        {isLogedIn ? (
          <NavLink
            activeStyle={{ color: "green", marginLeft: "30px" }}
            to="/contacts"
          >
            Contacts
          </NavLink>
        ) : (
          <>
            <NavLink
              activeStyle={{ color: "green", marginRight: "30px" }}
              to="/reg"
              exact
            >
              Register
            </NavLink>
            <NavLink
              activeStyle={{ color: "green", marginLeft: "30px" }}
              to="/login"
            >
              Login
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
};

export default Navigation;
