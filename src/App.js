import "./App.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import { Suspense, lazy } from "react";
import Form from "./Components/Form/Form";
import ContactsListItem from "./Components/ContactsListItem/ContactsListItem";
import FilterItems from "./Components/FilterItems/FilterItems";
import { useSelector, useDispatch } from "react-redux";
import {getContacts} from './redux/contacts/contactsOperations'
import { useEffect, useState } from "react";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";



const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const [isAuth] = useState(false)  
  useEffect(() => {
    dispatch(getContacts())
  },[dispatch])

  const filterItems = (query) => {
    return contacts.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) && item);
  };

  const LoginPage = lazy(() => import("./Components/Login/Login"));
  const RegisterPage = lazy(() => import("./Components/SignUp/SignUp"));

  return (
    <>
    <nav>
      <NavLink activeStyle={{ color: "green", marginRight: "30px" }} to="/reg" exact>
        Register
        </NavLink>
      <NavLink activeStyle={{ color: "green", marginLeft: "30px" }}to="/login">
        Login
        </NavLink>
      </nav>

    {/* {isAuth ? (
    <>
    <h1>PhoneBook</h1>
      <Form  />
      <h2>Contacts</h2>
      <FilterItems  />
      <ul>
        <ContactsListItem  filterItems={filterItems}/>
      </ul> 
      </>
      ) : ( */}
      <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
            <Route path="/login" component={LoginPage} />
              
            <Route path="/reg" component={RegisterPage} />
             
            <Redirect to="/login" />
        </Switch>
      </Suspense>
      )
      {/* }
       */}
    </>
  );
};


export default App;
