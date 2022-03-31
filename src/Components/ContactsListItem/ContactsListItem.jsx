import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeContacts, getContacts} from '../../redux/contacts/contactsOperations';
const ContactsListItem = () => {
  const filter = useSelector((state) => state.contacts.filter)
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  // console.log(filterItems(filter));
  useEffect(() => {
    dispatch(getContacts())
  },[dispatch])
  const filterItems = (query) => {
    
    return contacts.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) && item);
  };
  

  return (
    <>
      {filterItems(filter).map((contact) => (
        <li key={contact.id}>
          <p>
            {contact.name}:{contact.number}
          </p>
          <button
            type="button"
            onClick={(e) => {
            return dispatch(removeContacts(contact.id))
            //  dispatch(getContacts())
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default ContactsListItem;
