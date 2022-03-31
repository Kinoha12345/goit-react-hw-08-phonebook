import "./App.css";
import { useSelector } from "react-redux";
import Navigation from "./Components/Navigation/Navigation";
import Router from "./Components/Router/Router";


const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  



  console.log(JSON.parse(localStorage.getItem('isOnline')));
  console.log(contacts);

 

  
  return (
    
    <>
    <Navigation/>
    <Router/>
    </>
  );
};


export default App;