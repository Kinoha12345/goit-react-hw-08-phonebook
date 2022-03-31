import { useDispatch, useSelector } from "react-redux";
import { filterValue } from '../../redux/contacts/contactsSlice';
import './FilterItemsStyle.css';

const FilterItems = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading)
    return ( <><input className="filte-input" onChange={(e) => {
        const { value } = e.target;
        dispatch(filterValue(value))
    }} name="filter" >
    </input>
    {isLoading && <h2>Loading...</h2> }</> );
}

export default FilterItems;