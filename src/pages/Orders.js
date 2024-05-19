import React from 'react';

const Orders = () => {
    return (
        <div className='main'>
            <div className="main__row" style={{maxWidth: '1200px'}}>
                <div className="title" style={{ marginTop: 40 }}>Заказы</div>
                <div className="table">
                    <div className="table__filter">
                        <div className="table__row"></div>
                        <div className="table__row">
                            <div className="table__search">
                                <input autoComplete='off' type="text" id='search' placeholder='Поиск по имени' />
                                <label htmlFor="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
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
                            <div className="table__item">Создано</div>
                            <div className="table__item">Действие</div>
                        </div>
                        <div className="table__data">
                            <div className="table__info" style={
                                { gridTemplateColumns: '1fr repeat(9, 2fr) 2fr' }}>
                                <div className="table__item">
                                    <div className="table__item-type id">78954</div>
                                </div>
                                <div className="table__item">
                                    Апель Агро
                                </div>
                                <div className="table__item">
                                    Филе курин. 1кг
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type success">
                                        Получено
                                    </div>
                                </div>
                                <div className="table__item">
                                    1700 тг
                                </div>
                                <div className="table__item">
                                    50
                                </div>
                                <div className="table__item">
                                    85 000 тг
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type pay">
                                        Да
                                    </div>
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type">
                                        Наличные
                                    </div>
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type date">
                                        23-02-2024
                                    </div>
                                </div>
                                <div className="table__item">
                                    <div className="table__icon">
                                        <i class="fa-solid fa-pen-fancy"></i>
                                    </div>
                                    <div className="table__icon del">
                                        <i class="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="table__info" style={
                                { gridTemplateColumns: '1fr repeat(9, 2fr) 2fr' }}>
                                <div className="table__item">
                                    <div className="table__item-type id">78955</div>
                                </div>
                                <div className="table__item">
                                    Апель Агро
                                </div>
                                <div className="table__item">
                                    Филе курин. 1кг
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type wait">
                                        Ожидается
                                    </div>
                                </div>
                                <div className="table__item">
                                    1700 тг
                                </div>
                                <div className="table__item">
                                    50
                                </div>
                                <div className="table__item">
                                    85 000 тг
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type no-pay">
                                        Нет
                                    </div>
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type">
                                        Наличные
                                    </div>
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type date">
                                        23-02-2024
                                    </div>
                                </div>
                                <div className="table__item">
                                    <div className="table__icon">
                                        <i class="fa-solid fa-pen-fancy"></i>
                                    </div>
                                    <div className="table__icon del">
                                        <i class="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="table__info" style={
                                { gridTemplateColumns: '1fr repeat(9, 2fr) 2fr' }}>
                                <div className="table__item">
                                    <div className="table__item-type id">78956</div>
                                </div>
                                <div className="table__item">
                                    Апель Агро
                                </div>
                                <div className="table__item">
                                    Филе курин. 1кг
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type cancel">
                                        Отменен
                                    </div>
                                </div>
                                <div className="table__item">
                                    1700 тг
                                </div>
                                <div className="table__item">
                                    50
                                </div>
                                <div className="table__item">
                                    85 000 тг
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type pay">
                                        Да
                                    </div>
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type">
                                        Карта
                                    </div>
                                </div>
                                <div className="table__item">
                                    <div className="table__item-type date">
                                        23-02-2024
                                    </div>
                                </div>
                                <div className="table__item">
                                    <div className="table__icon">
                                        <i class="fa-solid fa-pen-fancy"></i>
                                    </div>
                                    <div className="table__icon del">
                                        <i class="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;