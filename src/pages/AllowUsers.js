import React from 'react';

const AllowUsers = () => {
    return (
        <div className='main'>
            <div className="main__row">
                <div className="title" style={{ marginTop: 40 }}>Рестораны</div>
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
                            { gridTemplateColumns: '1fr repeat(6, 2fr) 1fr' }}>
                            <div className="table__item">Id</div>
                            <div className="table__item">Название</div>
                            <div className="table__item">Контактное лицо</div>
                            <div className="table__item">Телефон</div>
                            <div className="table__item">Email</div>
                            <div className="table__item">Часы работы</div>
                            <div className="table__item">Адрес</div>
                            <div className="table__item">Действие</div>
                        </div>
                        <div className="table__data">
                            <div className="table__info" style={
                                { gridTemplateColumns: '1fr repeat(6, 2fr) 1fr' }}>
                                <div className="table__item">
                                    <div className="table__item-id">78954</div>
                                </div>
                                <div className="table__item">
                                    Апель Агро
                                </div>
                                <div className="table__item">
                                    Бекзат, Админ
                                </div>
                                <div className="table__item">
                                    +7(705)489-48-49
                                </div>
                                <div className="table__item">
                                    apelagro@gmail.com
                                </div>
                                <div className="table__item">
                                    08:00-22:00
                                </div>
                                <div className="table__item">
                                    Жандосова 33/1
                                </div>
                                <div className="table__item">
                                    <div className="table__icon">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="table__icon del">
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="title" style={{ marginTop: 40 }}>Поставщики</div>
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
                            { gridTemplateColumns: '1fr repeat(6, 2fr) 1fr' }}>
                            <div className="table__item">Id</div>
                            <div className="table__item">Название</div>
                            <div className="table__item">Контактное лицо</div>
                            <div className="table__item">Телефон</div>
                            <div className="table__item">Email</div>
                            <div className="table__item">Часы работы</div>
                            <div className="table__item">Адрес</div>
                            <div className="table__item">Действие</div>
                        </div>
                        <div className="table__data">
                            <div className="table__info" style={
                                { gridTemplateColumns: '1fr repeat(6, 2fr) 1fr' }}>
                                <div className="table__item">
                                    <div className="table__item-id">78954</div>
                                </div>
                                <div className="table__item">
                                    Апель Агро
                                </div>
                                <div className="table__item">
                                    Бекзат, Админ
                                </div>
                                <div className="table__item">
                                    +7(705)489-48-49
                                </div>
                                <div className="table__item">
                                    apelagro@gmail.com
                                </div>
                                <div className="table__item">
                                    08:00-22:00
                                </div>
                                <div className="table__item">
                                    Жандосова 33/1
                                </div>
                                <div className="table__item">
                                    <div className="table__icon">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="table__icon del">
                                        <i className="fa-solid fa-trash"></i>
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

export default AllowUsers;