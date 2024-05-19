import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState(null);
    const [pass, setPass] = useState(false);

    return (
        <div className='login'>
            <div className="form">
                <div className="form__title">Регистрация</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__data">
                    <div className="form__input">
                        <input type="text" placeholder='Название' />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Контактное лицо' />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Контактный телефон' />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="form__input">
                        От: <input type='time' placeholder='Email' />
                        До: <input type='time' placeholder='Email' />
                    </div>
                    <div className="form__input">
                        <textarea placeholder='Введите адрес'></textarea>
                    </div>
                    <div className="form__input">
                        <textarea placeholder='Об органзации(200 слов)'></textarea>
                    </div>
                    <div className="form__input">
                        <input type={pass ? "password" : 'text'} placeholder='Пароль' />
                        <div className="form__ex" onClick={() => setPass(pass => !pass)}>
                            {pass ? <i className="fa-solid fa-eye-slash"></i> :
                                <i className="fa-solid fa-eye"></i>}
                        </div>
                    </div>
                </div>
                <div className="form__link">Уже есть акккаунт? <Link to={'/login'}>Войти!</Link></div>
                <Link to={'/'} className="form__button" style={{ marginTop: 12 }}>Подать заявку</Link>
            </div>
        </div>
    );
};

export default Register;