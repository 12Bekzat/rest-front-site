import React, { useContext, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { Visa } from '../images';
import { LoaderContext } from '../providers/LoaderProvider';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [error, setError] = useState(null);
    const { show, setShow, time } = useContext(LoaderContext);
    const nav = useNavigate();

    const payed = () => {
        setShow(true);
        setTimeout(() => {
            nav('/cart');
        }, time)
    }

    return (
        <div className='main' style={{ justifyContent: 'center' }}>
            <div className="form">
                <div className="form__title">Оплата</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__data">
                    <div className="form__img">
                        <img src={Visa} alt="" />
                    </div>
                    <div className="form__input">
                        <ReactInputMask mask={'9999-9999-9999-9999'} type='text' placeholder='Введите номер карты' />
                    </div>
                    <div className="form__input">
                        <ReactInputMask mask={'99/99'} type='text' placeholder='Дата окончания' />
                        <ReactInputMask mask={'999'} type='text' placeholder='CVV' />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Имя владельца' />
                    </div>
                </div>
                <div className="form__button" onClick={payed}>Заказать</div>
            </div>
        </div>
    );
};

export default Payment;