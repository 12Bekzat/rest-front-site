import React, { useState } from 'react';
import ProductsItem from '../components/productsItem/ProductsItem';
import { Product } from '../images';

const Catalog = () => {
    const [sort, setSort] = useState(-1)
    const [category, setCategory] = useState(-1)

    return (
        <div className='main'>
            <div className="main__row">
                <div className="main__path">
                    <p>Главная</p>
                    <p>/</p>
                    <p>Каталог товаров</p>
                </div>
                <div className="title" style={{ marginTop: '50px' }}>Каталог товаров</div>
                <div className="manage">
                    <div className="manage__search">
                        <input type="text" placeholder='Поиск' />
                        <div className="manage__button">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="manage__acts">
                        <div className={"manage__act" + (sort == 0 ? ' active' : '')} onClick={() => setSort(0)}>
                            Со скидкой
                        </div>
                        <div className={"manage__act norm" + (sort == 1 ? ' active' : '')} onClick={() => setSort(1)}>
                            По возрастанию
                        </div>
                        <div className={"manage__act desc" + (sort == 2 ? ' active' : '')} onClick={() => setSort(2)}>
                            По убыванию
                        </div>
                    </div>
                </div>
                <div className="filter">
                    <div className="filter__menu">
                        <div
                            className={"filter__item" + (category == 0 ? ' active' : '')}
                            onClick={() => setCategory(category => category == 0 ? -1 : 0)}>Фрукты</div>
                        <div
                            className={"filter__item" + (category == 1 ? ' active' : '')}
                            onClick={() => setCategory(category => category == 1 ? -1 : 1)}>Мясо</div>
                        <div
                            className={"filter__item" + (category == 2 ? ' active' : '')}
                            onClick={() => setCategory(category => category == 2 ? -1 : 2)}>Морепродукты</div>
                        <div
                            className={"filter__item" + (category == 3 ? ' active' : '')}
                            onClick={() => setCategory(category => category == 3 ? -1 : 3)}>Напитки</div>
                        <div
                            className={"filter__item" + (category == 4 ? ' active' : '')}
                            onClick={() => setCategory(category => category == 4 ? -1 : 4)}>Полуфабрикаты</div>
                    </div>
                    <div className="filter__products products">
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;