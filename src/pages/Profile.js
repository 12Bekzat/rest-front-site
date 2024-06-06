import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useMainService from '../services/MainService';
import { AuthContext } from '../providers/AuthProvider';
import { NoLogo } from '../images';

const Profile = () => {
    const [desc, setDesc] = useState(null);
    const [open, setOpen] = useState(false);
    const { getMyUser } = useMainService()
    const [info, setInfo] = useState({});

    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);
    useEffect(() => {
        if (!isAuth) nav('/login')
    }, [isAuth])

    const handleMyUser = () => {
        getMyUser()
            .then(data => {
                setInfo(data)
                setDesc(data.descText)
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        handleMyUser();
    }, [])

    return (
        <div className='main'>
            <div className="main__row">
                <div className="profile">
                    <div className="profile__img">
                        <img src={info ? (info.logotype ? info.logotype : NoLogo) : NoLogo} alt="" />
                    </div>
                    <div className="profile__title">{info ? info.name : "Company Name"}</div>
                </div>
                <div className="contacts">
                    <div className="contacts__item">
                        <div className="contacts__title">Контактное лицо</div>
                        <div className="contacts__text">{info ? info.contactPerson : "Somebody"}</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Контактный телефон</div>
                        <div className="contacts__text active">{info ? info.phone : "+7(xxx)xxx-xx-xx"}</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Почта для связей</div>
                        <div className="contacts__text active">{info ? info.email : "Company email"}</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Рабочие часы</div>
                        <div className="contacts__text active">{info ? info.workTime : "xx-xx:xx-xx"}</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Рабочий адрес</div>
                        <div className="contacts__text">{info ? info.address : "Address"}</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Действие</div>
                        <Link to={'/my/edit'} className="contacts__text active">Изменить</Link>
                    </div>
                </div>

                <div className="desc">
                    {desc ? <div className="desc__text">{desc}</div>
                        : <div className={"desc__input" + (open ? ' open' : '')} onClick={() => setOpen(true)}>
                            <textarea placeholder='Введите описание'></textarea>
                            <button>Сохранить</button>
                            <div className="desc__layer">
                                <span>
                                    <i className="fa-solid fa-file-pen"></i>
                                </span>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Profile;