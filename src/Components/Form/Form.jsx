import { useState } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import {addContact} from '../../redux/contacts/contactsOperations';
import './FormStyle.css';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const onInputValue = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onBtnSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      id: nanoid(),
      number,
    };
    const dublicate = contacts.some((el) => el.name.toLowerCase() === name.toLowerCase());
    if (!dublicate) {
      return dispatch(addContact(newContact)) ;
    } else {
      alert(`${name} alredy in contacts`);
    }
  };
    return ( 
     <>
     
       <form className="contact-form" onSubmit={onBtnSubmit}>
       <h2 >Name</h2>
           <input className="addN-input" onChange={onInputValue}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h2>Number</h2>
      <input className="addNum-input" onChange={onInputValue}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>

      <button className="add-btn" type="submit" >Add Contact</button>
       </form>
      
       </>
      );
     
}

export default Form ;