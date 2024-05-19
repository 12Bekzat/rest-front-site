import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState(null);
    const [pass, setPass] = useState(false);

    return (
        <div className='login'>
            <div className="form">
                <div className="form__title">Авторизация</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__data">
                    <div className="form__input">
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="form__input">
                        <input type={pass ? "password" : 'text'} placeholder='Пароль' />
                        <div className="form__ex" onClick={() => setPass(pass => !pass)}>
                            {pass ? <i className="fa-solid fa-eye-slash"></i> :
                                <i className="fa-solid fa-eye"></i>}
                        </div>
                    </div>
                </div>
                <div className="form__link">Еще нету аккаунта? <Link to={'/register'}>Регистрация!</Link></div>
                <Link to={'/'} className="form__button" style={{marginTop: 12}}>Войти</Link>
            </div>
        </div>
    );
};

export default Login;