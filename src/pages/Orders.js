import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useMainService from '../services/MainService';
import OrderItem from '../components/orderItem/OrderItem';

const Orders = () => {
    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);
    const { getCart } = useMainService();
    const [cart, setCart] = useState(null)

    useEffect(() => {
        getCart()
            .then(data => setCart(data))
            .catch(err => console.log(err));
    }, [])

    console.log("cart", cart);

    return (
        <div className='main'>
            <div className="main__row" style={{ maxWidth: '1200px' }}>
                <div className="title" style={{ marginTop: 40 }}>Заказы</div>
                <div className="table">
                    <div className="table__filter">
                        <div className="table__row"></div>
                        <div className="table__row">
                            <div className="table__search">
                                <input autoComplete='off' type="text" id='search' placeholder='Поиск по имени' />
                                <label htmlFor="search">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="table__body">
                        <div className="table__top" style={
                            { gridTemplateColumns: '1fr repeat(9, 2fr) 2fr' }}>
                            <div className="table__item">№ Заказа</div>
                            <div className="table__item">Поставщик</div>
                            <div className="table__item">Наим. товара</div>
                            <div className="table__item">Статус</div>
                            <div className="table__item">Цена</div>
                            <div className="table__item">Кол-во</div>
                            <div className="table__item">Общая сумма</div>
                            <div className="table__item">Оплачено</div>
                            <div className="table__item">Способ оплаты</div>
                            <div className="table__item">Доставка</div>
                            <div className="table__item">Действие</div>
                        </div>
                        <div className="table__data">
                            {cart ? cart.productDtos ? cart.productDtos.map(pd => {
                                return pd.orderItems.map(item => {
                                    return <OrderItem key={item.id} item={item} />
                                })
                            }) : null : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;