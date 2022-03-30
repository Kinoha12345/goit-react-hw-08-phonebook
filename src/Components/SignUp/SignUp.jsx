import { useState } from "react";
import { useDispatch } from "react-redux";
import {register} from '../../redux/auth/authOperation'

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
    <form action="" onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input type="text" name="name" placeholder="name" value={form.name} onChange={handleChange}/>
        <h2>Email</h2>
        <input type="email" name="email" placeholder="email" value={form.email} onChange={handleChange}/>
        <h2>Password</h2>
        <input type="password" name="password" placeholder="password" value={form.password} onChange={handleChange}/>
          
        <button type="submit">Register</button>
    </form>
    )
}

export default SignUp;