import { loginService } from "../services/services";
import {useNavigate} from 'react-router-dom'
import {  useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function Login(){
    const navigate = useNavigate();
    const prop = useContext(AuthContext);
    
    async function loginHandler(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {email,password} = Object.fromEntries(formData);
        const data = await loginService(email,password);

        if(data){
            prop.login(data);
            navigate('/');
        }else{
            e.target.reset();
        }
       
    };


    return(
        <section id="login-page" className="login">
        <form id="login-form" action="" method="" onSubmit={loginHandler}>
            <fieldset>
                <legend>Login Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="Email"/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Login"/>
            </fieldset>
        </form>
    </section>
    )
} 