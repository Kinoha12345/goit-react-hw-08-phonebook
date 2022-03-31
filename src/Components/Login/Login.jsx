import { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from '../../redux/auth/authOperation';
import "./LoginStyle.css"
const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(form))
        setForm({
            name: "",
            email: "",
            password: ""
        })
        
      };
    return (
        <form className="form-login" action="" onSubmit={handleSubmit}>
            
            <h2 className="email-text">Email</h2>
            <input className="email-input" type="email" name="email" placeholder="email" value={form.email} onChange={handleChange}/>
            <h2 className="pas-text">Password</h2>
            <input className="pas-input" type="password" name="password" placeholder="password" value={form.password} onChange={handleChange}/>
          
            <button className="login-btn" type="submit">Login</button>
            
        </form>
        )
    }
    
    export default Login;