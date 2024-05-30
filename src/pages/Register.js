import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useMainService from '../services/MainService';

const Register = () => {
    const [error, setError] = useState(null);
    const [pass, setPass] = useState(true);
    const nav = useNavigate();

    const [roleUser, setRoleUser] = useState('ROLE_REST');
    const [name, setName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [email, setEmail] = useState('');
    const [toTime, setToTime] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [address, setAddress] = useState('');
    const [desc, setDesc] = useState('');
    const [logotype, setLogotype] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useMainService();

    const regEvent = () => {
        const user = {
            username: email,
            password,
            email,
            contactPerson,
            contactPhone,
            name,
            address,
            descText: desc,
            logotype,
            workTime: toTime + ':' + fromTime,
            role: roleUser,
        }

        console.log(user);

        register(user)
            .then(() => {
                nav('/login')
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        console.log(roleUser);
    }, [roleUser]);

    return (
        <div className='login'>
            <div className="form">
                <div className="form__title">Регистрация</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__data">
                    <div className="form__select">
                        <p>
                            Аккаунт:
                        </p>
                        <select onChange={e => {
                            console.log(e.target.value);
                            setRoleUser(e.target.value)
                        }}>
                            <option value="ROLE_REST">Ресторан</option>
                            <option value="ROLE_POST">Поставщик</option>
                        </select>
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Название'
                            value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Контактное лицо'
                            value={contactPerson} onChange={e => setContactPerson(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Контактный телефон'
                            value={contactPhone} onChange={e => setContactPhone(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Email'
                            value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form__input">
                        От: <input type='time' placeholder='Email'
                            value={toTime} onChange={e => setToTime(e.target.value)} />
                        До: <input type='time' placeholder='Email'
                            value={fromTime} onChange={e => setFromTime(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Логотип(url)'
                            value={logotype} onChange={e => setLogotype(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <textarea placeholder='Введите адрес'
                            value={address} onChange={e => setAddress(e.target.value)}></textarea>
                    </div>
                    <div className="form__input">
                        <textarea placeholder='Об органзации(200 слов)'
                            value={desc} onChange={e => setDesc(e.target.value)}></textarea>
                    </div>
                    <div className="form__input">
                        <input type={pass ? "password" : 'text'} placeholder='Пароль'
                            value={password} onChange={e => setPassword(e.target.value)} />
                        <div className="form__ex" onClick={() => setPass(pass => !pass)}>
                            {pass ? <i className="fa-solid fa-eye-slash"></i> :
                                <i className="fa-solid fa-eye"></i>}
                        </div>
                    </div>
                </div>
                <div className="form__link">Уже есть акккаунт? <Link to={'/login'}>Войти!</Link></div>
                <div className="form__button" style={{ marginTop: 12 }}
                    onClick={regEvent}>Подать заявку</div>
            </div>
        </div>
    );
};

export default Register;