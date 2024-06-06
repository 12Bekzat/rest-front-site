import React, { useEffect, useState } from 'react';
import useMainService from '../../services/MainService';
import { Link } from 'react-router-dom';

const OrderItem = ({ item, admin, updated }) => {
    const { getUser, removeOrders } = useMainService();
    const [supplier, setSupplier] = useState(null);
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        if (item && item.supplier) {
            getUser(item.supplier)
                .then(data => setSupplier(data))
                .catch(err => console.log(err));
        }

        if (item && item.restaurant) {
            getUser(item.restaurant)
                .then(data => setRestaurant(data))
                .catch(err => console.log(err));
        }
    }, [item])

    const getStatusText = (status) => {
        return status === "WAIT" ? "Ожидается" : status === "SUCCESS" ? "Получено" : "Отменен"
    }

    const getStatusClass = (status) => {
        return status === "WAIT" ? "wait" : status === "SUCCESS" ? "success" : "cancel"
    }

    const remove = () => {
        removeOrders(item.id)
            .then(data => {
                updated();
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="table__info" style={
            { gridTemplateColumns: '1fr repeat(9, 2fr) 2fr' }}>
            <div className="table__item">
                <div className="table__item-type id">{item.id}</div>
            </div>
            {!admin ? <div className="table__item">
                {supplier ? supplier.name : ''}
            </div> :
                <div className="table__item">
                    {restaurant ? restaurant.name : ''}
                </div>}
            <div className="table__item">
                {item ? item.product.name : ''}
            </div>
            <div className="table__item">
                <div className={"table__item-type " + (item ? getStatusClass(item.status) : '')}>
                    {item ? getStatusText(item.status) : ''}
                </div>
            </div>
            <div className="table__item">
                {item ? item.product.price : 0} тг
            </div>
            <div className="table__item">
                {item ? item.quantity : 0}
            </div>
            <div className="table__item">
                {item ? item.product.price * item.quantity : 0} тг
            </div>
            <div className="table__item">
                <div className={"table__item-type " + (item.paySatus === "PAYED" ? 'pay' : 'no-pay')}>
                    {item.paySatus === "PAYED" ? "Да" : "Нет"}
                </div>
            </div>
            <div className="table__item">
                <div className="table__item-type">
                    {item.payWay === "CASH" ? "Наличные" : "Карта"}
                </div>
            </div>
            <div className="table__item">
                <div className="table__item-type date">
                    {item ? item.deliveryDate : ''}
                </div>
            </div>
            <div className="table__item">
                {admin ? <Link to={"/orders/edit/" + item.id} className="table__icon">
                    <i className="fa-solid fa-pen-fancy"></i>
                </Link> : null}
                {admin ? <div className="table__icon del" onClick={remove}>
                    <i className="fa-solid fa-trash"></i>
                </div> : null}
            </div>
        </div>
    );
};

export default OrderItem;