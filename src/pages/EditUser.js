import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useMainService from '../services/MainService';

const EditUser = ({ my }) => {
    const [error, setError] = useState(null);
    const [pass, setPass] = useState(true);
    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [toTime, setToTime] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [desc, setDesc] = useState('');
    const [logotype, setLogotype] = useState('');
    const { getUser, getMyUser, editUser, editMyUser } = useMainService();
    const { id } = useParams();

    const handleUser = () => {

        getUser(id)
            .then(data => {
                setName(data.name)
                setContactPerson(data.contactPerson)
                setLogotype(data.logotype)
                setContactPhone(data.phone)
                setAddress(data.address)
                setDesc(data.descText)
            })
            .catch(err => console.log(err));
    }

    const handleMyUser = () => {
        getMyUser()
            .then(data => {
                console.log(data);
                setUsername(data.username)
                setName(data.name)
                setContactPerson(data.contactPerson)
                setLogotype(data.logotype)
                setContactPhone(data.phone)
                setAddress(data.address)
                setDesc(data.descText)
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        if (my) {
            handleMyUser();
        }
        if (id) {
            handleUser();
        }
    }, [id]);

    const save = () => {
        const user = {
            name,
            contactPerson,
            phone: contactPhone,
            logotype,
            workTime: toTime + '-' + fromTime,
            address,
            descText: desc,
        }

        if (my) {
            let myUser = { ...user, username, password };
            console.log(myUser);

            editMyUser({ ...user, username, password })
                .then(() => {
                    nav('/profile')
                })
                .catch(err => console.log(err));
        }
        else {
            editUser(id, user)
                .then(() => {
                    nav('/users')
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='main' style={{ justifyContent: 'center' }}>
            <div className="form">
                <div className="form__title">Изменить</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__data">
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
                    {my ? <div className="form__input">
                        <input type={pass ? "password" : 'text'} placeholder='Пароль'
                            value={password} onChange={e => setPassword(e.target.value)} />
                        <div className="form__ex" onClick={() => setPass(pass => !pass)}>
                            {pass ? <i className="fa-solid fa-eye-slash"></i> :
                                <i className="fa-solid fa-eye"></i>}
                        </div>
                    </div> : null}
                </div>
                <div className="form__button" onClick={save}>Сохранить</div>
            </div>
        </div>
    );
};

export default EditUser;