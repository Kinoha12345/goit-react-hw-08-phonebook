import { useDispatch, useSelector } from "react-redux";
import {removeContacts} from '../../redux/contacts/contactsOperations';
const ContactsListItem = ({ filterItems }) => {
  const filter = useSelector((state) => state.contacts.filter)
  const dispatch = useDispatch();
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
             dispatch(removeContacts(contact.id)) ;
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
