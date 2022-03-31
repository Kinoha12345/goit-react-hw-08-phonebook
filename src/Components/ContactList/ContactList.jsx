import { useDispatch, useSelector } from "react-redux";
import ContactsListItem from "../ContactsListItem/ContactsListItem";
import FilterItems from "../FilterItems/FilterItems";
import Form from "../Form/Form";
import { exit } from "../../redux/auth/authOperation";
import './ContactsListStyle.css';

const ContactList = () => {
    const token = useSelector((state) => state.auth.idToken)
    const dispatch = useDispatch() 
  return (
    <>
      <div className="hello-user">
        <h2 className="hello-text">Дабро пожаловать {localStorage.getItem("name")}!</h2>
        <button
        className="hello-btn"
          type="button"
          onClick={() => {
            dispatch(exit(token));
          }}
        >
          LogOut
        </button>
      </div>
      
      <h1 className="title-phone">PhoneBook</h1>
      <Form />
      <h2 className="title-filter">Contacts</h2>
      <FilterItems />
      <ul>
        <ContactsListItem />
      </ul>
      
    </>
  );
};

export default ContactList;
