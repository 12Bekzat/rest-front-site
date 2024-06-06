import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useMainService from '../services/MainService';

const EditOrder = () => {
    const [error, setError] = useState(null);
    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);
    const { editOrders } = useMainService();
    const { id } = useParams();

    const edit = (status) => {
        editOrders(id, status)
            .then(() => nav('/orders/post'))
            .catch(err => console.log(err));
    }

    return (
        <div className='main' style={{ justifyContent: 'center' }}>
            <div className="form">
                <div className="form__title">Изменить заказ</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__button" style={{ background: '#3aa95a', width: 200 }} onClick={() => edit(1)}>Доставлено</div>
                <div className="form__button" style={{ background: 'crimson', width: 200 }} onClick={() => edit(2)}>Отменено</div>
            </div>
        </div>
    );
};

export default EditOrder;