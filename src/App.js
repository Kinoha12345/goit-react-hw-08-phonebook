import "./App.css";
import Form from "./Components/Form/Form";
import ContactsListItem from "./Components/ContactsListItem/ContactsListItem";
import FilterItems from "./Components/FilterItems/FilterItems";
import { useSelector, useDispatch } from "react-redux";
import {getContacts} from './redux/contacts/contactsOperations'
import { useEffect } from "react";


const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts())
  },[dispatch])

  const filterItems = (query) => {
    return contacts.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) && item);
  };

  return (
    <>
      <h1>PhoneBook</h1>
      <Form  />
      <h2>Contacts</h2>
      <FilterItems  />
      <ul>
        <ContactsListItem  filterItems={filterItems}/>
      </ul>
    </>
  );
};


export default App;
