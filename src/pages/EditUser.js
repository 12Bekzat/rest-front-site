import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const EditUser = ({ my }) => {
    const [error, setError] = useState(null);
    const nav = useNavigate();
    const {isAuth, role} = useContext(AuthContext);
    

    return (
        <div className='main' style={{ justifyContent: 'center' }}>
            <div className="form">
                <div className="form__title">Изменить</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__data">
                    {!my ? <div className="form__select">
                        <p>
                            Кого:
                        </p>
                        <select>
                            <option value="">Apple agro</option>
                        </select>
                    </div> : null}
                    <div className="form__input">
                        <input type="text" placeholder='Название' />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Контактное лицо' />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Контактный телефон' />
                    </div>
                    {my ? <div className="form__input">
                        <input type="text" placeholder='Логотип' />
                    </div> : null}
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
                </div>
                <div className="form__button">Сохранить</div>
            </div>
        </div>
    );
};

export default EditUser;