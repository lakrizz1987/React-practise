import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../contexts/AuthContext';
import {registerService} from '../services/services'

export default function Register(){
    const navigate = useNavigate();
    const prop = useContext(AuthContext);
    
    async function registerHandler(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {email,password} = Object.fromEntries(formData);
        const data = await registerService(email,password);

        if(data){
            prop.login(data);
            navigate('/');
        }else{
            e.target.reset();
        }
    }  

    return(
        <section id="register-page" className="register">
        <form id="register-form" action="" method="" onSubmit={registerHandler}>
            <fieldset>
                <legend>Register Form</legend>
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
                <p className="field">
                    <label htmlFor="repeat-pass">Repeat Password</label>
                    <span className="input">
                        <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password"/>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Register"/>
            </fieldset>
        </form>
    </section>
    )
} 