import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useMainService from '../services/MainService';

const CreateCategory = () => {
    const [error, setError] = useState(null);
    const [pass, setPass] = useState(true);
    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);
    const [name, setName] = useState('');
    const { createCategory } = useMainService();

    const save = () => {
        const category = {
            name,
        }

        createCategory(category)
            .then(() => {
                nav('/')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='main' style={{ justifyContent: 'center' }}>
            <div className="form">
                <div className="form__title">Создать категорию</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__data">
                    <div className="form__input">
                        <input type="text" placeholder='Название'
                            value={name} onChange={e => setName(e.target.value)} />
                    </div>
                </div>
                <div className="form__button" onClick={save}>Сохранить</div>
            </div>
        </div>
    );
};

export default CreateCategory;