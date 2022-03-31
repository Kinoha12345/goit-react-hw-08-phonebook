import { useDispatch, useSelector } from "react-redux";
import ContactsListItem from "../ContactsListItem/ContactsListItem";
import FilterItems from "../FilterItems/FilterItems";
import Form from "../Form/Form";
import { exit } from "../../redux/auth/authOperation";

const ContactList = () => {
    const token = useSelector((state) => state.auth.idToken)
    const dispatch = useDispatch() 
  return (
    <>
      <div>
        <h2>Дабро пожаловать {localStorage.getItem("name")}!</h2>
        <button
          type="button"
          onClick={() => {
            dispatch(exit(token));
          }}
        >
          LogOut
        </button>
      </div>
      <h1>PhoneBook</h1>
      <Form />
      <h2>Contacts</h2>
      <FilterItems />
      <ul>
        <ContactsListItem />
      </ul>
    </>
  );
};

export default ContactList;
