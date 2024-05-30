import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useMainService from '../services/MainService';
import { AuthContext } from '../providers/AuthProvider';
import { setLocalStorageWithExpiry } from '../services/setLocalStorageWithExpiry';

const Login = () => {
    const [error, setError] = useState(null);
    const [pass, setPass] = useState(true);
    const {login} = useMainService();
    const {setAuth, setRole} = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = () => {
        login(email, password)
            .then(data => {
                const expiryDate = new Date();
                expiryDate.setHours(expiryDate.getHours() + 6);
                setLocalStorageWithExpiry('token', data.token, expiryDate.toISOString());
                setAuth(true);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className='login'>
            <div className="form">
                <div className="form__title">Авторизация</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__data">
                    <div className="form__input">
                        <input type="text" placeholder='Email' value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form__input">
                        <input type={pass ? "password" : 'text'} placeholder='Пароль' value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        <div className="form__ex" onClick={() => setPass(pass => !pass)}>
                            {pass ? <i className="fa-solid fa-eye-slash"></i> :
                                <i className="fa-solid fa-eye"></i>}
                        </div>
                    </div>
                </div>
                <div className="form__link">Еще нету аккаунта? <Link to={'/register'}>Регистрация!</Link></div>
               <div className="form__button" style={{marginTop: 12}}
                onClick={auth}>Войти</div>
            </div>
        </div>
    );
};

export default Login;