import "./App.css";
import Form from "./Components/Form/Form";
import ContactsListItem from "./Components/ContactsListItem/ContactsListItem";
import FilterItems from "./Components/FilterItems/FilterItems";
import { useSelector, useDispatch } from "react-redux";
import {getContacts} from './redux/contacts/contactsOperations'
import { useEffect } from "react";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";


const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const isLogedIn = useSelector((state) => state.auth.user.isLogedIn);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getContacts())
  },[dispatch])

  const filterItems = (query) => {
    return contacts.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) && item);
  };

  return (
    
    <>
    {isLogedIn ? (
    <>
    <h1>PhoneBook</h1>
      <Form  />
      <h2>Contacts</h2>
      <FilterItems  />
      <ul>
        <ContactsListItem  filterItems={filterItems}/>
      </ul> 
      </>
      ) : (
      <> 
      <nav>
      <NavLink activeStyle={{ color: "green", marginRight: "30px" }} to="/reg" exact>
        Register
        </NavLink>
      <NavLink activeStyle={{ color: "green", marginLeft: "30px" }}to="/login">
        Login
        </NavLink>
      </nav>
      <Switch>
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="/reg" >
              <SignUp />
            </Route>
            <Redirect to="/login" />
        </Switch>
        
      
      </>)
      }
      
    </>
  );
};


export default App;
