import { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from '../../redux/auth/authOperation'

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
        console.log(form);
        dispatch(login(form))
        setForm({
            name: "",
            email: "",
            password: ""
        })
      };
    return (
        <form action="" onSubmit={handleSubmit}>
            <h2>Email</h2>
            <input type="email" name="email" placeholder="email" value={form.email} onChange={handleChange}/>
            <h2>Password</h2>
            <input type="password" name="password" placeholder="password" value={form.password} onChange={handleChange}/>
          
            <button type="submit">Login</button>
            
        </form>
        )
    }
    
    export default Login;