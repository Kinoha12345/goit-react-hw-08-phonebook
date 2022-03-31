import { useState } from "react";
import { useDispatch } from "react-redux";
import {register} from '../../redux/auth/authOperation'
import './SignUpStyles.css'

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
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
        dispatch(register(form))
        setForm({
            name: "",
            email: "",
            password: ""
        })
      };
return (
    <form className="form-reg" action="" onSubmit={handleSubmit}>
        <h2 className="name-text">Name</h2>
        <input className="name-input" type="text" name="name" placeholder="name" value={form.name} onChange={handleChange}/>
        <h2 className="email-text">Email</h2>
        <input className="email-input" type="email" name="email" placeholder="email" value={form.email} onChange={handleChange}/>
        <h2 className="pas-text">Password</h2>
        <input className="pas-input" type="password" name="password" placeholder="password" value={form.password} onChange={handleChange}/>
          
        <button className="reg-btn" type="submit">Register</button>
    </form>
    )
}

export default SignUp;