import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const EditProduct = () => {
    const [error, setError] = useState(null);
    const nav = useNavigate();
    const {isAuth, role} = useContext(AuthContext);
    

    return (
        <div className='main' style={{ justifyContent: 'center' }}>
            <div className="form">
                <div className="form__title">Изменить продукт</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__data">
                    <div className="form__input">
                        <input type="text" placeholder='Название' />
                    </div>
                    <div className="form__input">
                        <input type="number" placeholder='Цена' min={0} />
                    </div>
                    <div className="form__input">
                        <input type="number" placeholder='Кол-во' min={0} />
                    </div>
                    <div className="form__input">
                        <input type="date" placeholder='Срок годности' />
                    </div>
                    <div className="form__input">
                        <input type="number" placeholder='Скидка %' />
                    </div>
                </div>
                <div className="form__button">Сохранить</div>
            </div>
        </div>
    );
};

export default EditProduct;